import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { visibleProjects } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/Cards";

export const metadata = pageMetadata({
  title: `Projects | ${site.name}`,
  description: `Selected project experience from ${site.name}.`,
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = visibleProjects();
  // Never publish this page without at least one approved case study.
  if (projects.length === 0) notFound();

  return (
    <>
      <PageHero title="Projects & experience" eyebrow="Experience" crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}>
        <p>Approved case studies from {site.name}&apos;s project work.</p>
      </PageHero>
      <Section tone="surface">
        <h2 className="sr-only">Project list</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
