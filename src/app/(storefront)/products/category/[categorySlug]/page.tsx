import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductEditorialCard } from "@/components/catalog/product-editorial-card";
import { Container } from "@/components/ui/container";
import { getProductsForCategory } from "@/data/catalog";
import { getProductCategory, productCategories } from "@/data/site-structure";

type CategoryPageProps = {
  params: Promise<{ categorySlug: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ categorySlug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getProductCategory(categorySlug);
  return category ? { title: category.title } : {};
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getProductCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsForCategory(category.slug);

  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-10 sm:pb-32 sm:pt-16 lg:pb-44 lg:pt-20">
        <nav aria-label="مسیر صفحه" className="border-b border-line pb-6 text-xs text-muted">
          <Link href="/products" className="transition-colors hover:text-silver-bright">محصولات ←</Link>
        </nav>

        <header className="border-b border-line py-16 sm:py-20 lg:grid lg:grid-cols-12 lg:items-end lg:py-28">
          <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">Product Category</p>
          <h1 className="mt-6 text-[clamp(2.75rem,7vw,7rem)] font-light leading-[1.2] tracking-[-0.04em] text-silver-bright lg:col-span-7 lg:col-start-6 lg:mt-0">
            {category.title}
          </h1>
        </header>

        <section aria-labelledby="subcategories-heading" className="grid gap-10 border-b border-line py-16 sm:py-24 lg:grid-cols-12 lg:py-28">
          <h2 id="subcategories-heading" className="text-2xl font-light text-silver-bright lg:col-span-4">زیرمجموعه‌ها</h2>
          <ul className="divide-y divide-line lg:col-span-6 lg:col-start-7">
            {category.subcategories.map((subcategory) => (
              <li key={subcategory.slug}>
                <Link href={`/products/category/${category.slug}/${subcategory.slug}`} className="flex min-h-16 items-center justify-between gap-5 py-3 text-sm text-muted transition-colors hover:text-silver-bright">
                  {subcategory.title}
                  <span aria-hidden="true">←</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {products.length > 0 ? (
          <section aria-labelledby="category-products" className="pt-16 sm:pt-24 lg:pt-28">
            <h2 id="category-products" className="text-2xl font-light text-silver-bright">محصولات این دسته</h2>
            <div className="mt-12 grid gap-16 sm:grid-cols-2 lg:mt-16 lg:gap-12">
              {products.map((product) => <ProductEditorialCard key={product.slug} product={product} />)}
            </div>
          </section>
        ) : null}
      </Container>
    </main>
  );
}