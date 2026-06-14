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
    "inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none";
  const styles =
    variant === "outline"
      ? "border border-brand-border bg-white text-brand-muted transition-[color,border-color,background-color] duration-300 ease-in-out hover:border-brand-text hover:bg-white hover:text-brand-text [&_a]:text-inherit [&_a]:transition-colors [&_a]:duration-300 [&_a]:ease-in-out"
      : "bg-brand-text text-white transition-colors duration-300 ease-in-out hover:bg-brand-text/90";

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
