import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // 향후 이미지가 추가되면 WebP/AVIF 로 자동 변환된다.
    formats: ["image/avif", "image/webp"],
  },

  /**
   * URL 구조가 변경될 때 301 리다이렉트를 여기에 추가한다.
   * 예: { source: "/old-path", destination: "/story", permanent: true }
   */
  async redirects() {
    return [];
  },
};

export default nextConfig;
