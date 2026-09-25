"use client";

import { useEffect, useMemo, useState } from "react";

import { adminCustomers } from "@/data/admin-demo";
import type { DemoCustomer } from "@/lib/demo-customer";
import {
  DEMO_CUSTOMERS_STORAGE_KEY,
  DEMO_CUSTOMERS_UPDATED_EVENT,
  readDemoCustomers,
} from "@/lib/demo-customer-storage";
import { formatIsoDateToPersian } from "@/lib/jalali-date";

export function AdminCustomersTable() {
  const [registeredCustomers, setRegisteredCustomers] = useState<DemoCustomer[]>([]);

  useEffect(() => {
    const loadCustomers = () => setRegisteredCustomers(readDemoCustomers());
    const hydrationTask = window.setTimeout(loadCustomers, 0);
    const handleStorage = (event: StorageEvent) => {
      if (event.key === DEMO_CUSTOMERS_STORAGE_KEY) {
        loadCustomers();
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(DEMO_CUSTOMERS_UPDATED_EVENT, loadCustomers);

    return () => {
      window.clearTimeout(hydrationTask);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(DEMO_CUSTOMERS_UPDATED_EVENT, loadCustomers);
    };
  }, []);

  const customers = useMemo(() => {
    const registeredMobiles = new Set(
      registeredCustomers.map((customer) => customer.mobile),
    );
    const registered = registeredCustomers.map((customer, index) => ({
      id: `DEMO-${String(index + 1).padStart(3, "0")}`,
      ...customer,
      orders: 0,
    }));
    const mockCustomers = adminCustomers.filter(
      (customer) => !registeredMobiles.has(customer.mobile),
    );

    return [...registered, ...mockCustomers];
  }, [registeredCustomers]);

  return (
    <>
      <div className="mt-8 space-y-3 md:hidden">
        {customers.map((customer) => (
          <article
            key={`${customer.id}-${customer.mobile}-card`}
            className="border border-line bg-matte p-5"
          >
            <div className="flex items-start justify-between gap-5 border-b border-line pb-4">
              <h2 className="text-base text-silver-bright">
                {customer.firstName} {customer.lastName}
              </h2>
              <span className="font-latin text-[0.625rem] text-subtle">
                {customer.id}
              </span>
            </div>
            <dl className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between gap-5">
                <dt className="text-muted">موبایل</dt>
                <dd dir="ltr" className="font-latin text-silver">{customer.mobile}</dd>
              </div>
              <div className="flex justify-between gap-5">
                <dt className="text-muted">ایمیل</dt>
                <dd dir="ltr" className="min-w-0 truncate font-latin text-silver">
                  {customer.email ?? "—"}
                </dd>
              </div>
              <div className="flex justify-between gap-5">
                <dt className="text-muted">تاریخ تولد</dt>
                <dd className="text-silver">
                  {formatIsoDateToPersian(customer.birthDate)}
                </dd>
              </div>
              <div className="flex justify-between gap-5">
                <dt className="text-muted">سفارش‌ها</dt>
                <dd className="text-silver">
                  {customer.orders.toLocaleString("fa-IR")}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="mt-8 hidden overflow-x-auto border border-line md:block">
        <table className="w-full min-w-[64rem] border-collapse text-sm">
          <thead className="bg-matte text-xs text-muted">
            <tr>
              <th className="p-4 text-start font-normal">نام</th>
              <th className="p-4 text-start font-normal">نام خانوادگی</th>
              <th className="p-4 text-start font-normal">موبایل</th>
              <th className="p-4 text-start font-normal">ایمیل</th>
              <th className="p-4 text-start font-normal">تاریخ تولد</th>
              <th className="p-4 text-start font-normal">سفارش‌ها</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {customers.map((customer) => (
              <tr key={`${customer.id}-${customer.mobile}`}>
                <td className="p-4 text-silver-bright">
                  {customer.firstName}
                  <span className="mt-1 block font-latin text-[0.625rem] text-subtle">
                    {customer.id}
                  </span>
                </td>
                <td className="p-4 text-silver-bright">{customer.lastName}</td>
                <td className="p-4 font-latin text-xs text-silver">{customer.mobile}</td>
                <td className="p-4 font-latin text-xs text-muted">{customer.email ?? "—"}</td>
                <td className="p-4 whitespace-nowrap text-silver">
                  {formatIsoDateToPersian(customer.birthDate)}
                </td>
                <td className="p-4 text-silver">
                  {customer.orders.toLocaleString("fa-IR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
