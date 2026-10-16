import Link from "next/link";

import { AdminPageHeading } from "@/components/admin/admin-page-heading";
import { adminProducts } from "@/data/admin-demo";
import { requireAdminUser } from "@/lib/auth/authorization";
import { getAdminCatalogProducts } from "@/lib/catalog/admin-product-repository";
import { formatToman } from "@/lib/format-price";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  await requireAdminUser();

  const databaseProducts = await getAdminCatalogProducts();

  return (
    <>
      <AdminPageHeading eyebrow="PRODUCTS" title="محصولات" description="محصولات واقعی Database و داده‌های نمایشی پنل" />

      <section className="mt-8" aria-labelledby="database-products-heading">
        <div className="flex items-end justify-between gap-5 border-b border-line pb-4">
          <div><h2 id="database-products-heading" className="text-lg text-silver-bright">محصولات Database</h2><p className="mt-2 text-xs text-muted">داده واقعی؛ ویرایش‌ها مستقیماً ذخیره می‌شوند.</p></div>
          <span className="text-xs text-subtle">{databaseProducts.length.toLocaleString("fa-IR")} محصول</span>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {databaseProducts.map((product) => {
            const prices = product.variants.map((variant) => variant.priceToman);
            const minPrice = prices.length ? Math.min(...prices) : 0;
            const maxPrice = prices.length ? Math.max(...prices) : 0;
            return (
              <article key={product.id} className="border border-line bg-matte p-5 sm:p-6">
                <div className="flex items-start justify-between gap-5">
                  <div><h3 className="text-base text-silver-bright">{product.name}</h3><p className="mt-2 text-xs text-muted">{product.categoryName}{product.subcategoryName ? ` / ${product.subcategoryName}` : ""}</p></div>
                  <span className="text-xs text-muted">{product.isPublished ? "منتشرشده" : "پیش‌نویس"}</span>
                </div>
                <dl className="mt-5 grid gap-3 border-y border-line py-4 text-xs sm:grid-cols-2">
                  <div><dt className="text-subtle">Variant</dt><dd className="mt-1 text-silver">{product.variants.length.toLocaleString("fa-IR")}</dd></div>
                  <div><dt className="text-subtle">بازه قیمت</dt><dd className="mt-1 text-silver">{minPrice === maxPrice ? formatToman(minPrice) : `${formatToman(minPrice)} تا ${formatToman(maxPrice)}`}</dd></div>
                </dl>
                <Link href={`/admin/products/${product.id}`} className="mt-5 inline-flex min-h-11 items-center border border-line-strong px-5 text-xs text-silver transition-colors hover:border-silver hover:text-silver-bright">مشاهده و ویرایش</Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="demo-products-heading">
        <div className="border-b border-line pb-4"><h2 id="demo-products-heading" className="text-lg text-silver-bright">محصولات Demo</h2><p className="mt-2 text-xs text-muted">فقط داده نمایشی پنل؛ با محصولات Database ادغام نشده است.</p></div>
        <div className="mt-5 space-y-3 md:hidden">
          {adminProducts.map((product) => (
            <article key={`${product.slug}-card`} className="border border-line bg-matte p-5">
              <div className="flex items-start justify-between gap-5 border-b border-line pb-4"><h3 className="text-base text-silver-bright">{product.name}</h3><span className={`text-xs ${product.inventory === 0 ? "text-danger" : "text-muted"}`}>{product.status}</span></div>
              <dl className="mt-4 space-y-3 text-xs"><div className="flex justify-between gap-5"><dt className="text-muted">دسته</dt><dd dir="ltr" className="font-latin text-silver">{product.category}</dd></div><div className="flex justify-between gap-5"><dt className="text-muted">قیمت</dt><dd className="text-silver">{formatToman(product.priceToman)}</dd></div><div className="flex justify-between gap-5"><dt className="text-muted">موجودی</dt><dd className="text-silver">{product.inventory.toLocaleString("fa-IR")}</dd></div></dl>
            </article>
          ))}
        </div>
        <div className="mt-5 hidden overflow-x-auto border border-line md:block">
          <table className="w-full min-w-[48rem] border-collapse text-sm"><thead className="bg-matte text-xs text-muted"><tr><th className="p-4 text-start font-normal">محصول</th><th className="p-4 text-start font-normal">دسته</th><th className="p-4 text-start font-normal">قیمت</th><th className="p-4 text-start font-normal">موجودی</th><th className="p-4 text-start font-normal">وضعیت</th></tr></thead><tbody className="divide-y divide-line">{adminProducts.map((product) => <tr key={product.slug}><td className="p-4 text-silver-bright">{product.name}</td><td className="p-4 font-latin text-xs text-muted">{product.category}</td><td className="p-4 text-silver">{formatToman(product.priceToman)}</td><td className="p-4 text-silver">{product.inventory.toLocaleString("fa-IR")}</td><td className={`p-4 ${product.inventory === 0 ? "text-danger" : "text-muted"}`}>{product.status}</td></tr>)}</tbody></table>
        </div>
      </section>
    </>
  );
}