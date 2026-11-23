import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { getContactDetails, visibleServices } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { DraftTag } from "@/components/ui/Draft";

export const metadata = pageMetadata({
  title: `Contact ${site.name} | Send an Enquiry`,
  description: `Contact ${site.name} to discuss a project or contractual requirement.`,
  path: "/contact",
});

function DetailRow({
  icon,
  label,
  draft,
  children,
}: {
  icon: ReactNode;
  label: string;
  draft: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand">{icon}</span>
      <div className="min-w-0">
        <dt className="flex flex-wrap items-center gap-2 text-sm font-semibold text-navy">
          {label}
          {draft && <DraftTag />}
        </dt>
        <dd className="mt-0.5 break-words text-muted">{children}</dd>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const c = getContactDetails();
  const sc = site.contact;
  const serviceOptions = visibleServices().map((s) => ({ value: s.slug, label: s.title }));
  const hasDetails = c.phone || c.email || c.whatsapp || c.address || c.hours;

  return (
    <>
      <PageHero title="Let's discuss your requirement" eyebrow="Contact" crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}>
        <p>
          Share a few details about your requirement. The {site.name} team can review your enquiry and
          respond using the contact information you provide.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold">Enquiry form</h2>
            <div className="mt-6">
              <ContactForm serviceOptions={serviceOptions} phoneRequired={site.form.phoneRequired} />
            </div>
          </div>

          {hasDetails && (
            <aside className="lg:col-span-5" aria-labelledby="details-title">
              <div className="rounded-card border border-line bg-surface p-7 sm:p-8 lg:sticky lg:top-28">
                <h2 id="details-title" className="text-xl font-bold">
                  Contact details
                </h2>
                <dl className="mt-6 space-y-6">
                  {c.phone && (
                    <DetailRow icon={<Phone aria-hidden className="size-5" />} label="Phone" draft={!sc.phone.confirmed}>
                      {c.phoneHref ? <a className="hover:text-brand" href={`tel:${c.phoneHref}`}>{c.phone}</a> : c.phone}
                    </DetailRow>
                  )}
                  {c.email && (
                    <DetailRow icon={<Mail aria-hidden className="size-5" />} label="Email" draft={!sc.email.confirmed}>
                      {c.emailHref ? <a className="hover:text-brand" href={c.emailHref}>{c.email}</a> : c.email}
                    </DetailRow>
                  )}
                  {c.whatsapp && (
                    <DetailRow icon={<MessageCircle aria-hidden className="size-5" />} label="WhatsApp" draft={!sc.whatsapp.confirmed}>
                      {c.whatsapp}
                    </DetailRow>
                  )}
                  {c.address && (
                    <DetailRow icon={<MapPin aria-hidden className="size-5" />} label="Office" draft={!sc.address.confirmed}>
                      {c.address}
                    </DetailRow>
                  )}
                  {c.hours && (
                    <DetailRow icon={<Clock aria-hidden className="size-5" />} label="Business hours" draft={!sc.hours.confirmed}>
                      {c.hours}
                    </DetailRow>
                  )}
                </dl>
              </div>
            </aside>
          )}
        </div>
      </Section>
    </>
  );
}
