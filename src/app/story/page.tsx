import type { Metadata } from "next";
import { StoryCard } from "@/components/cards/StoryCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
import { PageHeader } from "@/components/ui/PageHeader";
import { getStories } from "@/lib/content";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const breadcrumbs = [
  { name: "HOME", path: routes.home },
  { name: "STORY", path: routes.story },
];

export const metadata: Metadata = buildMetadata({
  title: "STORY",
  description:
    "쇼핑몰 창업과 이커머스 현장에서 시작해 AI 이커머스에 이르기까지, 고아라(KO A RA)가 지나온 과정과 판단의 기록입니다.",
  path: routes.story,
});

export default function StoryPage() {
  const stories = getStories();

  return (
    <>
      <PageHeader
        eyebrow="STORY"
        title="STORY"
        titleKo="왜 여기까지 왔는가"
        lead="공식 프로필이 담지 못하는 판단과 과정을 기록합니다."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <Container>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {stories.map((story, index) => (
              <li key={story.slug}>
                <StoryCard story={story} index={index} />
              </li>
            ))}
          </ul>

          <DraftNote className="mt-14">
            현재 모든 글이 draft 상태입니다. draft 콘텐츠는 검색엔진 색인에서
            제외(noindex, follow)되고 sitemap 에도 포함되지 않습니다.
          </DraftNote>
        </Container>
      </section>

      <JsonLd data={jsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
    </>
  );
}
