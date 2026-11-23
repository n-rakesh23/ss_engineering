import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { showDrafts } from "@/lib/content";

/**
 * Uses the approved master logo when `site.logo.src` is set.
 * Until then: a text wordmark, plus (in review builds only) a clearly
 * labelled empty logo slot. We do NOT draw a replacement logo.
 */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  const { src, width, height } = site.logo;
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={`${site.name} — home`}>
      {src ? (
        <Image src={src} alt="" width={width} height={height} priority className="h-11 w-auto sm:h-12" />
      ) : (
        showDrafts && (
          <span
            aria-hidden
            title="Temporary slot — approved master logo not yet supplied"
            className={`flex size-10 shrink-0 items-center justify-center rounded-full border-2 sm:size-11 border-dashed text-[8px] font-semibold uppercase leading-tight tracking-wider ${
              inverted ? "border-white/40 text-white/60" : "border-brand/40 text-brand/70"
            }`}
          >
            Logo
          </span>
        )
      )}
      <span
        className={`whitespace-nowrap font-display text-[17px] font-extrabold tracking-[0.04em] sm:text-xl sm:tracking-[0.06em] ${
          inverted ? "text-white" : "text-navy"
        }`}
      >
        {site.nameUpper}
      </span>
    </Link>
  );
}
