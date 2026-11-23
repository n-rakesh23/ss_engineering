"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/content";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative rounded-md px-3 py-2 text-[15px] font-medium transition-colors duration-150 hover:text-brand ${
                active
                  ? "text-brand after:absolute after:inset-x-3 after:-bottom-[17px] after:h-0.5 after:bg-brand"
                  : "text-charcoal"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
