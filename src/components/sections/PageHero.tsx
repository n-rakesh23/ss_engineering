import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

/** Hero band for inner pages. */
export function PageHero({
  title,
  eyebrow,
  crumbs,
  children,
}: {
  title: string;
  eyebrow?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy bg-blueprint text-white">
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} inverted />
        {eyebrow && (
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
        )}
        <h1 className={`${eyebrow ? "mt-3" : "mt-8"} max-w-3xl text-4xl font-extrabold leading-[1.1] !text-white sm:text-5xl`}>
          {title}
        </h1>
        {children && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{children}</div>}
      </Container>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-brand" />
    </section>
  );
}
