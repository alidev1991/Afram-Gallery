export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { href: "/", label: "خانه" },
  { href: "/collections", label: "مجموعه‌ها" },
  { href: "/categories", label: "دسته‌بندی‌ها" },
  { href: "/about", label: "درباره آرفام" },
];

export const footerNavigation: readonly NavigationItem[] = [
  { href: "/collections", label: "مجموعه‌ها" },
  { href: "/contact", label: "ارتباط با ما" },
  { href: "/privacy", label: "حریم خصوصی" },
];
