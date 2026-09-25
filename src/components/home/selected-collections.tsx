import Image from "next/image";
import Link from "next/link";

import { SectionIntro } from "@/components/home/section-intro";
import { Container } from "@/components/ui/container";
import { catalogCollections } from "@/data/catalog";

const collectionLayout = [
  "lg:col-span-5",
  "lg:col-span-4 lg:col-start-7 lg:mt-28",
  "lg:col-span-3 lg:col-start-10 lg:-mt-14",
] as const;

export function SelectedCollections() {
  return (
    <section
      aria-labelledby="collections-heading"
      className="bg-matte py-24 sm:py-32 lg:py-44"
    >
      <Container>
        <SectionIntro
          id="collections-heading"
          eyebrow="Selected Collections"
          title="مجموعه‌های منتخب"
        />

        <div className="mt-16 grid gap-16 sm:mt-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {catalogCollections.map((collection, index) => (
            <article
              key={collection.slug}
              className={`${collectionLayout[index]} ${index === 1 ? "ms-[12%] lg:ms-0" : ""} ${index === 2 ? "me-[12%] lg:me-0" : ""}`}
            >
              <Link
                href={`/collections/${collection.slug}`}
                className="group block"
                aria-label={`مشاهده مجموعه ${collection.title}`}
              >
              <div className="relative aspect-[3/4] overflow-hidden bg-gloss lg:aspect-[4/5]">
                <Image
                  src={collection.coverImage.src}
                  alt={collection.coverImage.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 1023px) calc(88vw - 2.5rem), 38vw"
                  className="object-contain transition-transform duration-700 ease-[var(--arfam-ease)] lg:object-cover lg:group-hover:scale-[1.025]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
                <p className="arfam-eyebrow absolute bottom-5 left-5 text-silver-bright/85">
                  0{index + 1}
                </p>
              </div>
              <div className="mt-6 border-t border-line-strong pt-5">
                <p className="arfam-eyebrow text-subtle" dir="ltr">
                  {collection.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-light text-silver-bright sm:text-2xl">
                  {collection.title}
                </h3>
              </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
