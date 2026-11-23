import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { about, differentiators, qualityPractices } from "@/content/company";
import { fact, hasQualityContent, visible, visibleProjects, visibleServices } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard, ServiceCard, TrustItem } from "@/components/ui/Cards";
import { DraftBlock } from "@/components/ui/Draft";
import { Photo } from "@/components/ui/Photo";
import { media } from "@/content/media";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata = pageMetadata({
  title: `${site.name} | Labour Force & Industrial Contract Works, Odisha`,
  description:
    "S.S. Engineering supplies labour force and technical manpower and executes industrial contract works for construction sites and industrial plants. Based in Jagatsinghpur, Odisha, with pan-India execution.",
  path: "/",
});

export default function HomePage() {
  const tagline = fact(site.tagline);
  const description = fact(site.description);
  const intro = fact(site.intro);
  const services = visibleServices();
  const reasons = visible(differentiators);
  const projects = visibleProjects().slice(0, 3);
  const practices = visible(qualityPractices);
  const commitment = fact(about.commitment);
  const facts = [
    { label: "Established", fact: site.established, note: site.constitution },
    { label: "Headquarters", fact: site.headquarters, note: "India" },
    { label: "Core sector", fact: site.coreSector, note: site.serviceArea.confirmed ? site.serviceArea.value : "" },
  ].filter((f) => f.fact.confirmed);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy bg-blueprint text-white">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
          <div className="animate-rise lg:col-span-7">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <span aria-hidden className="h-px w-8 bg-accent/70" />
              {site.established.confirmed ? `Est. ${site.established.value}` : site.nameUpper}
              {site.headquarters.confirmed && ` · ${site.headquarters.value}`}
            </p>
            <DraftBlock draft={tagline !== null && !site.tagline.confirmed} className="mt-6">
              <h1 className="text-4xl font-extrabold leading-[1.08] !text-white sm:text-5xl lg:text-6xl">
                {tagline ?? site.name}
              </h1>
            </DraftBlock>
            {description && (
              <DraftBlock draft={!site.description.confirmed} className="mt-6">
                <p className="max-w-xl text-lg leading-relaxed text-slate-300">{description}</p>
              </DraftBlock>
            )}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="inverted">
                Send an Enquiry
                <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              {services.length > 0 && (
                <ButtonLink href="/services" variant="ghost-inverted">
                  Explore Our Services
                </ButtonLink>
              )}
            </div>
          </div>
          <Photo
            photo={media.hero}
            frame="dark"
            priority
            sizes="(min-width: 1024px) 42vw, (min-width: 640px) 90vw, 100vw"
            className="animate-rise lg:col-span-5"
          />
        </Container>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-brand" />
      </section>

      {/* Key facts (verified, from the company profile) */}
      {facts.length > 0 && (
        <section aria-label="Company facts" className="border-b border-line bg-white">
          <Container>
            <dl className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {facts.map((f) => (
                <div key={f.label} className="py-6 sm:px-8 sm:first:pl-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">{f.label}</dt>
                  <dd className="mt-1.5 font-display text-xl font-bold text-navy">{f.fact.value}</dd>
                  {f.note && <dd className="mt-0.5 text-sm text-muted">{f.note}</dd>}
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      {/* Intro */}
      {intro && (
        <Section labelledBy="intro-title">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading id="intro-title" eyebrow="Who we are" title={`About ${site.name}`} />
            </div>
            <div className="lg:col-span-7">
              <DraftBlock draft={!site.intro.confirmed}>
                <p className="text-xl leading-relaxed text-charcoal">{intro}</p>
              </DraftBlock>
              <ButtonLink href="/about" variant="secondary" className="mt-8">
                More about the company
              </ButtonLink>
            </div>
          </div>
        </Section>
      )}

      {/* Services */}
      {services.length > 0 && (
        <Section tone="surface" labelledBy="services-title">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="services-title" eyebrow="Services" title="What we deliver" />
            <ButtonLink href="/services" variant="secondary" className="self-start sm:self-auto">
              All services
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Section>
      )}

      {/* Why */}
      {reasons.length > 0 && (
        <Section labelledBy="why-title">
          <SectionHeading id="why-title" eyebrow="Why work with us" title={`Why ${site.name}`} />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <TrustItem key={i} title={r.title} description={r.description} draft={!r.confirmed} />
            ))}
          </div>
        </Section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <Section tone="surface" labelledBy="projects-title">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="projects-title" eyebrow="Experience" title="Selected projects" />
            <ButtonLink href="/projects" variant="secondary" className="self-start sm:self-auto">
              All projects
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      )}

      {/* Quality & safety */}
      {hasQualityContent() && practices.length > 0 && (
        <Section tone="navy" labelledBy="quality-title">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading id="quality-title" eyebrow="Quality & safety" title="How we work" inverted />
              <ButtonLink href="/quality-safety" variant="ghost-inverted" className="mt-8">
                Quality & Safety
              </ButtonLink>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {practices.map((p, i) => (
                <li key={i} className="rounded-card border border-white/15 p-6">
                  <DraftBlock draft={!p.confirmed}>
                    <h3 className="text-lg font-bold !text-white">{p.title}</h3>
                    <p className="mt-2 text-slate-300">{p.description}</p>
                  </DraftBlock>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {commitment && (
        <Section labelledBy="commitment-title">
          <figure className="mx-auto max-w-4xl text-center">
            <h2 id="commitment-title" className="text-xs font-semibold uppercase tracking-[0.16em] !text-brand">
              Our commitment
            </h2>
            <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug text-navy sm:text-3xl">
              “{commitment}”
            </blockquote>
          </figure>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
