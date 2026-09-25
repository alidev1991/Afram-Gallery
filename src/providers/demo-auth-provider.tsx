"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  createPasswordSalt,
  createPasswordVerifier,
  DEMO_CUSTOMER,
  DEMO_CUSTOMER_CREDENTIALS,
  isValidPassword,
  normalizeIranianMobile,
  type DemoCustomer,
  type RegistrationValues,
} from "@/lib/demo-customer";
import {
  addDemoCredential,
  findDemoCredential,
  removeLegacySessionCredentials,
} from "@/lib/demo-credential-storage";
import {
  addDemoCustomer,
  migrateLegacyCustomerStorage,
  readDemoCustomers,
  replaceDemoCustomer,
} from "@/lib/demo-customer-storage";

type AuthFailureCode =
  | "INVALID_CREDENTIALS"
  | "LEGACY_CREDENTIAL_MISSING"
  | "CREDENTIAL_EXISTS"
  | "INVALID_PASSWORD";

type AuthResult =
  | { ok: true }
  | { ok: false; code: AuthFailureCode; message: string };

type DemoAuthContextValue = {
  customer: DemoCustomer | null;
  isHydrated: boolean;
  login: (mobile: string, password: string) => Promise<AuthResult>;
  register: (values: RegistrationValues) => Promise<AuthResult>;
  recoverLegacyAccount: (mobile: string, password: string) => Promise<AuthResult>;
  logout: () => void;
};

const CUSTOMER_SESSION_KEY = "arfam.demo.customer-session.v1";
const DemoAuthContext = createContext<DemoAuthContextValue | null>(null);

export function DemoAuthProvider({ children }: { children: ReactNode }) {
  const [customer, setCustomer] = useState<DemoCustomer | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const hydrationTask = window.setTimeout(() => {
      try {
        migrateLegacyCustomerStorage();
        removeLegacySessionCredentials();
        const storedSession = window.localStorage.getItem(CUSTOMER_SESSION_KEY);
        if (storedSession) {
          setCustomer(JSON.parse(storedSession) as DemoCustomer);
        }
      } catch {
        window.localStorage.removeItem(CUSTOMER_SESSION_KEY);
      } finally {
        setIsHydrated(true);
      }
    }, 0);

    return () => window.clearTimeout(hydrationTask);
  }, []);

  const persistSession = useCallback((nextCustomer: DemoCustomer) => {
    setCustomer(nextCustomer);
    window.localStorage.setItem(CUSTOMER_SESSION_KEY, JSON.stringify(nextCustomer));
  }, []);

  const login = useCallback(
    async (mobileInput: string, password: string): Promise<AuthResult> => {
      const mobile = normalizeIranianMobile(mobileInput);

      if (
        mobile === DEMO_CUSTOMER_CREDENTIALS.mobile &&
        password === DEMO_CUSTOMER_CREDENTIALS.password
      ) {
        persistSession(DEMO_CUSTOMER);
        return { ok: true };
      }

      const credential = findDemoCredential(mobile);
      const profile = readDemoCustomers().find((item) => item.mobile === mobile);

      if (profile && !credential) {
        return {
          ok: false,
          code: "LEGACY_CREDENTIAL_MISSING",
          message:
            "این حساب قبلاً ایجاد شده است و نیاز به فعال‌سازی مجدد دارد.",
        };
      }

      if (!credential || !profile) {
        return {
          ok: false,
          code: "INVALID_CREDENTIALS",
          message: "شماره موبایل یا رمز عبور صحیح نیست.",
        };
      }

      const verifier = await createPasswordVerifier(
        password,
        mobile,
        credential.salt,
        credential.iterations,
      );

      if (verifier !== credential.verifier) {
        return {
          ok: false,
          code: "INVALID_CREDENTIALS",
          message: "شماره موبایل یا رمز عبور صحیح نیست.",
        };
      }

      persistSession(profile);
      return { ok: true };
    },
    [persistSession],
  );

  const register = useCallback(
    async (values: RegistrationValues): Promise<AuthResult> => {
      const mobile = normalizeIranianMobile(values.mobile);
      const customers = readDemoCustomers();
      const existingCustomer = customers.find((item) => item.mobile === mobile);
      const existingCredential = findDemoCredential(mobile);

      if (
        mobile === DEMO_CUSTOMER_CREDENTIALS.mobile ||
        existingCredential
      ) {
        return {
          ok: false,
          code: "CREDENTIAL_EXISTS",
          message: "این شماره موبایل قبلاً ثبت شده است.",
        };
      }

      const passwordSalt = createPasswordSalt();
      const passwordVerifier = await createPasswordVerifier(
        values.password,
        mobile,
        passwordSalt,
      );
      const customerProfile: DemoCustomer = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        birthDate: values.birthDate,
        mobile,
        ...(values.email?.trim()
          ? { email: values.email.trim().toLowerCase() }
          : {}),
      };
      const credential = {
        mobile,
        salt: passwordSalt,
        verifier: passwordVerifier,
      };

      const profileSaved = existingCustomer
        ? replaceDemoCustomer(customerProfile)
        : addDemoCustomer(customerProfile);

      if (!profileSaved || !addDemoCredential(credential)) {
        return {
          ok: false,
          code: "CREDENTIAL_EXISTS",
          message: "این شماره موبایل قبلاً ثبت شده است.",
        };
      }

      persistSession(customerProfile);
      return { ok: true };
    },
    [persistSession],
  );

  const recoverLegacyAccount = useCallback(
    async (mobileInput: string, password: string): Promise<AuthResult> => {
      const mobile = normalizeIranianMobile(mobileInput);
      const profile = readDemoCustomers().find((item) => item.mobile === mobile);
      const existingCredential = findDemoCredential(mobile);

      if (!profile) {
        return {
          ok: false,
          code: "INVALID_CREDENTIALS",
          message: "حساب موردنظر پیدا نشد.",
        };
      }

      if (existingCredential) {
        return {
          ok: false,
          code: "CREDENTIAL_EXISTS",
          message: "این حساب فعال است؛ از صفحه ورود استفاده کنید.",
        };
      }

      if (!isValidPassword(password)) {
        return {
          ok: false,
          code: "INVALID_PASSWORD",
          message: "حداقل ۸ کاراکتر شامل یک حرف انگلیسی و یک عدد وارد کنید.",
        };
      }

      const salt = createPasswordSalt();
      const verifier = await createPasswordVerifier(password, mobile, salt);

      if (!addDemoCredential({ mobile, salt, verifier })) {
        return {
          ok: false,
          code: "CREDENTIAL_EXISTS",
          message: "این حساب قبلاً فعال شده است؛ از صفحه ورود استفاده کنید.",
        };
      }

      persistSession(profile);
      return { ok: true };
    },
    [persistSession],
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem(CUSTOMER_SESSION_KEY);
    setCustomer(null);
  }, []);

  const value = useMemo(
    () => ({
      customer,
      isHydrated,
      login,
      register,
      recoverLegacyAccount,
      logout,
    }),
    [customer, isHydrated, login, logout, recoverLegacyAccount, register],
  );

  return <DemoAuthContext.Provider value={value}>{children}</DemoAuthContext.Provider>;
}

export function useDemoAuth() {
  const context = useContext(DemoAuthContext);

  if (!context) {
    throw new Error("useDemoAuth must be used within DemoAuthProvider.");
  }

  return context;
}
