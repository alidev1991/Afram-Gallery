"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  DEMO_CUSTOMER_CREDENTIALS,
  isValidIranianMobile,
  normalizeIranianMobile,
} from "@/lib/demo-customer";
import { useDemoAuth } from "@/providers/demo-auth-provider";

const inputClass =
  "mt-2 min-h-12 w-full border border-line bg-canvas px-4 text-sm text-silver-bright outline-none transition-colors placeholder:text-subtle focus:border-silver";

export function LoginForm({ nextPath }: { nextPath: string }) {
  const router = useRouter();
  const { login } = useDemoAuth();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [legacyMobile, setLegacyMobile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLegacyMobile(null);

    if (!isValidIranianMobile(mobile)) {
      setError("شماره موبایل معتبر ایران وارد کنید.");
      return;
    }

    if (!password) {
      setError("رمز عبور را وارد کنید.");
      return;
    }

    setIsSubmitting(true);
    const result = await login(mobile, password);
    setIsSubmitting(false);

    if (!result.ok) {
      if (result.code === "LEGACY_CREDENTIAL_MISSING") {
        setLegacyMobile(normalizeIranianMobile(mobile));
        return;
      }

      setError(result.message);
      return;
    }

    router.replace(nextPath);
  }

  const registerHref = `/register?next=${encodeURIComponent(nextPath)}`;
  const recoveryHref = legacyMobile
    ? `/recover-account?mobile=${encodeURIComponent(legacyMobile)}&next=${encodeURIComponent(nextPath)}`
    : "";

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="login-mobile" className="text-xs text-silver">شماره موبایل</label>
        <input
          id="login-mobile"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          dir="ltr"
          value={mobile}
          onChange={(event) => {
            setMobile(event.target.value);
            setLegacyMobile(null);
            setError("");
          }}
          className={inputClass}
          placeholder="09121234567"
          required
        />
      </div>

      <div className="mt-5">
        <label htmlFor="login-password" className="text-xs text-silver">رمز عبور</label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          dir="ltr"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError("");
          }}
          className={inputClass}
          required
        />
      </div>

      {error ? <p className="mt-5 text-xs leading-6 text-danger" role="alert">{error}</p> : null}

      {legacyMobile ? (
        <section className="mt-6 border border-line-strong bg-matte p-5" aria-labelledby="legacy-account-title">
          <h2 id="legacy-account-title" className="text-sm font-medium text-silver-bright">
            فعال‌سازی مجدد حساب
          </h2>
          <p className="mt-3 text-xs leading-7 text-muted">
            این حساب قبلاً ایجاد شده است. برای فعال‌سازی مجدد حساب، یک رمز عبور جدید تعیین کنید.
          </p>
          <Link
            href={recoveryHref}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center border border-silver px-5 py-2.5 text-xs font-medium text-silver-bright transition-colors hover:border-silver-bright hover:bg-gloss focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-silver-bright active:bg-elevated"
          >
            تعیین رمز عبور جدید
          </Link>
        </section>
      ) : null}

      <Button type="submit" className="mt-7 w-full" disabled={isSubmitting}>
        {isSubmitting ? "در حال ورود…" : "ورود"}
      </Button>

      <div className="mt-6 border border-line bg-gloss p-4 text-xs leading-6 text-muted">
        <p className="text-silver">ورود نمایشی</p>
        <p className="mt-1" dir="ltr">{DEMO_CUSTOMER_CREDENTIALS.mobile}</p>
        <p dir="ltr">{DEMO_CUSTOMER_CREDENTIALS.password}</p>
      </div>

      <p className="mt-7 text-center text-xs text-muted">
        حساب ندارید؟{" "}
        <Link href={registerHref} className="text-silver-bright underline underline-offset-4">
          ثبت‌نام
        </Link>
      </p>
    </form>
  );
}
