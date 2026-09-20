import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ARFAM Gallery",
    template: "%s | ARFAM Gallery",
  },
  description: "گالری دیجیتال محصولات لوکس آرفام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-canvas font-sans text-silver antialiased">
        {children}
      </body>
    </html>
  );
}
