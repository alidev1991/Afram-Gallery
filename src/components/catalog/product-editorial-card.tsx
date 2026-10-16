import Image from "next/image";
import Link from "next/link";

import { RevealItem } from "@/components/motion/reveal";
import type { CatalogProduct } from "@/data/catalog";
import { formatToman } from "@/lib/format-price";
import type { StorefrontPresentationCardDto } from "@/types/storefront-catalog";

type ProductEditorialCardProps =
  | {
      product: CatalogProduct;
      presentationCard?: never;
      className?: string;
      priority?: boolean;
    }
  | {
      product?: never;
      presentationCard: StorefrontPresentationCardDto;
      className?: string;
      priority?: boolean;
    };

export function ProductEditorialCard(props: ProductEditorialCardProps) {
  const className = props.className ?? "";
  const priority = props.priority ?? false;

  if (props.presentationCard) {
    const card = props.presentationCard;
    const image = card.primaryImage;
    const href = `/products/${encodeURIComponent(card.productSlug)}?presentation=${encodeURIComponent(card.presentationSlug)}`;

    if (!image?.url) {
      return null;
    }

    return (
      <article className={className}>
        <RevealItem direction="bottom" distance={36}>
          <Link
            href={href}
            className="group block"
            aria-label={`مشاهده ${card.productName} با فینیش ${card.presentationTitle ?? "انتخاب‌شده"}`}
          >
            <div className="relative aspect-square overflow-hidden bg-transparent">
              <Image
                src={image.url}
                alt={image.altText ?? card.productName}
                fill
                priority={priority}
                unoptimized
                sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 50vw, 33vw"
                className="object-contain transition-transform duration-700 ease-[var(--arfam-ease)] lg:group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-5 flex items-start justify-between gap-6 border-t border-line pt-5">
              <div>
                <p className="arfam-eyebrow text-subtle">
                  {card.presentationTitle}
                </p>
                <h2 className="mt-3 text-xl font-light text-silver-bright sm:text-2xl">
                  {card.productName}
                </h2>
              </div>
              <span aria-hidden="true" className="shrink-0 pt-7 text-base text-muted">
                ←
              </span>
            </div>
          </Link>
        </RevealItem>
      </article>
    );
  }

  const product = props.product;

  return (
    <article className={className}>
      <RevealItem direction="bottom" distance={36}>
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
              {process.env.NODE_ENV === "development" ? (
                <p className="mt-2 text-[0.6875rem] text-subtle">
                  نمونه نمایشی رابط — داده رسمی محصول نیست
                </p>
              ) : null}
            </div>
            <p className="shrink-0 pt-7 text-xs text-muted">
              {formatToman(product.priceToman)}
            </p>
          </div>
        </Link>
      </RevealItem>
    </article>
  );
}