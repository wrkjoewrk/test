import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "solid" | "outline";
}

export function Button({
  asChild,
  className = "",
  variant = "solid",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:opacity-50 disabled:pointer-events-none";
  const styles =
    variant === "outline"
      ? "border border-stone-300 bg-white text-stone-900 hover:bg-stone-50"
      : "bg-stone-900 text-white hover:bg-stone-800";

  if (asChild) {
    const Comp = (props as any).children?.type || "button";
    return (
      <Comp className={`${base} ${styles} ${className}`} {...props} />
    );
  }

  return (
    <button
      className={`${base} ${styles} ${className}`}
      {...props}
    />
  );
}
