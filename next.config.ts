import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 이면 서버 없이 올릴 수 있는 정적 HTML(out/)을 만든다.
 * (`npm run build:static` — Netlify 드래그 앤 드롭 배포용)
 * 정적 내보내기에서는 이미지 최적화 서버와 redirects()를 쓸 수 없으므로 끈다.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  ...(isStaticExport ? { output: "export" as const } : {}),

  images: {
    // 향후 이미지가 추가되면 WebP/AVIF 로 자동 변환된다.
    formats: ["image/avif", "image/webp"],
    unoptimized: isStaticExport,
  },

  /**
   * URL 구조가 변경될 때 301 리다이렉트를 여기에 추가한다.
   * 예: { source: "/old-path", destination: "/story", permanent: true }
   * 정적 내보내기에서는 public/_redirects 에 같은 규칙을 적는다.
   */
  ...(isStaticExport
    ? {}
    : {
        async redirects() {
          return [];
        },
      }),
};

export default nextConfig;
