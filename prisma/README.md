# ARFAM database foundation

The project uses Prisma 7 with SQLite in development, testing, and production.
The production SQLite file must live on persistent storage and be included in
the hosting backup plan. The example URL writes to the ignored
`data/arfam.db` file at the project root.

## Local setup

1. Copy `.env.example` to `.env`.
2. Run `npm run prisma:generate`.
3. Run `npm run db:migrate -- --name <migration-name>` while developing a schema change.

For production, set `DATABASE_URL` to the persistent SQLite file and run
`npm run db:migrate:deploy` during deployment. Never commit `.env` files or
SQLite database files.

## Schema conventions

- Monetary values are integer Toman amounts and use the `*Toman` suffix.
- `User.passwordHash` and `VipCode.codeHash` contain one-way verifiers only.
- Birth dates are stored as standard `DateTime` values; Jalali conversion is a UI concern.
- Order and invoice records keep immutable commercial and shipping snapshots.
- Orders are archival records. Application code must use `Order.deletedAt` for
  removal workflows and must not hard-delete orders or their financial history.
- When creating or updating a product, application validation must confirm that
  the selected subcategory belongs to the selected category.
- Product-to-collection membership uses the `ProductCollection` join model.
- `ProductVariant.priceToman` is the authoritative catalog price and is stored as
  integer Toman. Legacy `Product.sku`, `Product.priceToman`, and `Product.stock`
  remain temporarily for staged runtime migration and must not be treated as the
  final catalog source.
- Product options and values are generic and Admin-driven. Application validation
  must enforce Product ownership, exactly one value per required option on a
  variant, and uniqueness of the canonical `combinationKey` composition.
- `ProductPresentation` is a visual merchandising preset, not a Product, Variant,
  or SKU. Presentation option values and scoped images must belong to the same
  Product as the Presentation.
- Product images are provider-neutral and may use `url`, `storageKey`, or both.
  Application validation must enforce same-Product Variant/Presentation scopes,
  permit at most one optional Variant or Presentation scope at a time, require at
  least one resolvable image locator, and enforce one primary image per scope when
  the catalog write layer is implemented.
- `OrderItemOptionSnapshot` and the existing OrderItem commercial snapshots are
  immutable historical data. Catalog edits must never rewrite order snapshots.
- Inventory policy values and behavior remain deliberately undefined; nullable
  Variant inventory fields are extension points, not active business rules.
- Wallet balance must be derived from its transaction ledger.

## Catalog migration notes

- The Phase 12C migration is additive and does not create Products, Variants,
  Options, Presentations, images, specifications, or business data.
- If a later environment contains legacy Products without Variants, create an
  explicitly reviewed, idempotent backfill after official SKU and inventory rules
  are approved. Do not invent SKU values or Variant combinations in migrations.
- Keep legacy Product fields until Storefront, Cart, Checkout, and order creation
  have moved to Variant-aware reads and passed regression QA.

## Seed strategy

No placeholder seed is included in this phase. Official categories,
subcategories, collections, products, customer accounts, and magazine content
should be seeded only after their source data is approved. Future seed commands
must be idempotent and identify records by stable unique fields such as slugs or
normalized mobile numbers.
