import Link from "next/link";

import { LoginForm } from "@/components/auth/login-form";
import { Container } from "@/components/ui/container";
import { getSafeInternalPath } from "@/lib/auth/safe-redirect";

type LoginPageProps = {
  searchParams: Promise<{ next?: string; registered?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { next, registered } = await searchParams;
  const nextPath = getSafeInternalPath(next);

  return (
    <main id="main-content" className="min-h-[72svh] bg-canvas">
      <Container className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-md">
          <Link href="/account" className="text-xs text-muted transition-colors hover:text-silver-bright">حساب کاربری</Link>
          <h1 className="mt-5 border-b border-line pb-7 text-4xl font-light text-silver-bright">ورود</h1>
          <div className="pt-8">
            <LoginForm
              nextPath={nextPath}
              registrationSucceeded={registered === "1"}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
