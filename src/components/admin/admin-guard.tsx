"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

import { useAdminDemo } from "@/providers/admin-demo-provider";

export function AdminGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isHydrated } = useAdminDemo();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.replace("/admin/login");
    }
  }, [isAuthenticated, isHydrated, router]);

  if (!isHydrated || !isAuthenticated) {
    return <div className="flex min-h-screen items-center justify-center bg-canvas text-sm text-muted">در حال بررسی دسترسی…</div>;
  }

  return children;
}
