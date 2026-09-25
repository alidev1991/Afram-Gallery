import {
  DEMO_PASSWORD_ITERATIONS,
  normalizeIranianMobile,
} from "@/lib/demo-customer";

export type DemoCredential = {
  mobile: string;
  salt: string;
  verifier: string;
  iterations: number;
  algorithm: "PBKDF2-SHA256";
};

export const DEMO_CREDENTIALS_STORAGE_KEY = "arfam.demo.credentials.v2";

const LEGACY_SESSION_CREDENTIALS_KEY = "arfam.demo.customer-credentials.v1";

function isDemoCredential(value: unknown): value is DemoCredential {
  if (!value || typeof value !== "object") {
    return false;
  }

  const credential = value as Partial<DemoCredential>;
  return (
    typeof credential.mobile === "string" &&
    typeof credential.salt === "string" &&
    /^[a-f0-9]{32}$/i.test(credential.salt) &&
    typeof credential.verifier === "string" &&
    /^[a-f0-9]{64}$/i.test(credential.verifier) &&
    Number.isInteger(credential.iterations) &&
    (credential.iterations ?? 0) >= 100_000 &&
    credential.algorithm === "PBKDF2-SHA256"
  );
}

export function readDemoCredentials() {
  try {
    const stored = window.localStorage.getItem(DEMO_CREDENTIALS_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as unknown) : [];

    if (!Array.isArray(parsed)) {
      return [];
    }

    const credentials = new Map<string, DemoCredential>();
    for (const credential of parsed.filter(isDemoCredential)) {
      const mobile = normalizeIranianMobile(credential.mobile);
      if (!credentials.has(mobile)) {
        credentials.set(mobile, { ...credential, mobile });
      }
    }

    return [...credentials.values()];
  } catch {
    return [];
  }
}

export function findDemoCredential(mobileInput: string) {
  const mobile = normalizeIranianMobile(mobileInput);
  return readDemoCredentials().find((credential) => credential.mobile === mobile);
}

export function addDemoCredential(
  credential: Omit<DemoCredential, "iterations" | "algorithm"> &
    Partial<Pick<DemoCredential, "iterations" | "algorithm">>,
) {
  const mobile = normalizeIranianMobile(credential.mobile);
  const credentials = readDemoCredentials();

  if (credentials.some((item) => item.mobile === mobile)) {
    return false;
  }

  const nextCredential: DemoCredential = {
    mobile,
    salt: credential.salt,
    verifier: credential.verifier,
    iterations: credential.iterations ?? DEMO_PASSWORD_ITERATIONS,
    algorithm: credential.algorithm ?? "PBKDF2-SHA256",
  };

  window.localStorage.setItem(
    DEMO_CREDENTIALS_STORAGE_KEY,
    JSON.stringify([...credentials, nextCredential]),
  );
  return true;
}

export function removeLegacySessionCredentials() {
  window.sessionStorage.removeItem(LEGACY_SESSION_CREDENTIALS_KEY);
}
