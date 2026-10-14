import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import {
  officialBrandIntroduction,
  officialBrandStory,
  officialDesignProduction,
} from "@/content/official-brand-content";

export const metadata: Metadata = {
  title: "درباره آرفام",
  description: officialBrandIntroduction.paragraphs[0],
};

const aboutPaths = [
  {
    href: "/about/brand-story",
    label: officialBrandStory.label,
    title: officialBrandStory.title,
  },
  {
    href: "/about/design-production",
    label: officialDesignProduction.label,
    title: officialDesignProduction.title,
  },
] as const;

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
              {officialBrandIntroduction.title}
            </h1>
          </header>
        </Reveal>

        <Reveal
          direction="bottom"
          distance={36}
          className="grid gap-10 border-b border-line py-16 sm:py-24 lg:grid-cols-12 lg:py-32"
        >
          <div className="space-y-7 text-base font-light leading-9 text-muted sm:text-lg sm:leading-10 lg:col-span-7 lg:col-start-5">
            {officialBrandIntroduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <section
          aria-label="مطالب درباره آرفام"
          className="divide-y divide-line border-b border-line"
        >
          {aboutPaths.map((item, index) => (
            <Reveal
              key={item.href}
              direction={index === 0 ? "right" : "left"}
              distance={36}
            >
              <Link
                href={item.href}
                className="group grid gap-8 py-16 sm:py-24 lg:grid-cols-12 lg:items-end lg:py-32"
              >
                <p className="arfam-eyebrow text-subtle lg:col-span-3">
                  {item.label}
                </p>
                <div className="lg:col-span-7 lg:col-start-5">
                  <h2 className="max-w-4xl text-[clamp(2rem,4vw,4.25rem)] font-light leading-[1.45] tracking-[-0.03em] text-silver-bright">
                    {item.title}
                  </h2>
                  <span className="mt-8 inline-flex min-h-11 items-center gap-4 border-b border-line-strong pb-2 text-xs text-silver transition-colors group-hover:border-silver-bright group-hover:text-silver-bright">
                    مطالعه کامل
                    <span
                      aria-hidden="true"
                      className="text-base transition-transform duration-300 group-hover:-translate-x-1"
                    >
                      ←
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </section>
      </Container>
    </main>
  );
}
