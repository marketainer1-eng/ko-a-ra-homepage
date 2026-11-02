/**
 * 정적 HTML 내보내기 (Netlify 드래그 앤 드롭 배포용).
 *
 *   npm run build:static
 *
 * - 결과: out/ 폴더 (그대로 Netlify에 올리면 된다)
 * - 기준 URL(canonical · OG · sitemap)은 NEXT_PUBLIC_SITE_URL, 없으면 정식 주소를 쓴다.
 */
import { spawnSync } from "node:child_process";

const env = {
  ...process.env,
  STATIC_EXPORT: "1",
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ko-a-ra-homepage.netlify.app",
};

console.log(`[build:static] NEXT_PUBLIC_SITE_URL=${env.NEXT_PUBLIC_SITE_URL}`);

const result = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  env,
  shell: process.platform === "win32",
});

process.exit(result.status ?? 1);
