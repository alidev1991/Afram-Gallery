import type { ReactNode } from "react";

import { AdminDemoProvider } from "@/providers/admin-demo-provider";

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return <AdminDemoProvider>{children}</AdminDemoProvider>;
}
