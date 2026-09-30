"use client";

import Link from "next/link";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { BrandLogo } from "@/components/brand/brand-logo";
import { CloseIcon, MenuIcon } from "@/components/icons/interface-icons";
import { IconButton } from "@/components/ui/icon-button";
import { primaryNavigation } from "@/config/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerButtonRef.current?.focus({ preventScroll: true });
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function closeNavigation() {
    setIsOpen(false);
    triggerButtonRef.current?.focus({ preventScroll: true });
  }

  function keepFocusInside(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      ) ?? [],
    );
    const firstElement = focusableElements.at(0);
    const lastElement = focusableElements.at(-1);

    if (!firstElement || !lastElement) {
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <>
      <div className="xl:hidden">
        <IconButton
          ref={triggerButtonRef}
          label="باز کردن منوی اصلی"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon className="size-6" />
        </IconButton>
      </div>

      {isOpen
        ? createPortal(
            <div
              ref={dialogRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="منوی اصلی"
              className="fixed inset-0 z-[999] isolate overflow-y-auto overscroll-contain bg-[#070707] xl:hidden"
              onKeyDown={keepFocusInside}
            >
              <div className="sticky top-0 z-10 flex h-[var(--arfam-header-height)] items-center justify-between border-b border-line bg-[#070707] px-5">
                <BrandLogo
                  imageSrc="/brand/arfam-logo-full-transparent.png"
                  mobileImageSrc="/brand/arfam-symbol-transparent.png"
                />
                <IconButton
                  ref={closeButtonRef}
                  label="بستن منوی اصلی"
                  onClick={closeNavigation}
                >
                  <CloseIcon className="size-6" />
                </IconButton>
              </div>

              <nav
                aria-label="پیمایش موبایل"
                className="flex min-h-[calc(100dvh-var(--arfam-header-height))] flex-col justify-center px-8 py-8 sm:py-12"
              >
                <ul className="space-y-1">
                  {primaryNavigation.map((item, index) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeNavigation}
                        className="group flex items-center gap-5 border-b border-line py-5 text-xl font-light text-silver transition-colors hover:text-silver-bright"
                      >
                        <span className="arfam-eyebrow w-5 text-subtle" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
