"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { AdminSetupForm } from "@/components/admin/admin-setup-form";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/lib/auth/validation";

const inputClass =
  "mt-2 min-h-12 w-full border border-line bg-canvas px-4 text-sm text-silver-bright outline-none transition-colors focus:border-silver";

export function AdminLoginForm({
  nextPath,
  setupAvailable,
}: {
  nextPath: string;
  setupAvailable: boolean;
}) {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "setup">("login");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");

    const validationResult = loginSchema.safeParse({ mobile, password });

    if (!validationResult.success) {
      setError("شماره موبایل یا رمز عبور صحیح نیست.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await signIn("credentials", {
        mobile: validationResult.data.mobile,
        password: validationResult.data.password,
        redirect: false,
        redirectTo: nextPath,
      });

      if (!result.ok || result.error) {
        setError("شماره موبایل یا رمز عبور صحیح نیست.");
        return;
      }

      router.replace(nextPath);
      router.refresh();
    } catch {
      setError("شماره موبایل یا رمز عبور صحیح نیست.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleAdminCreated() {
    setMode("login");
    setNotice("حساب مدیر ایجاد شد؛ با شماره موبایل و رمز عبور خود وارد شوید.");
    router.refresh();
  }

  function handleSetupClosed() {
    setMode("login");
    router.refresh();
  }

  return (
    <div className="w-full max-w-md border border-line bg-matte p-7 shadow-soft sm:p-10">
      <BrandLogo className="justify-start" />
      <p className="arfam-eyebrow mt-8 text-subtle">ADMIN ACCESS</p>
      <h1 className="mt-3 text-3xl font-light text-silver-bright">
        {mode === "setup" ? "ایجاد حساب مدیر" : "ورود مدیریت"}
      </h1>

      {mode === "setup" && setupAvailable ? (
        <div className="mt-8">
          <p className="mb-7 text-xs leading-6 text-muted">
            این امکان فقط برای ساخت اولین مدیر فعال است و پس از ایجاد حساب بسته می‌شود.
          </p>
          <AdminSetupForm
            onCreated={handleAdminCreated}
            onSetupClosed={handleSetupClosed}
          />
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setError("");
            }}
            className="mt-7 w-full text-center text-xs text-muted underline underline-offset-4 transition-colors hover:text-silver-bright"
          >
            بازگشت به ورود مدیریت
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="mt-8" noValidate>
            <div>
              <label htmlFor="admin-mobile" className="text-xs text-silver">شماره موبایل</label>
              <input id="admin-mobile" type="tel" inputMode="numeric" dir="ltr" autoComplete="tel" value={mobile} onChange={(event) => { setMobile(event.target.value); setError(""); }} className={inputClass} placeholder="09121234567" required />
            </div>
            <div className="mt-5">
              <label htmlFor="admin-password" className="text-xs text-silver">رمز عبور</label>
              <input id="admin-password" type="password" dir="ltr" autoComplete="current-password" value={password} onChange={(event) => { setPassword(event.target.value); setError(""); }} className={inputClass} required />
            </div>
            {notice ? <p className="mt-5 border border-line bg-gloss px-4 py-3 text-xs leading-6 text-silver" role="status">{notice}</p> : null}
            {error ? <p className="mt-5 text-xs leading-6 text-danger" role="alert">{error}</p> : null}
            <Button type="submit" className="mt-7 w-full" disabled={isSubmitting}>
              {isSubmitting ? "در حال ورود…" : "ورود به پنل"}
            </Button>
          </form>

          {setupAvailable ? (
            <div className="mt-7 border-t border-line pt-6 text-center">
              <p className="text-xs leading-6 text-muted">هنوز حساب مدیری در این Database ایجاد نشده است.</p>
              <button
                type="button"
                onClick={() => {
                  setMode("setup");
                  setError("");
                  setNotice("");
                }}
                className="mt-4 text-xs text-silver-bright underline underline-offset-4"
              >
                ایجاد حساب مدیر
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
