"use server";

import { Prisma } from "@/generated/prisma/client";
import { UserRole } from "@/generated/prisma/enums";
import { signOut } from "@/auth";
import { hashPassword } from "@/lib/auth/password";
import {
  getRegistrationFieldErrors,
  registrationSchema,
  type RegistrationFieldErrors,
  type RegistrationInput,
} from "@/lib/auth/validation";
import { jalaliToUtcDate } from "@/lib/jalali-date";
import { prisma } from "@/lib/prisma";

type FirstAdminSetupResult =
  | { ok: true }
  | {
      ok: false;
      fieldErrors?: RegistrationFieldErrors;
      formError?: string;
      setupClosed?: boolean;
    };

type AdminSetupLockGlobal = typeof globalThis & {
  arfamFirstAdminSetupQueue?: Promise<unknown>;
};

const lockGlobal = globalThis as AdminSetupLockGlobal;

function runFirstAdminSetupExclusively<T>(operation: () => Promise<T>) {
  const previous = lockGlobal.arfamFirstAdminSetupQueue ?? Promise.resolve();
  const current = previous.then(operation, operation);

  lockGlobal.arfamFirstAdminSetupQueue = current.then(
    () => undefined,
    () => undefined,
  );

  return current;
}

function hasFieldErrors(fieldErrors: RegistrationFieldErrors) {
  return Object.keys(fieldErrors).length > 0;
}

async function isSetupClosed() {
  return Boolean(
    await prisma.user.findFirst({
      where: { role: UserRole.ADMIN },
      select: { id: true },
    }),
  );
}

export async function createFirstAdmin(
  input: RegistrationInput,
): Promise<FirstAdminSetupResult> {
  const validationResult = registrationSchema.safeParse(input);

  if (!validationResult.success) {
    const fieldErrors = getRegistrationFieldErrors(validationResult.error);

    return {
      ok: false,
      ...(hasFieldErrors(fieldErrors)
        ? { fieldErrors }
        : { formError: "اطلاعات حساب مدیر معتبر نیست." }),
    };
  }

  const values = validationResult.data;
  const birthDate = jalaliToUtcDate(
    values.birthYear,
    values.birthMonth,
    values.birthDay,
  );

  if (!birthDate) {
    return {
      ok: false,
      fieldErrors: { birthDate: "تاریخ شمسی معتبر انتخاب کنید." },
    };
  }

  // Hash before taking the SQLite write lock so the critical section stays short.
  const passwordHash = await hashPassword(values.password);

  try {
    return await runFirstAdminSetupExclusively(() =>
      prisma.$transaction(async (transaction) => {
        // Prisma's SQLite adapter starts a deferred transaction. This no-op write
        // acquires the database write lock before the ADMIN existence check.
        await transaction.$executeRaw`
          UPDATE "User"
          SET "updatedAt" = "updatedAt"
          WHERE 0
        `;

        const existingAdmin = await transaction.user.findFirst({
          where: { role: UserRole.ADMIN },
          select: { id: true },
        });

        if (existingAdmin) {
          return {
            ok: false as const,
            setupClosed: true,
            formError: "راه‌اندازی مدیر قبلاً انجام شده است.",
          };
        }

        const duplicateMobile = await transaction.user.findUnique({
          where: { mobile: values.mobile },
          select: { id: true },
        });

        if (duplicateMobile) {
          return {
            ok: false as const,
            fieldErrors: {
              mobile: "این شماره موبایل قبلاً ثبت شده است.",
            },
          };
        }

        await transaction.user.create({
          data: {
            firstName: values.firstName,
            lastName: values.lastName,
            birthDate,
            mobile: values.mobile,
            passwordHash,
            role: UserRole.ADMIN,
          },
          select: { id: true },
        });

        return { ok: true as const };
      }),
    );
  } catch (error) {
    if (await isSetupClosed()) {
      return {
        ok: false,
        setupClosed: true,
        formError: "راه‌اندازی مدیر قبلاً انجام شده است.",
      };
    }

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        ok: false,
        fieldErrors: {
          mobile: "این شماره موبایل قبلاً ثبت شده است.",
        },
      };
    }

    return {
      ok: false,
      formError: "ایجاد حساب مدیر انجام نشد. لطفاً دوباره تلاش کنید.",
    };
  }
}

export async function logoutAdmin() {
  await signOut({ redirectTo: "/admin/login" });
}
