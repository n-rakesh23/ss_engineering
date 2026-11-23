import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { credentials, qualityPractices } from "@/content/company";
import { hasQualityContent, visible } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustItem } from "@/components/ui/Cards";
import { DraftTag } from "@/components/ui/Draft";

export const metadata = pageMetadata({
  title: `Quality & Safety | ${site.name}`,
  description: `The documented quality and safety practices followed by ${site.name}.`,
  path: "/quality-safety",
});

export default function QualitySafetyPage() {
  // Published only when real, documented content exists.
  if (!hasQualityContent()) notFound();
  const practices = visible(qualityPractices);
  const creds = visible(credentials);

  return (
    <>
      <PageHero title="Quality & safety" eyebrow="Standards" crumbs={[{ label: "Home", href: "/" }, { label: "Quality & Safety" }]}>
        <p>The documented practices {site.name} follows on its work.</p>
      </PageHero>

      {practices.length > 0 && (
        <Section labelledBy="practices-title">
          <SectionHeading id="practices-title" eyebrow="Practices" title="Documented practices" />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {practices.map((p, i) => (
              <TrustItem key={i} title={p.title} description={p.description} draft={!p.confirmed} />
            ))}
          </div>
        </Section>
      )}

      {creds.length > 0 && (
        <Section tone="surface" labelledBy="certs-title">
          <SectionHeading id="certs-title" eyebrow="Certifications" title="Certifications and registrations" />
          <div className="mt-10 overflow-x-auto rounded-card border border-line bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Certification</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Issuing body</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Certificate no.</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Valid until</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {creds.map((c, i) => (
                  <tr key={i}>
                    <td className="px-5 py-4 font-semibold text-navy">
                      {c.name}
                      {!c.confirmed && <DraftTag className="ml-2" />}
                    </td>
                    <td className="px-5 py-4">{c.issuer}</td>
                    <td className="px-5 py-4">{c.reference}</td>
                    <td className="px-5 py-4">{c.validity}</td>
                    <td className="px-5 py-4 text-muted">{c.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
