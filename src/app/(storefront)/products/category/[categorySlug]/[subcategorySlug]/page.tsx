import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductEditorialCard } from "@/components/catalog/product-editorial-card";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { getProductsForSubcategory } from "@/data/catalog";
import {
  getProductCategory,
  getProductSubcategory,
  productCategories,
} from "@/data/site-structure";

type SubcategoryPageProps = {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
};

export function generateStaticParams() {
  return productCategories.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      categorySlug: category.slug,
      subcategorySlug: subcategory.slug,
    })),
  );
}

export async function generateMetadata({ params }: SubcategoryPageProps): Promise<Metadata> {
  const { categorySlug, subcategorySlug } = await params;
  const category = getProductCategory(categorySlug);
  const subcategory = category ? getProductSubcategory(category, subcategorySlug) : undefined;
  return subcategory ? { title: subcategory.title } : {};
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { categorySlug, subcategorySlug } = await params;
  const category = getProductCategory(categorySlug);
  const subcategory = category ? getProductSubcategory(category, subcategorySlug) : undefined;

  if (!category || !subcategory) {
    notFound();
  }

  const products = getProductsForSubcategory(category.slug, subcategory.slug);

  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-10 sm:pb-32 sm:pt-16 lg:pb-44 lg:pt-20">
        <nav aria-label="مسیر صفحه" className="flex flex-wrap gap-3 border-b border-line pb-6 text-xs text-muted">
          <Link href="/products" className="transition-colors hover:text-silver-bright">محصولات</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/products/category/${category.slug}`} className="transition-colors hover:text-silver-bright">{category.title}</Link>
        </nav>

        <Reveal direction="fade">
          <header className="border-b border-line py-16 sm:py-20 lg:grid lg:grid-cols-12 lg:items-end lg:py-28">
          <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">Product Subcategory</p>
          <h1 className="mt-6 text-[clamp(2.75rem,7vw,7rem)] font-light leading-[1.2] tracking-[-0.04em] text-silver-bright lg:col-span-7 lg:col-start-6 lg:mt-0">{subcategory.title}</h1>
          </header>
        </Reveal>

        <section aria-labelledby="subcategory-products" className="pt-16 sm:pt-24 lg:pt-28">
          <Reveal direction="fade">
            <h2 id="subcategory-products" className="text-2xl font-light text-silver-bright">محصولات</h2>
          </Reveal>
          {products.length > 0 ? (
            <RevealGroup className="mt-12 grid gap-16 sm:grid-cols-2 lg:mt-16 lg:gap-12">
              {products.map((product) => <ProductEditorialCard key={product.slug} product={product} />)}
            </RevealGroup>
          ) : (
            <p className="mt-10 border-y border-line py-8 text-sm text-muted">در حال حاضر محصولی در این زیرمجموعه ثبت نشده است.</p>
          )}
        </section>
      </Container>
    </main>
  );
}