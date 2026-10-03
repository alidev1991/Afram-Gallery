import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { AdminShell } from "@/components/admin/admin-shell";
import { UserRole } from "@/generated/prisma/enums";
import { getAuthenticatedUser } from "@/lib/auth/authorization";

export default async function AdminPanelLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getAuthenticatedUser();

  if (!user) {
    redirect("/admin/login?next=/admin");
  }

  if (user.role !== UserRole.ADMIN) {
    redirect("/");
  }

  return <AdminShell>{children}</AdminShell>;
}
