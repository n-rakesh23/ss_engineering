import type { ComponentPropsWithoutRef, ElementType } from "react";

type Props<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

/** Max-width content wrapper with responsive side padding (05_DESIGN_SYSTEM). */
export function Container<T extends ElementType = "div">({ as, className = "", ...rest }: Props<T>) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={`mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-12 ${className}`}
      {...rest}
    />
  );
}
