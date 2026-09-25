"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { CatalogProduct } from "@/data/catalog";

export type CartItem = {
  productSlug: string;
  name: string;
  priceToman: number;
  imageSrc: string;
  imageAlt: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  totalToman: number;
  isHydrated: boolean;
  addItem: (product: CatalogProduct) => void;
  setQuantity: (productSlug: string, quantity: number) => void;
  removeItem: (productSlug: string) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "arfam.demo.cart.v1";
const MAX_QUANTITY = 20;
const CartContext = createContext<CartContextValue | null>(null);

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Partial<CartItem>;
  return (
    typeof item.productSlug === "string" &&
    typeof item.name === "string" &&
    typeof item.priceToman === "number" &&
    Number.isInteger(item.priceToman) &&
    item.priceToman >= 0 &&
    typeof item.imageSrc === "string" &&
    typeof item.imageAlt === "string" &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  );
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const hydrationTask = window.setTimeout(() => {
      try {
        const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
        if (storedCart) {
          const parsed = JSON.parse(storedCart) as unknown;
          if (Array.isArray(parsed)) {
            setItems(parsed.filter(isCartItem));
          }
        }
      } catch {
        window.localStorage.removeItem(CART_STORAGE_KEY);
      } finally {
        setIsHydrated(true);
      }
    }, 0);

    return () => window.clearTimeout(hydrationTask);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [isHydrated, items]);

  const addItem = useCallback((product: CatalogProduct) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.productSlug === product.slug,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.productSlug === product.slug
            ? { ...item, quantity: Math.min(item.quantity + 1, MAX_QUANTITY) }
            : item,
        );
      }

      return [
        ...currentItems,
        {
          productSlug: product.slug,
          name: product.name,
          priceToman: product.priceToman,
          imageSrc: product.primaryImage.src,
          imageAlt: product.primaryImage.alt,
          quantity: 1,
        },
      ];
    });
  }, []);

  const setQuantity = useCallback((productSlug: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.productSlug !== productSlug),
      );
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productSlug === productSlug
          ? { ...item, quantity: Math.min(quantity, MAX_QUANTITY) }
          : item,
      ),
    );
  }, []);

  const removeItem = useCallback((productSlug: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.productSlug !== productSlug),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalToman = items.reduce(
    (sum, item) => sum + item.priceToman * item.quantity,
    0,
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      totalToman,
      isHydrated,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
    }),
    [
      addItem,
      clearCart,
      isHydrated,
      itemCount,
      items,
      removeItem,
      setQuantity,
      totalToman,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider.");
  }

  return context;
}
