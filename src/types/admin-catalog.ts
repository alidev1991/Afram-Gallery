export type AdminCatalogVariantDto = {
  id: string;
  priceToman: number;
  position: number;
  combinationKey: string;
  optionsLabel: string;
};

export type AdminCatalogSpecificationDto = {
  id: string;
  label: string;
  value: string;
  position: number;
};

export type AdminCatalogProductDto = {
  id: string;
  name: string;
  slug: string;
  longDescription: string | null;
  isPublished: boolean;
  categoryName: string;
  subcategoryName: string | null;
  imageCount: number;
  presentationCount: number;
  variants: AdminCatalogVariantDto[];
  specifications: AdminCatalogSpecificationDto[];
};