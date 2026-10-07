import "server-only";

import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import type {
  StorefrontCatalogImageDto,
  StorefrontImageType,
  StorefrontPresentationCardDto,
  StorefrontPresentationDto,
  StorefrontProductDetailDto,
  StorefrontSelectedOptionValueDto,
  StorefrontVariantDto,
} from "@/types/storefront-catalog";

const imageSelect = {
  id: true,
  url: true,
  imageType: true,
  altText: true,
  isPrimary: true,
  position: true,
  variantId: true,
  presentationId: true,
} satisfies Prisma.ProductImageSelect;

const selectedOptionValueSelect = {
  optionValue: {
    select: {
      id: true,
      label: true,
      slug: true,
      option: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
  },
} satisfies Prisma.VariantOptionValueSelect;

const presentationOptionValueSelect = {
  optionValue: {
    select: {
      id: true,
      label: true,
      slug: true,
      option: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
  },
} satisfies Prisma.PresentationOptionValueSelect;

const storefrontProductSelect = {
  id: true,
  name: true,
  slug: true,
  description: true,
  shortDescription: true,
  longDescription: true,
  model: true,
  isPublished: true,
  isVipOnly: true,
  category: {
    select: {
      id: true,
      name: true,
      slug: true,
    },
  },
  subcategory: {
    select: {
      id: true,
      name: true,
      slug: true,
    },
  },
  options: {
    where: { isActive: true },
    orderBy: [{ position: "asc" }, { id: "asc" }],
    select: {
      id: true,
      name: true,
      slug: true,
      displayType: true,
      position: true,
      isRequired: true,
      values: {
        where: { isActive: true },
        orderBy: [{ position: "asc" }, { id: "asc" }],
        select: {
          id: true,
          label: true,
          slug: true,
          swatchValue: true,
          position: true,
        },
      },
    },
  },
  variants: {
    where: { isActive: true },
    orderBy: [{ position: "asc" }, { id: "asc" }],
    select: {
      id: true,
      sku: true,
      priceToman: true,
      combinationKey: true,
      position: true,
      isPurchasable: true,
      inventoryPolicy: true,
      stockQuantity: true,
      optionValues: {
        orderBy: { optionValueId: "asc" },
        select: selectedOptionValueSelect,
      },
      images: {
        orderBy: [{ position: "asc" }, { id: "asc" }],
        select: imageSelect,
      },
    },
  },
  presentations: {
    where: { isActive: true },
    orderBy: [{ position: "asc" }, { id: "asc" }],
    select: {
      id: true,
      slug: true,
      title: true,
      position: true,
      showInListing: true,
      optionValues: {
        orderBy: { optionValueId: "asc" },
        select: presentationOptionValueSelect,
      },
      images: {
        orderBy: [{ position: "asc" }, { id: "asc" }],
        select: imageSelect,
      },
    },
  },
  images: {
    orderBy: [{ position: "asc" }, { id: "asc" }],
    select: imageSelect,
  },
  specifications: {
    orderBy: [{ position: "asc" }, { id: "asc" }],
    select: {
      id: true,
      group: true,
      label: true,
      value: true,
      position: true,
    },
  },
} satisfies Prisma.ProductSelect;

type StorefrontProductRecord = Prisma.ProductGetPayload<{
  select: typeof storefrontProductSelect;
}>;

type SelectedOptionValueRecord = {
  optionValue: {
    id: string;
    label: string;
    slug: string;
    option: {
      id: string;
      name: string;
      slug: string;
    };
  };
};

function toImageDto(
  image: StorefrontProductRecord["images"][number],
): StorefrontCatalogImageDto {
  return {
    id: image.id,
    url: image.url,
    imageType: image.imageType as StorefrontImageType,
    altText: image.altText,
    isPrimary: image.isPrimary,
    position: image.position,
  };
}

function toSelectedOptionValueDto(
  record: SelectedOptionValueRecord,
): StorefrontSelectedOptionValueDto {
  const { optionValue } = record;

  return {
    optionId: optionValue.option.id,
    optionName: optionValue.option.name,
    optionSlug: optionValue.option.slug,
    valueId: optionValue.id,
    valueLabel: optionValue.label,
    valueSlug: optionValue.slug,
  };
}

function toVariantDto(
  variant: StorefrontProductRecord["variants"][number],
): StorefrontVariantDto {
  return {
    id: variant.id,
    sku: variant.sku,
    priceToman: variant.priceToman,
    combinationKey: variant.combinationKey,
    position: variant.position,
    isPurchasable: variant.isPurchasable,
    inventoryPolicy: variant.inventoryPolicy,
    stockQuantity: variant.stockQuantity,
    selectedOptionValues: variant.optionValues.map(toSelectedOptionValueDto),
    images: variant.images.map(toImageDto),
  };
}

function toPresentationDto(
  presentation: StorefrontProductRecord["presentations"][number],
): StorefrontPresentationDto {
  return {
    id: presentation.id,
    slug: presentation.slug,
    title: presentation.title,
    position: presentation.position,
    showInListing: presentation.showInListing,
    preselectedOptionValues: presentation.optionValues.map(
      toSelectedOptionValueDto,
    ),
    images: presentation.images.map(toImageDto),
  };
}

function toProductDetailDto(
  product: StorefrontProductRecord,
): StorefrontProductDetailDto {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    shortDescription: product.shortDescription,
    longDescription: product.longDescription,
    model: product.model,
    isPublished: product.isPublished,
    isVipOnly: product.isVipOnly,
    category: product.category,
    subcategory: product.subcategory,
    options: product.options.map((option) => ({
      id: option.id,
      name: option.name,
      slug: option.slug,
      displayType: option.displayType,
      position: option.position,
      isRequired: option.isRequired,
      values: option.values,
    })),
    variants: product.variants.map(toVariantDto),
    presentations: product.presentations.map(toPresentationDto),
    productImages: product.images
      .filter((image) => image.variantId === null && image.presentationId === null)
      .map(toImageDto),
    specifications: product.specifications,
  };
}

function toPresentationCards(
  product: StorefrontProductDetailDto,
): StorefrontPresentationCardDto[] {
  return product.presentations
    .filter((presentation) => presentation.showInListing)
    .map((presentation) => {
      const preselectedValueIds = new Set(
        presentation.preselectedOptionValues.map((value) => value.valueId),
      );
      const compatibleVariants = product.variants.filter((variant) =>
        [...preselectedValueIds].every((valueId) =>
          variant.selectedOptionValues.some((value) => value.valueId === valueId),
        ),
      );
      const primaryImage =
        presentation.images.find(
          (image) =>
            image.imageType === "PRODUCT" && image.isPrimary && image.url !== null,
        ) ??
        presentation.images.find(
          (image) => image.isPrimary && image.url !== null,
        ) ??
        null;

      return {
        productId: product.id,
        presentationId: presentation.id,
        cardKey: `${product.id}:${presentation.id}`,
        productName: product.name,
        presentationTitle: presentation.title,
        productSlug: product.slug,
        primaryImage,
        preselectedOptionValues: presentation.preselectedOptionValues,
        variantPrices: compatibleVariants.map((variant) => ({
          variantId: variant.id,
          priceToman: variant.priceToman,
          isPurchasable: variant.isPurchasable,
        })),
      };
    });
}

const publicProductWhere = {
  isActive: true,
  isPublished: true,
  isVipOnly: false,
  category: { is: { isActive: true } },
  OR: [
    { subcategoryId: null },
    { subcategory: { is: { isActive: true } } },
  ],
} satisfies Prisma.ProductWhereInput;

export async function getPublicStorefrontProductBySlug(
  slug: string,
): Promise<StorefrontProductDetailDto | null> {
  const product = await prisma.product.findFirst({
    where: {
      ...publicProductWhere,
      slug,
    },
    select: storefrontProductSelect,
  });

  return product ? toProductDetailDto(product) : null;
}

export async function getPublicPresentationCardsForSubcategory(
  categorySlug: string,
  subcategorySlug: string,
): Promise<StorefrontPresentationCardDto[]> {
  const products = await prisma.product.findMany({
    where: {
      ...publicProductWhere,
      category: {
        is: {
          isActive: true,
          slug: categorySlug,
        },
      },
      subcategory: {
        is: {
          isActive: true,
          slug: subcategorySlug,
        },
      },
    },
    orderBy: { id: "asc" },
    select: storefrontProductSelect,
  });

  return products.flatMap((product) =>
    toPresentationCards(toProductDetailDto(product)),
  );
}

function assertInternalQaEnvironment() {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "Internal catalog QA queries cannot run in the production environment.",
    );
  }
}

export async function getInternalStorefrontProductBySlugForQa(
  slug: string,
): Promise<StorefrontProductDetailDto | null> {
  assertInternalQaEnvironment();

  const product = await prisma.product.findUnique({
    where: { slug },
    select: storefrontProductSelect,
  });

  return product ? toProductDetailDto(product) : null;
}

export async function getInternalPresentationCardsByProductSlugForQa(
  slug: string,
): Promise<StorefrontPresentationCardDto[]> {
  const product = await getInternalStorefrontProductBySlugForQa(slug);

  return product ? toPresentationCards(product) : [];
}