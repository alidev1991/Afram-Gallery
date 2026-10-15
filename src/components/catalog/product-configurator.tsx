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

const squareClockSizeGuides = [
  {
    valueSlug: "65x65-cm",
    label: "۶۵×۶۵ سانتی‌متر",
    src: "/media/products/square-wall-clock/square-wall-clock-size-guide-65.png",
  },
  {
    valueSlug: "80x80-cm",
    label: "۸۰×۸۰ سانتی‌متر",
    src: "/media/products/square-wall-clock/square-wall-clock-size-guide-80.png",
  },
  {
    valueSlug: "100x100-cm",
    label: "۱۰۰×۱۰۰ سانتی‌متر",
    src: "/media/products/square-wall-clock/square-wall-clock-size-guide-100.png",
  },
] as const;

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
  const isSquareWallClock = product.slug === "internal-square-wall-clock";
  const galleryImages = isSquareWallClock
    ? images.filter(
        (image) =>
          image.imageType !== "LIFESTYLE" && image.imageType !== "SIZE_GUIDE",
      )
    : images;
  const lifestyleImage = isSquareWallClock
    ? (presentation?.images.find(
        (image) => image.imageType === "LIFESTYLE" && image.url !== null,
      ) ?? null)
    : null;
  const description =
    product.shortDescription ??
    product.description ??
    product.longDescription;

  const scrollToLifestyle = () => {
    const lifestyleSection = document.getElementById("square-clock-lifestyle");
    if (!lifestyleSection) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    lifestyleSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  if (!variant) {
    return (
      <p className="border-y border-line py-8 text-sm text-muted" role="alert">
        ترکیب انتخاب‌شده برای این محصول در دسترس نیست.
      </p>
    );
  }

  return (
    <div
      data-configurator-product={product.id}
      data-selected-variant={variant.id}
      data-selected-price={variant.priceToman}
      data-selected-presentation={presentation?.slug ?? ""}
    >
      <div className="grid gap-14 pt-12 sm:gap-20 sm:pt-16 lg:grid-cols-12 lg:items-start lg:gap-x-10">
      <div className="lg:col-span-7">
        <div
          aria-label="گالری تصاویر محصول"
          className="space-y-8 sm:space-y-12"
        >
          {galleryImages.map((image, index) => {
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
                  className={`relative aspect-square overflow-hidden ${
                    image.imageType === "PRODUCT" ? "bg-transparent" : "bg-matte"
                  } ${
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

        {isSquareWallClock && lifestyleImage?.url ? (
          <button
            type="button"
            onClick={scrollToLifestyle}
            className="mt-8 flex min-h-12 w-full items-center justify-between gap-4 border border-silver/60 px-5 py-3 text-sm font-medium text-silver-bright transition-colors duration-200 hover:border-silver hover:bg-matte focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver sm:mt-10 sm:px-6 sm:text-base"
            aria-controls="square-clock-lifestyle"
          >
            <span>مشاهده محصول در محیط</span>
            <span aria-hidden="true" className="text-lg leading-none">
              ↓
            </span>
          </button>
        ) : null}

        {isSquareWallClock ? (
          <section
            aria-labelledby="square-clock-size-guide-heading"
            className="mt-10 border-t border-line pt-10 sm:mt-12 sm:pt-12"
          >
            <Reveal direction="bottom" distance={32}>
              <div className="flex items-end justify-between gap-6">
                <h2
                  id="square-clock-size-guide-heading"
                  className="text-2xl font-light text-silver-bright sm:text-3xl"
                >
                  راهنمای انتخاب سایز
                </h2>
                <p className="hidden text-xs text-muted sm:block">
                  انتخاب تصویر، سایز محصول را تغییر می‌دهد
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-4 lg:gap-6">
              {squareClockSizeGuides.map((guide, index) => {
                const isSelected = selection.size === guide.valueSlug;
                const isAvailable = isOptionValueAvailable(
                  product,
                  selection,
                  "size",
                  guide.valueSlug,
                );

                return (
                  <Reveal
                    key={guide.valueSlug}
                    direction="bottom"
                    distance={24}
                    delay={Math.min(index * 0.05, 0.1)}
                  >
                    <button
                      type="button"
                      disabled={!isAvailable}
                      aria-pressed={isSelected}
                      className={`group block w-full border p-2 text-right transition-[transform,border-color,background-color] duration-500 ease-[var(--arfam-ease)] motion-reduce:transform-none motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-35 ${
                        isSelected
                          ? "-translate-y-2 border-silver bg-matte"
                          : "border-line bg-transparent hover:border-line-strong"
                      }`}
                      onClick={() => {
                        if (!isAvailable) {
                          return;
                        }

                        setSelection((currentSelection) => ({
                          ...currentSelection,
                          size: guide.valueSlug,
                        }));
                      }}
                    >
                      <Image
                        src={guide.src}
                        alt={`راهنمای ساعت دیواری مربع ${guide.label}`}
                        width={775}
                        height={680}
                        sizes="(max-width: 639px) calc(100vw - 2.5rem), 30vw"
                        className="h-auto w-full object-contain"
                      />
                      <span className="mt-3 flex min-h-8 items-center justify-between gap-3 border-t border-line px-2 pt-3 text-xs">
                        <span className="text-silver">{guide.label}</span>
                        <span
                          className={isSelected ? "text-silver-bright" : "text-transparent"}
                          aria-hidden={!isSelected}
                        >
                          انتخاب‌شده
                        </span>
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </section>
        ) : null}
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
          <h1
            className={`mt-5 font-light leading-[1.15] tracking-[-0.035em] text-silver-bright ${
              product.slug === "internal-square-wall-clock"
                ? "whitespace-nowrap text-[clamp(2rem,3.5vw,3.25rem)]"
                : "text-[clamp(2.5rem,5vw,5.5rem)]"
            }`}
          >
            {product.name}
          </h1>
          {product.slug !== "internal-square-wall-clock" ? (
            <p className="mt-7 text-base text-silver">
              {formatToman(variant.priceToman)}
            </p>
          ) : null}
          {description ? (
            <p className="mt-8 whitespace-pre-line border-t border-line pt-7 text-sm leading-8 text-muted">
              {description}
            </p>
          ) : null}

          <div className="mt-10 space-y-8 border-t border-line pt-8">
            {product.slug === "internal-square-wall-clock" ? (
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-muted">قیمت انتخاب‌شده</span>
                <p className="text-base text-silver">
                  {formatToman(variant.priceToman)}
                </p>
              </div>
            ) : null}
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

      {isSquareWallClock && lifestyleImage?.url ? (
        <section
          id="square-clock-lifestyle"
          aria-labelledby="square-clock-lifestyle-heading"
          className="mt-16 scroll-mt-28 border-t border-line pt-12 sm:mt-20 sm:scroll-mt-32 sm:pt-16"
        >
          <Reveal direction="bottom" distance={32}>
            <h2
              id="square-clock-lifestyle-heading"
              className="text-2xl font-light text-silver-bright sm:text-3xl"
            >
              تصویر محیطی
            </h2>
          </Reveal>
          <Reveal direction="bottom" distance={32}>
            <figure
              className="relative mt-8 aspect-square overflow-hidden bg-matte sm:mt-10"
              data-image-type={lifestyleImage.imageType}
            >
              <Image
                src={lifestyleImage.url}
                alt={lifestyleImage.altText ?? `${product.name} در فضای دکوراسیون`}
                fill
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 88vw"
                className="object-contain"
              />
            </figure>
          </Reveal>
        </section>
      ) : null}
    </div>
  );
}
