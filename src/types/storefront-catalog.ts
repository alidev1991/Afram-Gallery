export type StorefrontImageType =
  | "PRODUCT"
  | "LIFESTYLE"
  | "DETAIL"
  | "SIZE_GUIDE";

export type StorefrontCatalogImageDto = {
  id: string;
  url: string | null;
  imageType: StorefrontImageType;
  altText: string | null;
  isPrimary: boolean;
  position: number;
};

export type StorefrontCategoryDto = {
  id: string;
  name: string;
  slug: string;
};

export type StorefrontSubcategoryDto = {
  id: string;
  name: string;
  slug: string;
};

export type StorefrontSelectedOptionValueDto = {
  optionId: string;
  optionName: string;
  optionSlug: string;
  valueId: string;
  valueLabel: string;
  valueSlug: string;
};

export type StorefrontOptionValueDto = {
  id: string;
  label: string;
  slug: string;
  swatchValue: string | null;
  position: number;
};

export type StorefrontProductOptionDto = {
  id: string;
  name: string;
  slug: string;
  displayType: string | null;
  position: number;
  isRequired: boolean;
  values: StorefrontOptionValueDto[];
};

export type StorefrontVariantDto = {
  id: string;
  sku: string | null;
  priceToman: number;
  combinationKey: string;
  position: number;
  isPurchasable: boolean;
  inventoryPolicy: string | null;
  stockQuantity: number | null;
  selectedOptionValues: StorefrontSelectedOptionValueDto[];
  images: StorefrontCatalogImageDto[];
};

export type StorefrontPresentationDto = {
  id: string;
  slug: string;
  title: string | null;
  position: number;
  showInListing: boolean;
  preselectedOptionValues: StorefrontSelectedOptionValueDto[];
  images: StorefrontCatalogImageDto[];
};

export type StorefrontSpecificationDto = {
  id: string;
  group: string | null;
  label: string;
  value: string;
  position: number;
};

export type StorefrontProductDetailDto = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  shortDescription: string | null;
  longDescription: string | null;
  model: string | null;
  isPublished: boolean;
  isVipOnly: boolean;
  category: StorefrontCategoryDto;
  subcategory: StorefrontSubcategoryDto | null;
  options: StorefrontProductOptionDto[];
  variants: StorefrontVariantDto[];
  presentations: StorefrontPresentationDto[];
  productImages: StorefrontCatalogImageDto[];
  specifications: StorefrontSpecificationDto[];
};

export type StorefrontPresentationVariantPriceDto = {
  variantId: string;
  priceToman: number;
  isPurchasable: boolean;
};

export type StorefrontPresentationCardDto = {
  productId: string;
  presentationId: string;
  cardKey: string;
  productName: string;
  presentationTitle: string | null;
  productSlug: string;
  primaryImage: StorefrontCatalogImageDto | null;
  preselectedOptionValues: StorefrontSelectedOptionValueDto[];
  variantPrices: StorefrontPresentationVariantPriceDto[];
};