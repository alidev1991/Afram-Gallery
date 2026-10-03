"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { AccountIcon } from "@/components/icons/interface-icons";

export function AccountIndicator({ className }: { className: string }) {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <Link
      href="/account"
      aria-label={isAuthenticated ? "حساب کاربری، وارد شده" : "ورود به حساب کاربری"}
      className={`${className} relative`}
    >
      <AccountIcon className="size-5" />
      {isAuthenticated ? (
        <span
          aria-hidden="true"
          className="absolute end-2 top-2 size-1.5 rounded-full bg-silver-bright"
        />
      ) : null}
    </Link>
  );
}
