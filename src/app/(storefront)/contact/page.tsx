import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "ارتباط با آرفام",
  description: "راه‌های ارتباط رسمی با آرفام گالری",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:pb-44 lg:pt-32">
        <Reveal direction="fade">
          <header className="border-b border-line pb-14 sm:pb-20 lg:grid lg:grid-cols-12 lg:items-end lg:pb-24">
          <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">Contact ARFAM</p>
          <h1 className="mt-7 max-w-4xl text-[clamp(2.75rem,7vw,7.25rem)] font-light leading-[1.2] tracking-[-0.04em] text-silver-bright lg:col-span-8 lg:col-start-5 lg:mt-0">ارتباط با آرفام</h1>
          </header>
        </Reveal>

        <section aria-labelledby="contact-details" className="py-16 sm:py-24 lg:py-32">
          <Reveal direction="bottom" distance={40} className="grid gap-12 lg:grid-cols-12">
          <h2 id="contact-details" className="text-2xl font-light text-silver-bright lg:col-span-4">راه‌های ارتباطی</h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-xl text-sm font-light leading-8 text-muted sm:text-base sm:leading-9">اطلاعات رسمی تماس، نشانی و شبکه‌های اجتماعی آرفام پس از تأیید در این بخش منتشر می‌شود.</p>
            <dl className="mt-12 divide-y divide-line border-y border-line text-sm">
              <div className="flex min-h-16 items-center justify-between gap-6"><dt className="text-muted">تلفن</dt><dd className="text-subtle">—</dd></div>
              <div className="flex min-h-16 items-center justify-between gap-6"><dt className="text-muted">نشانی</dt><dd className="text-subtle">—</dd></div>
              <div className="flex min-h-16 items-center justify-between gap-6"><dt className="text-muted">شبکه‌های اجتماعی</dt><dd className="text-subtle">—</dd></div>
            </dl>
          </div>
          </Reveal>
        </section>
      </Container>
    </main>
  );
}