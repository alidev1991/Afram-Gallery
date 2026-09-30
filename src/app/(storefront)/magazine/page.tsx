import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { magazineCategories } from "@/data/site-structure";

export const metadata: Metadata = {
  title: "مجله آرفام",
  description: "مجله آرفام؛ دکوراسیون، چیدمان، متریال و نگهداری",
};

export default function MagazinePage() {
  return (
    <main id="main-content" className="bg-canvas">
      <Container className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:pb-44 lg:pt-32">
        <header className="border-b border-line pb-14 sm:pb-20 lg:grid lg:grid-cols-12 lg:items-end lg:pb-24">
          <p className="arfam-eyebrow text-subtle lg:col-span-3" dir="ltr">ARFAM Magazine</p>
          <h1 className="mt-7 text-[clamp(3rem,8vw,8rem)] font-light leading-none tracking-[-0.04em] text-silver-bright lg:col-span-7 lg:col-start-6 lg:mt-0">مجله آرفام</h1>
        </header>

        <section aria-labelledby="magazine-categories" className="py-16 sm:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 id="magazine-categories" className="text-2xl font-light text-silver-bright lg:col-span-4">موضوعات مجله</h2>
            <ol className="divide-y divide-line border-y border-line lg:col-span-7 lg:col-start-6">
              {magazineCategories.map((category, index) => (
                <li key={category.slug}>
                  <Link href={`/magazine/category/${category.slug}`} className="group flex min-h-24 items-center justify-between gap-6 py-5">
                    <span className="text-lg font-light text-silver transition-colors group-hover:text-silver-bright sm:text-2xl">{category.title}</span>
                    <span className="arfam-eyebrow text-subtle" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Container>
    </main>
  );
}