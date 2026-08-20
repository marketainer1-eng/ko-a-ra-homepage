import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

/**
 * 기본 Open Graph 이미지.
 *
 * 인물 사진이 제공되지 않았으므로 브랜드 타이포그래피만으로 구성한다.
 * (satori 기본 폰트에 한글 글리프가 없어 이미지에는 영문만 사용한다.
 *  핵심 정보는 모두 HTML 텍스트로도 존재한다.)
 */
export const alt = `${siteConfig.name} — AI E-COMMERCE`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#081a33",
        padding: "80px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <div
          style={{
            width: "56px",
            height: "6px",
            backgroundColor: "#1457d9",
            display: "flex",
          }}
        />
        <div
          style={{
            color: "#eaf1ff",
            fontSize: "22px",
            letterSpacing: "0.32em",
            display: "flex",
          }}
        >
          OFFICIAL WEBSITE
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <div
          style={{
            color: "#ffffff",
            fontSize: "116px",
            fontWeight: 700,
            letterSpacing: "0.16em",
            display: "flex",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            color: "#1457d9",
            fontSize: "40px",
            fontWeight: 600,
            letterSpacing: "0.24em",
            display: "flex",
          }}
        >
          AI E-COMMERCE
        </div>
      </div>
    </div>,
    size,
  );
}
