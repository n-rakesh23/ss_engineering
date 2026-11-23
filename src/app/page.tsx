import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { differentiators, qualityPractices } from "@/content/company";
import { fact, hasQualityContent, visible, visibleProjects, visibleServices } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard, ServiceCard, TrustItem } from "@/components/ui/Cards";
import { DraftBlock } from "@/components/ui/Draft";
import { HeroGraphic } from "@/components/sections/HeroGraphic";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata = pageMetadata({
  title: site.serviceArea.confirmed
    ? `${site.name} | Contract Services in ${site.serviceArea.value}`
    : `${site.name} | Contractual Agency`,
  description: site.description.confirmed
    ? site.description.value
    : `${site.name} is a contractual agency. Contact the team to discuss a project or contractual requirement.`,
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

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy bg-blueprint text-white">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
          <div className="animate-rise lg:col-span-7">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              <span aria-hidden className="h-px w-8 bg-sky-200/60" />
              {site.nameUpper} · {site.businessType}
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
          <div className="hidden justify-center lg:col-span-5 lg:flex">
            <HeroGraphic />
          </div>
        </Container>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-brand" />
      </section>

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
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

      <CtaBand />
    </>
  );
}
