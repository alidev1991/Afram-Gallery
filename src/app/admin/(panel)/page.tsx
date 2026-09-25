import { AdminPageHeading } from "@/components/admin/admin-page-heading";
import { adminDashboard, adminOrders } from "@/data/admin-demo";
import { formatToman } from "@/lib/format-price";

const metrics = [
  { label: "محصولات", value: adminDashboard.productCount.toLocaleString("fa-IR") },
  { label: "سفارش‌ها", value: adminDashboard.orderCount.toLocaleString("fa-IR") },
  { label: "مشتریان", value: adminDashboard.customerCount.toLocaleString("fa-IR") },
  { label: "فروش", value: formatToman(adminDashboard.salesToman) },
] as const;

export default function AdminDashboardPage() {
  return (
    <>
      <AdminPageHeading eyebrow="DASHBOARD" title="داشبورد" description="نمای کلی اطلاعات Demo فروشگاه" />
      <section aria-label="خلاصه فروشگاه" className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.label} className="border border-line bg-matte p-6">
            <p className="text-xs text-muted">{metric.label}</p>
            <p className="mt-5 text-2xl font-light text-silver-bright">{metric.value}</p>
          </article>
        ))}
      </section>
      <section className="mt-10">
        <h2 className="mb-5 text-lg text-silver-bright">سفارش‌های اخیر</h2>
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[42rem] border-collapse text-start text-sm">
            <thead className="bg-matte text-xs text-muted"><tr><th className="p-4 text-start font-normal">شناسه</th><th className="p-4 text-start font-normal">مشتری</th><th className="p-4 text-start font-normal">مبلغ</th><th className="p-4 text-start font-normal">وضعیت</th></tr></thead>
            <tbody className="divide-y divide-line">{adminOrders.slice(0, 3).map((order) => <tr key={order.id}><td className="p-4 font-latin text-xs text-silver">{order.id}</td><td className="p-4 text-silver">{order.customer}</td><td className="p-4 text-silver">{formatToman(order.amountToman)}</td><td className="p-4 text-muted">{order.status}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}
