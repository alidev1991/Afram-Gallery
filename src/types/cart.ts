export type CartSelectedOption = {
  optionName: string;
  valueLabel: string;
  optionSlug: string;
  valueSlug: string;
};

export type ConfiguredCartItemInput = {
  productId: string;
  variantId: string;
  productSlug: string;
  productHref: string;
  name: string;
  unitPriceToman: number;
  imageSrc: string;
  imageAlt: string;
  selectedOptions: CartSelectedOption[];
};

export type CartItem = {
  key: string;
  source: "mock" | "database-preview";
  productId: string | null;
  variantId: string | null;
  productSlug: string;
  productHref: string;
  name: string;
  unitPriceToman: number;
  imageSrc: string;
  imageAlt: string;
  selectedOptions: CartSelectedOption[];
  quantity: number;
  checkoutBlocked: boolean;
};