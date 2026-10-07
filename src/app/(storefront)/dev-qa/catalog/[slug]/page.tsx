import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductConfigurator } from "@/components/catalog/product-configurator";
import { Container } from "@/components/ui/container";
import { presentationQueryParameter } from "@/lib/catalog/product-configurator";
import { getInternalStorefrontProductBySlugForQa } from "@/lib/catalog/storefront-repository";

const squareClockQaSlug = "internal-square-wall-clock";

type CatalogQaPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Catalog QA",
  robots: {
    index: false,
    follow: false,
  },
};

function firstSearchParameter(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function CatalogQaPage({
  params,
  searchParams,
}: CatalogQaPageProps) {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const { slug } = await params;

  if (slug !== squareClockQaSlug) {
    notFound();
  }

  const product = await getInternalStorefrontProductBySlugForQa(slug);

  if (!product) {
    notFound();
  }

  const resolvedSearchParams = searchParams ? await searchParams : {};
  const initialPresentationSlug = firstSearchParameter(
    resolvedSearchParams[presentationQueryParameter],
  );

  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-10 sm:pb-32 sm:pt-16 lg:pb-44 lg:pt-20">
        <nav
          aria-label="مسیر صفحه"
          className="flex flex-wrap gap-3 border-b border-line pb-6 text-xs text-muted"
        >
          <Link
            href="/products"
            className="transition-colors hover:text-silver-bright"
          >
            محصولات
          </Link>
          <span aria-hidden="true">/</span>
          <span>{product.category.name}</span>
        </nav>

        <ProductConfigurator
          product={product}
          initialPresentationSlug={initialPresentationSlug}
        />
      </Container>
    </main>
  );
}
