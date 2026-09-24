import Link from "next/link";

import { HeroMedia } from "@/components/home/hero-media";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="home-hero relative -mt-[var(--arfam-header-height)] min-h-[100svh] overflow-hidden bg-matte"
    >
      <HeroMedia src="/media/hero-demo.webp" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.05)_32%,rgba(0,0,0,0.25)_58%,rgba(0,0,0,0.78)_100%)]"
      />

      <Container className="relative z-10 flex min-h-[100svh] items-end pb-[clamp(3.5rem,10vh,7rem)] pt-[calc(var(--arfam-header-height)+4rem)]">
        <div className="max-w-[42rem] text-right">
          <p className="arfam-eyebrow text-silver/85">The Art of Living</p>
          <h1 className="arfam-wordmark mt-4 text-[clamp(3.7rem,12vw,10rem)] text-silver-bright [text-shadow:0_2px_25px_rgb(0_0_0_/_0.28)]">
            ARFAM
          </h1>
          <p className="mt-6 text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed text-silver-bright sm:mt-8">
            زیبایی، در سکوت جزئیات.
          </p>
          <Link
            href="/collections"
            className="group mt-9 inline-flex min-h-12 items-center gap-5 border-b border-silver/70 pb-2 text-sm text-silver-bright transition-colors duration-300 hover:border-silver-bright sm:mt-11"
          >
            مشاهده مجموعه
            <span
              aria-hidden="true"
              className="text-xl leading-none transition-transform duration-300 group-hover:-translate-x-1"
            >
              ←
            </span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
