import { AdminPageHeading } from "@/components/admin/admin-page-heading";
import { adminProducts } from "@/data/admin-demo";
import { formatToman } from "@/lib/format-price";

export default function AdminProductsPage() {
  return (
    <>
      <AdminPageHeading eyebrow="PRODUCTS" title="محصولات" description="فهرست محصولات Mock و وضعیت موجودی" />
      <div className="mt-8 overflow-x-auto border border-line">
        <table className="w-full min-w-[48rem] border-collapse text-sm">
          <thead className="bg-matte text-xs text-muted"><tr><th className="p-4 text-start font-normal">محصول</th><th className="p-4 text-start font-normal">دسته</th><th className="p-4 text-start font-normal">قیمت</th><th className="p-4 text-start font-normal">موجودی</th><th className="p-4 text-start font-normal">وضعیت</th></tr></thead>
          <tbody className="divide-y divide-line">{adminProducts.map((product) => <tr key={product.slug}><td className="p-4 text-silver-bright">{product.name}</td><td className="p-4 font-latin text-xs text-muted">{product.category}</td><td className="p-4 text-silver">{formatToman(product.priceToman)}</td><td className="p-4 text-silver">{product.inventory.toLocaleString("fa-IR")}</td><td className={`p-4 ${product.inventory === 0 ? "text-danger" : "text-muted"}`}>{product.status}</td></tr>)}</tbody>
        </table>
      </div>
    </>
  );
}
