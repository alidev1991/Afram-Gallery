"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { ADMIN_DEMO_CREDENTIALS, useAdminDemo } from "@/providers/admin-demo-provider";

const inputClass =
  "mt-2 min-h-12 w-full border border-line bg-canvas px-4 text-sm text-silver-bright outline-none transition-colors focus:border-silver";

export function AdminLoginForm() {
  const router = useRouter();
  const { login } = useAdminDemo();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = login(username, password);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    router.replace("/admin");
  }

  return (
    <div className="w-full max-w-md border border-line bg-matte p-7 shadow-soft sm:p-10">
      <BrandLogo className="justify-start" />
      <p className="arfam-eyebrow mt-8 text-subtle">ADMIN DEMO</p>
      <h1 className="mt-3 text-3xl font-light text-silver-bright">ورود مدیریت</h1>

      <form onSubmit={handleSubmit} className="mt-8">
        <div>
          <label htmlFor="admin-username" className="text-xs text-silver">نام کاربری</label>
          <input id="admin-username" dir="ltr" autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} className={inputClass} required />
        </div>
        <div className="mt-5">
          <label htmlFor="admin-password" className="text-xs text-silver">رمز عبور</label>
          <input id="admin-password" type="password" dir="ltr" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className={inputClass} required />
        </div>
        {error ? <p className="mt-5 text-xs text-danger" role="alert">{error}</p> : null}
        <Button type="submit" className="mt-7 w-full">ورود به پنل</Button>
      </form>

      <div className="mt-6 border border-line bg-gloss p-4 text-xs leading-6 text-muted">
        <p className="text-silver">اطلاعات ورود Demo</p>
        <p className="mt-1" dir="ltr">Username: {ADMIN_DEMO_CREDENTIALS.username}</p>
        <p dir="ltr">Password: {ADMIN_DEMO_CREDENTIALS.password}</p>
      </div>
    </div>
  );
}
