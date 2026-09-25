"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { formatToman } from "@/lib/format-price";
import { useDemoAuth } from "@/providers/demo-auth-provider";
import { useCart } from "@/providers/cart-provider";

const actionClass =
  "inline-flex min-h-11 items-center justify-center border border-silver bg-silver px-6 py-2.5 text-xs font-medium tracking-wide text-canvas transition-colors hover:border-silver-bright hover:bg-silver-bright";
const primaryCheckoutClass =
  "inline-flex min-h-12 items-center justify-center border border-silver-bright bg-silver-bright px-6 py-3 text-xs font-semibold tracking-wide !text-canvas shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)] transition-[background-color,border-color,transform,box-shadow] duration-200 hover:border-white hover:bg-white hover:shadow-[0_0_0_1px_rgb(255_255_255_/_0.18)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-silver-bright active:translate-y-px active:border-silver active:bg-silver";

export default function CartPage() {
  const {
    items,
    totalToman,
    isHydrated,
    setQuantity,
    removeItem,
  } = useCart();
  const { customer } = useDemoAuth();

  return (
    <main id="main-content" className="min-h-[70svh] bg-canvas">
      <Container className="py-14 sm:py-20 lg:py-28">
        <div className="flex items-end justify-between gap-6 border-b border-line pb-7">
          <div>
            <p className="arfam-eyebrow text-subtle">CART</p>
            <h1 className="mt-4 text-4xl font-light text-silver-bright sm:text-5xl">
              سبد خرید
            </h1>
          </div>
          {items.length > 0 ? (
            <p className="text-xs text-muted">{items.length} محصول</p>
          ) : null}
        </div>

        {!isHydrated ? (
          <div className="py-24 text-center text-sm text-muted">در حال بارگذاری سبد خرید…</div>
        ) : items.length === 0 ? (
          <section className="mx-auto max-w-xl py-24 text-center sm:py-32">
            <h2 className="text-2xl font-light text-silver-bright">سبد خرید خالی است</h2>
            <p className="mt-4 text-sm text-muted">برای انتخاب محصول، مجموعه‌ها را مشاهده کنید.</p>
            <Link href="/collections" className={`${actionClass} mt-8`}>
              مشاهده مجموعه‌ها
            </Link>
          </section>
        ) : (
          <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <ul className="divide-y divide-line border-y border-line">
              {items.map((item) => (
                <li key={item.productSlug} className="grid grid-cols-[6.5rem_1fr] gap-5 py-6 sm:grid-cols-[9rem_1fr_auto] sm:gap-7">
                  <Link
                    href={`/products/${item.productSlug}`}
                    className="relative aspect-[4/5] overflow-hidden bg-matte"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 104px, 144px"
                      className="object-contain"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-col justify-between py-1">
                    <div>
                      <Link
                        href={`/products/${item.productSlug}`}
                        className="text-base text-silver-bright transition-colors hover:text-silver"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-2 text-xs text-muted">{formatToman(item.priceToman)}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <div className="inline-flex items-center border border-line" aria-label={`تعداد ${item.name}`}>
                        <button
                          type="button"
                          className="size-10 text-lg text-muted transition-colors hover:text-silver-bright"
                          onClick={() => setQuantity(item.productSlug, item.quantity - 1)}
                          aria-label={`کاهش تعداد ${item.name}`}
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center font-latin text-xs text-silver-bright">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="size-10 text-lg text-muted transition-colors hover:text-silver-bright disabled:opacity-40"
                          onClick={() => setQuantity(item.productSlug, item.quantity + 1)}
                          disabled={item.quantity >= 20}
                          aria-label={`افزایش تعداد ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-xs text-muted underline-offset-4 transition-colors hover:text-danger hover:underline"
                        onClick={() => removeItem(item.productSlug)}
                      >
                        حذف
                      </button>
                    </div>
                  </div>

                  <p className="col-span-2 mt-2 text-start text-sm text-silver sm:col-span-1 sm:mt-0 sm:py-1 sm:text-end">
                    {formatToman(item.priceToman * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>

            <aside className="h-fit border border-line bg-matte p-6 sm:p-8 lg:sticky lg:top-[calc(var(--arfam-header-height)+2rem)]">
              <h2 className="text-lg font-medium text-silver-bright">خلاصه سفارش</h2>
              <div className="mt-7 flex items-center justify-between border-y border-line py-5 text-sm">
                <span className="text-muted">مجموع</span>
                <strong className="font-normal text-silver-bright">{formatToman(totalToman)}</strong>
              </div>
              <p className="mt-4 text-xs leading-6 text-subtle">هزینه ارسال در مرحله بعد مشخص می‌شود.</p>
              <Link
                href={customer ? "/checkout" : "/login?next=/checkout"}
                className={`${primaryCheckoutClass} mt-7 w-full`}
              >
                ادامه فرایند خرید
              </Link>
            </aside>
          </div>
        )}
      </Container>
    </main>
  );
}
