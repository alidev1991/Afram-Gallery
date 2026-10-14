import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { officialBrandIntroduction } from "@/content/official-brand-content";

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
          <Reveal
            direction="left"
            distance={40}
            className="lg:col-span-7 lg:col-start-5"
          >
            <h2
              id="brand-story-heading"
              className="text-[clamp(2.15rem,5.2vw,5.5rem)] font-light leading-[1.35] tracking-[-0.03em] text-silver-bright"
            >
              {officialBrandIntroduction.title}
            </h2>
            <div className="brand-preview-fade mt-8 max-w-2xl space-y-5 text-sm font-light leading-8 text-muted sm:mt-10 sm:text-base sm:leading-9">
              {officialBrandIntroduction.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/about"
              className="group mt-9 inline-flex min-h-11 items-center gap-4 border-b border-line-strong pb-2 text-xs text-silver transition-colors hover:border-silver-bright hover:text-silver-bright focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver-bright focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
            >
              بیشتر درباره آرفام
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
