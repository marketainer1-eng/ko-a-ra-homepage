import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Project } from "@/content/types";
import { projectPath } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group border-charcoal/12 hover:border-brand flex h-full flex-col border bg-white p-6 transition-colors sm:p-8",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={project.status} />
        {project.phase ? (
          <span className="label-caps text-charcoal/70">{project.phase}</span>
        ) : null}
      </div>

      <h3 className="text-navy mt-5 font-serif text-xl leading-snug font-medium break-keep">
        <Link
          href={projectPath(project.slug)}
          className="group-hover:text-brand transition-colors"
        >
          {project.title}
        </Link>
      </h3>

      <p className="text-charcoal/70 mt-3 flex-1 text-sm leading-[1.8] break-keep">
        {project.summary}
      </p>

      <p className="font-display text-brand mt-6 text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
        VIEW
        <span
          aria-hidden="true"
          className="ml-2 inline-block transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </p>
    </article>
  );
}
