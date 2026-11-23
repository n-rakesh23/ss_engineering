import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverted" | "ghost-inverted";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-sm hover:bg-brand-dark hover:shadow-md",
  secondary: "border border-line bg-white text-navy hover:border-brand hover:text-brand",
  inverted: "bg-white text-navy hover:bg-brand-tint",
  "ghost-inverted": "border border-white/30 text-white hover:border-white hover:bg-white/10",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
    </Link>
  );
}

export function PrimaryButton({ className, ...props }: ComponentPropsWithoutRef<"button">) {
  return <button className={buttonClasses("primary", className)} {...props} />;
}

export function SecondaryButton({ className, ...props }: ComponentPropsWithoutRef<"button">) {
  return <button className={buttonClasses("secondary", className)} {...props} />;
}
