import "server-only";

import type { UserRole } from "@/generated/prisma/enums";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const authenticatedUserSelect = {
  id: true,
  firstName: true,
  lastName: true,
  mobile: true,
  email: true,
  birthDate: true,
  role: true,
} as const;

export async function getAuthenticatedUser() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return null;
  }

  return prisma.user.findUnique({
    where: { id: userId },
    select: authenticatedUserSelect,
  });
}

export async function getAuthorizedUser(role: UserRole) {
  const user = await getAuthenticatedUser();

  if (!user || user.role !== role) {
    return null;
  }

  return user;
}
