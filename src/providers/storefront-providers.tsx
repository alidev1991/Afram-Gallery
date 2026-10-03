"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

import { CartProvider } from "@/providers/cart-provider";
import { DemoAuthProvider } from "@/providers/demo-auth-provider";

export function StorefrontProviders({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <DemoAuthProvider>
        <CartProvider>{children}</CartProvider>
      </DemoAuthProvider>
    </SessionProvider>
  );
}
