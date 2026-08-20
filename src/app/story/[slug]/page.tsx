import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getStories, getStoryBySlug } from "@/lib/content";
import { breadcrumbSchema, jsonLdGraph, storySchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { routes, storyPath } from "@/lib/routes";

export function generateStaticParams() {
  return getStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata(
  props: PageProps<"/story/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return buildMetadata({
      title: "STORY",
      description: "요청한 글을 찾을 수 없습니다.",
      path: storyPath(slug),
      noindex: true,
    });
  }

  return buildMetadata({
    title: story.title,
    description:
      story.status === "published"
        ? story.summary
        : `${story.title} — 원고 준비 중인 글입니다.`,
    path: storyPath(story.slug),
    // draft 콘텐츠는 noindex, follow
    noindex: story.status !== "published",
    ogType: "article",
    publishedTime: story.publishedAt,
    modifiedTime: story.updatedAt,
  });
}

export default async function StoryDetailPage(
  props: PageProps<"/story/[slug]">,
) {
  const { slug } = await props.params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const breadcrumbs = [
    { name: "HOME", path: routes.home },
    { name: "STORY", path: routes.story },
    { name: story.title, path: storyPath(story.slug) },
  ];

  return (
    <>
      <PageHeader
        eyebrow="STORY"
        title={story.title}
        titleFont="serif"
        breadcrumbs={breadcrumbs}
        size="narrow"
        meta={
          <div className="flex flex-wrap items-center gap-4">
            <StatusBadge status={story.status} inverse />
            {story.publishedAt ? (
              <time
                dateTime={story.publishedAt}
                className="label-caps text-white/65"
              >
                {story.publishedAt}
              </time>
            ) : null}
          </div>
        }
      />

      <article className="bg-ivory py-20 sm:py-24 lg:py-28">
        <Container size="narrow">
          {story.body.length > 0 ? (
            <div className="flex flex-col gap-7">
              {story.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-charcoal/85 text-[1.0625rem] leading-[2] break-keep"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <EmptyState
              title="원고 준비 중"
              description="이 글의 본문은 아직 작성되지 않았습니다. 제목과 URL 구조만 확정된 상태이며, 원고가 준비되면 이 자리에 표시됩니다."
            />
          )}

          <DraftNote className="mt-12">
            draft 상태의 글은 검색엔진 색인에서 제외(noindex, follow)되고
            sitemap 에도 포함되지 않습니다.
          </DraftNote>

          <div className="border-charcoal/12 mt-12 border-t pt-8">
            <ArrowLink href={routes.story}>ALL STORIES</ArrowLink>
          </div>
        </Container>
      </article>

      <JsonLd
        data={jsonLdGraph([breadcrumbSchema(breadcrumbs), storySchema(story)])}
      />
    </>
  );
}
