import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <a
        href="#main-content"
        className="fixed start-4 top-4 z-[100] -translate-y-24 bg-silver-bright px-4 py-2 text-sm text-canvas transition-transform focus:translate-y-0"
      >
        رفتن به محتوای اصلی
      </a>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
