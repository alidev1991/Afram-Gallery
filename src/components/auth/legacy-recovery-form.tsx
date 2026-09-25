"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { isValidIranianMobile, isValidPassword } from "@/lib/demo-customer";
import { useDemoAuth } from "@/providers/demo-auth-provider";

const inputClass =
  "mt-2 min-h-12 w-full border border-line bg-canvas px-4 text-sm text-silver-bright outline-none transition-colors focus:border-silver";

export function LegacyRecoveryForm({
  mobile,
  nextPath,
}: {
  mobile: string;
  nextPath: string;
}) {
  const router = useRouter();
  const { recoverLegacyAccount } = useDemoAuth();
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!isValidIranianMobile(mobile)) {
      setError("شماره موبایل حساب معتبر نیست.");
      return;
    }

    if (!isValidPassword(password)) {
      setError("حداقل ۸ کاراکتر شامل یک حرف انگلیسی و یک عدد وارد کنید.");
      return;
    }

    if (password !== confirmation) {
      setError("تکرار رمز عبور با رمز جدید یکسان نیست.");
      return;
    }

    setIsSubmitting(true);
    const result = await recoverLegacyAccount(mobile, password);
    setIsSubmitting(false);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    router.replace(nextPath);
  }

  const loginHref = `/login?next=${encodeURIComponent(nextPath)}`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="border border-line bg-matte p-4 text-xs text-muted">
        <span>شماره موبایل</span>
        <strong dir="ltr" className="ms-3 font-latin font-normal text-silver-bright">
          {mobile}
        </strong>
      </div>

      <div className="mt-6">
        <label htmlFor="recovery-password" className="text-xs text-silver">
          رمز عبور جدید
        </label>
        <input
          id="recovery-password"
          type="password"
          autoComplete="new-password"
          dir="ltr"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError("");
          }}
          className={inputClass}
          required
        />
        <p className="mt-2 text-[0.6875rem] leading-5 text-subtle">
          حداقل ۸ کاراکتر، یک حرف انگلیسی و یک عدد
        </p>
      </div>

      <div className="mt-5">
        <label htmlFor="recovery-confirmation" className="text-xs text-silver">
          تکرار رمز عبور جدید
        </label>
        <input
          id="recovery-confirmation"
          type="password"
          autoComplete="new-password"
          dir="ltr"
          value={confirmation}
          onChange={(event) => {
            setConfirmation(event.target.value);
            setError("");
          }}
          className={inputClass}
          required
        />
      </div>

      {error ? (
        <p className="mt-5 text-xs leading-6 text-danger" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" className="mt-7 w-full" disabled={isSubmitting}>
        {isSubmitting ? "در حال فعال‌سازی…" : "فعال‌سازی حساب"}
      </Button>

      <Link
        href={loginHref}
        className="mt-6 block text-center text-xs text-muted underline-offset-4 transition-colors hover:text-silver-bright hover:underline"
      >
        بازگشت به ورود
      </Link>
    </form>
  );
}
