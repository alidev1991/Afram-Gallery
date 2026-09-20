"use client";

import Link from "next/link";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";

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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function closeNavigation() {
    setIsOpen(false);
    triggerButtonRef.current?.focus();
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
    <div className="md:hidden">
      <IconButton
        ref={triggerButtonRef}
        label="باز کردن منوی اصلی"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className="size-6" />
      </IconButton>

      {isOpen ? (
        <div
          ref={dialogRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="منوی اصلی"
          className="fixed inset-0 z-[90] bg-canvas"
          onKeyDown={keepFocusInside}
        >
          <div className="flex h-[var(--arfam-header-height)] items-center justify-between border-b border-line px-5">
            <BrandLogo />
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
            className="flex h-[calc(100svh-var(--arfam-header-height))] flex-col justify-center px-8 pb-12"
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
        </div>
      ) : null}
    </div>
  );
}
