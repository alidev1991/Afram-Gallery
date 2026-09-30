import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { getMagazineCategory, magazineCategories } from "@/data/site-structure";

type MagazineCategoryPageProps = {
  params: Promise<{ categorySlug: string }>;
};

export function generateStaticParams() {
  return magazineCategories.map((category) => ({ categorySlug: category.slug }));
}

export async function generateMetadata({ params }: MagazineCategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getMagazineCategory(categorySlug);
  return category ? { title: `${category.title} | مجله آرفام` } : {};
}

export default async function MagazineCategoryPage({ params }: MagazineCategoryPageProps) {
  const { categorySlug } = await params;
  const category = getMagazineCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-10 sm:pb-32 sm:pt-16 lg:pb-44 lg:pt-20">
        <nav aria-label="مسیر صفحه" className="border-b border-line pb-6 text-xs text-muted">
          <Link href="/magazine" className="transition-colors hover:text-silver-bright">مجله آرفام ←</Link>
        </nav>
        <header className="border-b border-line py-16 sm:py-20 lg:grid lg:grid-cols-12 lg:items-end lg:py-28">
          <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">Magazine Category</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,6.5rem)] font-light leading-[1.25] tracking-[-0.035em] text-silver-bright lg:col-span-8 lg:col-start-5 lg:mt-0">{category.title}</h1>
        </header>
        <section aria-labelledby="articles-heading" className="py-16 sm:py-24 lg:py-32">
          <h2 id="articles-heading" className="text-2xl font-light text-silver-bright">مقاله‌ها</h2>
          <p className="mt-10 border-y border-line py-8 text-sm text-muted">مقاله‌های این موضوع پس از انتشار در این بخش نمایش داده می‌شوند.</p>
        </section>
      </Container>
    </main>
  );
}