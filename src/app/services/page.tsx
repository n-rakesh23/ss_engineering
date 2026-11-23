import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { visibleServices } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/Cards";

export const metadata = pageMetadata({
  title: `Services | ${site.name}`,
  description: `Explore ${site.name}'s contract services, scope and delivery approach.`,
  path: "/services",
});

export default function ServicesPage() {
  const services = visibleServices();
  // No confirmed services yet → the page is not published.
  if (services.length === 0) notFound();

  return (
    <>
      <PageHero title="Our services" eyebrow="Services" crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}>
        <p>An overview of the contract services {site.name} provides.</p>
      </PageHero>
      <Section tone="surface">
        <h2 className="sr-only">Service list</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>
      <CtaBand title="Discuss your requirement" cta="Send an Enquiry" />
    </>
  );
}
