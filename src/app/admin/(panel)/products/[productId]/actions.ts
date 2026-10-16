"use server";

import { revalidatePath } from "next/cache";

import { UserRole } from "@/generated/prisma/enums";
import { getAuthorizedUser } from "@/lib/auth/authorization";
import { updateAdminCatalogProduct } from "@/lib/catalog/admin-product-repository";
import { adminCatalogProductInputSchema } from "@/lib/catalog/admin-product-validation";

export type UpdateAdminProductResult = { ok: true } | { ok: false; error: string };

export async function updateAdminProductAction(productId: string, input: unknown): Promise<UpdateAdminProductResult> {
  const admin = await getAuthorizedUser(UserRole.ADMIN);
  if (!admin) return { ok: false, error: "دسترسی مدیر برای این تغییر لازم است." };

  const parsed = adminCatalogProductInputSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "اطلاعات واردشده معتبر نیست." };

  try {
    await updateAdminCatalogProduct(productId, parsed.data);
    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${productId}`);
    revalidatePath("/products/category/clocks/square-wall-clocks");
    revalidatePath("/products/internal-square-wall-clock");
    return { ok: true };
  } catch {
    return { ok: false, error: "ذخیره تغییرات انجام نشد. اطلاعات صفحه را تازه کنید و دوباره تلاش کنید." };
  }
}