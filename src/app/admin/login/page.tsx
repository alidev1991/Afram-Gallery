import Link from "next/link";

import { AdminLoginForm } from "@/components/admin/admin-login-form";

export default function AdminLoginPage() {
  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center bg-canvas px-5 py-12">
      <div className="w-full max-w-md">
        <AdminLoginForm />
        <Link href="/" className="mt-6 block text-center text-xs text-muted transition-colors hover:text-silver-bright">بازگشت به فروشگاه</Link>
      </div>
    </main>
  );
}
