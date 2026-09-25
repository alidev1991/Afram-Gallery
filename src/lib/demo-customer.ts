export type DemoCustomer = {
  firstName: string;
  lastName: string;
  birthDate: string;
  mobile: string;
  email?: string;
};

export type RegistrationValues = DemoCustomer & {
  password: string;
};

export type RegistrationErrors = Partial<Record<keyof RegistrationValues, string>>;

export const DEMO_CUSTOMER_CREDENTIALS = {
  mobile: "09120000000",
  password: "ArfamDemo7",
} as const;

export const DEMO_CUSTOMER: DemoCustomer = {
  firstName: "کاربر",
  lastName: "دمو",
  birthDate: "1990-01-01",
  mobile: DEMO_CUSTOMER_CREDENTIALS.mobile,
  email: "demo@arfam.gallery",
};

export const DEMO_PASSWORD_ITERATIONS = 210_000;

const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
const arabicDigits = "٠١٢٣٤٥٦٧٨٩";

export function toEnglishDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String(persianDigits.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String(arabicDigits.indexOf(digit)));
}

export function normalizeIranianMobile(value: string) {
  const normalized = toEnglishDigits(value).replace(/[\s()-]/g, "");

  if (normalized.startsWith("+98")) {
    return `0${normalized.slice(3)}`;
  }

  if (normalized.startsWith("0098")) {
    return `0${normalized.slice(4)}`;
  }

  if (normalized.startsWith("98") && normalized.length === 12) {
    return `0${normalized.slice(2)}`;
  }

  return normalized;
}

export function isValidIranianMobile(value: string) {
  return /^09\d{9}$/.test(normalizeIranianMobile(value));
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPassword(value: string) {
  return value.length >= 8 && /[A-Za-z]/.test(value) && /\d/.test(value);
}

export function validateRegistration(values: RegistrationValues) {
  const errors: RegistrationErrors = {};
  const today = new Date().toISOString().slice(0, 10);

  if (values.firstName.trim().length < 2) {
    errors.firstName = "نام را کامل وارد کنید.";
  }

  if (values.lastName.trim().length < 2) {
    errors.lastName = "نام خانوادگی را کامل وارد کنید.";
  }

  if (!values.birthDate) {
    errors.birthDate = "تاریخ تولد الزامی است.";
  } else if (
    !/^\d{4}-\d{2}-\d{2}$/.test(values.birthDate) ||
    Number.isNaN(new Date(`${values.birthDate}T12:00:00.000Z`).getTime())
  ) {
    errors.birthDate = "تاریخ تولد معتبر نیست.";
  } else if (values.birthDate > today) {
    errors.birthDate = "تاریخ تولد نمی‌تواند در آینده باشد.";
  }

  if (!isValidIranianMobile(values.mobile)) {
    errors.mobile = "شماره موبایل معتبر ایران وارد کنید؛ مانند 09121234567.";
  }

  if (values.email && !isValidEmail(values.email)) {
    errors.email = "فرمت ایمیل معتبر نیست.";
  }

  if (!isValidPassword(values.password)) {
    errors.password = "حداقل ۸ کاراکتر شامل یک حرف انگلیسی و یک عدد وارد کنید.";
  }

  return errors;
}

export function createPasswordSalt() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function createPasswordVerifier(
  password: string,
  mobile: string,
  salt: string,
  iterations = DEMO_PASSWORD_ITERATIONS,
) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: encoder.encode(`${salt}:${normalizeIranianMobile(mobile)}`),
      iterations,
    },
    keyMaterial,
    256,
  );

  return Array.from(new Uint8Array(derivedBits), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

export function getSafeNextPath(value: string | undefined, fallback = "/account") {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return fallback;
  }

  return value;
}
