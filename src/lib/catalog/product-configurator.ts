import type {
  StorefrontCatalogImageDto,
  StorefrontPresentationDto,
  StorefrontProductDetailDto,
  StorefrontVariantDto,
} from "@/types/storefront-catalog";

export const presentationQueryParameter = "presentation";

export type ProductConfiguratorSelection = Record<string, string>;

function variantMatchesSelection(
  variant: StorefrontVariantDto,
  selection: ProductConfiguratorSelection,
) {
  return Object.entries(selection).every(([optionSlug, valueSlug]) =>
    variant.selectedOptionValues.some(
      (value) =>
        value.optionSlug === optionSlug && value.valueSlug === valueSlug,
    ),
  );
}

export function findMatchingVariant(
  product: StorefrontProductDetailDto,
  selection: ProductConfiguratorSelection,
) {
  if (
    product.options.some(
      (option) => option.isRequired && selection[option.slug] === undefined,
    )
  ) {
    return null;
  }

  return (
    product.variants.find((variant) =>
      variantMatchesSelection(variant, selection),
    ) ?? null
  );
}

export function isOptionValueAvailable(
  product: StorefrontProductDetailDto,
  selection: ProductConfiguratorSelection,
  optionSlug: string,
  valueSlug: string,
) {
  return product.variants.some((variant) =>
    variantMatchesSelection(variant, {
      ...selection,
      [optionSlug]: valueSlug,
    }),
  );
}

export function resolveInitialConfiguratorSelection(
  product: StorefrontProductDetailDto,
  presentationSlug?: string,
): ProductConfiguratorSelection {
  const requestedPresentation = presentationSlug
    ? product.presentations.find(
        (presentation) => presentation.slug === presentationSlug,
      )
    : undefined;
  const presentation = requestedPresentation ?? product.presentations[0];
  const selection: ProductConfiguratorSelection = {};

  for (const option of product.options) {
    const preselectedValue = presentation?.preselectedOptionValues.find(
      (value) => value.optionSlug === option.slug,
    );
    const initialValue = preselectedValue?.valueSlug ?? option.values[0]?.slug;

    if (initialValue) {
      selection[option.slug] = initialValue;
    }
  }

  if (findMatchingVariant(product, selection)) {
    return selection;
  }

  const firstVariant = product.variants[0];

  return firstVariant
    ? Object.fromEntries(
        firstVariant.selectedOptionValues.map((value) => [
          value.optionSlug,
          value.valueSlug,
        ]),
      )
    : selection;
}

export function findPresentationForSelection(
  product: StorefrontProductDetailDto,
  selection: ProductConfiguratorSelection,
): StorefrontPresentationDto | null {
  return (
    product.presentations.find((presentation) =>
      presentation.preselectedOptionValues.every(
        (value) => selection[value.optionSlug] === value.valueSlug,
      ),
    ) ?? null
  );
}

export function resolveConfiguratorImages(
  product: StorefrontProductDetailDto,
  variant: StorefrontVariantDto,
  presentation: StorefrontPresentationDto | null,
): StorefrontCatalogImageDto[] {
  const sizeGuides = product.productImages.filter(
    (image) => image.imageType === "SIZE_GUIDE" && image.url !== null,
  );
  const productImages = product.productImages.filter(
    (image) => image.imageType !== "SIZE_GUIDE" && image.url !== null,
  );
  const variantImages = variant.images.filter((image) => image.url !== null);
  const presentationImages =
    presentation?.images.filter((image) => image.url !== null) ?? [];
  const scopedImages =
    variantImages.length > 0
      ? variantImages
      : presentationImages.length > 0
        ? presentationImages
        : productImages;

  return [...scopedImages, ...sizeGuides].filter(
    (image, index, images) =>
      images.findIndex((candidate) => candidate.id === image.id) === index,
  );
}

export function getPresentationProductHref(
  productSlug: string,
  presentationSlug: string,
) {
  const query = new URLSearchParams({
    [presentationQueryParameter]: presentationSlug,
  });

  return `/products/${encodeURIComponent(productSlug)}?${query.toString()}`;
}
