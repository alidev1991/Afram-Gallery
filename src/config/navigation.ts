export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { href: "/", label: "خانه" },
  { href: "/collections", label: "مجموعه‌ها" },
  { href: "/about", label: "درباره آرفام" },
  { href: "/account", label: "حساب کاربری" },
  { href: "/admin", label: "مدیریت" },
];

export const footerNavigation: readonly NavigationItem[] = [
  { href: "/collections", label: "مجموعه‌ها" },
  { href: "/about", label: "درباره آرفام" },
  { href: "/account", label: "حساب کاربری" },
  { href: "/admin", label: "پنل مدیریت" },
];
