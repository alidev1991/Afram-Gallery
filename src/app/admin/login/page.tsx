import Link from "next/link";
import { redirect } from "next/navigation";

import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { UserRole } from "@/generated/prisma/enums";
import { getAuthenticatedUser } from "@/lib/auth/authorization";
import { getSafeAdminPath } from "@/lib/auth/safe-redirect";
import { prisma } from "@/lib/prisma";

type AdminLoginPageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function AdminLoginPage({
  searchParams,
}: AdminLoginPageProps) {
  const { next } = await searchParams;
  const nextPath = getSafeAdminPath(next);
  const [currentUser, existingAdmin] = await Promise.all([
    getAuthenticatedUser(),
    prisma.user.findFirst({
      where: { role: UserRole.ADMIN },
      select: { id: true },
    }),
  ]);

  if (currentUser?.role === UserRole.ADMIN) {
    redirect(nextPath);
  }

  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center bg-canvas px-5 py-12">
      <div className="w-full max-w-md">
        <AdminLoginForm
          nextPath={nextPath}
          setupAvailable={!existingAdmin}
        />
        <Link href="/" className="mt-6 block text-center text-xs text-muted transition-colors hover:text-silver-bright">بازگشت به فروشگاه</Link>
      </div>
    </main>
  );
}
