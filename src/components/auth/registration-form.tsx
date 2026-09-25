"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  normalizeIranianMobile,
  validateRegistration,
  type RegistrationErrors,
  type RegistrationValues,
} from "@/lib/demo-customer";
import {
  getCurrentPersianYear,
  getPersianMonthLength,
  jalaliToIsoDate,
  PERSIAN_MONTHS,
} from "@/lib/jalali-date";
import { useDemoAuth } from "@/providers/demo-auth-provider";

const inputClass =
  "mt-2 min-h-12 w-full border border-line bg-canvas px-4 text-sm text-silver-bright outline-none transition-colors placeholder:text-subtle focus:border-silver";
const selectClass = `${inputClass} cursor-pointer [color-scheme:dark]`;
const currentPersianYear = getCurrentPersianYear();
const persianYears = Array.from(
  { length: currentPersianYear - 1300 + 1 },
  (_, index) => currentPersianYear - index,
);
const initialValues: RegistrationValues = {
  firstName: "",
  lastName: "",
  birthDate: "",
  mobile: "",
  email: "",
  password: "",
};

export function RegistrationForm({ nextPath }: { nextPath: string }) {
  const router = useRouter();
  const { register } = useDemoAuth();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  const selectedYear = Number(birthYear);
  const selectedMonth = Number(birthMonth);
  const maxBirthDay = birthYear && birthMonth
    ? getPersianMonthLength(selectedYear, selectedMonth)
    : 31;

  function updateValue(field: keyof RegistrationValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    const birthDate = jalaliToIsoDate(
      selectedYear,
      selectedMonth,
      Number(birthDay),
    );
    const normalized = {
      ...values,
      birthDate: birthDate ?? "",
      mobile: normalizeIranianMobile(values.mobile),
    };
    const nextErrors = validateRegistration(normalized);

    if (birthYear && birthMonth && birthDay && !birthDate) {
      nextErrors.birthDate = "تاریخ شمسی معتبر انتخاب کنید.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    const result = await register(normalized);
    setIsSubmitting(false);

    if (!result.ok) {
      setFormError(result.message);
      return;
    }

    router.replace(nextPath);
  }

  const loginHref = `/login?next=${encodeURIComponent(nextPath)}`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="first-name" label="نام" error={errors.firstName}>
          <input id="first-name" autoComplete="given-name" value={values.firstName} onChange={(event) => updateValue("firstName", event.target.value)} className={inputClass} required />
        </Field>
        <Field id="last-name" label="نام خانوادگی" error={errors.lastName}>
          <input id="last-name" autoComplete="family-name" value={values.lastName} onChange={(event) => updateValue("lastName", event.target.value)} className={inputClass} required />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="birth-year" label="تاریخ تولد (شمسی)" error={errors.birthDate}>
          <div
            className="grid grid-cols-3 gap-2"
            role="group"
            aria-label="تاریخ تولد شمسی"
          >
            <select
              id="birth-year"
              value={birthYear}
              onChange={(event) => {
                const nextYear = event.target.value;
                setBirthYear(nextYear);
                setErrors((current) => ({ ...current, birthDate: undefined }));
                if (
                  birthDay &&
                  birthMonth &&
                  Number(birthDay) >
                    getPersianMonthLength(Number(nextYear), selectedMonth)
                ) {
                  setBirthDay("");
                }
              }}
              className={selectClass}
              aria-label="سال تولد"
              required
            >
              <option value="">سال</option>
              {persianYears.map((year) => (
                <option key={year} value={year}>
                  {year.toLocaleString("fa-IR", { useGrouping: false })}
                </option>
              ))}
            </select>
            <select
              id="birth-month"
              value={birthMonth}
              onChange={(event) => {
                const nextMonth = event.target.value;
                setBirthMonth(nextMonth);
                setErrors((current) => ({ ...current, birthDate: undefined }));
                if (
                  birthDay &&
                  birthYear &&
                  Number(birthDay) >
                    getPersianMonthLength(selectedYear, Number(nextMonth))
                ) {
                  setBirthDay("");
                }
              }}
              className={selectClass}
              aria-label="ماه تولد"
              required
            >
              <option value="">ماه</option>
              {PERSIAN_MONTHS.map((month, index) => (
                <option key={month} value={index + 1}>{month}</option>
              ))}
            </select>
            <select
              id="birth-day"
              value={birthDay}
              onChange={(event) => {
                setBirthDay(event.target.value);
                setErrors((current) => ({ ...current, birthDate: undefined }));
              }}
              className={selectClass}
              aria-label="روز تولد"
              disabled={!birthYear || !birthMonth}
              required
            >
              <option value="">روز</option>
              {Array.from({ length: maxBirthDay }, (_, index) => index + 1).map(
                (day) => (
                  <option key={day} value={day}>
                    {day.toLocaleString("fa-IR", { useGrouping: false })}
                  </option>
                ),
              )}
            </select>
          </div>
        </Field>
        <Field id="register-mobile" label="شماره موبایل" error={errors.mobile}>
          <input id="register-mobile" type="tel" inputMode="numeric" autoComplete="tel" dir="ltr" value={values.mobile} onChange={(event) => updateValue("mobile", event.target.value)} className={inputClass} placeholder="09121234567" required />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="email" label="ایمیل (اختیاری)" error={errors.email}>
          <input id="email" type="email" autoComplete="email" dir="ltr" value={values.email} onChange={(event) => updateValue("email", event.target.value)} className={inputClass} placeholder="name@example.com" />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="register-password" label="رمز عبور" error={errors.password} hint="حداقل ۸ کاراکتر، یک حرف انگلیسی و یک عدد">
          <input id="register-password" type="password" autoComplete="new-password" dir="ltr" value={values.password} onChange={(event) => updateValue("password", event.target.value)} className={inputClass} required />
        </Field>
      </div>

      {formError ? <p className="mt-5 text-xs leading-6 text-danger" role="alert">{formError}</p> : null}

      <Button type="submit" className="mt-8 w-full" disabled={isSubmitting}>
        {isSubmitting ? "در حال ثبت‌نام…" : "ثبت‌نام"}
      </Button>

      <p className="mt-7 text-center text-xs text-muted">
        قبلاً ثبت‌نام کرده‌اید؟{" "}
        <Link href={loginHref} className="text-silver-bright underline underline-offset-4">ورود</Link>
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs text-silver">{label}</label>
      {children}
      {error ? <p className="mt-2 text-xs leading-5 text-danger" role="alert">{error}</p> : hint ? <p className="mt-2 text-[0.6875rem] leading-5 text-subtle">{hint}</p> : null}
    </div>
  );
}
