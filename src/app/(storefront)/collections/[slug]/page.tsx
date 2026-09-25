import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductEditorialCard } from "@/components/catalog/product-editorial-card";
import { Container } from "@/components/ui/container";
import {
  catalogCollections,
  getCollectionBySlug,
  getProductsForCollection,
} from "@/data/catalog";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return catalogCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {};
  }

  return {
    title: collection.title,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products = getProductsForCollection(collection);

  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-10 sm:pb-32 sm:pt-16 lg:pb-44 lg:pt-20">
        <nav aria-label="مسیر صفحه" className="border-b border-line pb-6">
          <Link
            href="/collections"
            className="text-xs text-muted transition-colors hover:text-silver-bright"
          >
            مجموعه‌ها ←
          </Link>
        </nav>

        <header className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:py-28">
          <div className="lg:col-span-6">
            <Image
              src={collection.coverImage.src}
              alt={collection.coverImage.alt}
              width={collection.coverImage.width}
              height={collection.coverImage.height}
              priority
              sizes="(max-width: 1023px) calc(100vw - 2.5rem), 48vw"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="arfam-eyebrow text-subtle" dir="ltr">
              {collection.eyebrow}
            </p>
            <h1 className="mt-5 text-[clamp(2.5rem,5.5vw,6rem)] font-light leading-[1.15] tracking-[-0.035em] text-silver-bright">
              {collection.title}
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-8 text-muted sm:text-base">
              {collection.description}
            </p>
          </div>
        </header>

        <section aria-labelledby="collection-products" className="border-t border-line pt-16 sm:pt-24">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
            <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">
              Products
            </p>
            <h2
              id="collection-products"
              className="text-3xl font-light text-silver-bright lg:col-span-5 lg:col-start-7 sm:text-4xl"
            >
              محصولات مجموعه
            </h2>
          </div>

          <div className="mt-14 grid gap-20 sm:mt-20 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
            {products.map((product, index) => (
              <ProductEditorialCard
                key={product.slug}
                product={product}
                className={
                  products.length === 1
                    ? "lg:col-span-5 lg:col-start-7"
                    : index === 0
                      ? "lg:col-span-5"
                      : "lg:col-span-4 lg:col-start-8 lg:mt-32"
                }
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
