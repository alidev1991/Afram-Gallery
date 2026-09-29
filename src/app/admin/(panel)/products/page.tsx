import { AdminPageHeading } from "@/components/admin/admin-page-heading";
import { adminProducts } from "@/data/admin-demo";
import { formatToman } from "@/lib/format-price";

export default function AdminProductsPage() {
  return (
    <>
      <AdminPageHeading eyebrow="PRODUCTS" title="محصولات" description="فهرست محصولات و وضعیت موجودی" />
      <div className="mt-8 space-y-3 md:hidden">
        {adminProducts.map((product) => (
          <article key={`${product.slug}-card`} className="border border-line bg-matte p-5">
            <div className="flex items-start justify-between gap-5 border-b border-line pb-4">
              <h2 className="text-base text-silver-bright">{product.name}</h2>
              <span className={`text-xs ${product.inventory === 0 ? "text-danger" : "text-muted"}`}>
                {product.status}
              </span>
            </div>
            <dl className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between gap-5">
                <dt className="text-muted">دسته</dt>
                <dd dir="ltr" className="font-latin text-silver">{product.category}</dd>
              </div>
              <div className="flex justify-between gap-5">
                <dt className="text-muted">قیمت</dt>
                <dd className="text-silver">{formatToman(product.priceToman)}</dd>
              </div>
              <div className="flex justify-between gap-5">
                <dt className="text-muted">موجودی</dt>
                <dd className="text-silver">{product.inventory.toLocaleString("fa-IR")}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="mt-8 hidden overflow-x-auto border border-line md:block">
        <table className="w-full min-w-[48rem] border-collapse text-sm">
          <thead className="bg-matte text-xs text-muted"><tr><th className="p-4 text-start font-normal">محصول</th><th className="p-4 text-start font-normal">دسته</th><th className="p-4 text-start font-normal">قیمت</th><th className="p-4 text-start font-normal">موجودی</th><th className="p-4 text-start font-normal">وضعیت</th></tr></thead>
          <tbody className="divide-y divide-line">{adminProducts.map((product) => <tr key={product.slug}><td className="p-4 text-silver-bright">{product.name}</td><td className="p-4 font-latin text-xs text-muted">{product.category}</td><td className="p-4 text-silver">{formatToman(product.priceToman)}</td><td className="p-4 text-silver">{product.inventory.toLocaleString("fa-IR")}</td><td className={`p-4 ${product.inventory === 0 ? "text-danger" : "text-muted"}`}>{product.status}</td></tr>)}</tbody>
        </table>
      </div>
    </>
  );
}
