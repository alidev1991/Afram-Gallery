import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import Database from "better-sqlite3";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const projectRoot = fileURLToPath(new URL("../..", import.meta.url));
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl?.startsWith("file:")) {
  throw new Error("DATABASE_URL must be a SQLite file URL.");
}

const databaseLocation = databaseUrl.slice("file:".length);
const databasePath = path.isAbsolute(databaseLocation)
  ? databaseLocation
  : path.resolve(projectRoot, databaseLocation);
const db = new Database(databasePath, { fileMustExist: true });
db.pragma("foreign_keys = ON");

const requiredMigration = "20261007190000_add_product_image_size_guide_type";
const appliedMigration = db
  .prepare(
    `SELECT migration_name FROM _prisma_migrations
      WHERE migration_name = ? AND finished_at IS NOT NULL AND rolled_back_at IS NULL`,
  )
  .get(requiredMigration);

if (!appliedMigration) {
  db.close();
  throw new Error(`Required migration is not applied: ${requiredMigration}`);
}

const now = new Date().toISOString();
const productDescription = `این ساعت دیواری، طراحی و تولید اختصاصی مجموعه آرفام است؛ محصولی که با تمرکز بر تناسبات بصری، کیفیت متریال و ظرافت در جزئیات طراحی شده تا حضوری متمایز در فضای داخلی داشته باشد.

بدنه ساعت از فلز ساخته شده و قابلیت سفارش در طیف گسترده‌ای از رنگ‌ها را دارد. اعداد و فریم پیرامونی نیز از استیل ساخته شده‌اند و در سه فینیش طلایی، سیلور و دودی قابل انتخاب هستند؛ ترکیبی که امکان شخصی‌سازی ساعت متناسب با پالت رنگی هر فضا را فراهم می‌کند.

تنوع در رنگ بدنه و فینیش استیل باعث می‌شود ساعت‌های آرفام محدود به یک سبک مشخص نباشند و بتوان آن‌ها را متناسب با دکوراسیون‌های مینیمال، مدرن، نئوکلاسیک و کلاسیک انتخاب و سفارش‌سازی کرد.

در طراحی این مجموعه، ساعت تنها یک عنصر کاربردی برای نمایش زمان نیست؛ بلکه به‌عنوان بخشی از ترکیب‌بندی و هویت بصری فضا در نظر گرفته شده است؛ عنصری که می‌تواند در هماهنگی با سایر متریال‌ها و اجزای دکوراسیون، به نقطه‌ای شاخص در چیدمان تبدیل شود.

هر ساعت بر اساس ترکیب رنگ انتخابی شما در مجموعه آرفام تولید می‌شود؛ تا محصول نهایی، در کنار کیفیت ساخت و جزئیات دقیق، امضایی متناسب با فضای شما داشته باشد.`;

const sizes = [
  { id: "value_square_size_65", label: "65×65 سانتی‌متر", slug: "65x65-cm", priceToman: 9_800_000, key: "65" },
  { id: "value_square_size_80", label: "80×80 سانتی‌متر", slug: "80x80-cm", priceToman: 10_800_000, key: "80" },
  { id: "value_square_size_100", label: "100×100 سانتی‌متر", slug: "100x100-cm", priceToman: 11_800_000, key: "100" },
];

const finishes = [
  { id: "value_square_finish_gold", label: "طلایی", slug: "gold", key: "gold", presentationTitle: "تیره + طلایی" },
  { id: "value_square_finish_silver", label: "سیلور", slug: "silver", key: "silver", presentationTitle: "تیره + سیلور" },
  { id: "value_square_finish_smoke", label: "دودی", slug: "smoke", key: "smoke", presentationTitle: "تیره + دودی" },
];

const productImages = [
  {
    id: "image_square_gold_product",
    presentationSlug: "internal-dark-gold",
    url: "/media/products/square-wall-clock/square-wall-clock-gold-product.png",
    imageType: "PRODUCT",
    altText: "ساعت دیواری مربع با فینیش طلایی",
    isPrimary: true,
    position: 0,
  },
  {
    id: "image_square_gold_lifestyle",
    presentationSlug: "internal-dark-gold",
    url: "/media/products/square-wall-clock/square-wall-clock-gold-lifestyle.png",
    imageType: "LIFESTYLE",
    altText: "ساعت دیواری مربع با فینیش طلایی در فضای داخلی",
    isPrimary: false,
    position: 1,
  },
  {
    id: "image_square_silver_product",
    presentationSlug: "internal-dark-silver",
    url: "/media/products/square-wall-clock/square-wall-clock-silver-product.png",
    imageType: "PRODUCT",
    altText: "ساعت دیواری مربع با فینیش سیلور",
    isPrimary: true,
    position: 0,
  },
  {
    id: "image_square_silver_lifestyle",
    presentationSlug: "internal-dark-silver",
    url: "/media/products/square-wall-clock/square-wall-clock-silver-lifestyle.png",
    imageType: "LIFESTYLE",
    altText: "ساعت دیواری مربع با فینیش سیلور در فضای داخلی",
    isPrimary: false,
    position: 1,
  },
  {
    id: "image_square_smoke_product",
    presentationSlug: "internal-dark-smoke",
    url: "/media/products/square-wall-clock/square-wall-clock-smoke-product.png",
    imageType: "PRODUCT",
    altText: "ساعت دیواری مربع با فینیش دودی",
    isPrimary: true,
    position: 0,
  },
  {
    id: "image_square_smoke_lifestyle",
    presentationSlug: "internal-dark-smoke",
    url: "/media/products/square-wall-clock/square-wall-clock-smoke-lifestyle.png",
    imageType: "LIFESTYLE",
    altText: "ساعت دیواری مربع با فینیش دودی در فضای داخلی",
    isPrimary: false,
    position: 1,
  },
  {
    id: "image_square_size_guide",
    presentationSlug: null,
    url: "/media/products/square-wall-clock/square-wall-clock-size-guide.png",
    imageType: "SIZE_GUIDE",
    altText: "راهنمای ابعاد ساعت دیواری مربع در سایزهای ۶۵، ۸۰ و ۱۰۰ سانتی‌متر",
    isPrimary: false,
    position: 2,
  },
];
const specifications = [
  ["خانواده", "ساعت دیواری"],
  ["فرم", "مربع"],
  ["برند", "Arfam Gallery"],
  ["طراحی و تولید", "طراحی و تولید اختصاصی مجموعه آرفام"],
  ["نوع", "ساعت دیواری دکوراتیو"],
  ["جنس بدنه", "فلز"],
  ["رنگ بدنه", "قابل سفارش در طیف متنوعی از رنگ‌ها"],
  ["جنس اعداد", "استیل 304"],
  ["جنس فریم", "استیل 304"],
  ["ضخامت استیل", "1 میلی‌متر"],
  ["فینیش استیل", "طلایی، سیلور، دودی"],
  ["قابلیت شخصی‌سازی", "امکان انتخاب ترکیب رنگ بدنه و فینیش استیل"],
  ["سبک‌های پیشنهادی", "مینیمال، مدرن، معاصر، نئوکلاسیک، کلاسیک، بوهمین، آرت‌دکو و تلفیقی"],
  ["نوع موتور", "موتور آرامگرد میتسو ژاپن"],
  ["صدای موتور", "بی‌صدا، بدون صدای تیک‌تاک"],
  ["نحوه نصب", "دیواری"],
  ["ضمانت موتور", "مادام‌العمر"],
  ["ضمانت رنگ بدنه", "مادام‌العمر"],
  ["بسته‌بندی", "بسته‌بندی ایمن با کارتن مقاوم 8 لایه"],
  ["ارسال", "ارسال به سراسر کشور"],
  ["کشور تولیدکننده", "ایران"],
  ["سازنده", "Arfam Gallery"],
];

const importCatalog = db.transaction(() => {
  db.prepare(
    `INSERT INTO Category (id, name, slug, position, isActive, createdAt, updatedAt)
     VALUES (@id, @name, @slug, 0, 1, @now, @now)
     ON CONFLICT(slug) DO UPDATE SET name = excluded.name, isActive = 1, updatedAt = excluded.updatedAt`,
  ).run({ id: "category_clocks", name: "ساعت", slug: "clocks", now });
  const category = db.prepare(`SELECT id FROM Category WHERE slug = ?`).get("clocks");

  db.prepare(
    `INSERT INTO Subcategory (id, categoryId, name, slug, position, isActive, createdAt, updatedAt)
     VALUES (@id, @categoryId, @name, @slug, 0, 1, @now, @now)
     ON CONFLICT(categoryId, slug) DO UPDATE SET name = excluded.name, isActive = 1, updatedAt = excluded.updatedAt`,
  ).run({
    id: "subcategory_square_wall_clocks",
    categoryId: category.id,
    name: "ساعت دیواری مربع",
    slug: "square-wall-clocks",
    now,
  });
  const subcategory = db
    .prepare(`SELECT id FROM Subcategory WHERE categoryId = ? AND slug = ?`)
    .get(category.id, "square-wall-clocks");

  db.prepare(
    `INSERT INTO Product (
       id, categoryId, subcategoryId, name, slug, description, shortDescription,
       longDescription, model, sku, priceToman, stock, isActive, isPublished,
       isVipOnly, publishedAt, createdAt, updatedAt
     ) VALUES (
       @id, @categoryId, @subcategoryId, @name, @slug, NULL, NULL,
       @longDescription, NULL, NULL, @priceToman, 0, 1, 0, 0, NULL, @now, @now
     )
     ON CONFLICT(slug) DO UPDATE SET
       categoryId = excluded.categoryId,
       subcategoryId = excluded.subcategoryId,
       name = excluded.name,
       longDescription = excluded.longDescription,
       priceToman = excluded.priceToman,
       isActive = 1,
       updatedAt = excluded.updatedAt`,
  ).run({
    id: "product_square_wall_clock",
    categoryId: category.id,
    subcategoryId: subcategory.id,
    name: "ساعت دیواری مربع",
    slug: "internal-square-wall-clock",
    longDescription: productDescription,
    priceToman: 9_800_000,
    now,
  });
  const product = db.prepare(`SELECT id FROM Product WHERE slug = ?`).get("internal-square-wall-clock");

  const optionStatement = db.prepare(
    `INSERT INTO ProductOption (id, productId, name, slug, displayType, position, isRequired, isActive, createdAt, updatedAt)
     VALUES (@id, @productId, @name, @slug, 'text', @position, 1, 1, @now, @now)
     ON CONFLICT(productId, slug) DO UPDATE SET
       name = excluded.name, position = excluded.position, isRequired = 1,
       isActive = 1, updatedAt = excluded.updatedAt`,
  );
  optionStatement.run({ id: "option_square_size", productId: product.id, name: "سایز", slug: "size", position: 0, now });
  optionStatement.run({ id: "option_square_finish", productId: product.id, name: "فینیش استیل", slug: "steel-finish", position: 1, now });

  const sizeOption = db.prepare(`SELECT id FROM ProductOption WHERE productId = ? AND slug = ?`).get(product.id, "size");
  const finishOption = db.prepare(`SELECT id FROM ProductOption WHERE productId = ? AND slug = ?`).get(product.id, "steel-finish");
  const valueStatement = db.prepare(
    `INSERT INTO ProductOptionValue (id, optionId, label, slug, swatchValue, position, isActive, createdAt, updatedAt)
     VALUES (@id, @optionId, @label, @slug, NULL, @position, 1, @now, @now)
     ON CONFLICT(optionId, slug) DO UPDATE SET
       label = excluded.label, position = excluded.position, isActive = 1, updatedAt = excluded.updatedAt`,
  );
  sizes.forEach((size, position) => valueStatement.run({ ...size, optionId: sizeOption.id, position, now }));
  finishes.forEach((finish, position) => valueStatement.run({ ...finish, optionId: finishOption.id, position, now }));

  const variantStatement = db.prepare(
    `INSERT INTO ProductVariant (
       id, productId, sku, priceToman, combinationKey, position, isActive,
       isPurchasable, inventoryPolicy, stockQuantity, createdAt, updatedAt
     ) VALUES (
       @id, @productId, NULL, @priceToman, @combinationKey, @position, 1,
       1, NULL, NULL, @now, @now
     )
     ON CONFLICT(productId, combinationKey) DO UPDATE SET
       priceToman = excluded.priceToman,
       position = excluded.position,
       isActive = 1,
       isPurchasable = 1,
       updatedAt = excluded.updatedAt`,
  );
  const getOptionValue = db.prepare(`SELECT id FROM ProductOptionValue WHERE optionId = ? AND slug = ?`);
  const variantValueStatement = db.prepare(
    `INSERT OR IGNORE INTO VariantOptionValue (variantId, optionValueId, createdAt) VALUES (?, ?, ?)`,
  );

  let variantPosition = 0;
  for (const size of sizes) {
    for (const finish of finishes) {
      const combinationKey = `size:${size.slug}|steel-finish:${finish.slug}`;
      variantStatement.run({
        id: `variant_square_${size.key}_${finish.key}`,
        productId: product.id,
        priceToman: size.priceToman,
        combinationKey,
        position: variantPosition,
        now,
      });
      const variant = db
        .prepare(`SELECT id FROM ProductVariant WHERE productId = ? AND combinationKey = ?`)
        .get(product.id, combinationKey);
      variantValueStatement.run(variant.id, getOptionValue.get(sizeOption.id, size.slug).id, now);
      variantValueStatement.run(variant.id, getOptionValue.get(finishOption.id, finish.slug).id, now);
      variantPosition += 1;
    }
  }

  const presentationStatement = db.prepare(
    `INSERT INTO ProductPresentation (id, productId, slug, title, position, isActive, showInListing, createdAt, updatedAt)
     VALUES (@id, @productId, @slug, @title, @position, 1, 1, @now, @now)
     ON CONFLICT(productId, slug) DO UPDATE SET
       title = excluded.title, position = excluded.position, isActive = 1,
       showInListing = 1, updatedAt = excluded.updatedAt`,
  );
  const presentationValueStatement = db.prepare(
    `INSERT OR IGNORE INTO PresentationOptionValue (presentationId, optionValueId, createdAt) VALUES (?, ?, ?)`,
  );
  finishes.forEach((finish, position) => {
    const slug = `internal-dark-${finish.slug}`;
    presentationStatement.run({
      id: `presentation_square_dark_${finish.key}`,
      productId: product.id,
      slug,
      title: finish.presentationTitle,
      position,
      now,
    });
    const presentation = db
      .prepare(`SELECT id FROM ProductPresentation WHERE productId = ? AND slug = ?`)
      .get(product.id, slug);
    presentationValueStatement.run(
      presentation.id,
      getOptionValue.get(finishOption.id, finish.slug).id,
      now,
    );
  });

  const specificationStatement = db.prepare(
    `INSERT INTO ProductSpecification (id, productId, "group", label, value, position, createdAt, updatedAt)
     VALUES (@id, @productId, NULL, @label, @value, @position, @now, @now)
     ON CONFLICT(id) DO UPDATE SET
       productId = excluded.productId, label = excluded.label, value = excluded.value,
       position = excluded.position, updatedAt = excluded.updatedAt`,
  );
  specifications.forEach(([label, value], position) => {
    specificationStatement.run({
      id: `spec_square_wall_clock_${String(position + 1).padStart(2, "0")}`,
      productId: product.id,
      label,
      value,
      position,
      now,
    });
  });
});

const importImages = db.transaction(() => {
  const product = db
    .prepare(`SELECT id FROM Product WHERE slug = ?`)
    .get("internal-square-wall-clock");

  if (!product) {
    throw new Error("Square wall clock product must exist before importing images.");
  }

  const getPresentation = db.prepare(
    `SELECT id FROM ProductPresentation WHERE productId = ? AND slug = ?`,
  );
  const getConflictingImage = db.prepare(
    `SELECT id FROM ProductImage WHERE url = ? AND id <> ?`,
  );
  const imageStatement = db.prepare(
    `INSERT INTO ProductImage (
       id, productId, variantId, presentationId, url, storageKey, imageType,
       altText, isPrimary, position, createdAt, updatedAt
     ) VALUES (
       @id, @productId, NULL, @presentationId, @url, NULL, @imageType,
       @altText, @isPrimary, @position, @now, @now
     )
     ON CONFLICT(id) DO UPDATE SET
       productId = excluded.productId,
       variantId = NULL,
       presentationId = excluded.presentationId,
       url = excluded.url,
       storageKey = NULL,
       imageType = excluded.imageType,
       altText = excluded.altText,
       isPrimary = excluded.isPrimary,
       position = excluded.position,
       updatedAt = excluded.updatedAt
     WHERE ProductImage.productId IS NOT excluded.productId
        OR ProductImage.variantId IS NOT excluded.variantId
        OR ProductImage.presentationId IS NOT excluded.presentationId
        OR ProductImage.url IS NOT excluded.url
        OR ProductImage.storageKey IS NOT excluded.storageKey
        OR ProductImage.imageType IS NOT excluded.imageType
        OR ProductImage.altText IS NOT excluded.altText
        OR ProductImage.isPrimary IS NOT excluded.isPrimary
        OR ProductImage.position IS NOT excluded.position`,
  );

  for (const image of productImages) {
    const assetPath = path.join(projectRoot, "public", ...image.url.split("/").filter(Boolean));
    if (!existsSync(assetPath)) {
      throw new Error(`Product image asset does not exist: ${image.url}`);
    }

    const presentation = image.presentationSlug
      ? getPresentation.get(product.id, image.presentationSlug)
      : null;
    if (image.presentationSlug && !presentation) {
      throw new Error(`Product presentation does not exist: ${image.presentationSlug}`);
    }

    const conflictingImage = getConflictingImage.get(image.url, image.id);
    if (conflictingImage) {
      throw new Error(`Product image URL is already assigned to another record: ${image.url}`);
    }

    imageStatement.run({
      ...image,
      productId: product.id,
      presentationId: presentation?.id ?? null,
      isPrimary: image.isPrimary ? 1 : 0,
      now,
    });
  }
});
try {
  const imagesOnly = process.argv.includes("--images-only");
  if (!imagesOnly) {
    importCatalog();
  }
  importImages();
  const product = db
    .prepare(`SELECT id, name, slug, sku, isPublished FROM Product WHERE slug = ?`)
    .get("internal-square-wall-clock");
  const counts = db
    .prepare(
      `SELECT
         (SELECT COUNT(*) FROM ProductVariant WHERE productId = @productId) AS variants,
         (SELECT COUNT(*) FROM ProductOption WHERE productId = @productId) AS options,
         (SELECT COUNT(*) FROM ProductOptionValue WHERE optionId IN (SELECT id FROM ProductOption WHERE productId = @productId)) AS optionValues,
         (SELECT COUNT(*) FROM ProductPresentation WHERE productId = @productId) AS presentations,
         (SELECT COUNT(*) FROM ProductSpecification WHERE productId = @productId) AS specifications,
         (SELECT COUNT(*) FROM ProductImage WHERE productId = @productId) AS images,
         (SELECT COUNT(*) FROM ProductVariant WHERE productId = @productId AND sku IS NOT NULL) AS variantsWithSku`,
    )
    .get({ productId: product.id });
  const imageRecords = db
    .prepare(
      `SELECT id, variantId, presentationId, url, imageType, altText, isPrimary, position
       FROM ProductImage WHERE productId = ? ORDER BY position, id`,
    )
    .all(product.id);
  console.log(JSON.stringify({ product, counts, images: imageRecords }, null, 2));
} finally {
  db.close();
}
