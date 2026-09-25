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

type AdminLoginResult = { ok: true } | { ok: false; message: string };
type AdminDemoContextValue = {
  isAuthenticated: boolean;
  isHydrated: boolean;
  login: (username: string, password: string) => AdminLoginResult;
  logout: () => void;
};

export const ADMIN_DEMO_CREDENTIALS = {
  username: "admin",
  password: "ArfamAdmin7",
} as const;

const ADMIN_SESSION_KEY = "arfam.demo.admin-session.v1";
const AdminDemoContext = createContext<AdminDemoContextValue | null>(null);

export function AdminDemoProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const hydrationTask = window.setTimeout(() => {
      setIsAuthenticated(window.localStorage.getItem(ADMIN_SESSION_KEY) === "active");
      setIsHydrated(true);
    }, 0);

    return () => window.clearTimeout(hydrationTask);
  }, []);

  const login = useCallback((username: string, password: string): AdminLoginResult => {
    if (
      username.trim().toLowerCase() !== ADMIN_DEMO_CREDENTIALS.username ||
      password !== ADMIN_DEMO_CREDENTIALS.password
    ) {
      return { ok: false, message: "نام کاربری یا رمز عبور صحیح نیست." };
    }

    window.localStorage.setItem(ADMIN_SESSION_KEY, "active");
    setIsAuthenticated(true);
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, isHydrated, login, logout }),
    [isAuthenticated, isHydrated, login, logout],
  );

  return <AdminDemoContext.Provider value={value}>{children}</AdminDemoContext.Provider>;
}

export function useAdminDemo() {
  const context = useContext(AdminDemoContext);

  if (!context) {
    throw new Error("useAdminDemo must be used within AdminDemoProvider.");
  }

  return context;
}
