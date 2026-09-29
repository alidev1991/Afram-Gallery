import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StorefrontProviders } from "@/providers/storefront-providers";

export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StorefrontProviders>
      <div className="storefront-shell relative isolate flex min-h-screen flex-col overflow-x-clip bg-canvas">
        <a
          href="#main-content"
          className="fixed start-4 top-4 z-[100] -translate-y-24 bg-silver-bright px-4 py-2 text-sm text-canvas transition-transform focus:translate-y-0"
        >
          رفتن به محتوای اصلی
        </a>
        <div
          aria-hidden="true"
          className="storefront-signature-background pointer-events-none fixed inset-0 z-0"
        />
        <SiteHeader />
        <div className="storefront-content relative z-10 flex-1">
          {children}
        </div>
        <SiteFooter />
      </div>
    </StorefrontProviders>
  );
}
