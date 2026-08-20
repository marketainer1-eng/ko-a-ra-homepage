import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** 상대 경로를 배포 URL 기준 절대 URL로 변환한다. */
export function absoluteUrl(path: string): string {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export interface PageMetadataInput {
  /** 페이지 고유 title (템플릿이 적용된다) */
  title: string;
  description: string;
  /** canonical 경로 (예: "/story") */
  path: string;
  /** draft 콘텐츠 등 색인에서 제외해야 하는 경우 true → noindex, follow */
  noindex?: boolean;
  ogType?: "website" | "article" | "profile";
  publishedTime?: string | null;
  modifiedTime?: string | null;
}

/**
 * 페이지별 metadata 생성기.
 *
 * unique title / description / canonical / Open Graph / Twitter Card /
 * robots 를 한 곳에서 일관되게 구성한다.
 */
/**
 * 기본 공유 이미지.
 *
 * app/opengraph-image.tsx 로 생성되는 라우트를 가리킨다.
 * 페이지에서 openGraph 를 직접 정의하면 파일 컨벤션 이미지가 상속되지 않으므로
 * 여기서 명시적으로 함께 지정한다.
 */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — AI E-COMMERCE`,
};

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  ogType = "website",
  publishedTime = null,
  modifiedTime = null,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = siteConfig.titleTemplate.replace("%s", title);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: ogType === "profile" ? "profile" : ogType,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.ogLocale,
      title: fullTitle,
      description,
      images: [shareImage],
      ...(ogType === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}
