"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useRef,
  useState,
  type FocusEvent,
  type FormEvent,
} from "react";

import { registerCustomer } from "@/app/(storefront)/register/actions";
import { Button } from "@/components/ui/button";
import {
  getRegistrationFieldErrors,
  normalizeIranianMobile,
  normalizePersianName,
  registrationSchema,
  validateRegistrationField,
  type RegistrationField,
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

type DisplayField = Exclude<
  RegistrationField,
  "birthYear" | "birthMonth" | "birthDay"
>;

type TouchedFields = Partial<Record<DisplayField, boolean>>;

const fieldOrder: DisplayField[] = [
  "firstName",
  "lastName",
  "birthDate",
  "mobile",
  "email",
  "password",
  "confirmPassword",
];

const fieldFocusIds: Record<DisplayField, string> = {
  firstName: "first-name",
  lastName: "last-name",
  birthDate: "birth-year",
  mobile: "register-mobile",
  email: "email",
  password: "register-password",
  confirmPassword: "confirm-password",
};

function displayFieldFor(field: keyof RegistrationInput): DisplayField {
  return field === "birthYear" ||
    field === "birthMonth" ||
    field === "birthDay"
    ? "birthDate"
    : field;
}

export function RegistrationForm({ nextPath }: { nextPath: string }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<RegistrationFieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedYear = Number(values.birthYear);
  const selectedMonth = Number(values.birthMonth);
  const maxBirthDay = values.birthYear && values.birthMonth
    ? getPersianMonthLength(selectedYear, selectedMonth)
    : 31;

  function focusFirstInvalidField(fieldErrors: RegistrationFieldErrors) {
    const firstInvalidField = fieldOrder.find((field) => fieldErrors[field]);

    if (!firstInvalidField) return;

    window.requestAnimationFrame(() => {
      formRef.current
        ?.querySelector<HTMLElement>(`#${fieldFocusIds[firstInvalidField]}`)
        ?.focus();
    });
  }

  function validateVisibleField(
    field: DisplayField,
    nextValues: RegistrationInput,
  ) {
    const error = validateRegistrationField(nextValues, field);
    setErrors((current) => ({ ...current, [field]: error }));
  }

  function updateValues(patch: Partial<RegistrationInput>) {
    const nextValues = { ...values, ...patch };
    const displayFields = new Set(
      (Object.keys(patch) as (keyof RegistrationInput)[]).map(displayFieldFor),
    );

    setValues(nextValues);
    setFormError("");

    for (const displayField of displayFields) {
      if (touched[displayField]) {
        validateVisibleField(displayField, nextValues);
      }
    }

    if ("password" in patch && touched.confirmPassword) {
      validateVisibleField("confirmPassword", nextValues);
    }
  }

  function updateValue(field: keyof RegistrationInput, value: string) {
    updateValues({ [field]: value });
  }

  function handleBlur(field: DisplayField) {
    let nextValues = values;

    if (field === "firstName" || field === "lastName") {
      nextValues = {
        ...values,
        [field]: normalizePersianName(values[field]),
      };
    } else if (field === "mobile") {
      nextValues = {
        ...values,
        mobile: normalizeIranianMobile(values.mobile),
      };
    } else if (field === "email") {
      nextValues = {
        ...values,
        email: values.email.trim().toLowerCase(),
      };
    }

    setValues(nextValues);
    setTouched((current) => ({ ...current, [field]: true }));
    validateVisibleField(field, nextValues);
  }

  function handleBirthDateBlur(event: FocusEvent<HTMLDivElement>) {
    const nextTarget = event.relatedTarget;

    if (nextTarget instanceof Node && event.currentTarget.contains(nextTarget)) {
      return;
    }

    handleBlur("birthDate");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    const validationResult = registrationSchema.safeParse(values);
    const nextErrors = validationResult.success
      ? {}
      : getRegistrationFieldErrors(validationResult.error);

    for (const field of fieldOrder) {
      nextErrors[field] ??= validateRegistrationField(values, field);
    }

    setErrors(nextErrors);
    setTouched(
      Object.fromEntries(fieldOrder.map((field) => [field, true])) as TouchedFields,
    );

    if (!validationResult.success || Object.values(nextErrors).some(Boolean)) {
      focusFirstInvalidField(nextErrors);
      return;
    }

    setValues((current) => ({
      ...current,
      firstName: normalizePersianName(current.firstName),
      lastName: normalizePersianName(current.lastName),
      mobile: normalizeIranianMobile(current.mobile),
      email: current.email.trim().toLowerCase(),
    }));
    setIsSubmitting(true);

    try {
      const result = await registerCustomer(values);

      if (!result.ok) {
        const serverErrors = result.fieldErrors ?? {};
        setErrors(serverErrors);
        setTouched((current) => ({
          ...current,
          ...Object.fromEntries(
            fieldOrder
              .filter((field) => serverErrors[field])
              .map((field) => [field, true]),
          ),
        }));
        setFormError(result.formError ?? "");
        focusFirstInvalidField(serverErrors);
        return;
      }

      setValues(initialValues);
      router.replace(`/login?next=${encodeURIComponent(nextPath)}&registered=1`);
    } catch {
      setFormError("ثبت‌نام انجام نشد. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const loginHref = `/login?next=${encodeURIComponent(nextPath)}`;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="first-name" label="نام" error={errors.firstName}>
          <input id="first-name" autoComplete="given-name" value={values.firstName} onChange={(event) => updateValue("firstName", event.target.value)} onBlur={() => handleBlur("firstName")} className={inputClass} aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? "first-name-error" : undefined} required />
        </Field>
        <Field id="last-name" label="نام خانوادگی" error={errors.lastName}>
          <input id="last-name" autoComplete="family-name" value={values.lastName} onChange={(event) => updateValue("lastName", event.target.value)} onBlur={() => handleBlur("lastName")} className={inputClass} aria-invalid={Boolean(errors.lastName)} aria-describedby={errors.lastName ? "last-name-error" : undefined} required />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="birth-year" label="تاریخ تولد (شمسی)" error={errors.birthDate}>
          <div
            className="grid grid-cols-3 gap-2"
            role="group"
            aria-label="تاریخ تولد شمسی"
            aria-describedby={errors.birthDate ? "birth-year-error" : undefined}
            onBlur={handleBirthDateBlur}
          >
            <select
              id="birth-year"
              value={values.birthYear}
              onChange={(event) => {
                const nextYear = event.target.value;
                const shouldClearDay =
                  values.birthDay &&
                  values.birthMonth &&
                  Number(values.birthDay) >
                    getPersianMonthLength(Number(nextYear), selectedMonth);
                updateValues({
                  birthYear: nextYear,
                  ...(shouldClearDay ? { birthDay: "" } : {}),
                });
              }}
              className={selectClass}
              aria-label="سال تولد"
              aria-invalid={Boolean(errors.birthDate)}
              aria-describedby={errors.birthDate ? "birth-year-error" : undefined}
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
              value={values.birthMonth}
              onChange={(event) => {
                const nextMonth = event.target.value;
                const shouldClearDay =
                  values.birthDay &&
                  values.birthYear &&
                  Number(values.birthDay) >
                    getPersianMonthLength(selectedYear, Number(nextMonth));
                updateValues({
                  birthMonth: nextMonth,
                  ...(shouldClearDay ? { birthDay: "" } : {}),
                });
              }}
              className={selectClass}
              aria-label="ماه تولد"
              aria-invalid={Boolean(errors.birthDate)}
              aria-describedby={errors.birthDate ? "birth-year-error" : undefined}
              required
            >
              <option value="">ماه</option>
              {PERSIAN_MONTHS.map((month, index) => (
                <option key={month} value={index + 1}>{month}</option>
              ))}
            </select>
            <select
              id="birth-day"
              value={values.birthDay}
              onChange={(event) => updateValue("birthDay", event.target.value)}
              className={selectClass}
              aria-label="روز تولد"
              aria-invalid={Boolean(errors.birthDate)}
              aria-describedby={errors.birthDate ? "birth-year-error" : undefined}
              disabled={!values.birthYear || !values.birthMonth}
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
          <input id="register-mobile" type="tel" inputMode="numeric" autoComplete="tel" dir="ltr" value={values.mobile} onChange={(event) => updateValue("mobile", event.target.value)} onBlur={() => handleBlur("mobile")} className={inputClass} placeholder="09121234567" aria-invalid={Boolean(errors.mobile)} aria-describedby={errors.mobile ? "register-mobile-error" : undefined} required />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="email" label="ایمیل (اختیاری)" error={errors.email}>
          <input id="email" type="email" autoComplete="email" dir="ltr" value={values.email} onChange={(event) => updateValue("email", event.target.value)} onBlur={() => handleBlur("email")} className={inputClass} placeholder="name@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="register-password" label="رمز عبور" error={errors.password} hint="حداقل ۸ کاراکتر، یک حرف انگلیسی و یک عدد">
          <input id="register-password" type="password" autoComplete="new-password" dir="ltr" value={values.password} onChange={(event) => updateValue("password", event.target.value)} onBlur={() => handleBlur("password")} className={inputClass} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "register-password-error" : "register-password-hint"} required />
        </Field>
        <Field id="confirm-password" label="تکرار رمز عبور" error={errors.confirmPassword}>
          <input id="confirm-password" type="password" autoComplete="new-password" dir="ltr" value={values.confirmPassword} onChange={(event) => updateValue("confirmPassword", event.target.value)} onBlur={() => handleBlur("confirmPassword")} className={inputClass} aria-invalid={Boolean(errors.confirmPassword)} aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined} required />
        </Field>
      </div>

      {formError ? <p className="mt-5 text-xs leading-6 text-danger" role="alert" aria-live="polite">{formError}</p> : null}

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
      {error ? <p id={`${id}-error`} className="mt-2 text-xs leading-5 text-danger" role="alert" aria-live="polite">{error}</p> : hint ? <p id={`${id}-hint`} className="mt-2 text-[0.6875rem] leading-5 text-subtle">{hint}</p> : null}
    </div>
  );
}
