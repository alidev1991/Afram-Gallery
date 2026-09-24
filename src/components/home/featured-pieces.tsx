import Image from "next/image";

import { SectionIntro } from "@/components/home/section-intro";
import { Container } from "@/components/ui/container";
import { featuredPieces } from "@/data/home-content";

const pieceLayout = [
  "lg:col-span-4",
  "ms-[14%] lg:col-span-3 lg:col-start-6 lg:mt-40 lg:ms-0",
  "me-[8%] lg:col-span-3 lg:col-start-10 lg:mt-16 lg:me-0",
] as const;

const priceFormatter = new Intl.NumberFormat("fa-IR");

export function FeaturedPieces() {
  return (
    <section
      aria-labelledby="pieces-heading"
      className="bg-canvas py-24 sm:py-32 lg:py-44"
    >
      <Container>
        <SectionIntro
          id="pieces-heading"
          eyebrow="Featured Pieces"
          title="محصولات منتخب"
        />

        <div className="mt-16 grid gap-20 sm:mt-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {featuredPieces.map((piece, index) => (
            <article key={piece.id} className={pieceLayout[index]}>
              <div className="group relative aspect-[8/11] overflow-hidden bg-matte">
                <Image
                  src={piece.image}
                  alt={piece.imageAlt}
                  fill
                  sizes="(max-width: 1023px) calc(86vw - 2.5rem), 31vw"
                  className="object-contain transition-transform duration-700 ease-[var(--arfam-ease)] lg:object-cover lg:group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6 border-t border-line pt-5">
                <div>
                  <p className="arfam-eyebrow text-subtle" dir="ltr">
                    {piece.category}
                  </p>
                  <h3 className="mt-3 text-lg font-light text-silver-bright sm:text-xl">
                    {piece.name}
                  </h3>
                </div>
                <p className="shrink-0 pt-7 text-xs text-muted">
                  {priceFormatter.format(piece.priceToman)} تومان
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
