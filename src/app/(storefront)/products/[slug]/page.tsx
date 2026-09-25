import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductGallery } from "@/components/catalog/product-gallery";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  catalogProducts,
  getCollectionBySlug,
  getProductBySlug,
} from "@/data/catalog";
import { formatToman } from "@/lib/format-price";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const collection = getCollectionBySlug(product.collectionSlug);

  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-10 sm:pb-32 sm:pt-16 lg:pb-44 lg:pt-20">
        <nav aria-label="مسیر صفحه" className="flex flex-wrap gap-3 border-b border-line pb-6 text-xs text-muted">
          <Link href="/collections" className="transition-colors hover:text-silver-bright">
            مجموعه‌ها
          </Link>
          <span aria-hidden="true">/</span>
          {collection ? (
            <Link
              href={`/collections/${collection.slug}`}
              className="transition-colors hover:text-silver-bright"
            >
              {collection.title}
            </Link>
          ) : null}
        </nav>

        <div className="grid gap-14 pt-12 sm:gap-20 sm:pt-16 lg:grid-cols-12 lg:items-start lg:gap-x-10">
          <div className="lg:col-span-7">
            <ProductGallery images={product.galleryImages} />
          </div>

          <aside className="lg:sticky lg:top-[calc(var(--arfam-header-height)+2.5rem)] lg:col-span-4 lg:col-start-9">
            <p className="arfam-eyebrow text-subtle" dir="ltr">
              {product.category}
            </p>
            <h1 className="mt-5 text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[1.15] tracking-[-0.035em] text-silver-bright">
              {product.name}
            </h1>
            <p className="mt-7 text-base text-silver">
              {formatToman(product.priceToman)}
            </p>
            <p className="mt-8 border-t border-line pt-7 text-sm leading-8 text-muted">
              {product.description}
            </p>

            <Button className="mt-10 w-full sm:w-auto lg:w-full">
              افزودن به سبد خرید
            </Button>

            <section aria-labelledby="product-specifications" className="mt-12 border-t border-line pt-8">
              <h2 id="product-specifications" className="text-sm font-medium text-silver-bright">
                مشخصات
              </h2>
              <dl className="mt-5 divide-y divide-line">
                {product.specifications.map((item) => (
                  <div key={item.label} className="flex justify-between gap-6 py-4 text-xs">
                    <dt className="text-muted">{item.label}</dt>
                    <dd className="text-silver">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
