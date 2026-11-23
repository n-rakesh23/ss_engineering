import type { ReactNode } from "react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
  align = "left",
  inverted = false,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${
            inverted ? "text-sky-200" : "text-brand"
          } ${align === "center" ? "justify-center" : ""}`}
        >
          <span aria-hidden className={`h-px w-8 ${inverted ? "bg-sky-200/60" : "bg-brand/50"}`} />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-bold leading-tight sm:text-4xl ${inverted ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      {children && (
        <div className={`mt-4 text-base leading-relaxed sm:text-lg ${inverted ? "text-slate-300" : "text-muted"}`}>
          {children}
        </div>
      )}
    </div>
  );
}
