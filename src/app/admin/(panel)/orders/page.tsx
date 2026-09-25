import { AdminPageHeading } from "@/components/admin/admin-page-heading";
import { adminOrders } from "@/data/admin-demo";
import { formatToman } from "@/lib/format-price";

export default function AdminOrdersPage() {
  return (
    <>
      <AdminPageHeading eyebrow="ORDERS" title="سفارش‌ها" description="فهرست سفارش‌های Mock برای ارائه Demo" />
      <div className="mt-8 overflow-x-auto border border-line">
        <table className="w-full min-w-[42rem] border-collapse text-sm">
          <thead className="bg-matte text-xs text-muted"><tr><th className="p-4 text-start font-normal">شناسه</th><th className="p-4 text-start font-normal">مشتری</th><th className="p-4 text-start font-normal">مبلغ</th><th className="p-4 text-start font-normal">وضعیت</th></tr></thead>
          <tbody className="divide-y divide-line">{adminOrders.map((order) => <tr key={order.id}><td className="p-4 font-latin text-xs text-silver">{order.id}</td><td className="p-4 text-silver-bright">{order.customer}</td><td className="p-4 text-silver">{formatToman(order.amountToman)}</td><td className="p-4 text-muted">{order.status}</td></tr>)}</tbody>
        </table>
      </div>
    </>
  );
}
