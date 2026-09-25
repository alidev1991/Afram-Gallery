"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Container } from "@/components/ui/container";
import { formatToman } from "@/lib/format-price";
import { useCart } from "@/providers/cart-provider";
import { useDemoAuth } from "@/providers/demo-auth-provider";

export default function CheckoutPage() {
  const router = useRouter();
  const { customer, isHydrated: isAuthHydrated } = useDemoAuth();
  const { items, totalToman, isHydrated: isCartHydrated } = useCart();

  useEffect(() => {
    if (isAuthHydrated && !customer) {
      router.replace("/login?next=/checkout");
    }
  }, [customer, isAuthHydrated, router]);

  if (!isAuthHydrated || !isCartHydrated || !customer) {
    return (
      <main id="main-content" className="min-h-[70svh] bg-canvas">
        <Container className="py-24 text-center text-sm text-muted">در حال آماده‌سازی تسویه حساب…</Container>
      </main>
    );
  }

  return (
    <main id="main-content" className="min-h-[70svh] bg-canvas">
      <Container className="py-14 sm:py-20 lg:py-28">
        <p className="arfam-eyebrow text-subtle">CHECKOUT</p>
        <h1 className="mt-4 border-b border-line pb-7 text-4xl font-light text-silver-bright sm:text-5xl">تسویه حساب</h1>

        {items.length === 0 ? (
          <section className="py-24 text-center">
            <h2 className="text-2xl font-light text-silver-bright">سبد خرید خالی است</h2>
            <Link href="/collections" className="mt-7 inline-block text-sm text-silver underline underline-offset-4">مشاهده مجموعه‌ها</Link>
          </section>
        ) : (
          <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
            <div className="space-y-10">
              <section className="border border-line bg-matte p-6 sm:p-8">
                <div className="flex items-center justify-between gap-6">
                  <h2 className="text-lg text-silver-bright">اطلاعات مشتری</h2>
                  <Link href="/account" className="text-xs text-muted underline underline-offset-4">حساب کاربری</Link>
                </div>
                <dl className="mt-6 grid gap-5 text-sm sm:grid-cols-2">
                  <div><dt className="text-xs text-subtle">نام و نام خانوادگی</dt><dd className="mt-1 text-silver">{customer.firstName} {customer.lastName}</dd></div>
                  <div><dt className="text-xs text-subtle">شماره موبایل</dt><dd dir="ltr" className="mt-1 text-end text-silver sm:text-start">{customer.mobile}</dd></div>
                  {customer.email ? <div><dt className="text-xs text-subtle">ایمیل</dt><dd dir="ltr" className="mt-1 text-end text-silver sm:text-start">{customer.email}</dd></div> : null}
                </dl>
              </section>

              <section>
                <h2 className="border-b border-line pb-5 text-lg text-silver-bright">کالاها</h2>
                <ul className="divide-y divide-line">
                  {items.map((item) => (
                    <li key={item.productSlug} className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 py-5">
                      <div className="relative aspect-[4/5] overflow-hidden bg-matte">
                        <Image src={item.imageSrc} alt={item.imageAlt} fill sizes="72px" className="object-contain" />
                      </div>
                      <div><p className="text-sm text-silver-bright">{item.name}</p><p className="mt-1 text-xs text-muted">تعداد: {item.quantity}</p></div>
                      <p className="text-xs text-silver">{formatToman(item.priceToman * item.quantity)}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="h-fit border border-line bg-matte p-6 sm:p-8 lg:sticky lg:top-[calc(var(--arfam-header-height)+2rem)]">
              <h2 className="text-lg text-silver-bright">خلاصه سفارش</h2>
              <div className="mt-7 flex justify-between border-y border-line py-5 text-sm"><span className="text-muted">مجموع</span><strong className="font-normal text-silver-bright">{formatToman(totalToman)}</strong></div>
              <button type="button" disabled className="mt-7 min-h-11 w-full border border-line-strong px-6 text-xs text-muted opacity-70">پرداخت در نسخه Demo غیرفعال است</button>
              <p className="mt-4 text-[0.6875rem] leading-5 text-subtle">در این نسخه سفارش و پرداخت واقعی ثبت نمی‌شود.</p>
            </aside>
          </div>
        )}
      </Container>
    </main>
  );
}
