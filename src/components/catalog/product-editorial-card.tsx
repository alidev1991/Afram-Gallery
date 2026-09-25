import Image from "next/image";
import Link from "next/link";

import type { CatalogProduct } from "@/data/catalog";
import { formatToman } from "@/lib/format-price";

type ProductEditorialCardProps = {
  product: CatalogProduct;
  className?: string;
};

export function ProductEditorialCard({
  product,
  className = "",
}: ProductEditorialCardProps) {
  return (
    <article className={className}>
      <Link
        href={`/products/${product.slug}`}
        className="group block"
        aria-label={`مشاهده ${product.name}`}
      >
        <div className="overflow-hidden bg-matte">
          <Image
            src={product.primaryImage.src}
            alt={product.primaryImage.alt}
            width={product.primaryImage.width}
            height={product.primaryImage.height}
            sizes="(max-width: 1023px) calc(100vw - 2.5rem), 40vw"
            className="h-auto w-full object-contain transition-transform duration-700 ease-[var(--arfam-ease)] lg:group-hover:scale-[1.02]"
          />
        </div>
        <div className="mt-5 flex items-start justify-between gap-6 border-t border-line pt-5">
          <div>
            <p className="arfam-eyebrow text-subtle" dir="ltr">
              {product.category}
            </p>
            <h2 className="mt-3 text-xl font-light text-silver-bright sm:text-2xl">
              {product.name}
            </h2>
          </div>
          <p className="shrink-0 pt-7 text-xs text-muted">
            {formatToman(product.priceToman)}
          </p>
        </div>
      </Link>
    </article>
  );
}
