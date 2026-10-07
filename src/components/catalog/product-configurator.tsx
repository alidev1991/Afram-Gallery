"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import {
  findMatchingVariant,
  findPresentationForSelection,
  isOptionValueAvailable,
  resolveConfiguratorImages,
  resolveInitialConfiguratorSelection,
} from "@/lib/catalog/product-configurator";
import { formatToman } from "@/lib/format-price";
import type { StorefrontProductDetailDto } from "@/types/storefront-catalog";

type ProductConfiguratorProps = {
  product: StorefrontProductDetailDto;
  initialPresentationSlug?: string;
};

export function ProductConfigurator({
  product,
  initialPresentationSlug,
}: ProductConfiguratorProps) {
  const [selection, setSelection] = useState(() =>
    resolveInitialConfiguratorSelection(product, initialPresentationSlug),
  );
  const variant = useMemo(
    () => findMatchingVariant(product, selection),
    [product, selection],
  );
  const presentation = useMemo(
    () => findPresentationForSelection(product, selection),
    [product, selection],
  );
  const images = useMemo(
    () =>
      variant
        ? resolveConfiguratorImages(product, variant, presentation)
        : [],
    [presentation, product, variant],
  );
  const description =
    product.shortDescription ??
    product.description ??
    product.longDescription;

  if (!variant) {
    return (
      <p className="border-y border-line py-8 text-sm text-muted" role="alert">
        ترکیب انتخاب‌شده برای این محصول در دسترس نیست.
      </p>
    );
  }

  return (
    <div
      className="grid gap-14 pt-12 sm:gap-20 sm:pt-16 lg:grid-cols-12 lg:items-start lg:gap-x-10"
      data-configurator-product={product.id}
      data-selected-variant={variant.id}
      data-selected-price={variant.priceToman}
      data-selected-presentation={presentation?.slug ?? ""}
    >
      <div className="lg:col-span-7">
        <div
          aria-label="گالری تصاویر محصول"
          className="space-y-8 sm:space-y-12"
        >
          {images.map((image, index) => {
            if (!image.url) {
              return null;
            }

            return (
              <Reveal
                key={`${presentation?.id ?? "product"}:${image.id}`}
                direction="bottom"
                distance={32}
                delay={Math.min(index * 0.06, 0.18)}
              >
                <figure
                  className={`relative aspect-square overflow-hidden bg-matte ${
                    index === 0 ? "" : "sm:ms-auto sm:w-4/5"
                  }`}
                  data-image-type={image.imageType}
                >
                  <Image
                    src={image.url}
                    alt={image.altText ?? product.name}
                    fill
                    priority={index === 0}
                    sizes={
                      index === 0
                        ? "(max-width: 1023px) calc(100vw - 2.5rem), 58vw"
                        : "(max-width: 639px) calc(100vw - 2.5rem), 46vw"
                    }
                    className="object-contain"
                  />
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal
        direction="left"
        distance={40}
        className="lg:sticky lg:top-[calc(var(--arfam-header-height)+2.5rem)] lg:col-span-4 lg:col-start-9"
      >
        <aside>
          <p className="arfam-eyebrow text-subtle" dir="ltr">
            {product.category.name}
          </p>
          <h1 className="mt-5 text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[1.15] tracking-[-0.035em] text-silver-bright">
            {product.name}
          </h1>
          <p className="mt-7 text-base text-silver">
            {formatToman(variant.priceToman)}
          </p>
          {description ? (
            <p className="mt-8 whitespace-pre-line border-t border-line pt-7 text-sm leading-8 text-muted">
              {description}
            </p>
          ) : null}

          <div className="mt-10 space-y-8 border-t border-line pt-8">
            {product.options.map((option) => (
              <fieldset key={option.id}>
                <legend className="text-sm font-medium text-silver-bright">
                  {option.name}
                </legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {option.values.map((value) => {
                    const isSelected = selection[option.slug] === value.slug;
                    const isAvailable = isOptionValueAvailable(
                      product,
                      selection,
                      option.slug,
                      value.slug,
                    );

                    return (
                      <button
                        key={value.id}
                        type="button"
                        disabled={!isAvailable}
                        aria-pressed={isSelected}
                        className={`min-h-11 border px-4 py-2 text-xs transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-35 ${
                          isSelected
                            ? "border-silver bg-silver text-canvas"
                            : "border-line-strong bg-transparent text-silver hover:border-silver hover:text-silver-bright"
                        }`}
                        onClick={() => {
                          if (!isAvailable) {
                            return;
                          }

                          setSelection((currentSelection) => ({
                            ...currentSelection,
                            [option.slug]: value.slug,
                          }));
                        }}
                      >
                        {value.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>

          <Button className="mt-10 w-full sm:w-auto lg:w-full" disabled>
            افزودن به سبد خرید — به‌زودی
          </Button>

          <section
            aria-labelledby="product-specifications"
            className="mt-12 border-t border-line pt-8"
          >
            <h2
              id="product-specifications"
              className="text-sm font-medium text-silver-bright"
            >
              مشخصات
            </h2>
            <dl className="mt-5 divide-y divide-line">
              {product.specifications.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-6 py-4 text-xs"
                >
                  <dt className="text-muted">{item.label}</dt>
                  <dd className="text-left text-silver">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </aside>
      </Reveal>
    </div>
  );
}
