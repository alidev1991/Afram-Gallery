import { catalogProducts } from "@/data/catalog";

export const adminProducts = catalogProducts.map((product, index) => ({
  slug: product.slug,
  name: product.name,
  category: product.category,
  priceToman: product.priceToman,
  inventory: [6, 3, 0, 8][index] ?? 0,
  status: index === 2 ? "ناموجود" : "فعال",
}));

export const adminOrders = [
  { id: "AR-1048", customer: "سارا احمدی", amountToman: 23_500_000, status: "در انتظار" },
  { id: "AR-1047", customer: "کیان نادری", amountToman: 14_600_000, status: "پرداخت‌شده" },
  { id: "AR-1046", customer: "نیلوفر رضایی", amountToman: 15_650_000, status: "ارسال‌شده" },
  { id: "AR-1045", customer: "آرمان محمدی", amountToman: 21_800_000, status: "تحویل‌شده" },
] as const;

export const adminCustomers = [
  { id: "CU-204", firstName: "سارا", lastName: "احمدی", mobile: "09121234567", email: "sara@example.com", birthDate: "1992-05-10", orders: 2 },
  { id: "CU-203", firstName: "کیان", lastName: "نادری", mobile: "09193334455", email: undefined, birthDate: "1988-11-27", orders: 1 },
  { id: "CU-202", firstName: "نیلوفر", lastName: "رضایی", mobile: "09105556677", email: "niloufar@example.com", birthDate: "1995-02-14", orders: 3 },
  { id: "CU-201", firstName: "آرمان", lastName: "محمدی", mobile: "09358889900", email: "arman@example.com", birthDate: "1985-08-03", orders: 1 },
] as const;

export const adminDashboard = {
  productCount: adminProducts.length,
  orderCount: adminOrders.length,
  customerCount: adminCustomers.length,
  salesToman: adminOrders.reduce((sum, order) => sum + order.amountToman, 0),
};
