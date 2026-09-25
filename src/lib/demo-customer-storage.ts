import {
  normalizeIranianMobile,
  type DemoCustomer,
} from "@/lib/demo-customer";

export const DEMO_CUSTOMERS_STORAGE_KEY = "arfam.demo.customers.v1";
export const DEMO_CUSTOMERS_UPDATED_EVENT = "arfam:customers-updated";

const LEGACY_ACCOUNTS_STORAGE_KEY = "arfam.demo.customer-accounts.v1";

function isDemoCustomer(value: unknown): value is DemoCustomer {
  if (!value || typeof value !== "object") {
    return false;
  }

  const customer = value as Partial<DemoCustomer>;
  return (
    typeof customer.firstName === "string" &&
    typeof customer.lastName === "string" &&
    typeof customer.birthDate === "string" &&
    typeof customer.mobile === "string" &&
    (customer.email === undefined || typeof customer.email === "string")
  );
}

export function readDemoCustomers() {
  try {
    const stored = window.localStorage.getItem(DEMO_CUSTOMERS_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as unknown) : [];
    if (!Array.isArray(parsed)) {
      return [];
    }

    const customers = new Map<string, DemoCustomer>();
    for (const customer of parsed.filter(isDemoCustomer)) {
      const mobile = normalizeIranianMobile(customer.mobile);
      if (!customers.has(mobile)) {
        customers.set(mobile, { ...customer, mobile });
      }
    }

    return [...customers.values()];
  } catch {
    return [];
  }
}

function persistDemoCustomers(customers: DemoCustomer[]) {
  window.localStorage.setItem(
    DEMO_CUSTOMERS_STORAGE_KEY,
    JSON.stringify(customers),
  );
  window.dispatchEvent(new Event(DEMO_CUSTOMERS_UPDATED_EVENT));
}

export function addDemoCustomer(customer: DemoCustomer) {
  const customers = readDemoCustomers();
  const normalizedCustomer = {
    ...customer,
    mobile: normalizeIranianMobile(customer.mobile),
  };

  if (customers.some((item) => item.mobile === normalizedCustomer.mobile)) {
    return false;
  }

  persistDemoCustomers([...customers, normalizedCustomer]);
  return true;
}

export function replaceDemoCustomer(customer: DemoCustomer) {
  const mobile = normalizeIranianMobile(customer.mobile);
  const customers = readDemoCustomers();

  if (!customers.some((item) => item.mobile === mobile)) {
    return false;
  }

  persistDemoCustomers(
    customers.map((item) =>
      item.mobile === mobile ? { ...customer, mobile } : item,
    ),
  );
  return true;
}

export function migrateLegacyCustomerStorage() {
  try {
    const legacyValue = window.localStorage.getItem(
      LEGACY_ACCOUNTS_STORAGE_KEY,
    );

    if (!legacyValue) {
      return;
    }

    const parsed = JSON.parse(legacyValue) as unknown;
    const legacyProfiles = Array.isArray(parsed)
      ? parsed.filter(isDemoCustomer).map((account) => ({
          firstName: account.firstName,
          lastName: account.lastName,
          birthDate: account.birthDate,
          mobile: normalizeIranianMobile(account.mobile),
          ...(account.email ? { email: account.email } : {}),
        }))
      : [];
    const currentCustomers = readDemoCustomers();
    const mergedCustomers = [...currentCustomers];

    for (const profile of legacyProfiles) {
      if (!mergedCustomers.some((item) => item.mobile === profile.mobile)) {
        mergedCustomers.push(profile);
      }
    }

    if (mergedCustomers.length !== currentCustomers.length) {
      persistDemoCustomers(mergedCustomers);
    }
  } catch {
    // Invalid legacy data is discarded below along with any credential fields.
  } finally {
    window.localStorage.removeItem(LEGACY_ACCOUNTS_STORAGE_KEY);
  }
}
