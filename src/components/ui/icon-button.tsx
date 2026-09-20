import type { ComponentPropsWithRef, ReactNode } from "react";

type IconButtonProps = Omit<
  ComponentPropsWithRef<"button">,
  "aria-label"
> & {
  label: string;
  children: ReactNode;
};

export function IconButton({
  children,
  className = "",
  label,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={`inline-flex size-11 items-center justify-center text-silver transition-colors duration-200 hover:text-silver-bright disabled:cursor-not-allowed disabled:opacity-45 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
