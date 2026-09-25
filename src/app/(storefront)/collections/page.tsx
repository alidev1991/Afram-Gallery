import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { catalogCollections } from "@/data/catalog";

export const metadata: Metadata = {
  title: "مجموعه‌ها",
  description: "مجموعه‌های دکوراسیون و اکسسوری آرفام",
};

const collectionLayout = [
  {
    media: "lg:col-span-7",
    content: "lg:col-span-4 lg:col-start-9",
  },
  {
    media: "lg:col-span-6 lg:col-start-7",
    content: "lg:col-span-4 lg:col-start-2 lg:row-start-1",
  },
  {
    media: "lg:col-span-7",
    content: "lg:col-span-4 lg:col-start-9",
  },
] as const;

export default function CollectionsPage() {
  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:pb-44 lg:pt-32">
        <header className="border-b border-line pb-12 sm:pb-16 lg:grid lg:grid-cols-12 lg:items-end">
          <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">
            ARFAM Catalogue
          </p>
          <h1 className="mt-6 text-[clamp(3rem,8vw,8rem)] font-light leading-none tracking-[-0.04em] text-silver-bright lg:col-span-7 lg:col-start-6 lg:mt-0">
            مجموعه‌ها
          </h1>
        </header>

        <div>
          {catalogCollections.map((collection, index) => (
            <article
              key={collection.slug}
              className="border-b border-line py-20 sm:py-28 lg:py-36"
            >
              <Link
                href={`/collections/${collection.slug}`}
                className="group grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-8"
                aria-label={`مشاهده مجموعه ${collection.title}`}
              >
                <div className={collectionLayout[index].media}>
                  <Image
                    src={collection.coverImage.src}
                    alt={collection.coverImage.alt}
                    width={collection.coverImage.width}
                    height={collection.coverImage.height}
                    sizes="(max-width: 1023px) calc(100vw - 2.5rem), 55vw"
                    className="h-auto w-full object-contain transition-transform duration-700 ease-[var(--arfam-ease)] lg:group-hover:scale-[1.015]"
                  />
                </div>
                <div className={collectionLayout[index].content}>
                  <p className="arfam-eyebrow text-subtle" dir="ltr">
                    {collection.eyebrow}
                  </p>
                  <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-light leading-tight text-silver-bright">
                    {collection.title}
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-8 text-muted">
                    {collection.description}
                  </p>
                  <span className="mt-8 inline-flex border-b border-line-strong pb-2 text-xs text-silver transition-colors group-hover:border-silver-bright group-hover:text-silver-bright">
                    مشاهده مجموعه
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
