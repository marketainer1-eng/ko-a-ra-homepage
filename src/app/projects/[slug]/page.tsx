import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { projectSectionOrder } from "@/content/projects";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { breadcrumbSchema, jsonLdGraph, projectSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { projectPath, routes } from "@/lib/routes";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: "PROJECTS",
      description: "요청한 프로젝트를 찾을 수 없습니다.",
      path: projectPath(slug),
      noindex: true,
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: projectPath(project.slug),
    noindex: project.status !== "published",
  });
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    { name: "HOME", path: routes.home },
    { name: "PROJECTS", path: routes.projects },
    { name: project.title, path: projectPath(project.slug) },
  ];

  return (
    <>
      <PageHeader
        eyebrow="PROJECT"
        title={project.title}
        titleFont="serif"
        lead={project.summary}
        breadcrumbs={breadcrumbs}
        meta={
          <div className="flex flex-wrap items-center gap-4">
            <StatusBadge status={project.status} inverse />
            {project.phase ? (
              <span className="label-caps text-white/65">{project.phase}</span>
            ) : null}
          </div>
        }
      />

      <article className="bg-ivory py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col gap-12">
            {projectSectionOrder.map((section, index) => {
              const value = project.sections[section.key];

              return (
                <section
                  key={section.key}
                  className="border-charcoal/12 grid gap-5 border-t pt-8 lg:grid-cols-[0.35fr_1fr] lg:gap-10"
                >
                  <h2 className="flex items-baseline gap-3">
                    <span className="label-caps text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-navy text-base font-semibold tracking-[0.14em] uppercase">
                      {section.label}
                    </span>
                  </h2>

                  <div>
                    <p className="label-caps text-charcoal/65">{section.ko}</p>
                    {value ? (
                      <p className="text-charcoal/85 mt-4 text-[1.0625rem] leading-[2] break-keep">
                        {value}
                      </p>
                    ) : (
                      <p className="text-charcoal/70 mt-4 text-sm leading-[1.9] break-keep">
                        내용 준비 중입니다.
                      </p>
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          <DraftNote className="mt-14">
            이 페이지는 프로젝트 상세 템플릿 확인용 placeholder 입니다. 실제
            프로젝트 내용과 성과는 확인된 사실만 기록합니다.
          </DraftNote>

          <div className="border-charcoal/12 mt-12 border-t pt-8">
            <ArrowLink href={routes.projects}>ALL PROJECTS</ArrowLink>
          </div>
        </Container>
      </article>

      <JsonLd
        data={jsonLdGraph([
          breadcrumbSchema(breadcrumbs),
          projectSchema(project),
        ])}
      />
    </>
  );
}
