import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project, Service } from "@/content/types";
import { DraftTag } from "./Draft";
import { asset } from "@/lib/asset";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-line bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-brand/40 hover:shadow-[0_12px_32px_-16px_rgb(16_42_67/0.25)] sm:p-7">
      <div className="mb-6 flex items-start justify-between gap-3">
        <span aria-hidden className="font-display text-sm font-bold tabular-nums text-brand">
          {String(index + 1).padStart(2, "0")}
        </span>
        {!service.confirmed && <DraftTag />}
      </div>
      <h3 className="text-xl font-bold">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 after:rounded-card">
          {service.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{service.summary}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        View service details
        <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const draft = !project.confirmed || !project.clientPermission;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-white">
      <div className="relative aspect-[16/10] bg-surface bg-blueprint-light">
        {project.image ? (
          <Image
            src={asset(project.image.src)}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="size-full object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-muted">
            Approved photograph required
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {draft && <DraftTag className="mb-3 self-start" />}
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.client}</p>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed">{project.scope}</p>
        <p className="mt-5 flex items-center gap-1.5 text-sm text-muted">
          <MapPin aria-hidden className="size-4 text-brand" />
          {project.location}
          {project.period && <span aria-hidden>·</span>}
          {project.period}
        </p>
      </div>
    </article>
  );
}

export function TrustItem({ title, description, draft }: { title: string; description: string; draft: boolean }) {
  return (
    <div className="border-t-2 border-brand pt-5">
      {draft && <DraftTag className="mb-3" />}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{description}</p>
    </div>
  );
}
