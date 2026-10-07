-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoryId" TEXT NOT NULL,
    "subcategoryId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "shortDescription" TEXT,
    "longDescription" TEXT,
    "model" TEXT,
    "sku" TEXT,
    "priceToman" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isVipOnly" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "Subcategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "createdAt", "description", "id", "isActive", "isPublished", "isVipOnly", "longDescription", "model", "name", "priceToman", "publishedAt", "shortDescription", "sku", "slug", "stock", "subcategoryId", "updatedAt") SELECT "categoryId", "createdAt", "description", "id", "isActive", "isPublished", "isVipOnly", "longDescription", "model", "name", "priceToman", "publishedAt", "shortDescription", "sku", "slug", "stock", "subcategoryId", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
CREATE INDEX "Product_categoryId_isActive_isPublished_idx" ON "Product"("categoryId", "isActive", "isPublished");
CREATE INDEX "Product_subcategoryId_isActive_isPublished_idx" ON "Product"("subcategoryId", "isActive", "isPublished");
CREATE INDEX "Product_isVipOnly_isActive_isPublished_idx" ON "Product"("isVipOnly", "isActive", "isPublished");
CREATE INDEX "Product_createdAt_idx" ON "Product"("createdAt");
CREATE TABLE "new_ProductVariant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "sku" TEXT,
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
INSERT INTO "new_ProductVariant" ("combinationKey", "createdAt", "id", "inventoryPolicy", "isActive", "isPurchasable", "position", "priceToman", "productId", "sku", "stockQuantity", "updatedAt") SELECT "combinationKey", "createdAt", "id", "inventoryPolicy", "isActive", "isPurchasable", "position", "priceToman", "productId", "sku", "stockQuantity", "updatedAt" FROM "ProductVariant";
DROP TABLE "ProductVariant";
ALTER TABLE "new_ProductVariant" RENAME TO "ProductVariant";
CREATE UNIQUE INDEX "ProductVariant_sku_key" ON "ProductVariant"("sku");
CREATE INDEX "ProductVariant_productId_isActive_isPurchasable_position_idx" ON "ProductVariant"("productId", "isActive", "isPurchasable", "position");
CREATE UNIQUE INDEX "ProductVariant_productId_combinationKey_key" ON "ProductVariant"("productId", "combinationKey");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
