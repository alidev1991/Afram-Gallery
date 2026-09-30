import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";

export function BrandStory() {
  return (
    <section
      aria-labelledby="brand-story-heading"
      className="relative overflow-hidden border-t border-line bg-transparent py-28 sm:py-36 lg:py-52"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[12%] w-px bg-gradient-to-b from-transparent via-line to-transparent"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal direction="right" distance={32} className="lg:col-span-3">
            <p className="arfam-eyebrow text-subtle" dir="ltr">
              ARFAM Gallery
            </p>
          </Reveal>
          <Reveal direction="left" distance={40} className="lg:col-span-7 lg:col-start-5">
            <h2
              id="brand-story-heading"
              className="text-[clamp(2.15rem,5.2vw,5.5rem)] font-light leading-[1.35] tracking-[-0.03em] text-silver-bright"
            >
              جهان آرفام، فراتر از یک انتخاب
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-sm font-light leading-8 text-muted sm:mt-10 sm:text-base sm:leading-9">
              <p>
                آرفام گالری با تمرکز بر اکسسوری‌های دکوراتیو و محصولاتی که بخشی
                از آن‌ها حاصل طراحی و تولید مستقیم مجموعه هستند، به تناسب فرم،
                متریال، کیفیت ساخت و ظرافت جزئیات توجه دارد.
              </p>
              <p>
                برای ما، لوکس بودن در پرزرق‌وبرق بودن نیست؛ در انتخابی معنا پیدا
                می‌کند که با فضای شما هماهنگ باشد و با گذشت زمان ارزش خود را حفظ
                کند.
              </p>
            </div>
            <Link
              href="/about"
              className="group mt-9 inline-flex min-h-11 items-center gap-4 border-b border-line-strong pb-2 text-xs text-silver transition-colors hover:border-silver-bright hover:text-silver-bright"
            >
              درباره آرفام
              <span
                aria-hidden="true"
                className="text-base transition-transform duration-300 group-hover:-translate-x-1"
              >
                ←
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
