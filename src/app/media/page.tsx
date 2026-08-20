import type { Metadata } from "next";
import { ChannelCard } from "@/components/cards/ChannelCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { mediaItems } from "@/content/media";
import { getMediaChannels } from "@/lib/content";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const breadcrumbs = [
  { name: "HOME", path: routes.home },
  { name: "MEDIA", path: routes.media },
];

export const metadata: Metadata = buildMetadata({
  title: "MEDIA",
  description:
    "고아라(KO A RA)의 글과 미디어 활동. 한국쇼핑몰신문, AI에이전트타임즈, 교수칼럼, YouTube, Threads, Instagram 등 원문이 있는 채널로 연결합니다.",
  path: routes.media,
});

export default function MediaPage() {
  const channels = getMediaChannels();
  const publications = channels.filter(
    (channel) => channel.type === "news" || channel.type === "column",
  );
  const socials = channels.filter(
    (channel) => channel.type === "social" || channel.type === "video",
  );

  return (
    <>
      <PageHeader
        eyebrow="MEDIA"
        title="MEDIA"
        titleKo="글과 미디어 활동"
        lead="외부 콘텐츠의 전문을 이 사이트에 복제하지 않습니다. 각 채널의 원문으로 연결합니다."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <Container>
          <h2 className="font-display text-brand text-sm font-semibold tracking-[0.18em] uppercase">
            Publications
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publications.map((channel) => (
              <li key={channel.key}>
                <ChannelCard channel={channel} />
              </li>
            ))}
          </ul>

          <h2 className="font-display text-brand mt-20 text-sm font-semibold tracking-[0.18em] uppercase">
            Social
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((channel) => (
              <li key={channel.key}>
                <ChannelCard channel={channel} />
              </li>
            ))}
          </ul>

          <h2 className="font-display text-brand mt-20 text-sm font-semibold tracking-[0.18em] uppercase">
            Selected Works
          </h2>
          <div className="mt-8">
            {mediaItems.length > 0 ? (
              <ul className="grid gap-6 sm:grid-cols-2">
                {mediaItems.map((item) => (
                  <li
                    key={`${item.channel}-${item.title}`}
                    className="border-charcoal/12 border bg-white p-6"
                  >
                    <p className="label-caps text-brand">{item.channel}</p>
                    <h3 className="text-navy mt-3 font-serif text-lg break-keep">
                      {item.externalUrl ? (
                        <a
                          href={item.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand transition-colors"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    {item.date ? (
                      <time
                        dateTime={item.date}
                        className="text-charcoal/62 mt-2 block text-sm"
                      >
                        {item.date}
                      </time>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState
                title="등록된 콘텐츠 없음"
                description="개별 칼럼·영상·인터뷰는 원문 URL이 확인되는 대로 링크 카드로 등록됩니다."
              />
            )}
          </div>

          <DraftNote className="mt-14">
            모든 채널의 공식 URL이 아직 확인되지 않아 링크가 비활성 상태입니다.
            URL이 확정되면 verified 처리되어 자동으로 링크가 열립니다.
          </DraftNote>
        </Container>
      </section>

      <JsonLd data={jsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
    </>
  );
}
