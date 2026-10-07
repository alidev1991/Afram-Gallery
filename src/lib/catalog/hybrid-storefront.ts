import "server-only";

import {
  getProductBySlug,
  getProductsForSubcategory,
  type CatalogProduct,
} from "@/data/catalog";
import {
  getPublicPresentationCardsForSubcategory,
  getPublicStorefrontProductBySlug,
} from "@/lib/catalog/storefront-repository";
import type {
  StorefrontPresentationCardDto,
  StorefrontProductDetailDto,
} from "@/types/storefront-catalog";

const squareWallClockScope = {
  categorySlug: "clocks",
  subcategorySlug: "square-wall-clocks",
} as const;

export type HybridSubcategoryCatalog =
  | {
      source: "database";
      presentationCards: StorefrontPresentationCardDto[];
    }
  | {
      source: "mock";
      products: CatalogProduct[];
    };

export type HybridProductResolution =
  | {
      source: "database";
      product: StorefrontProductDetailDto;
    }
  | {
      source: "mock";
      product: CatalogProduct;
    };

export function isSquareWallClockDatabaseScope(
  categorySlug: string,
  subcategorySlug: string,
) {
  return (
    categorySlug === squareWallClockScope.categorySlug &&
    subcategorySlug === squareWallClockScope.subcategorySlug
  );
}

export async function getSquareWallClockHybridCatalog(): Promise<HybridSubcategoryCatalog> {
  const presentationCards = await getPublicPresentationCardsForSubcategory(
    squareWallClockScope.categorySlug,
    squareWallClockScope.subcategorySlug,
  );

  if (presentationCards.length > 0) {
    return {
      source: "database",
      presentationCards,
    };
  }

  return {
    source: "mock",
    products: getProductsForSubcategory(
      squareWallClockScope.categorySlug,
      squareWallClockScope.subcategorySlug,
    ),
  };
}

export async function resolveHybridStorefrontProductBySlug(
  slug: string,
): Promise<HybridProductResolution | null> {
  const databaseProduct = await getPublicStorefrontProductBySlug(slug);

  if (databaseProduct) {
    return {
      source: "database",
      product: databaseProduct,
    };
  }

  const mockProduct = getProductBySlug(slug);

  return mockProduct
    ? {
        source: "mock",
        product: mockProduct,
      }
    : null;
}