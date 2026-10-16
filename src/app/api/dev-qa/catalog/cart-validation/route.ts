import { NextResponse } from "next/server";
import { z } from "zod";

import { getInternalStorefrontProductBySlugForQa } from "@/lib/catalog/storefront-repository";
import { toPreviewCartItem } from "@/lib/catalog/preview-cart";

const squareClockQaSlug = "internal-square-wall-clock";
const requestSchema = z.object({
  variantIds: z.array(z.string().min(1)).max(20),
});

export async function POST(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const product = await getInternalStorefrontProductBySlugForQa(squareClockQaSlug);
  if (!product) {
    return NextResponse.json({ items: [] });
  }

  const requestedIds = new Set(parsed.data.variantIds);
  const items = product.variants
    .filter((variant) => requestedIds.has(variant.id))
    .map((variant) => toPreviewCartItem(product, variant))
    .filter((item) => item !== null);

  return NextResponse.json({ items });
}