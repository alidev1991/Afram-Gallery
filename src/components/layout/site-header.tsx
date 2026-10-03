import Link from "next/link";

import { AccountIndicator } from "@/components/auth/account-indicator";
import { BrandLogo } from "@/components/brand/brand-logo";
import { CartIndicator } from "@/components/cart/cart-indicator";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/config/navigation";

const headerActionClass =
  "inline-flex size-11 items-center justify-center text-silver transition-colors duration-200 hover:text-silver-bright";

export function SiteHeader() {
  return (
    <header className="site-header arfam-gloss-surface sticky top-0 z-50 border-b border-line/90 backdrop-blur-xl">
      <Container className="grid h-[var(--arfam-header-height)] grid-cols-[1fr_auto_1fr] items-center gap-4">
        <nav aria-label="پیمایش اصلی" className="hidden xl:block">
          <ul className="flex items-center gap-6 lg:gap-9">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-3 text-[0.8125rem] text-muted transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-silver after:transition-transform after:duration-300 hover:text-silver-bright hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="xl:hidden">
          <MobileNavigation />
        </div>

        <BrandLogo
          imageSrc="/brand/arfam-logo-full-transparent.png"
          mobileImageSrc="/brand/arfam-symbol-transparent.png"
          className="justify-self-center"
          priority
        />

        <div className="flex items-center justify-self-end">
          <AccountIndicator className={headerActionClass} />
          <CartIndicator className={headerActionClass} />
        </div>
      </Container>
    </header>
  );
}
