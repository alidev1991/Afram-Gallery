import Link from "next/link";

import { RegistrationForm } from "@/components/auth/registration-form";
import { Container } from "@/components/ui/container";
import { getSafeNextPath } from "@/lib/demo-customer";

type RegisterPageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const { next } = await searchParams;
  const nextPath = getSafeNextPath(next);

  return (
    <main id="main-content" className="min-h-[72svh] bg-canvas">
      <Container className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <Link href="/account" className="text-xs text-muted transition-colors hover:text-silver-bright">حساب کاربری</Link>
          <h1 className="mt-5 border-b border-line pb-7 text-4xl font-light text-silver-bright">ثبت‌نام</h1>
          <div className="pt-8">
            <RegistrationForm nextPath={nextPath} />
          </div>
        </div>
      </Container>
    </main>
  );
}
