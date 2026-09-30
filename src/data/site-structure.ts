export type ProductSubcategory = {
  slug: string;
  title: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  subcategories: readonly ProductSubcategory[];
};

export type StoreCollection = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
};

export type MagazineCategory = {
  slug: string;
  title: string;
};

export const productCategories = [
  {
    slug: "decorative-accessories",
    title: "اکسسوری دکوری",
    subcategories: [
      { slug: "sculptures-figurines", title: "مجسمه و فیگور" },
      { slug: "tabletop-accessories", title: "اکسسوری رومیزی" },
      { slug: "wall-decor", title: "دکور دیواری" },
      { slug: "candlesticks", title: "شمعدان" },
      { slug: "decorative-trays", title: "سینی دکوراتیو" },
      { slug: "decorative-candles", title: "شمع دکوراتیو" },
    ],
  },
  {
    slug: "clocks",
    title: "ساعت",
    subcategories: [
      { slug: "square-wall-clocks", title: "ساعت دیواری مربع" },
      { slug: "round-wall-clocks", title: "ساعت دیواری گرد" },
      { slug: "table-clocks", title: "ساعت رومیزی" },
      { slug: "floor-clocks", title: "ساعت کنار سالنی" },
    ],
  },
  {
    slug: "serveware",
    title: "سرویس پذیرایی",
    subcategories: [
      { slug: "aluminium", title: "کالکشن آلومینیومی" },
      { slug: "stainless-steel", title: "کالکشن استیل" },
      { slug: "brass", title: "کالکشن برنجی" },
      { slug: "crystal-glass", title: "کالکشن کریستال و شیشه" },
      { slug: "wood", title: "کالکشن چوبی" },
      { slug: "ceramic", title: "کالکشن سرامیکی" },
      { slug: "melamine", title: "کالکشن ملامین" },
    ],
  },
  {
    slug: "lighting",
    title: "نور و روشنایی",
    subcategories: [
      { slug: "table-lamps", title: "آباژور رومیزی" },
      { slug: "floor-lamps", title: "آباژور کنار سالنی" },
      { slug: "chandeliers", title: "لوستر" },
      { slug: "decorative-lights", title: "چراغ دکوراتیو" },
    ],
  },
  {
    slug: "flowers-vases",
    title: "گل و گلدان",
    subcategories: [
      { slug: "decorative-vases", title: "گلدان دکوراتیو" },
      { slug: "floor-vases", title: "گلدان کنار سالنی" },
      { slug: "artificial-flowers", title: "گل مصنوعی / گل دکوراتیو" },
    ],
  },
  {
    slug: "tables",
    title: "میز",
    subcategories: [
      { slug: "three-size-coffee-tables", title: "میز ۳ سایز جلو مبلی" },
      { slug: "three-size-side-tables", title: "میز ۳ سایز عسلی" },
      { slug: "decorative-tables", title: "میز دکوراتیو" },
      { slug: "consoles", title: "کنسول" },
    ],
  },
  {
    slug: "artworks",
    title: "تابلو و آثار هنری",
    subcategories: [
      { slug: "custom-art", title: "آثار هنری سفارشی" },
      { slug: "digital-art", title: "دیجیتال آرت" },
    ],
  },
] as const satisfies readonly ProductCategory[];

export const storeCollections = [
  { slug: "newest", title: "جدیدترین", eyebrow: "New Arrivals", description: "محصولات تازه‌افزوده‌شده به مجموعه آرفام." },
  { slug: "best-sellers", title: "پرفروش‌ترین", eyebrow: "Best Sellers", description: "محصولات منتخب بر اساس استقبال مشتریان آرفام." },
  { slug: "arfam-signature", title: "امضای آرفام", eyebrow: "ARFAM Signature", description: "محصولات طراحی و تولید مجموعه آرفام." },
  { slug: "limited-editions", title: "آثار محدود", eyebrow: "Limited Editions", description: "آثاری که با تعداد محدود ارائه می‌شوند." },
] as const satisfies readonly StoreCollection[];

export const magazineCategories = [
  { slug: "decor-and-styles", title: "دکوراسیون و سبک‌شناسی" },
  { slug: "selection-and-styling", title: "راهنمای انتخاب و چیدمان" },
  { slug: "materials-and-care", title: "راهنمای متریال و اصول نگهداری" },
] as const satisfies readonly MagazineCategory[];

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductSubcategory(category: ProductCategory, slug: string) {
  return category.subcategories.find((subcategory) => subcategory.slug === slug);
}

export function getMagazineCategory(slug: string) {
  return magazineCategories.find((category) => category.slug === slug);
}