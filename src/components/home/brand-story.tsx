import { Container } from "@/components/ui/container";

export function BrandStory() {
  return (
    <section
      aria-labelledby="brand-story-heading"
      className="relative overflow-hidden border-t border-line bg-matte py-28 sm:py-36 lg:py-52"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[12%] w-px bg-gradient-to-b from-transparent via-line to-transparent"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-3">
            <p className="arfam-eyebrow text-subtle" dir="ltr">
              ARFAM Gallery
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <h2
              id="brand-story-heading"
              className="text-[clamp(2.15rem,5.2vw,5.5rem)] font-light leading-[1.35] tracking-[-0.03em] text-silver-bright"
            >
              درباره آرفام
            </h2>
            <p className="mt-8 max-w-2xl text-sm font-light leading-8 text-muted sm:mt-10 sm:text-base sm:leading-9">
              آرفام مجموعه‌ای انتخاب‌شده از اکسسوری‌ها و اشیای دکوراتیو معاصر را
              ارائه می‌کند.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
