import { Mail } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getContactDetails } from "@/lib/content";
import { HideOnPaths } from "./HideOnPaths";

/**
 * WhatsApp greens. The official #25D366 is too light for white text/icons
 * (fails WCAG contrast), so:
 *  - icon-only floating button: slightly deeper green (≥3:1 for the glyph)
 *  - buttons with text labels: dark green (≥4.5:1 for text)
 */
const WHATSAPP_ICON = "bg-[#1fa855] hover:bg-[#178a45] text-white";
const WHATSAPP = "bg-[#0e7a4a] hover:bg-[#0a6339] text-white";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/**
 * Floating WhatsApp + email buttons, bottom-right on every page.
 * Renders nothing for a channel that isn't confirmed.
 */
export function FloatingContact() {
  const { whatsappHref, emailComposeHref } = getContactDetails();
  if (!whatsappHref && !emailComposeHref) return null;

  const btn =
    "group relative flex size-13 items-center justify-center rounded-full shadow-[0_8px_24px_-6px_rgb(8_22_64/0.45)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 ring-2 ring-white";
  const tip =
    "pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-navy-deep px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:hidden";

  // Hidden on /contact, which has its own full-size WhatsApp and email buttons.
  return (
    <HideOnPaths paths={["/contact"]}>
    <div
      className="fixed right-4 z-30 flex flex-col gap-3 sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      {emailComposeHref && (
        <a href={emailComposeHref} className={`${btn} bg-brand text-white hover:bg-brand-dark`} aria-label="Email S.S. Engineering">
          <Mail aria-hidden className="size-6" />
          <span className={tip}>Email us</span>
        </a>
      )}
      {whatsappHref && (
        <a href={whatsappHref} {...external} className={`${btn} ${WHATSAPP_ICON}`} aria-label="Chat with S.S. Engineering on WhatsApp (opens in a new tab)">
          <WhatsAppIcon className="size-7" />
          <span className={tip}>Chat on WhatsApp</span>
        </a>
      )}
    </div>
    </HideOnPaths>
  );
}

/** Full-width quick-contact buttons for the Contact page. */
export function QuickContactButtons() {
  const { whatsappHref, emailComposeHref, email } = getContactDetails();
  if (!whatsappHref && !emailComposeHref) return null;
  const base =
    "flex min-h-14 items-center gap-3 rounded-lg px-5 py-3 text-left font-semibold transition-colors duration-200";
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {whatsappHref && (
        <a href={whatsappHref} {...external} className={`${base} ${WHATSAPP}`}>
          <WhatsAppIcon className="size-6 shrink-0" />
          <span>
            Chat on WhatsApp
            <span className="block text-xs font-normal opacity-90">Opens WhatsApp with a message ready</span>
          </span>
        </a>
      )}
      {emailComposeHref && (
        <a href={emailComposeHref} className={`${base} bg-brand text-white hover:bg-brand-dark`}>
          <Mail aria-hidden className="size-6 shrink-0" />
          <span className="min-w-0">
            Email us
            <span className="block truncate text-xs font-normal opacity-90">{email}</span>
          </span>
        </a>
      )}
    </div>
  );
}

/** Compact inline links for dark/brand backgrounds (CTA band). */
export function InlineContactLinks({ className = "" }: { className?: string }) {
  const { whatsappHref, emailComposeHref } = getContactDetails();
  if (!whatsappHref && !emailComposeHref) return null;
  const link =
    "inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {whatsappHref && (
        <a href={whatsappHref} {...external} className={link}>
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </a>
      )}
      {emailComposeHref && (
        <a href={emailComposeHref} className={link}>
          <Mail aria-hidden className="size-4" />
          Email
        </a>
      )}
    </div>
  );
}
