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
- Wallet balance must be derived from its transaction ledger.

## Seed strategy

No placeholder seed is included in this phase. Official categories,
subcategories, collections, products, customer accounts, and magazine content
should be seeded only after their source data is approved. Future seed commands
must be idempotent and identify records by stable unique fields such as slugs or
normalized mobile numbers.
