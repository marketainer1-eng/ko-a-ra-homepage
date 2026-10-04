import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { person } from "@/config/person";
import { siteConfig } from "@/config/site";
import { routes } from "@/lib/routes";

const narrativeAnchors = [
  { label: "PAST", href: "#past", summary: "쇼핑몰 창업 · 이커머스 현장" },
  { label: "PRESENT", href: "#present", summary: "AI E-COMMERCE" },
  { label: "FUTURE", href: "#future", summary: "VERTICAL AI × EXPERT IP" },
];

/**
 * HOME HERO.
 *
 * 가장 먼저 인식되어야 하는 관계: 고아라 = AI 이커머스
 * → h1 안에 KO A RA / AI E-COMMERCE / AI 이커머스 전문가 고아라 를 함께 둔다.
 *
 * 프로필 사진은 제공되지 않았으므로 가짜 인물 사진을 사용하지 않는다.
 * 오른쪽 패널은 사진 없이도 완성되어 보이도록 PAST → PRESENT → FUTURE 서사
 * 목차로 구성했고, 사진이 준비되면 같은 자리에 넣을 수 있다.
 */
export function Hero() {
  return (
    <section className="bg-ivory pt-14 pb-20 sm:pt-20 lg:pt-24 lg:pb-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.5fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <h1 className="flex flex-col gap-5">
              <span className="font-display text-navy text-[clamp(2.5rem,10.5vw,6rem)] leading-[0.95] font-semibold tracking-[0.12em] uppercase sm:tracking-[0.2em]">
                {siteConfig.name}
              </span>
              <span className="font-display text-brand text-[clamp(0.9rem,3vw,1.5rem)] leading-tight font-semibold tracking-[0.24em] uppercase">
                {person.primaryExpertiseEn}
              </span>
              <span className="text-charcoal font-serif text-[clamp(1.0625rem,2.6vw,1.5rem)] leading-[1.5] font-medium break-keep">
                {person.positioning}
              </span>
            </h1>

            <p className="text-charcoal/75 mt-9 max-w-[34rem] text-[0.975rem] leading-[1.9] break-keep sm:text-base">
              {person.intro}
            </p>

            <p className="border-brand text-navy mt-8 border-l-2 py-1 pl-5 text-sm leading-[1.7] break-keep">
              {person.officialRole.lines[0]}
              <br />
              <span className="font-semibold">
                {person.officialRole.lines[1]}
              </span>
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink href={routes.story}>MY STORY</ActionLink>
              <ActionLink href={routes.about} variant="outline">
                ABOUT
              </ActionLink>
            </div>
          </div>

          {/*
            브랜드 패널 (데스크톱).
            프로필 사진이 준비되면 이 패널 상단에 next/image 로 추가하면 된다.
            (가짜 인물 사진이나 스톡 이미지를 넣지 않는다)
          */}
          <nav
            aria-label="HOME 서사 순서"
            className="bg-navy relative hidden flex-col justify-between gap-16 p-10 text-white lg:flex xl:p-12"
          >
            <span
              aria-hidden="true"
              className="bg-brand absolute top-0 left-0 h-1 w-24"
            />
            <p className="label-caps text-brand-soft/80">{siteConfig.name}</p>

            <ol className="flex flex-col">
              {narrativeAnchors.map((anchor) => (
                <li
                  key={anchor.href}
                  className="border-t border-white/12 last:border-b"
                >
                  <a
                    href={anchor.href}
                    className="group flex flex-col gap-2 py-5 transition-colors"
                  >
                    <span className="label-caps text-brand-soft/70 group-hover:text-brand-soft">
                      {anchor.label}
                    </span>
                    <span className="font-display text-[0.95rem] leading-snug font-semibold tracking-[0.08em] break-keep text-white">
                      {anchor.summary}
                      <span
                        aria-hidden="true"
                        className="text-brand-soft/60 ml-2 inline-block transition-transform group-hover:translate-y-0.5"
                      >
                        ↓
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* 모바일·태블릿용 서사 목차 (데스크톱에서는 위 패널이 대신한다) */}
        <nav
          aria-label="HOME 서사 순서"
          className="border-charcoal/12 mt-14 border-t pt-6 lg:hidden"
        >
          <ol className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {narrativeAnchors.map((anchor, index) => (
              <li key={anchor.href} className="flex items-center gap-5">
                <a
                  href={anchor.href}
                  className="font-display text-charcoal/65 hover:text-brand inline-flex min-h-11 items-center text-[0.7rem] font-semibold tracking-[0.22em] uppercase transition-colors"
                >
                  {anchor.label}
                </a>
                {index < narrativeAnchors.length - 1 ? (
                  <span aria-hidden="true" className="text-brand/40">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  );
}
