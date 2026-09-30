export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/products", label: "محصولات" },
  { href: "/collections", label: "کالکشن‌ها" },
  { href: "/magazine", label: "مجله آرفام" },
  { href: "/about", label: "درباره آرفام" },
  { href: "/contact", label: "ارتباط با آرفام" },
];

export const footerNavigation: readonly NavigationItem[] = primaryNavigation;