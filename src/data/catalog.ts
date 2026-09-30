import { storeCollections } from "@/data/site-structure";

export type CatalogImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CatalogCollection = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  coverImage: CatalogImage;
  productSlugs: readonly string[];
};

export type CatalogProduct = {
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  collectionSlugs: readonly string[];
  category: string;
  name: string;
  priceToman: number;
  description: string;
  featured: boolean;
  primaryImage: CatalogImage;
  galleryImages: readonly CatalogImage[];
  specifications: readonly {
    label: string;
    value: string;
  }[];
};

const images = {
  objects: {
    src: "/media/home/collection-objects.webp",
    alt: "ترکیب ظروف سرامیکی تیره و آبجکت نقره‌ای روی پایه سنگی",
    width: 900,
    height: 1200,
  },
  table: {
    src: "/media/home/collection-table.webp",
    alt: "چیدمان مینیمال میز پذیرایی با ظروف تیره و شمعدان فلزی",
    width: 900,
    height: 1200,
  },
  light: {
    src: "/media/home/collection-light.webp",
    alt: "چراغ ایستاده مجسمه‌وار در فضای نشیمن تیره و مینیمال",
    width: 900,
    height: 1200,
  },
  editorial: {
    src: "/media/home/editorial-living.webp",
    alt: "فضای نشیمن معاصر با پالت تیره و آبجکت‌های مینیمال",
    width: 1600,
    height: 1067,
  },
  vessel: {
    src: "/media/home/piece-vessel.webp",
    alt: "گلدان سرامیکی مشکی دست‌ساز در نور گالری",
    width: 800,
    height: 1100,
  },
  sculpture: {
    src: "/media/home/piece-sculpture.webp",
    alt: "مجسمه انتزاعی از فلز نقره‌ای برس‌خورده روی سنگ تیره",
    width: 800,
    height: 1100,
  },
  candlesticks: {
    src: "/media/home/piece-candlesticks.webp",
    alt: "یک جفت شمعدان مینیمال مشکی با شمع‌های روشن‌نشده",
    width: 800,
    height: 1100,
  },
} as const satisfies Record<string, CatalogImage>;

export const catalogProducts: readonly CatalogProduct[] = [
  {
    slug: "noir-vessel",
    categorySlug: "flowers-vases",
    subcategorySlug: "decorative-vases",
    collectionSlugs: ["newest"],
    category: "Decorative Vase",
    name: "گلدان نوآر",
    priceToman: 8_900_000,
    description: "گلدان دکوراتیو سرامیکی با پرداخت مات مشکی و فرم دست‌ساز.",
    featured: true,
    primaryImage: images.vessel,
    galleryImages: [images.vessel, images.objects],
    specifications: [
      { label: "متریال", value: "سرامیک" },
      { label: "پرداخت", value: "مات" },
      { label: "رنگ", value: "مشکی" },
      { label: "ارتفاع", value: "۴۸ سانتی‌متر" },
    ],
  },
  {
    slug: "arc-sculpture",
    categorySlug: "decorative-accessories",
    subcategorySlug: "sculptures-figurines",
    collectionSlugs: ["arfam-signature"],
    category: "Sculpture",
    name: "مجسمه آرک",
    priceToman: 14_600_000,
    description: "آبجکت دکوراتیو فلزی با سطح برس‌خورده و پایه سنگی.",
    featured: true,
    primaryImage: images.sculpture,
    galleryImages: [images.sculpture, images.editorial],
    specifications: [
      { label: "متریال", value: "استیل و سنگ" },
      { label: "پرداخت", value: "برس‌خورده" },
      { label: "رنگ", value: "نقره‌ای" },
      { label: "ارتفاع", value: "۵۶ سانتی‌متر" },
    ],
  },
  {
    slug: "line-candlesticks",
    categorySlug: "decorative-accessories",
    subcategorySlug: "candlesticks",
    collectionSlugs: ["best-sellers"],
    category: "Candleware",
    name: "شمعدان لاین",
    priceToman: 6_750_000,
    description: "ست دو عددی شمعدان فلزی با پرداخت مشکی و ارتفاع متفاوت.",
    featured: true,
    primaryImage: images.candlesticks,
    galleryImages: [images.candlesticks, images.table],
    specifications: [
      { label: "متریال", value: "فلز" },
      { label: "تعداد", value: "دو عدد" },
      { label: "رنگ", value: "مشکی" },
      { label: "ارتفاع", value: "۳۶ و ۴۴ سانتی‌متر" },
    ],
  },
  {
    slug: "floor-light",
    categorySlug: "lighting",
    subcategorySlug: "floor-lamps",
    collectionSlugs: ["newest"],
    category: "Lighting",
    name: "چراغ فلور",
    priceToman: 21_800_000,
    description: "چراغ ایستاده فلزی با بدنه مشکی و نور متمرکز.",
    featured: false,
    primaryImage: images.light,
    galleryImages: [images.light, images.editorial],
    specifications: [
      { label: "متریال", value: "فلز" },
      { label: "نوع", value: "چراغ ایستاده" },
      { label: "رنگ", value: "مشکی" },
      { label: "ارتفاع", value: "۱۵۸ سانتی‌متر" },
    ],
  },
] as const;

const collectionPresentation = {
  newest: {
    coverImage: images.objects,
    productSlugs: ["noir-vessel", "floor-light"],
  },
  "best-sellers": {
    coverImage: images.table,
    productSlugs: ["line-candlesticks"],
  },
  "arfam-signature": {
    coverImage: images.sculpture,
    productSlugs: ["arc-sculpture"],
  },
  "limited-editions": {
    coverImage: images.light,
    productSlugs: [],
  },
} as const;

export const catalogCollections: readonly CatalogCollection[] = storeCollections.map(
  (collection) => ({
    ...collection,
    ...collectionPresentation[collection.slug],
  }),
);

export const featuredProducts = catalogProducts.filter((product) => product.featured);

export function getCollectionBySlug(slug: string) {
  return catalogCollections.find((collection) => collection.slug === slug);
}

export function getProductBySlug(slug: string) {
  return catalogProducts.find((product) => product.slug === slug);
}

export function getProductsForCollection(collection: CatalogCollection) {
  return collection.productSlugs.flatMap((slug) => {
    const product = getProductBySlug(slug);
    return product ? [product] : [];
  });
}

export function getProductsForCategory(categorySlug: string) {
  return catalogProducts.filter((product) => product.categorySlug === categorySlug);
}

export function getProductsForSubcategory(
  categorySlug: string,
  subcategorySlug: string,
) {
  return catalogProducts.filter(
    (product) =>
      product.categorySlug === categorySlug &&
      product.subcategorySlug === subcategorySlug,
  );
}