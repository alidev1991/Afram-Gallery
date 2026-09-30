import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { productCategories } from "@/data/site-structure";

export const metadata: Metadata = {
  title: "محصولات",
  description: "دسته‌بندی رسمی محصولات و اکسسوری‌های آرفام",
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:pb-44 lg:pt-32">
        <header className="border-b border-line pb-12 sm:pb-16 lg:grid lg:grid-cols-12 lg:items-end">
          <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">
            ARFAM Shop
          </p>
          <h1 className="mt-6 text-[clamp(3rem,8vw,8rem)] font-light leading-none tracking-[-0.04em] text-silver-bright lg:col-span-7 lg:col-start-6 lg:mt-0">
            محصولات
          </h1>
        </header>

        <div>
          {productCategories.map((category, index) => (
            <section
              key={category.slug}
              aria-labelledby={`${category.slug}-heading`}
              className="grid gap-10 border-b border-line py-16 sm:py-20 lg:grid-cols-12 lg:gap-x-8 lg:py-28"
            >
              <p className="arfam-eyebrow text-subtle lg:col-span-2" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="lg:col-span-4">
                <h2 id={`${category.slug}-heading`} className="text-3xl font-light text-silver-bright sm:text-4xl">
                  <Link href={`/products/category/${category.slug}`} className="transition-colors hover:text-silver">
                    {category.title}
                  </Link>
                </h2>
              </div>
              <ul className="divide-y divide-line lg:col-span-5 lg:col-start-8">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.slug}>
                    <Link
                      href={`/products/category/${category.slug}/${subcategory.slug}`}
                      className="flex min-h-14 items-center justify-between gap-5 py-3 text-sm text-muted transition-colors hover:text-silver-bright"
                    >
                      {subcategory.title}
                      <span aria-hidden="true" className="text-base">←</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}