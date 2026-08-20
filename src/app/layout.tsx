import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Serif_KR } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { jsonLdGraph, personSchema, webSiteSchema } from "@/lib/jsonld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * 한글 세리프 제목용 폰트.
 * 한글은 named subset 이 없어 preload 하지 않고, 브라우저가 필요한
 * unicode-range 만 내려받도록 한다. (폰트 파일은 저장소에 포함하지 않는다)
 */
const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.ogLocale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081a33",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerifKr.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="focus:bg-brand sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-3 focus:text-sm focus:text-white"
        >
          본문 바로가기
        </a>

        <SiteHeader />

        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter />

        <JsonLd data={jsonLdGraph([personSchema(), webSiteSchema()])} />
      </body>
    </html>
  );
}
