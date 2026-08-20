/**
 * 사이트 전역 설정.
 *
 * 브랜드 영문 표기는 사용자/검색엔진에 노출되는 모든 영역에서
 * 반드시 이 상수(`BRAND_NAME_EN`)를 통해 사용한다.
 * 하드코딩된 다른 표기(KO ARA, KOARA, GO A RA 등)를 쓰지 않는다.
 * 저장소명·패키지명·slug 같은 기술 식별자만 예외로 둔다.
 */
export const BRAND_NAME_EN = "KO A RA" as const;

/** 사용자 노출용 브랜드 한글 표기 */
export const BRAND_NAME_KO = "고아라" as const;

/** 화면·metadata에서 함께 노출할 때 사용하는 결합 표기 */
export const BRAND_NAME_COMBINED =
  `${BRAND_NAME_KO}(${BRAND_NAME_EN})` as const;

function stripTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

/**
 * 배포 URL 해석 순서.
 *
 * 1. NEXT_PUBLIC_SITE_URL (직접 지정한 확정 도메인)
 * 2. Vercel 자동 주입 값 (Production 도메인 → Preview 배포 URL)
 * 3. 개발 환경 fallback (localhost)
 *
 * 도메인이 확정되면 1번만 설정하면 되고, 그 전까지 Vercel Preview는
 * 2번 경로로 자기 자신의 배포 URL을 canonical/OG에 사용한다.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return stripTrailingSlash(explicit);
  }

  const productionHost =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && productionHost) {
    return `https://${stripTrailingSlash(productionHost)}`;
  }

  const deploymentHost =
    process.env.NEXT_PUBLIC_VERCEL_URL?.trim() ??
    process.env.VERCEL_URL?.trim();
  if (deploymentHost) {
    return `https://${stripTrailingSlash(deploymentHost)}`;
  }

  if (process.env.NODE_ENV === "production") {
    console.warn(
      "[site] NEXT_PUBLIC_SITE_URL 이 설정되지 않아 localhost 로 폴백합니다. " +
        "배포 환경에서는 반드시 NEXT_PUBLIC_SITE_URL 을 설정하세요.",
    );
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  /** 사용자 노출용 브랜드 영문명 */
  name: BRAND_NAME_EN,
  /** 사용자 노출용 브랜드 한글명 */
  nameKo: BRAND_NAME_KO,
  /** HOME 기본 title */
  title: `${BRAND_NAME_COMBINED} | AI 이커머스 전문가`,
  /** 하위 페이지 title 템플릿 */
  titleTemplate: `%s | ${BRAND_NAME_COMBINED}`,
  /** HOME 기본 description */
  description:
    `AI 이커머스 전문가 ${BRAND_NAME_COMBINED}의 공식 홈페이지. ` +
    "쇼핑몰 창업과 이커머스 현장에서 시작해 AI 검색·추천·쇼핑 에이전트·GEO·AI 마케팅·Vertical AI로 " +
    "확장해온 전문성과 프로젝트, 저서, 미디어 활동, 그리고 앞으로의 비전을 소개합니다.",
  /** 기본 로케일 (html lang 속성) */
  locale: "ko",
  /** Open Graph 로케일 */
  ogLocale: "ko_KR",
  /** 배포 URL (환경변수 기반) */
  url: resolveSiteUrl(),
} as const;

export type SiteConfig = typeof siteConfig;
