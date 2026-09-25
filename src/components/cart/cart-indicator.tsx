"use client";

import Link from "next/link";

import { BagIcon } from "@/components/icons/interface-icons";
import { useCart } from "@/providers/cart-provider";

export function CartIndicator({ className = "" }: { className?: string }) {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`سبد خرید، ${itemCount} کالا`}
      className={`relative ${className}`}
    >
      <BagIcon className="size-5" />
      {itemCount > 0 ? (
        <span className="absolute end-0.5 top-0.5 flex min-h-4 min-w-4 items-center justify-center rounded-full bg-silver-bright px-1 font-latin text-[0.5625rem] font-semibold leading-none text-canvas">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      ) : null}
    </Link>
  );
}
