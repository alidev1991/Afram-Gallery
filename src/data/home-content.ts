export type HomeCollection = {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
};

export type FeaturedPiece = {
  id: string;
  category: string;
  name: string;
  priceToman: number;
  image: string;
  imageAlt: string;
};

export const homeCollections: readonly HomeCollection[] = [
  {
    id: "objects",
    eyebrow: "Objects",
    title: "آبجکت‌های ماندگار",
    image: "/media/home/collection-objects.webp",
    imageAlt: "ترکیب ظروف سرامیکی تیره و آبجکت نقره‌ای روی پایه سنگی",
  },
  {
    id: "table",
    eyebrow: "Table",
    title: "آیین میزبانی",
    image: "/media/home/collection-table.webp",
    imageAlt: "چیدمان مینیمال میز پذیرایی با ظروف تیره و شمعدان فلزی",
  },
  {
    id: "light",
    eyebrow: "Light",
    title: "نورهای مجسمه‌وار",
    image: "/media/home/collection-light.webp",
    imageAlt: "چراغ ایستاده مجسمه‌وار در فضای نشیمن تیره و مینیمال",
  },
] as const;

export const featuredPieces: readonly FeaturedPiece[] = [
  {
    id: "noir-vessel",
    category: "Decorative Object",
    name: "گلدان نوآر",
    priceToman: 8_900_000,
    image: "/media/home/piece-vessel.webp",
    imageAlt: "گلدان سرامیکی مشکی دست‌ساز در نور گالری",
  },
  {
    id: "arc-sculpture",
    category: "Sculpture",
    name: "مجسمه آرک",
    priceToman: 14_600_000,
    image: "/media/home/piece-sculpture.webp",
    imageAlt: "مجسمه انتزاعی از فلز نقره‌ای برس‌خورده روی سنگ تیره",
  },
  {
    id: "line-candlesticks",
    category: "Candleware",
    name: "شمعدان لاین",
    priceToman: 6_750_000,
    image: "/media/home/piece-candlesticks.webp",
    imageAlt: "یک جفت شمعدان مینیمال مشکی با شمع‌های روشن‌نشده",
  },
] as const;
