/**
 * 사이트 전역 설정.
 *
 * 브랜드 영문 표기는 사용자/검색엔진에 노출되는 모든 영역에서
 * 반드시 이 상수(`BRAND_NAME_EN`)를 통해 사용한다.
 * 하드코딩된 다른 표기(KoARA, Ko A Ra, koara 등)를 쓰지 않는다.
 * 저장소명·패키지명 같은 기술 식별자만 예외로 둔다.
 */
export const BRAND_NAME_EN = "KO A RA" as const;

export const siteConfig = {
  /** 사용자 노출용 브랜드 영문명 */
  name: BRAND_NAME_EN,
  /** <title> 템플릿에 사용할 기본 제목 */
  title: `${BRAND_NAME_EN} Official Website`,
  /**
   * 기본 설명. 실제 소개 문구는 다음 단계(콘텐츠 명세)에서 확정한다.
   */
  description: `${BRAND_NAME_EN} 공식 홈페이지`,
  /** 기본 로케일 (html lang 속성) */
  locale: "ko",
  /**
   * 배포 도메인. 확정되면 .env 의 NEXT_PUBLIC_SITE_URL 로 주입한다.
   * 로컬/미확정 상태에서는 localhost 로 폴백한다.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export type SiteConfig = typeof siteConfig;
