"use server";

import { Prisma } from "@/generated/prisma/client";
import { UserRole } from "@/generated/prisma/enums";
import { hashPassword } from "@/lib/auth/password";
import {
  getRegistrationFieldErrors,
  registrationSchema,
  type RegistrationFieldErrors,
  type RegistrationInput,
  type ValidatedRegistration,
} from "@/lib/auth/validation";
import { jalaliToUtcDate } from "@/lib/jalali-date";
import { prisma } from "@/lib/prisma";

export type RegistrationActionResult =
  | { ok: true }
  | {
      ok: false;
      fieldErrors?: RegistrationFieldErrors;
      formError?: string;
    };

async function findDuplicateFields(
  mobile: string,
  email: string | undefined,
) {
  const users = await prisma.user.findMany({
    where: {
      OR: [{ mobile }, ...(email ? [{ email }] : [])],
    },
    select: {
      mobile: true,
      email: true,
    },
    take: 2,
  });
  const fieldErrors: RegistrationFieldErrors = {};

  if (users.some((user) => user.mobile === mobile)) {
    fieldErrors.mobile = "این شماره موبایل قبلاً ثبت شده است.";
  }

  if (email && users.some((user) => user.email === email)) {
    fieldErrors.email = "این ایمیل قبلاً ثبت شده است.";
  }

  return fieldErrors;
}

function hasFieldErrors(fieldErrors: RegistrationFieldErrors) {
  return Object.keys(fieldErrors).length > 0;
}

async function createCustomer(values: ValidatedRegistration) {
  const birthDate = jalaliToUtcDate(
    values.birthYear,
    values.birthMonth,
    values.birthDay,
  );

  if (!birthDate) {
    return {
      ok: false as const,
      fieldErrors: {
        birthDate: "تاریخ شمسی معتبر انتخاب کنید.",
      },
    };
  }

  const duplicateFields = await findDuplicateFields(values.mobile, values.email);

  if (hasFieldErrors(duplicateFields)) {
    return { ok: false as const, fieldErrors: duplicateFields };
  }

  const passwordHash = await hashPassword(values.password);

  await prisma.user.create({
    data: {
      firstName: values.firstName,
      lastName: values.lastName,
      birthDate,
      mobile: values.mobile,
      email: values.email ?? null,
      passwordHash,
      role: UserRole.CUSTOMER,
    },
    select: {
      id: true,
    },
  });

  return { ok: true as const };
}

export async function registerCustomer(
  input: RegistrationInput,
): Promise<RegistrationActionResult> {
  const validationResult = registrationSchema.safeParse(input);

  if (!validationResult.success) {
    const fieldErrors = getRegistrationFieldErrors(validationResult.error);

    return {
      ok: false,
      ...(hasFieldErrors(fieldErrors)
        ? { fieldErrors }
        : { formError: "اطلاعات ثبت‌نام معتبر نیست." }),
    };
  }

  try {
    return await createCustomer(validationResult.data);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      try {
        const duplicateFields = await findDuplicateFields(
          validationResult.data.mobile,
          validationResult.data.email,
        );

        if (hasFieldErrors(duplicateFields)) {
          return { ok: false, fieldErrors: duplicateFields };
        }
      } catch {
        // Fall through to the generic message without exposing database details.
      }
    }

    return {
      ok: false,
      formError: "ثبت‌نام انجام نشد. لطفاً دوباره تلاش کنید.",
    };
  }
}
