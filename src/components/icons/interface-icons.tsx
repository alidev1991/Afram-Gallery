import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const sharedProps = {
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.4,
  viewBox: "0 0 24 24",
} as const;

export function MenuIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M5.5 8.5h13l-1 11h-11l-1-11Z" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

export function AccountIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.75 19c.65-3.3 2.8-5 6.25-5s5.6 1.7 6.25 5" />
    </svg>
  );
}
