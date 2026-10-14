import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import type { OfficialBrandArticle } from "@/content/official-brand-content";

type OfficialBrandArticleViewProps = {
  article: OfficialBrandArticle;
};

export function OfficialBrandArticleView({
  article,
}: OfficialBrandArticleViewProps) {
  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:pb-44 lg:pt-32">
        <Reveal direction="fade">
          <header className="border-b border-line pb-14 sm:pb-20 lg:grid lg:grid-cols-12 lg:items-end lg:pb-24">
            <p className="arfam-eyebrow text-subtle lg:col-span-3">
              {article.label}
            </p>
            <h1 className="mt-7 max-w-5xl text-[clamp(2.6rem,6vw,6.5rem)] font-light leading-[1.3] tracking-[-0.04em] text-silver-bright lg:col-span-8 lg:col-start-5 lg:mt-0">
              {article.title}
            </h1>
          </header>
        </Reveal>

        <article className="mx-auto max-w-5xl">
          <Reveal
            direction="bottom"
            distance={32}
            className="border-b border-line py-16 sm:py-24 lg:py-32"
          >
            <div className="space-y-7 text-base font-light leading-9 text-muted sm:text-lg sm:leading-10">
              {article.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {article.sections.map((section, index) => (
            <Reveal
              key={section.heading ?? index}
              direction="bottom"
              distance={36}
              className="grid gap-9 border-b border-line py-16 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:py-32"
            >
              {section.heading ? (
                <h2 className="text-2xl font-light leading-[1.7] text-silver-bright sm:text-3xl lg:col-span-4">
                  {section.heading}
                </h2>
              ) : null}
              <div className="space-y-7 text-base font-light leading-9 text-muted sm:text-lg sm:leading-10 lg:col-span-7 lg:col-start-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </article>
      </Container>
    </main>
  );
}
