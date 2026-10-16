import { z } from "zod";

export const adminCatalogProductInputSchema = z.object({
  name: z.string().trim().min(2, "نام محصول الزامی است.").max(120),
  longDescription: z.string().trim().max(8000).nullable(),
  variants: z.array(z.object({
    id: z.string().min(1),
    priceToman: z.number().int().positive("قیمت باید عدد صحیح مثبت باشد.").max(2_000_000_000),
  })).min(1),
  specifications: z.array(z.object({
    id: z.string().min(1),
    label: z.string().trim().min(1, "عنوان مشخصه الزامی است.").max(120),
    value: z.string().trim().min(1, "مقدار مشخصه الزامی است.").max(1000),
  })),
});

export type AdminCatalogProductInput = z.infer<typeof adminCatalogProductInputSchema>;