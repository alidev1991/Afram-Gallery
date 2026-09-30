"use client";

import { motion, type Variants } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

export type RevealDirection = "left" | "right" | "bottom" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
};

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
};

type RevealItemProps = Omit<RevealProps, "delay" | "amount" | "once">;

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export const motionDefaults = {
  distance: 44,
  duration: 0.82,
  easing: [0.22, 1, 0.36, 1] as const,
  stagger: 0.09,
} as const;

function hiddenState(direction: RevealDirection, distance: number) {
  if (direction === "left") {
    return { opacity: 0, x: -distance, y: 0 };
  }

  if (direction === "right") {
    return { opacity: 0, x: distance, y: 0 };
  }

  if (direction === "bottom") {
    return { opacity: 0, x: 0, y: distance };
  }

  return { opacity: 0, x: 0, y: 0 };
}

function itemVariants(
  direction: RevealDirection,
  distance: number,
  duration: number,
  delay = 0,
): Variants {
  return {
    hidden: hiddenState(direction, distance),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: motionDefaults.easing,
        delay,
      },
    },
  };
}

export function Reveal({
  children,
  className,
  direction = "bottom",
  distance = motionDefaults.distance,
  duration = motionDefaults.duration,
  delay = 0,
  amount = 0.18,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      data-motion-reveal={direction}
      data-motion-reduced={shouldReduceMotion ? "true" : "false"}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={itemVariants(direction, distance, duration, delay)}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = motionDefaults.stagger,
  delay = 0.04,
  amount = 0.12,
  once = true,
}: RevealGroupProps) {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      data-motion-group="true"
      data-motion-reduced={shouldReduceMotion ? "true" : "false"}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "bottom",
  distance = motionDefaults.distance,
  duration = motionDefaults.duration,
}: RevealItemProps) {
  return (
    <motion.div
      className={className}
      data-motion-item={direction}
      variants={itemVariants(direction, distance, duration)}
    >
      {children}
    </motion.div>
  );
}
