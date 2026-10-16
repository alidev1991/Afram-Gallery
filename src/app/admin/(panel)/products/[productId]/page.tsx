import { notFound } from "next/navigation";

import { AdminPageHeading } from "@/components/admin/admin-page-heading";
import { AdminProductEditor } from "@/components/admin/admin-product-editor";
import { requireAdminUser } from "@/lib/auth/authorization";
import { getAdminCatalogProductById } from "@/lib/catalog/admin-product-repository";

type AdminProductPageProps = { params: Promise<{ productId: string }> };

export const dynamic = "force-dynamic";

export default async function AdminProductPage({ params }: AdminProductPageProps) {
  await requireAdminUser();

  const { productId } = await params;
  const product = await getAdminCatalogProductById(productId);
  if (!product) notFound();

  return (
    <>
      <AdminPageHeading eyebrow="DATABASE PRODUCT" title={product.name} description="ویرایش محدود اطلاعات، مشخصات فنی و قیمت Variantهای واقعی" />
      <AdminProductEditor product={product} />
    </>
  );
}