import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { getContactDetails, getNavigation, visibleServices } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function SiteFooter() {
  const nav = getNavigation();
  const services = visibleServices();
  const contact = getContactDetails();
  const hasContact = contact.phone || contact.email || contact.address;

  return (
    <footer className="bg-navy-deep text-slate-300">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-4">
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{site.businessType}.</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-white">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {services.length > 0 && (
          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-white">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-white">Contact</h2>
          {hasContact ? (
            <ul className="mt-4 space-y-3 text-sm">
              {contact.phone && (
                <li className="flex gap-2.5">
                  <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-sky-300" />
                  {contact.phoneHref ? (
                    <a href={`tel:${contact.phoneHref}`} className="hover:text-white">{contact.phone}</a>
                  ) : (
                    <span>{contact.phone}</span>
                  )}
                </li>
              )}
              {contact.email && (
                <li className="flex gap-2.5">
                  <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-sky-300" />
                  {contact.emailHref ? (
                    <a href={contact.emailHref} className="break-all hover:text-white">{contact.email}</a>
                  ) : (
                    <span>{contact.email}</span>
                  )}
                </li>
              )}
              {contact.address && (
                <li className="flex gap-2.5">
                  <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-sky-300" />
                  <span>{contact.address}</span>
                </li>
              )}
            </ul>
          ) : null}
          <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-white underline-offset-4 hover:underline">
            Send an enquiry →
          </Link>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
