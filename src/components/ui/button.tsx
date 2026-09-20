import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "solid" | "outline" | "quiet";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  solid:
    "border-silver bg-silver text-canvas hover:border-silver-bright hover:bg-silver-bright",
  outline:
    "border-line-strong bg-transparent text-silver hover:border-silver hover:text-silver-bright",
  quiet:
    "border-transparent bg-transparent text-muted hover:text-silver-bright",
};

export function Button({
  className = "",
  type = "button",
  variant = "solid",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center border px-6 py-2.5 text-xs font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-45 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
