"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

const AUTOPLAY_DELAY_MS = 10_000;

type HeroMediaProps = {
  slides: readonly string[];
};

export function HeroMedia({ slides }: HeroMediaProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const syncPageVisibility = () => {
      setIsPageVisible(document.visibilityState === "visible");
    };

    syncPageVisibility();
    document.addEventListener("visibilitychange", syncPageVisibility);

    return () => {
      document.removeEventListener("visibilitychange", syncPageVisibility);
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || !isPageVisible || slides.length < 2) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, AUTOPLAY_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, isPageVisible, shouldReduceMotion, slides.length]);

  const showPrevious = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + slides.length) % slides.length,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      data-hero-active={activeIndex + 1}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((src, slideIndex) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={slideIndex === 0}
            loading={slideIndex === 0 ? undefined : "eager"}
            quality={85}
            sizes="100vw"
            data-hero-slide={slideIndex + 1}
            data-active={slideIndex === activeIndex}
            className={`object-contain object-center transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0 sm:object-cover sm:object-center ${
              slideIndex === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {slides.length > 1 ? (
        <div
          className="absolute bottom-5 left-20 z-30 flex items-center gap-2 sm:bottom-[clamp(2rem,6vh,4.5rem)] sm:left-[clamp(1.5rem,4vw,4.5rem)]"
          dir="ltr"
        >
          <button
            type="button"
            onClick={showPrevious}
            aria-label="نمایش تصویر قبلی Hero"
            className="group grid size-11 touch-manipulation place-items-center border border-silver/35 bg-black/20 text-silver-bright [text-shadow:0_1px_8px_rgb(0_0_0_/_0.9)] backdrop-blur-[2px] transition-colors duration-300 hover:border-silver/70 hover:bg-black/35 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver-bright focus-visible:ring-offset-2 focus-visible:ring-offset-black active:bg-black/50"
          >
            <span
              aria-hidden="true"
              className="text-xl font-light leading-none transition-transform duration-300 group-hover:-translate-x-0.5 motion-reduce:transition-none"
            >
              ←
            </span>
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="نمایش تصویر بعدی Hero"
            className="group grid size-11 touch-manipulation place-items-center border border-silver/35 bg-black/20 text-silver-bright [text-shadow:0_1px_8px_rgb(0_0_0_/_0.9)] backdrop-blur-[2px] transition-colors duration-300 hover:border-silver/70 hover:bg-black/35 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver-bright focus-visible:ring-offset-2 focus-visible:ring-offset-black active:bg-black/50"
          >
            <span
              aria-hidden="true"
              className="text-xl font-light leading-none transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
            >
              →
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
