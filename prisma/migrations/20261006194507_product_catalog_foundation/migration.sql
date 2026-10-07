-- AlterTable
ALTER TABLE "Order" ADD COLUMN "deletedAt" DATETIME;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN "longDescription" TEXT;
ALTER TABLE "Product" ADD COLUMN "shortDescription" TEXT;

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "priceToman" INTEGER NOT NULL,
    "combinationKey" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isPurchasable" BOOLEAN NOT NULL DEFAULT true,
    "inventoryPolicy" TEXT,
    "stockQuantity" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductOption" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "displayType" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProductOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductOptionValue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "optionId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "swatchValue" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProductOptionValue_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "ProductOption" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VariantOptionValue" (
    "variantId" TEXT NOT NULL,
    "optionValueId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("variantId", "optionValueId"),
    CONSTRAINT "VariantOptionValue_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "VariantOptionValue_optionValueId_fkey" FOREIGN KEY ("optionValueId") REFERENCES "ProductOptionValue" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductPresentation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "showInListing" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProductPresentation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PresentationOptionValue" (
    "presentationId" TEXT NOT NULL,
    "optionValueId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("presentationId", "optionValueId"),
    CONSTRAINT "PresentationOptionValue_presentationId_fkey" FOREIGN KEY ("presentationId") REFERENCES "ProductPresentation" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PresentationOptionValue_optionValueId_fkey" FOREIGN KEY ("optionValueId") REFERENCES "ProductOptionValue" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductSpecification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "group" TEXT,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProductSpecification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderItemOptionSnapshot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderItemId" TEXT NOT NULL,
    "optionName" TEXT NOT NULL,
    "optionValue" TEXT NOT NULL,
    "optionSlugSnapshot" TEXT,
    "valueSlugSnapshot" TEXT,
    "position" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "OrderItemOptionSnapshot_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "productId" TEXT,
    "variantId" TEXT,
    "productName" TEXT NOT NULL,
    "modelSnapshot" TEXT,
    "skuSnapshot" TEXT,
    "variantSkuSnapshot" TEXT,
    "imageUrl" TEXT,
    "unitPriceToman" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "lineTotalToman" INTEGER NOT NULL,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_OrderItem" ("id", "imageUrl", "lineTotalToman", "modelSnapshot", "orderId", "productId", "productName", "quantity", "skuSnapshot", "unitPriceToman") SELECT "id", "imageUrl", "lineTotalToman", "modelSnapshot", "orderId", "productId", "productName", "quantity", "skuSnapshot", "unitPriceToman" FROM "OrderItem";
DROP TABLE "OrderItem";
ALTER TABLE "new_OrderItem" RENAME TO "OrderItem";
CREATE INDEX "OrderItem_orderId_idx" ON "OrderItem"("orderId");
CREATE INDEX "OrderItem_productId_idx" ON "OrderItem"("productId");
CREATE INDEX "OrderItem_variantId_idx" ON "OrderItem"("variantId");
CREATE TABLE "new_ProductImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "variantId" TEXT,
    "presentationId" TEXT,
    "url" TEXT,
    "storageKey" TEXT,
    "imageType" TEXT NOT NULL DEFAULT 'PRODUCT',
    "altText" TEXT,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProductImage_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ProductImage_presentationId_fkey" FOREIGN KEY ("presentationId") REFERENCES "ProductPresentation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ProductImage" ("altText", "createdAt", "id", "position", "productId", "updatedAt", "url") SELECT "altText", "createdAt", "id", "position", "productId", "updatedAt", "url" FROM "ProductImage";
DROP TABLE "ProductImage";
ALTER TABLE "new_ProductImage" RENAME TO "ProductImage";
CREATE INDEX "ProductImage_productId_position_idx" ON "ProductImage"("productId", "position");
CREATE INDEX "ProductImage_variantId_position_idx" ON "ProductImage"("variantId", "position");
CREATE INDEX "ProductImage_presentationId_position_idx" ON "ProductImage"("presentationId", "position");
CREATE INDEX "ProductImage_productId_imageType_isPrimary_idx" ON "ProductImage"("productId", "imageType", "isPrimary");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_sku_key" ON "ProductVariant"("sku");

-- CreateIndex
CREATE INDEX "ProductVariant_productId_isActive_isPurchasable_position_idx" ON "ProductVariant"("productId", "isActive", "isPurchasable", "position");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_combinationKey_key" ON "ProductVariant"("productId", "combinationKey");

-- CreateIndex
CREATE INDEX "ProductOption_productId_isActive_position_idx" ON "ProductOption"("productId", "isActive", "position");

-- CreateIndex
CREATE UNIQUE INDEX "ProductOption_productId_slug_key" ON "ProductOption"("productId", "slug");

-- CreateIndex
CREATE INDEX "ProductOptionValue_optionId_isActive_position_idx" ON "ProductOptionValue"("optionId", "isActive", "position");

-- CreateIndex
CREATE UNIQUE INDEX "ProductOptionValue_optionId_slug_key" ON "ProductOptionValue"("optionId", "slug");

-- CreateIndex
CREATE INDEX "VariantOptionValue_optionValueId_idx" ON "VariantOptionValue"("optionValueId");

-- CreateIndex
CREATE INDEX "ProductPresentation_productId_isActive_showInListing_position_idx" ON "ProductPresentation"("productId", "isActive", "showInListing", "position");

-- CreateIndex
CREATE UNIQUE INDEX "ProductPresentation_productId_slug_key" ON "ProductPresentation"("productId", "slug");

-- CreateIndex
CREATE INDEX "PresentationOptionValue_optionValueId_idx" ON "PresentationOptionValue"("optionValueId");

-- CreateIndex
CREATE INDEX "ProductSpecification_productId_position_idx" ON "ProductSpecification"("productId", "position");

-- CreateIndex
CREATE INDEX "OrderItemOptionSnapshot_orderItemId_position_idx" ON "OrderItemOptionSnapshot"("orderItemId", "position");

-- CreateIndex
CREATE INDEX "Order_deletedAt_createdAt_idx" ON "Order"("deletedAt", "createdAt");
