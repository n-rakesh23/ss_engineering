import { site } from "@/content/site";
import { about } from "@/content/company"; // credentials: re-add with the certifications section
import { fact, visible } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustItem } from "@/components/ui/Cards";
import { DraftBlock, DraftTag } from "@/components/ui/Draft";
import { Photo } from "@/components/ui/Photo";
import { media } from "@/content/media";

export const metadata = pageMetadata({
  title: `About ${site.name}`,
  description: `${site.name} is a labour force, technical manpower and industrial contract works provider based in Jagatsinghpur, Odisha, established in 2025.`,
  path: "/about",
});

export default function AboutPage() {
  const opening = fact(about.opening);
  const background = fact(about.background);
  const mission = fact(about.mission);
  const vision = fact(about.vision);
  const values = visible(about.values);
  const leaders = visible(about.leadership);
  // const creds = visible(credentials); // certifications section disabled for now

  return (
    <>
      <PageHero
        title={`About ${site.name}`}
        eyebrow="Company"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      >
        <p>
          {site.businessType}. {site.constitution}, established {site.established.value}, based in{" "}
          {site.headquarters.value}.
        </p>
      </PageHero>

      {(opening || background) && (
        <Section labelledBy="overview-title">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <SectionHeading id="overview-title" eyebrow="Overview" title="Company overview" />
              {opening && (
                <DraftBlock draft={!about.opening.confirmed}>
                  <p className="text-xl leading-relaxed">{opening}</p>
                </DraftBlock>
              )}
              {background && (
                <DraftBlock draft={!about.background.confirmed}>
                  <p className="text-lg leading-relaxed text-muted">{background}</p>
                </DraftBlock>
              )}
            </div>
            <Photo
              photo={media.safetyBriefing}
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 90vw, 100vw"
              className="mx-auto w-full max-w-[587px] lg:col-span-5"
            />
          </div>
        </Section>
      )}

      {(mission || vision) && (
        <Section tone="surface" labelledBy="mission-title">
          <h2 id="mission-title" className="sr-only">Mission and vision</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {mission && (
              <div className="rounded-card border border-line bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Mission</p>
                <DraftBlock draft={!about.mission.confirmed} className="mt-4">
                  <p className="font-display text-xl font-semibold leading-snug text-navy">{mission}</p>
                </DraftBlock>
              </div>
            )}
            {vision && (
              <div className="rounded-card border border-line bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Vision</p>
                <DraftBlock draft={!about.vision.confirmed} className="mt-4">
                  <p className="font-display text-xl font-semibold leading-snug text-navy">{vision}</p>
                </DraftBlock>
              </div>
            )}
          </div>
        </Section>
      )}

      {values.length > 0 && (
        <Section labelledBy="values-title">
          <SectionHeading id="values-title" eyebrow="Principles" title="Values and operating principles" />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <TrustItem key={i} title={v.title} description={v.description} draft={!v.confirmed} />
            ))}
          </div>
        </Section>
      )}

      {leaders.length > 0 && (
        <Section tone="surface" labelledBy="leadership-title">
          <SectionHeading id="leadership-title" eyebrow="People" title="Leadership" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <li key={i} className="rounded-card border border-line bg-white p-6">
                {!l.confirmed && <DraftTag className="mb-3" />}
                <p className="font-display text-lg font-bold text-navy">{l.name}</p>
                <p className="mt-1 text-sm text-muted">{l.title}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* TEMPORARILY DISABLED (client request): certifications section — re-enable when registrations/certificates are verified.
      {creds.length > 0 && (
        <Section labelledBy="credentials-title">
          <SectionHeading id="credentials-title" eyebrow="Credentials" title="Registrations and credentials" />
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {creds.map((c, i) => (
              <li key={i} className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-5">
                  {!c.confirmed && <DraftTag className="mb-2" />}
                  <p className="font-semibold text-navy">{c.name}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </div>
                <p className="text-sm sm:col-span-3">{c.reference}</p>
                <p className="text-sm sm:col-span-2">{c.validity}</p>
                <p className="text-sm text-muted sm:col-span-2">{c.scope}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}
      */}

      <CtaBand />
    </>
  );
}
