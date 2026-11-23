import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { site } from "@/content/site";
import { visibleServices } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { DraftBlock } from "@/components/ui/Draft";

// Only services that may be published get a page; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return visibleServices().map((s) => ({ slug: s.slug }));
}

function getService(slug: string) {
  return visibleServices().find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} | ${site.name}`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

function List({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 leading-relaxed">
            <Check aria-hidden className="mt-1 size-4 shrink-0 text-brand" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const draft = !service.confirmed;

  return (
    <>
      <PageHero
        title={service.title}
        eyebrow="Service"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <p>{service.summary}</p>
      </PageHero>

      <Section>
        <DraftBlock draft={draft}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{service.overview}</p>
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <List title="Scope of work" items={service.scope} />
                <List title="Typical deliverables" items={service.deliverables} />
              </div>
            </div>
            <aside className="space-y-8 lg:col-span-5">
              {service.sectors.length > 0 && (
                <div className="rounded-card border border-line bg-surface p-7">
                  <h2 className="text-lg font-bold">Relevant sectors</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.sectors.map((s, i) => (
                      <li key={i} className="rounded-full border border-line bg-white px-3 py-1 text-sm">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {service.approach.length > 0 && (
                <div className="rounded-card border border-line p-7">
                  <h2 className="text-lg font-bold">Execution approach</h2>
                  <ol className="mt-5 space-y-4">
                    {service.approach.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="pt-0.5 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </aside>
          </div>
        </DraftBlock>
      </Section>

      <CtaBand title="Discuss your requirement" cta="Discuss Your Requirement" />
    </>
  );
}
