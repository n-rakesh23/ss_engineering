"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/lib/content";
import { isActive } from "./NavLinks";
import { buttonClasses } from "@/components/ui/Button";

export function MobileNavigation({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    // Start the panel exactly below the header, wherever it currently sits.
    const header = toggleRef.current?.closest("header");
    if (panel && header) panel.style.top = `${Math.max(0, header.getBoundingClientRect().bottom)}px`;
    panel?.querySelector<HTMLElement>("a")?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      // Keep keyboard focus inside the toggle + panel while open.
      if (e.key === "Tab" && panel) {
        const focusables = [toggleRef.current, ...panel.querySelectorAll<HTMLElement>("a")].filter(
          Boolean,
        ) as HTMLElement[];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onResize = () => mq.matches && close(false);

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => (open ? close(false) : setOpen(true))}
        className="relative z-50 -mr-2 inline-flex size-12 items-center justify-center rounded-lg text-navy transition-colors hover:bg-surface"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-line bg-white motion-safe:animate-[rise-in_0.2s_ease-out]"
      >
        <nav aria-label="Mobile">
          <ul className="px-5 pt-4 sm:px-7">
            {items.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-14 items-center font-display text-lg font-semibold ${
                      active ? "text-brand" : "text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-5 py-6 sm:px-7">
            <Link href="/contact" className={buttonClasses("primary", "w-full")}>
              Send an Enquiry
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
