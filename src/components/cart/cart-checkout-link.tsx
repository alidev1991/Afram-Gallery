"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export function CartCheckoutLink({ className }: { className: string }) {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <span className={className} aria-busy="true" aria-live="polite">
        در حال بررسی حساب…
      </span>
    );
  }

  return (
    <Link
      href={status === "authenticated" ? "/checkout" : "/login?next=/checkout"}
      className={className}
    >
      ادامه فرایند خرید
    </Link>
  );
}
