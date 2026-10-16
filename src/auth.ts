import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { UserRole } from "@/generated/prisma/enums";
import { verifyPassword } from "@/lib/auth/password";
import { loginSchema } from "@/lib/auth/validation";
import { prisma } from "@/lib/prisma";

const credentialsFields = {
  mobile: {
    label: "شماره موبایل",
    type: "tel",
  },
  password: {
    label: "رمز عبور",
    type: "password",
  },
};

type LoginCredentials = Partial<
  Record<keyof typeof credentialsFields, unknown>
>;

async function authorizeCredentials(
  credentials: LoginCredentials,
  requiredRole?: UserRole,
) {
  const parsedCredentials = loginSchema.safeParse({
    mobile: credentials.mobile,
    password: credentials.password,
  });

  if (!parsedCredentials.success) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { mobile: parsedCredentials.data.mobile },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      passwordHash: true,
      role: true,
    },
  });

  if (
    !user ||
    !(await verifyPassword(user.passwordHash, parsedCredentials.data.password)) ||
    (requiredRole && user.role !== requiredRole)
  ) {
    return null;
  }

  return {
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email ?? undefined,
    role: user.role,
  };
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: credentialsFields,
      authorize(credentials) {
        return authorizeCredentials(credentials);
      },
    }),
    Credentials({
      id: "admin-credentials",
      name: "Admin Credentials",
      credentials: credentialsFields,
      authorize(credentials) {
        return authorizeCredentials(credentials, UserRole.ADMIN);
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.role = user.role;
      }

      return token;
    },
    session({ session, token }) {
      if (session.user) {
        if (typeof token.userId === "string") {
          session.user.id = token.userId;
        }

        if (token.role) {
          session.user.role = token.role;
        }
      }

      return session;
    },
  },
});
