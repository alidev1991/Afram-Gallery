"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { logoutAdmin } from "@/app/admin/login/actions";
import { BrandLogo } from "@/components/brand/brand-logo";

const navigation = [
  { href: "/admin", label: "داشبورد" },
  { href: "/admin/products", label: "محصولات" },
  { href: "/admin/orders", label: "سفارش‌ها" },
  { href: "/admin/customers", label: "مشتریان" },
] as const;

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-canvas lg:grid lg:grid-cols-[16rem_1fr]">
      <aside className="border-b border-line bg-matte lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-l">
        <div className="flex h-20 items-center justify-between px-5 lg:h-auto lg:block lg:px-7 lg:py-8">
          <BrandLogo className="justify-start" />
          <span className="arfam-eyebrow hidden text-subtle lg:mt-4 lg:block">ADMIN</span>
          <div className="flex items-center gap-4 text-[0.6875rem] text-muted lg:hidden">
            <Link href="/" className="transition-colors hover:text-silver-bright">
              فروشگاه
            </Link>
            <form action={logoutAdmin}>
              <button type="submit" className="transition-colors hover:text-silver-bright">
                خروج
              </button>
            </form>
          </div>
        </div>
        <nav aria-label="پیمایش مدیریت" className="overflow-x-auto border-t border-line lg:mt-5">
          <ul className="flex min-w-max px-3 lg:block lg:min-w-0 lg:px-0">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href} className={`block border-b-2 px-5 py-4 text-sm transition-colors lg:border-b-0 lg:border-r-2 lg:px-7 ${active ? "border-silver-bright bg-gloss text-silver-bright" : "border-transparent text-muted hover:text-silver"}`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden px-7 py-8 lg:block">
          <form action={logoutAdmin}>
            <button type="submit" className="text-xs text-muted underline-offset-4 hover:text-silver-bright hover:underline">خروج از پنل</button>
          </form>
          <Link href="/" className="mt-4 block text-xs text-muted underline-offset-4 hover:text-silver-bright hover:underline">مشاهده فروشگاه</Link>
        </div>
      </aside>
      <main id="main-content" className="min-w-0 px-5 py-10 sm:px-8 lg:px-12 lg:py-12 xl:px-16">{children}</main>
    </div>
  );
}
