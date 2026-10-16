import {
  findPresentationForSelection,
  resolveConfiguratorImages,
} from "@/lib/catalog/product-configurator";
import type { ConfiguredCartItemInput } from "@/types/cart";
import type {
  StorefrontProductDetailDto,
  StorefrontVariantDto,
} from "@/types/storefront-catalog";

export function toPreviewCartItem(
  product: StorefrontProductDetailDto,
  variant: StorefrontVariantDto,
): ConfiguredCartItemInput | null {
  const selection = Object.fromEntries(
    variant.selectedOptionValues.map((value) => [
      value.optionSlug,
      value.valueSlug,
    ]),
  );
  const presentation = findPresentationForSelection(product, selection);
  const image = resolveConfiguratorImages(product, variant, presentation).find(
    (candidate) => candidate.imageType !== "SIZE_GUIDE" && candidate.url,
  );

  if (!image?.url) {
    return null;
  }

  const query = new URLSearchParams();
  if (presentation) {
    query.set("presentation", presentation.slug);
  }

  return {
    productId: product.id,
    variantId: variant.id,
    productSlug: product.slug,
    productHref: `/products/${encodeURIComponent(product.slug)}${query.size ? `?${query.toString()}` : ""}`,
    name: product.name,
    unitPriceToman: variant.priceToman,
    imageSrc: image.url,
    imageAlt: image.altText ?? product.name,
    selectedOptions: variant.selectedOptionValues.map((value) => ({
      optionName: value.optionName,
      valueLabel: value.valueLabel,
      optionSlug: value.optionSlug,
      valueSlug: value.valueSlug,
    })),
  };
}