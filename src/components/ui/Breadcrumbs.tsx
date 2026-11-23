import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, inverted = false }: { items: Crumb[]; inverted?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${inverted ? "text-slate-300" : "text-muted"}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className={`underline-offset-4 hover:underline ${inverted ? "hover:text-white" : "hover:text-brand"}`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={inverted ? "text-white" : "text-navy"}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight aria-hidden className="size-3.5 opacity-60" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
