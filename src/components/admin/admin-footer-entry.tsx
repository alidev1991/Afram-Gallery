"use client";

import { UserRole } from "@/generated/prisma/enums";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function AdminFooterEntry() {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === UserRole.ADMIN;

  return (
    <Link
      href={isAdmin ? "/admin" : "/admin/login"}
      className="transition-colors duration-200 hover:text-silver-bright focus-visible:text-silver-bright"
    >
      {isAdmin ? "پنل مدیریت" : "ورود مدیر"}
    </Link>
  );
}