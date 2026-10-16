"use client";

import { useState } from "react";

import { updateAdminProductAction } from "@/app/admin/(panel)/products/[productId]/actions";
import { Button } from "@/components/ui/button";
import { formatToman } from "@/lib/format-price";
import type { AdminCatalogProductDto } from "@/types/admin-catalog";

const fieldClass = "mt-2 min-h-11 w-full border border-line bg-canvas px-3 py-2 text-sm text-silver-bright outline-none transition-colors focus:border-silver";

export function AdminProductEditor({ product }: { product: AdminCatalogProductDto }) {
  const [name, setName] = useState(product.name);
  const [longDescription, setLongDescription] = useState(product.longDescription ?? "");
  const [variants, setVariants] = useState(product.variants);
  const [specifications, setSpecifications] = useState(product.specifications);
  const [status, setStatus] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  async function save() {
    setIsSaving(true);
    setStatus(null);
    const result = await updateAdminProductAction(product.id, {
      name,
      longDescription: longDescription || null,
      variants: variants.map(({ id, priceToman }) => ({ id, priceToman })),
      specifications: specifications.map(({ id, label, value }) => ({ id, label, value })),
    });
    setStatus(result.ok ? "تغییرات در Database ذخیره شد." : result.error);
    setIsSaving(false);
  }

  return (
    <div className="mt-8 space-y-8">
      <section className="border border-line bg-matte p-5 sm:p-7">
        <div className="grid gap-5 text-xs text-muted sm:grid-cols-2 lg:grid-cols-4">
          <p>Slug: <span dir="ltr" className="text-silver">{product.slug}</span></p>
          <p>وضعیت: <span className="text-silver">{product.isPublished ? "منتشرشده" : "پیش‌نویس"}</span></p>
          <p>تصاویر: <span className="text-silver">{product.imageCount.toLocaleString("fa-IR")}</span></p>
          <p>Presentation: <span className="text-silver">{product.presentationCount.toLocaleString("fa-IR")}</span></p>
        </div>
        <p className="mt-4 text-[0.6875rem] leading-5 text-subtle">وضعیت انتشار، تصاویر، Optionها و Presentationها در این فرم قابل تغییر نیستند.</p>
      </section>

      <section className="border border-line p-5 sm:p-7">
        <h2 className="text-lg text-silver-bright">اطلاعات محصول</h2>
        <label className="mt-6 block text-xs text-muted">نام محصول<input value={name} onChange={(event) => setName(event.target.value)} className={fieldClass} /></label>
        <label className="mt-5 block text-xs text-muted">توضیحات بلند<textarea value={longDescription} onChange={(event) => setLongDescription(event.target.value)} rows={7} className={fieldClass} /></label>
      </section>

      <section className="border border-line p-5 sm:p-7">
        <h2 className="text-lg text-silver-bright">قیمت Variantها</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {variants.map((variant, index) => (
            <label key={variant.id} className="block border border-line bg-matte p-4 text-xs text-muted">
              {variant.optionsLabel}
              <input type="number" min="1" step="1" value={variant.priceToman} onChange={(event) => setVariants((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, priceToman: Number(event.target.value) } : item))} className={fieldClass} dir="ltr" />
              <span className="mt-2 block text-subtle">{formatToman(variant.priceToman || 0)}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="border border-line p-5 sm:p-7">
        <h2 className="text-lg text-silver-bright">مشخصات فنی</h2>
        <div className="mt-6 space-y-4">
          {specifications.map((specification, index) => (
            <div key={specification.id} className="grid gap-3 border border-line bg-matte p-4 sm:grid-cols-2">
              <label className="text-xs text-muted">عنوان<input value={specification.label} onChange={(event) => setSpecifications((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item))} className={fieldClass} /></label>
              <label className="text-xs text-muted">مقدار<input value={specification.value} onChange={(event) => setSpecifications((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, value: event.target.value } : item))} className={fieldClass} /></label>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-5">
        <Button onClick={() => void save()} disabled={isSaving}>{isSaving ? "در حال ذخیره…" : "ذخیره تغییرات"}</Button>
        {status ? <p role="status" className="text-xs text-muted">{status}</p> : null}
      </div>
    </div>
  );
}