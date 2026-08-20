import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";

/**
 * robots.txt
 *
 * 개별 draft 콘텐츠는 페이지 metadata 의 robots(noindex, follow)로 제어하고,
 * 여기서는 전체 크롤링을 허용한다.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
