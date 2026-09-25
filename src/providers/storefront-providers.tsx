"use client";

import type { ReactNode } from "react";

import { CartProvider } from "@/providers/cart-provider";
import { DemoAuthProvider } from "@/providers/demo-auth-provider";

export function StorefrontProviders({ children }: { children: ReactNode }) {
  return (
    <DemoAuthProvider>
      <CartProvider>{children}</CartProvider>
    </DemoAuthProvider>
  );
}
