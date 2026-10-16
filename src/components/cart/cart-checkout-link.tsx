"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export function CartCheckoutLink({
  className,
  isBlocked = false,
}: {
  className: string;
  isBlocked?: boolean;
}) {
  const { status } = useSession();

  if (isBlocked) {
    return (
      <span className={`${className} cursor-not-allowed opacity-70`} aria-disabled="true">
        تسویه برای محصول پیش‌نمایش غیرفعال است
      </span>
    );
  }

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