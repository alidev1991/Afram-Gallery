"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { loginSchema } from "@/lib/auth/validation";

const inputClass =
  "mt-2 min-h-12 w-full border border-line bg-canvas px-4 text-sm text-silver-bright outline-none transition-colors placeholder:text-subtle focus:border-silver";

export function LoginForm({
  nextPath,
  registrationSucceeded = false,
}: {
  nextPath: string;
  registrationSucceeded?: boolean;
}) {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

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

  const registerHref = `/register?next=${encodeURIComponent(nextPath)}`;

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

      {registrationSucceeded ? (
        <p className="mt-5 border border-line bg-matte px-4 py-3 text-xs leading-6 text-silver" role="status">
          ثبت‌نام با موفقیت انجام شد؛ وارد حساب خود شوید.
        </p>
      ) : null}

      {error ? (
        <p className="mt-5 text-xs leading-6 text-danger" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" className="mt-7 w-full" disabled={isSubmitting}>
        {isSubmitting ? "در حال ورود…" : "ورود"}
      </Button>

      <p className="mt-7 text-center text-xs text-muted">
        حساب ندارید؟{" "}
        <Link href={registerHref} className="text-silver-bright underline underline-offset-4">
          ثبت‌نام
        </Link>
      </p>
    </form>
  );
}
