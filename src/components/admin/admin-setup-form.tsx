"use client";

import { useState, type FormEvent, type ReactNode } from "react";

import { createFirstAdmin } from "@/app/admin/login/actions";
import { Button } from "@/components/ui/button";
import {
  getRegistrationFieldErrors,
  normalizeIranianMobile,
  normalizePersianName,
  registrationSchema,
  type RegistrationFieldErrors,
  type RegistrationInput,
} from "@/lib/auth/validation";
import {
  getCurrentPersianYear,
  getPersianMonthLength,
  PERSIAN_MONTHS,
} from "@/lib/jalali-date";

const inputClass =
  "mt-2 min-h-12 w-full border border-line bg-canvas px-4 text-sm text-silver-bright outline-none transition-colors placeholder:text-subtle focus:border-silver";
const selectClass = `${inputClass} cursor-pointer [color-scheme:dark]`;
const currentPersianYear = getCurrentPersianYear();
const persianYears = Array.from(
  { length: currentPersianYear - 1300 + 1 },
  (_, index) => currentPersianYear - index,
);
const initialValues: RegistrationInput = {
  firstName: "",
  lastName: "",
  birthYear: "",
  birthMonth: "",
  birthDay: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function AdminSetupForm({
  onCreated,
  onSetupClosed,
}: {
  onCreated: () => void;
  onSetupClosed: () => void;
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<RegistrationFieldErrors>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedYear = Number(values.birthYear);
  const selectedMonth = Number(values.birthMonth);
  const maxBirthDay = values.birthYear && values.birthMonth
    ? getPersianMonthLength(selectedYear, selectedMonth)
    : 31;

  function updateValue(field: keyof RegistrationInput, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    const normalizedValues: RegistrationInput = {
      ...values,
      firstName: normalizePersianName(values.firstName),
      lastName: normalizePersianName(values.lastName),
      mobile: normalizeIranianMobile(values.mobile),
      email: "",
    };
    const validationResult = registrationSchema.safeParse(normalizedValues);

    if (!validationResult.success) {
      setErrors(getRegistrationFieldErrors(validationResult.error));
      return;
    }

    setValues(normalizedValues);
    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await createFirstAdmin(normalizedValues);

      if (!result.ok) {
        setErrors(result.fieldErrors ?? {});
        setFormError(result.formError ?? "");

        if (result.setupClosed) {
          onSetupClosed();
        }
        return;
      }

      setValues(initialValues);
      onCreated();
    } catch {
      setFormError("ایجاد حساب مدیر انجام نشد. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="admin-first-name" label="نام" error={errors.firstName}>
          <input id="admin-first-name" autoComplete="given-name" value={values.firstName} onChange={(event) => updateValue("firstName", event.target.value)} className={inputClass} aria-invalid={Boolean(errors.firstName)} required />
        </Field>
        <Field id="admin-last-name" label="نام خانوادگی" error={errors.lastName}>
          <input id="admin-last-name" autoComplete="family-name" value={values.lastName} onChange={(event) => updateValue("lastName", event.target.value)} className={inputClass} aria-invalid={Boolean(errors.lastName)} required />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="admin-birth-year" label="تاریخ تولد (شمسی)" error={errors.birthDate}>
          <div className="grid grid-cols-3 gap-2" role="group" aria-label="تاریخ تولد شمسی مدیر">
            <select id="admin-birth-year" value={values.birthYear} onChange={(event) => updateValue("birthYear", event.target.value)} className={selectClass} aria-label="سال تولد" aria-invalid={Boolean(errors.birthDate)} required>
              <option value="">سال</option>
              {persianYears.map((year) => <option key={year} value={year}>{year.toLocaleString("fa-IR", { useGrouping: false })}</option>)}
            </select>
            <select id="admin-birth-month" value={values.birthMonth} onChange={(event) => updateValue("birthMonth", event.target.value)} className={selectClass} aria-label="ماه تولد" aria-invalid={Boolean(errors.birthDate)} required>
              <option value="">ماه</option>
              {PERSIAN_MONTHS.map((month, index) => <option key={month} value={index + 1}>{month}</option>)}
            </select>
            <select id="admin-birth-day" value={values.birthDay} onChange={(event) => updateValue("birthDay", event.target.value)} className={selectClass} aria-label="روز تولد" aria-invalid={Boolean(errors.birthDate)} disabled={!values.birthYear || !values.birthMonth} required>
              <option value="">روز</option>
              {Array.from({ length: maxBirthDay }, (_, index) => index + 1).map((day) => <option key={day} value={day}>{day.toLocaleString("fa-IR", { useGrouping: false })}</option>)}
            </select>
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="admin-setup-mobile" label="شماره موبایل" error={errors.mobile}>
          <input id="admin-setup-mobile" type="tel" inputMode="numeric" autoComplete="tel" dir="ltr" value={values.mobile} onChange={(event) => updateValue("mobile", event.target.value)} className={inputClass} placeholder="09121234567" aria-invalid={Boolean(errors.mobile)} required />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="admin-setup-password" label="رمز عبور" error={errors.password} hint="حداقل ۸ کاراکتر، یک حرف انگلیسی و یک عدد">
          <input id="admin-setup-password" type="password" autoComplete="new-password" dir="ltr" value={values.password} onChange={(event) => updateValue("password", event.target.value)} className={inputClass} aria-invalid={Boolean(errors.password)} required />
        </Field>
        <Field id="admin-confirm-password" label="تکرار رمز عبور" error={errors.confirmPassword}>
          <input id="admin-confirm-password" type="password" autoComplete="new-password" dir="ltr" value={values.confirmPassword} onChange={(event) => updateValue("confirmPassword", event.target.value)} className={inputClass} aria-invalid={Boolean(errors.confirmPassword)} required />
        </Field>
      </div>

      {formError ? <p className="mt-5 text-xs leading-6 text-danger" role="alert" aria-live="polite">{formError}</p> : null}

      <Button type="submit" className="mt-8 w-full" disabled={isSubmitting}>
        {isSubmitting ? "در حال ایجاد حساب…" : "ایجاد حساب مدیر"}
      </Button>
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
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs text-silver">{label}</label>
      {children}
      {error ? <p className="mt-2 text-xs leading-5 text-danger" role="alert">{error}</p> : hint ? <p className="mt-2 text-[0.6875rem] leading-5 text-subtle">{hint}</p> : null}
    </div>
  );
}
