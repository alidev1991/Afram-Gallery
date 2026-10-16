import "server-only";

import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import type { AdminCatalogProductInput } from "@/lib/catalog/admin-product-validation";
import type { AdminCatalogProductDto } from "@/types/admin-catalog";

const adminProductSelect = {
  id: true,
  name: true,
  slug: true,
  longDescription: true,
  isPublished: true,
  category: { select: { name: true } },
  subcategory: { select: { name: true } },
  images: { select: { id: true } },
  presentations: { select: { id: true } },
  variants: {
    orderBy: [{ position: "asc" }, { id: "asc" }],
    select: {
      id: true,
      priceToman: true,
      position: true,
      combinationKey: true,
      optionValues: {
        select: { optionValue: { select: { label: true, option: { select: { name: true } } } } },
      },
    },
  },
  specifications: {
    orderBy: [{ position: "asc" }, { id: "asc" }],
    select: { id: true, label: true, value: true, position: true },
  },
} satisfies Prisma.ProductSelect;

type AdminProductRecord = Prisma.ProductGetPayload<{ select: typeof adminProductSelect }>;

function findProductRecord(id: string) {
  return prisma.product.findUnique({ where: { id }, select: adminProductSelect });
}

function toDto(product: AdminProductRecord): AdminCatalogProductDto {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    longDescription: product.longDescription,
    isPublished: product.isPublished,
    categoryName: product.category.name,
    subcategoryName: product.subcategory?.name ?? null,
    imageCount: product.images.length,
    presentationCount: product.presentations.length,
    variants: product.variants.map((variant) => ({
      id: variant.id,
      priceToman: variant.priceToman,
      position: variant.position,
      combinationKey: variant.combinationKey,
      optionsLabel: variant.optionValues
        .map(({ optionValue }) => `${optionValue.option.name}: ${optionValue.label}`)
        .join(" · "),
    })),
    specifications: product.specifications,
  };
}

export async function getAdminCatalogProducts(): Promise<AdminCatalogProductDto[]> {
  const products = await prisma.product.findMany({
    orderBy: [{ createdAt: "desc" }, { id: "asc" }],
    select: { id: true },
  });
  const details = await Promise.all(products.map(({ id }) => findProductRecord(id)));
  return details.filter((item): item is NonNullable<typeof item> => item !== null).map(toDto);
}

export async function getAdminCatalogProductById(id: string) {
  const product = await findProductRecord(id);
  return product ? toDto(product) : null;
}

export async function updateAdminCatalogProduct(productId: string, input: AdminCatalogProductInput) {
  await prisma.$transaction(async (tx) => {
    const current = await tx.product.findUnique({
      where: { id: productId },
      select: {
        id: true,
        variants: { select: { id: true } },
        specifications: { select: { id: true } },
      },
    });
    if (!current) throw new Error("PRODUCT_NOT_FOUND");

    const expectedVariants = current.variants.map(({ id }) => id).sort();
    const receivedVariants = input.variants.map(({ id }) => id).sort();
    const expectedSpecifications = current.specifications.map(({ id }) => id).sort();
    const receivedSpecifications = input.specifications.map(({ id }) => id).sort();
    if (expectedVariants.join("|") !== receivedVariants.join("|") || expectedSpecifications.join("|") !== receivedSpecifications.join("|")) {
      throw new Error("CATALOG_RECORD_SET_MISMATCH");
    }

    await tx.product.update({
      where: { id: productId },
      data: { name: input.name, longDescription: input.longDescription || null },
    });
    await Promise.all(input.variants.map((variant) => tx.productVariant.update({ where: { id: variant.id }, data: { priceToman: variant.priceToman } })));
    await Promise.all(input.specifications.map((specification) => tx.productSpecification.update({ where: { id: specification.id }, data: { label: specification.label, value: specification.value } })));
  });
}