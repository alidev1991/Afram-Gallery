"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CatalogProduct } from "@/data/catalog";
import { useCart } from "@/providers/cart-provider";

export function AddToCartButton({ product }: { product: CatalogProduct }) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!isAdded) {
      return;
    }

    const timeout = window.setTimeout(() => setIsAdded(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [isAdded]);

  return (
    <Button
      className="mt-10 w-full sm:w-auto lg:w-full"
      onClick={() => {
        addItem(product);
        setIsAdded(true);
      }}
      aria-live="polite"
    >
      {isAdded ? "به سبد اضافه شد" : "افزودن به سبد خرید"}
    </Button>
  );
}
