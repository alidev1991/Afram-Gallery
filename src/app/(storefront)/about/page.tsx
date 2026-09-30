import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "درباره آرفام",
  description:
    "آشنایی با نگاه آرفام گالری به طراحی، متریال، کیفیت ساخت و انتخاب محصولات دکوراتیو.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:pb-44 lg:pt-32">
        <Reveal direction="fade">
          <header className="border-b border-line pb-14 sm:pb-20 lg:grid lg:grid-cols-12 lg:items-end lg:pb-24">
          <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">
            About ARFAM
          </p>
          <h1 className="mt-7 max-w-4xl text-[clamp(2.75rem,7vw,7.25rem)] font-light leading-[1.2] tracking-[-0.04em] text-silver-bright lg:col-span-8 lg:col-start-5 lg:mt-0">
            جهان آرفام، فراتر از یک انتخاب
          </h1>
          </header>
        </Reveal>

        <section aria-labelledby="brand-story" className="py-16 sm:py-24 lg:py-32">
          <Reveal direction="bottom" distance={38} className="grid gap-10 lg:grid-cols-12">
          <h2 id="brand-story" className="text-2xl font-light text-silver-bright lg:col-span-3">
            داستان برند
          </h2>
          <p className="text-sm font-light leading-8 text-muted sm:text-base sm:leading-9 lg:col-span-6 lg:col-start-6 lg:text-lg lg:leading-10">
            آرفام گالری با تمرکز بر اکسسوری‌های دکوراتیو، ساعت‌های دیواری، سرویس
            پذیرایی، دیوارکوب‌های هنری و ... نگاهی دقیق به آنچه یک فضا را تعریف
            می‌کند دارد؛ از تناسب فرم و متریال تا کیفیت ساخت و ظرافت جزئیات.
          </p>
          </Reveal>
        </section>

        <section aria-labelledby="design-production" className="border-t border-line py-16 sm:py-24 lg:py-32">
          <Reveal direction="right" distance={36} className="grid gap-10 lg:grid-cols-12">
          <h2 id="design-production" className="text-2xl font-light text-silver-bright lg:col-span-3">
            طراحی و تولید
          </h2>
          <p className="text-sm font-light leading-8 text-muted sm:text-base sm:leading-9 lg:col-span-6 lg:col-start-6">
            بخشی از محصولات آرفام، حاصل طراحی و تولید مستقیم مجموعه است؛ رویکردی
            که امکان توجه دقیق‌تر به کیفیت اجرا، پرداخت نهایی و جزئیات محصول را
            فراهم می‌کند. در کنار آن، مجموعه‌ای از اکسسوری‌های منتخب را گرد هم
            آورده‌ایم تا هر محصول، فارغ از اندازه و کاربردش، با زبان بصری فضای
            شما هماهنگ باشد.
          </p>
          </Reveal>
        </section>

        <section aria-labelledby="quality-materials" className="border-t border-line py-16 sm:py-24 lg:py-32">
          <Reveal direction="left" distance={36} className="grid gap-10 lg:grid-cols-12">
          <h2 id="quality-materials" className="text-2xl font-light text-silver-bright lg:col-span-3">
            کیفیت و متریال
          </h2>
          <p className="text-sm font-light leading-8 text-muted sm:text-base sm:leading-9 lg:col-span-6 lg:col-start-6">
            ما به لوکس بودن به‌عنوان یک نمایش پرزرق‌وبرق نگاه نمی‌کنیم. برای ما،
            لوکس بودن در تناسب، کیفیت متریال، دقت در ساخت و انتخابی معنا پیدا
            می‌کند که با گذشت زمان همچنان ارزش خود را حفظ کند.
          </p>
          </Reveal>
        </section>

        <section aria-labelledby="arfam-vision" className="border-y border-line py-16 sm:py-24 lg:py-32">
          <Reveal direction="bottom" distance={40} className="grid gap-10 lg:grid-cols-12">
            <h2 id="arfam-vision" className="text-2xl font-light text-silver-bright lg:col-span-3">
              چشم‌انداز آرفام
            </h2>
            <div className="space-y-12 lg:col-span-7 lg:col-start-5">
              <p className="text-sm font-light leading-8 text-muted sm:text-base sm:leading-9">
                به همین دلیل، در گالری آرفام، انتخاب محصول تنها بخشی از تجربه شماست.
                با ارائه مشاوره متناسب با فضای شما و امکان بررسی چیدمان محصولات در
                محیط، تلاش می‌کنیم انتخاب نهایی با معماری، رنگ‌ها و شخصیت فضای شما
                هماهنگ باشد.
              </p>
              <p className="text-[clamp(1.65rem,3.4vw,3.5rem)] font-light leading-[1.65] tracking-[-0.02em] text-silver-bright">
                آرفام برای کسانی است که میان زیبا بودن و درست طراحی شدن تفاوت
                قائل‌اند؛ کسانی که به جزئیات توجه می‌کنند و ترجیح می‌دهند فضای
                زندگی‌شان بازتابی از سلیقه شخصی خودشان باشد.
              </p>
            </div>
          </Reveal>
        </section>
      </Container>
    </main>
  );
}