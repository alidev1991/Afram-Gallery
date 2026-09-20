import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { footerNavigation } from "@/config/navigation";

export function SiteFooter() {
  return (
    <footer className="arfam-gloss-surface border-t border-line">
      <Container className="py-14 sm:py-18 lg:py-20">
        <div className="grid gap-12 border-b border-line pb-12 sm:grid-cols-[1.2fr_0.8fr] sm:items-end lg:pb-16">
          <div>
            <BrandLogo className="justify-start" />
            <p className="mt-6 max-w-md text-sm leading-7 text-muted">
              گالری دیجیتال آرفام؛ روایتی آرام و انتخاب‌شده از اشیای ماندگار و
              طراحی معاصر.
            </p>
          </div>

          <nav aria-label="پیمایش فوتر" className="sm:justify-self-end">
            <ul className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted sm:justify-end">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-silver-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[0.6875rem] text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p className="arfam-eyebrow">Luxury Digital Gallery</p>
          <p dir="ltr">© {new Date().getFullYear()} ARFAM Gallery</p>
        </div>
      </Container>
    </footer>
  );
}
