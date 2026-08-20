import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { person } from "@/config/person";
import { siteConfig } from "@/config/site";
import { routes } from "@/lib/routes";

const narrativeAnchors = [
  { label: "PAST", href: "#past" },
  { label: "PRESENT", href: "#present" },
  { label: "FUTURE", href: "#future" },
];

/**
 * HOME HERO.
 *
 * 가장 먼저 인식되어야 하는 관계: 고아라 = AI 이커머스
 * → h1 안에 KO A RA / AI E-COMMERCE / AI 이커머스 전문가 고아라 를 함께 둔다.
 *
 * 프로필 사진은 제공되지 않았으므로 가짜 인물 사진을 사용하지 않고
 * 오른쪽에 레이아웃 공간만 확보한다.
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
              {person.officialRole.organization}{" "}
              {person.officialRole.department}
              <br />
              <span className="font-semibold">{person.officialRole.title}</span>
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink href={routes.story}>MY STORY</ActionLink>
              <ActionLink href={routes.about} variant="outline">
                ABOUT
              </ActionLink>
            </div>
          </div>

          {/*
            프로필 사진 자리.
            사진이 준비되면 이 블록 내부를 next/image 로 교체하면 된다.
            (가짜 인물 사진이나 스톡 이미지를 넣지 않는다)
          */}
          <div className="relative hidden lg:block">
            <div className="border-charcoal/15 relative aspect-4/5 w-full border bg-white">
              <span
                aria-hidden="true"
                className="border-brand absolute -top-px -left-px size-10 border-t-2 border-l-2"
              />
              <span
                aria-hidden="true"
                className="border-brand absolute -right-px -bottom-px size-10 border-r-2 border-b-2"
              />
              <div
                aria-hidden="true"
                className="flex h-full flex-col items-center justify-center gap-6"
              >
                <span
                  className="font-display text-charcoal/45 text-sm font-semibold tracking-[0.5em] uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  {siteConfig.name}
                </span>
                <span className="label-caps text-charcoal/45">PORTRAIT</span>
              </div>
            </div>
          </div>
        </div>

        <nav
          aria-label="HOME 서사 순서"
          className="border-charcoal/12 mt-16 border-t pt-6 lg:mt-20"
        >
          <ol className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {narrativeAnchors.map((anchor, index) => (
              <li key={anchor.href} className="flex items-center gap-6">
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
