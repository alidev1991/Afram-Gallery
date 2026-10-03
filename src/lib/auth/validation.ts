import { z } from "zod";

import {
  getCurrentPersianDateParts,
  jalaliToIsoDate,
} from "@/lib/jalali-date";

const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
const persianNameLetters =
  "\\u0621-\\u063A\\u0641-\\u064A\\u067E\\u0686\\u0698\\u06A9\\u06AF\\u06CC\\u06C0\\u06C1\\u06C2\\u06BE\\u06D2";
const persianNamePattern = new RegExp(
  `^[${persianNameLetters}]+(?: [${persianNameLetters}]+)*$`,
);

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 128;

export type RegistrationInput = {
  firstName: string;
  lastName: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegistrationField =
  | keyof RegistrationInput
  | "birthDate";

export type RegistrationFieldErrors = Partial<
  Record<RegistrationField, string>
>;

export function toEnglishDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String(persianDigits.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String(arabicDigits.indexOf(digit)));
}

export function normalizeIranianMobile(value: string) {
  const normalized = toEnglishDigits(value).replace(/[\s()-]/g, "");

  if (normalized.startsWith("+98")) {
    return `0${normalized.slice(3)}`;
  }

  if (normalized.startsWith("0098")) {
    return `0${normalized.slice(4)}`;
  }

  if (normalized.startsWith("98") && normalized.length === 12) {
    return `0${normalized.slice(2)}`;
  }

  return normalized;
}

export function isValidIranianMobile(value: string) {
  return /^09\d{9}$/.test(normalizeIranianMobile(value));
}

export function normalizePersianName(value: string) {
  return value
    .normalize("NFC")
    .replace(/ي/g, "ی")
    .replace(/ى/g, "ی")
    .replace(/ك/g, "ک")
    .trim()
    .replace(/\s+/g, " ");
}

export function isValidPersianName(value: string) {
  const normalized = normalizePersianName(value);

  return (
    normalized.length >= 2 &&
    normalized.length <= 50 &&
    persianNamePattern.test(normalized)
  );
}

export function isValidPassword(value: string) {
  return (
    value.length >= PASSWORD_MIN_LENGTH &&
    value.length <= PASSWORD_MAX_LENGTH &&
    /[A-Za-z]/.test(value) &&
    /\d/.test(value)
  );
}

const persianNameSchema = z
  .string()
  .transform(normalizePersianName)
  .pipe(
    z
      .string()
      .min(2, "نام را کامل وارد کنید.")
      .max(50, "نام واردشده بیش از حد طولانی است.")
      .regex(
        persianNamePattern,
        "نام و نام خانوادگی باید فقط با حروف فارسی وارد شوند.",
      ),
  );

const jalaliPartSchema = z
  .string()
  .transform((value) => toEnglishDigits(value.trim()))
  .refine((value) => /^\d+$/.test(value), "تاریخ تولد الزامی است.")
  .transform(Number)
  .refine(Number.isInteger, "تاریخ تولد معتبر نیست.");

const optionalEmailSchema = z
  .string()
  .trim()
  .max(254, "ایمیل واردشده بیش از حد طولانی است.")
  .refine(
    (value) => value === "" || z.email().safeParse(value).success,
    "فرمت ایمیل معتبر نیست.",
  )
  .transform((value) => value.toLowerCase() || undefined);

const mobileSchema = z
  .string()
  .transform(normalizeIranianMobile)
  .refine(
    (value) => /^09\d{9}$/.test(value),
    "شماره موبایل معتبر ایران وارد کنید؛ مانند 09121234567.",
  );

export const loginSchema = z
  .object({
    mobile: mobileSchema,
    password: z.string().min(1).max(PASSWORD_MAX_LENGTH),
  })
  .strict();

export type LoginInput = z.input<typeof loginSchema>;
export type ValidatedLogin = z.output<typeof loginSchema>;

const passwordSchema = z
  .string()
  .min(
    PASSWORD_MIN_LENGTH,
    "حداقل ۸ کاراکتر شامل یک حرف انگلیسی و یک عدد وارد کنید.",
  )
  .max(PASSWORD_MAX_LENGTH, "رمز عبور بیش از حد طولانی است.")
  .refine(
    (value) => /[A-Za-z]/.test(value) && /\d/.test(value),
    "حداقل ۸ کاراکتر شامل یک حرف انگلیسی و یک عدد وارد کنید.",
  );

function firstSchemaError(result: z.ZodSafeParseResult<unknown>) {
  return result.success ? undefined : result.error.issues[0]?.message;
}

function getValidatedBirthDateError(values: {
  birthYear: number;
  birthMonth: number;
  birthDay: number;
}) {
  const today = getCurrentPersianDateParts();

  if (values.birthYear < 1300 || values.birthYear > today.year) {
    return "سال تولد معتبر نیست.";
  }

  if (
    !jalaliToIsoDate(values.birthYear, values.birthMonth, values.birthDay)
  ) {
    return "تاریخ شمسی معتبر انتخاب کنید.";
  }

  const selectedDate =
    values.birthYear * 10_000 + values.birthMonth * 100 + values.birthDay;
  const currentDate = today.year * 10_000 + today.month * 100 + today.day;

  return selectedDate > currentDate
    ? "تاریخ تولد نمی‌تواند در آینده باشد."
    : undefined;
}

function getPasswordConfirmationError(password: string, confirmation: string) {
  return password === confirmation
    ? undefined
    : "تکرار رمز عبور با رمز عبور یکسان نیست.";
}

export const registrationSchema = z
  .object({
    firstName: persianNameSchema,
    lastName: persianNameSchema,
    birthYear: jalaliPartSchema,
    birthMonth: jalaliPartSchema,
    birthDay: jalaliPartSchema,
    mobile: mobileSchema,
    email: optionalEmailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .strict()
  .superRefine((values, context) => {
    const passwordConfirmationError = getPasswordConfirmationError(
      values.password,
      values.confirmPassword,
    );

    if (passwordConfirmationError) {
      context.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: passwordConfirmationError,
      });
    }

    const birthDateError = getValidatedBirthDateError(values);

    if (birthDateError) {
      context.addIssue({
        code: "custom",
        path: ["birthDate"],
        message: birthDateError,
      });
    }
  });

export type ValidatedRegistration = z.output<typeof registrationSchema>;

const registrationFields = new Set<RegistrationField>([
  "firstName",
  "lastName",
  "birthYear",
  "birthMonth",
  "birthDay",
  "birthDate",
  "mobile",
  "email",
  "password",
  "confirmPassword",
]);

export function getRegistrationFieldErrors(error: z.ZodError) {
  const fieldErrors: RegistrationFieldErrors = {};

  for (const issue of error.issues) {
    const rawField = issue.path[0];
    const field =
      rawField === "birthYear" ||
      rawField === "birthMonth" ||
      rawField === "birthDay"
        ? "birthDate"
        : rawField;

    if (
      typeof field === "string" &&
      registrationFields.has(field as RegistrationField) &&
      !fieldErrors[field as RegistrationField]
    ) {
      fieldErrors[field as RegistrationField] = issue.message;
    }
  }

  return fieldErrors;
}

export function validateRegistrationField(
  values: RegistrationInput,
  field: RegistrationField,
) {
  if (field === "firstName") {
    return firstSchemaError(persianNameSchema.safeParse(values.firstName));
  }

  if (field === "lastName") {
    return firstSchemaError(persianNameSchema.safeParse(values.lastName));
  }

  if (field === "mobile") {
    return firstSchemaError(mobileSchema.safeParse(values.mobile));
  }

  if (field === "email") {
    return firstSchemaError(optionalEmailSchema.safeParse(values.email));
  }

  if (field === "password") {
    return firstSchemaError(passwordSchema.safeParse(values.password));
  }

  if (field === "confirmPassword") {
    return getPasswordConfirmationError(
      values.password,
      values.confirmPassword,
    );
  }

  if (
    field === "birthDate" ||
    field === "birthYear" ||
    field === "birthMonth" ||
    field === "birthDay"
  ) {
    const parsedParts = z
      .object({
        birthYear: jalaliPartSchema,
        birthMonth: jalaliPartSchema,
        birthDay: jalaliPartSchema,
      })
      .safeParse(values);

    if (!parsedParts.success) {
      return "تاریخ تولد الزامی است.";
    }

    return getValidatedBirthDateError(parsedParts.data);
  }

  return undefined;
}
