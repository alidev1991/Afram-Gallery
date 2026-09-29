import { AdminPageHeading } from "@/components/admin/admin-page-heading";
import { adminOrders } from "@/data/admin-demo";
import { formatToman } from "@/lib/format-price";

export default function AdminOrdersPage() {
  return (
    <>
      <AdminPageHeading eyebrow="ORDERS" title="سفارش‌ها" description="فهرست سفارش‌ها و وضعیت پردازش" />
      <div className="mt-8 space-y-3 md:hidden">
        {adminOrders.map((order) => (
          <article key={`${order.id}-card`} className="border border-line bg-matte p-5">
            <div className="flex items-start justify-between gap-5 border-b border-line pb-4">
              <h2 className="text-base text-silver-bright">{order.customer}</h2>
              <span dir="ltr" className="font-latin text-[0.625rem] text-subtle">{order.id}</span>
            </div>
            <dl className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between gap-5">
                <dt className="text-muted">مبلغ</dt>
                <dd className="text-silver">{formatToman(order.amountToman)}</dd>
              </div>
              <div className="flex justify-between gap-5">
                <dt className="text-muted">وضعیت</dt>
                <dd className="text-silver">{order.status}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="mt-8 hidden overflow-x-auto border border-line md:block">
        <table className="w-full min-w-[42rem] border-collapse text-sm">
          <thead className="bg-matte text-xs text-muted"><tr><th className="p-4 text-start font-normal">شناسه</th><th className="p-4 text-start font-normal">مشتری</th><th className="p-4 text-start font-normal">مبلغ</th><th className="p-4 text-start font-normal">وضعیت</th></tr></thead>
          <tbody className="divide-y divide-line">{adminOrders.map((order) => <tr key={order.id}><td className="p-4 font-latin text-xs text-silver">{order.id}</td><td className="p-4 text-silver-bright">{order.customer}</td><td className="p-4 text-silver">{formatToman(order.amountToman)}</td><td className="p-4 text-muted">{order.status}</td></tr>)}</tbody>
        </table>
      </div>
    </>
  );
}
