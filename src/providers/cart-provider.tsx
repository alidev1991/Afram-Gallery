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
import type {
  CartItem,
  CartSelectedOption,
  ConfiguredCartItemInput,
} from "@/types/cart";

export type { CartItem, CartSelectedOption, ConfiguredCartItemInput } from "@/types/cart";

type LegacyCartItem = {
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
  hasCheckoutBlockedItems: boolean;
  addItem: (product: CatalogProduct) => void;
  addConfiguredItem: (item: ConfiguredCartItemInput) => void;
  setQuantity: (itemKey: string, quantity: number) => void;
  removeItem: (itemKey: string) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "arfam.cart.v2";
const LEGACY_CART_STORAGE_KEY = "arfam.demo.cart.v1";
const MAX_QUANTITY = 20;
const CartContext = createContext<CartContextValue | null>(null);

function isPositiveInteger(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value > 0
  );
}

function isNonNegativeInteger(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 0
  );
}

function isSelectedOption(value: unknown): value is CartSelectedOption {
  if (!value || typeof value !== "object") {
    return false;
  }

  const option = value as Partial<CartSelectedOption>;

  return (
    typeof option.optionName === "string" &&
    typeof option.valueLabel === "string" &&
    typeof option.optionSlug === "string" &&
    typeof option.valueSlug === "string"
  );
}

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Partial<CartItem>;

  return (
    typeof item.key === "string" &&
    (item.source === "mock" || item.source === "database-preview") &&
    (item.productId === null || typeof item.productId === "string") &&
    (item.variantId === null || typeof item.variantId === "string") &&
    typeof item.productSlug === "string" &&
    typeof item.productHref === "string" &&
    item.productHref.startsWith("/") &&
    typeof item.name === "string" &&
    isNonNegativeInteger(item.unitPriceToman) &&
    typeof item.imageSrc === "string" &&
    typeof item.imageAlt === "string" &&
    Array.isArray(item.selectedOptions) &&
    item.selectedOptions.every(isSelectedOption) &&
    isPositiveInteger(item.quantity) &&
    typeof item.checkoutBlocked === "boolean"
  );
}

function isLegacyCartItem(value: unknown): value is LegacyCartItem {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Partial<LegacyCartItem>;

  return (
    typeof item.productSlug === "string" &&
    typeof item.name === "string" &&
    isNonNegativeInteger(item.priceToman) &&
    typeof item.imageSrc === "string" &&
    typeof item.imageAlt === "string" &&
    isPositiveInteger(item.quantity)
  );
}

function migrateLegacyItem(item: LegacyCartItem): CartItem {
  return {
    key: `mock:${item.productSlug}`,
    source: "mock",
    productId: null,
    variantId: null,
    productSlug: item.productSlug,
    productHref: `/products/${item.productSlug}`,
    name: item.name,
    unitPriceToman: item.priceToman,
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt,
    selectedOptions: [],
    quantity: Math.min(item.quantity, MAX_QUANTITY),
    checkoutBlocked: false,
  };
}

function toMockCartItem(product: CatalogProduct): CartItem {
  return {
    key: `mock:${product.slug}`,
    source: "mock",
    productId: null,
    variantId: null,
    productSlug: product.slug,
    productHref: `/products/${product.slug}`,
    name: product.name,
    unitPriceToman: product.priceToman,
    imageSrc: product.primaryImage.src,
    imageAlt: product.primaryImage.alt,
    selectedOptions: [],
    quantity: 1,
    checkoutBlocked: false,
  };
}

function toConfiguredCartItem(item: ConfiguredCartItemInput): CartItem {
  return {
    key: `database:${item.productId}:${item.variantId}`,
    source: "database-preview",
    ...item,
    quantity: 1,
    checkoutBlocked: true,
  };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const hydrationTask = window.setTimeout(() => {
      try {
        const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

        if (storedCart !== null) {
          const parsed = JSON.parse(storedCart) as unknown;
          setItems(
            Array.isArray(parsed)
              ? parsed.filter(isCartItem).map((item) => ({
                  ...item,
                  quantity: Math.min(item.quantity, MAX_QUANTITY),
                }))
              : [],
          );
          return;
        }

        const legacyCart = window.localStorage.getItem(LEGACY_CART_STORAGE_KEY);

        if (legacyCart) {
          const parsed = JSON.parse(legacyCart) as unknown;
          const migratedItems = Array.isArray(parsed)
            ? parsed.filter(isLegacyCartItem).map(migrateLegacyItem)
            : [];

          setItems(migratedItems);
          window.localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(migratedItems),
          );
          window.localStorage.removeItem(LEGACY_CART_STORAGE_KEY);
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

  const previewVariantIds = useMemo(
    () =>
      items
        .filter(
          (item) =>
            item.source === "database-preview" && item.variantId !== null,
        )
        .map((item) => item.variantId)
        .sort()
        .join(","),
    [items],
  );

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "development" ||
      !isHydrated ||
      !previewVariantIds
    ) {
      return;
    }

    const abortController = new AbortController();

    async function revalidatePreviewItems() {
      try {
        const response = await fetch("/api/dev-qa/catalog/cart-validation", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            variantIds: previewVariantIds.split(","),
          }),
          signal: abortController.signal,
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as { items?: unknown };
        const validatedItems = Array.isArray(payload.items)
          ? payload.items.filter(
              (item): item is ConfiguredCartItemInput =>
                Boolean(item) &&
                typeof item === "object" &&
                typeof (item as ConfiguredCartItemInput).variantId === "string" &&
                typeof (item as ConfiguredCartItemInput).productId === "string" &&
                isNonNegativeInteger(
                  (item as ConfiguredCartItemInput).unitPriceToman,
                ),
            )
          : [];
        const byVariantId = new Map(
          validatedItems.map((item) => [item.variantId, item]),
        );

        setItems((currentItems) =>
          currentItems.map((item) => {
            if (item.source !== "database-preview" || !item.variantId) {
              return item;
            }

            const validated = byVariantId.get(item.variantId);

            return validated
              ? {
                  ...toConfiguredCartItem(validated),
                  quantity: item.quantity,
                }
              : item;
          }),
        );
      } catch {
        // Preview cart remains blocked from checkout when revalidation is unavailable.
      }
    }

    void revalidatePreviewItems();

    return () => abortController.abort();
  }, [isHydrated, previewVariantIds]);

  const addItem = useCallback((product: CatalogProduct) => {
    const incomingItem = toMockCartItem(product);

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.key === incomingItem.key,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === incomingItem.key
            ? {
                ...incomingItem,
                quantity: Math.min(item.quantity + 1, MAX_QUANTITY),
              }
            : item,
        );
      }

      return [...currentItems, incomingItem];
    });
  }, []);

  const addConfiguredItem = useCallback((input: ConfiguredCartItemInput) => {
    const incomingItem = toConfiguredCartItem(input);

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.key === incomingItem.key,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === incomingItem.key
            ? {
                ...incomingItem,
                quantity: Math.min(item.quantity + 1, MAX_QUANTITY),
              }
            : item,
        );
      }

      return [...currentItems, incomingItem];
    });
  }, []);

  const setQuantity = useCallback((itemKey: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.key !== itemKey),
      );
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.key === itemKey
          ? { ...item, quantity: Math.min(quantity, MAX_QUANTITY) }
          : item,
      ),
    );
  }, []);

  const removeItem = useCallback((itemKey: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.key !== itemKey),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalToman = items.reduce(
    (sum, item) => sum + item.unitPriceToman * item.quantity,
    0,
  );
  const hasCheckoutBlockedItems = items.some((item) => item.checkoutBlocked);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      totalToman,
      isHydrated,
      hasCheckoutBlockedItems,
      addItem,
      addConfiguredItem,
      setQuantity,
      removeItem,
      clearCart,
    }),
    [
      addConfiguredItem,
      addItem,
      clearCart,
      hasCheckoutBlockedItems,
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
