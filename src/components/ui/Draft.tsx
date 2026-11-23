import type { ReactNode } from "react";
import { showDrafts } from "@/lib/content";

/**
 * Visual marker for unconfirmed placeholder content. Only ever rendered when
 * drafts are enabled (development / review builds) — see lib/content.ts.
 */
export function DraftTag({ className = "" }: { className?: string }) {
  if (!showDrafts) return null;
  return (
    <span
      className={`inline-flex items-center rounded border border-dashed border-amber-500/70 bg-amber-50 px-1.5 py-0.5 align-middle font-sans text-[10px] font-semibold uppercase tracking-wider text-amber-800 ${className}`}
    >
      Awaiting confirmation
    </span>
  );
}

/** Wraps a block whose content is a draft placeholder. */
export function DraftBlock({ draft, children, className = "" }: { draft: boolean; children: ReactNode; className?: string }) {
  if (!draft || !showDrafts) return className ? <div className={className}>{children}</div> : <>{children}</>;
  return (
    <div className={`relative rounded-md outline-2 outline-offset-4 outline-dashed outline-amber-400/70 ${className}`}>
      <DraftTag className="absolute -top-3 right-0 z-10" />
      {children}
    </div>
  );
}

export function DraftBanner() {
  return (
    <div role="note" className="border-b border-amber-300 bg-amber-50 text-amber-900">
      <p className="mx-auto max-w-[1240px] px-5 py-2 text-center text-xs sm:text-sm">
        <strong>Review preview:</strong> content marked “Awaiting confirmation” is placeholder text
        and is automatically hidden in the production build.
      </p>
    </div>
  );
}
