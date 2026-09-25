import Link from "next/link";

import { LegacyRecoveryForm } from "@/components/auth/legacy-recovery-form";
import { Container } from "@/components/ui/container";
import {
  getSafeNextPath,
  normalizeIranianMobile,
} from "@/lib/demo-customer";

type RecoverAccountPageProps = {
  searchParams: Promise<{ mobile?: string; next?: string }>;
};

export default async function RecoverAccountPage({
  searchParams,
}: RecoverAccountPageProps) {
  const { mobile, next } = await searchParams;
  const normalizedMobile = normalizeIranianMobile(mobile ?? "");
  const nextPath = getSafeNextPath(next);

  return (
    <main id="main-content" className="min-h-[72svh] bg-canvas">
      <Container className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-md">
          <Link
            href="/login"
            className="text-xs text-muted transition-colors hover:text-silver-bright"
          >
            ورود
          </Link>
          <h1 className="mt-5 border-b border-line pb-7 text-4xl font-light text-silver-bright">
            تعیین رمز عبور جدید
          </h1>
          <p className="pt-7 text-sm leading-8 text-muted">
            برای فعال‌سازی مجدد حساب، رمز عبور جدید را تعیین کنید.
          </p>
          <div className="pt-7">
            <LegacyRecoveryForm
              mobile={normalizedMobile}
              nextPath={nextPath}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
