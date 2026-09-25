"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { formatIsoDateToPersian } from "@/lib/jalali-date";
import { useDemoAuth } from "@/providers/demo-auth-provider";

const linkClass =
  "inline-flex min-h-11 items-center justify-center border border-silver px-6 py-2.5 text-xs font-medium tracking-wide text-silver transition-colors hover:border-silver-bright hover:text-silver-bright";

export default function AccountPage() {
  const { customer, isHydrated, logout } = useDemoAuth();

  return (
    <main id="main-content" className="min-h-[70svh] bg-canvas">
      <Container className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="arfam-eyebrow text-subtle">ACCOUNT</p>
          <h1 className="mt-4 border-b border-line pb-7 text-4xl font-light text-silver-bright">حساب کاربری</h1>

          {!isHydrated ? (
            <p className="py-16 text-sm text-muted">در حال بارگذاری…</p>
          ) : customer ? (
            <section className="pt-9">
              <h2 className="text-2xl font-light text-silver-bright">{customer.firstName} {customer.lastName}</h2>
              <dl className="mt-7 divide-y divide-line border-y border-line text-sm">
                <div className="flex justify-between gap-6 py-4"><dt className="text-muted">شماره موبایل</dt><dd dir="ltr" className="text-silver">{customer.mobile}</dd></div>
                <div className="flex justify-between gap-6 py-4"><dt className="text-muted">تاریخ تولد</dt><dd className="text-silver">{formatIsoDateToPersian(customer.birthDate)}</dd></div>
                {customer.email ? <div className="flex justify-between gap-6 py-4"><dt className="text-muted">ایمیل</dt><dd dir="ltr" className="text-silver">{customer.email}</dd></div> : null}
              </dl>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/cart" className={linkClass}>سبد خرید</Link>
                <Button variant="quiet" onClick={logout}>خروج</Button>
              </div>
            </section>
          ) : (
            <section className="py-14">
              <p className="text-sm leading-7 text-muted">برای ادامه خرید وارد حساب شوید یا ثبت‌نام کنید.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/login" className={linkClass}>ورود</Link>
                <Link href="/register" className={linkClass}>ثبت‌نام</Link>
              </div>
            </section>
          )}
        </div>
      </Container>
    </main>
  );
}
