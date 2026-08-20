import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/layout/Wordmark";
import { person } from "@/config/person";
import { siteConfig } from "@/config/site";
import { getMediaChannels, isLinkable } from "@/lib/content";
import { mainNav } from "@/lib/routes";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const channels = getMediaChannels();

  return (
    <footer className="bg-navy text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Wordmark className="text-lg sm:text-xl" />
            <p className="mt-5 max-w-[24rem] text-sm leading-[1.8] break-keep text-white/70">
              {person.positioning}
            </p>
            <p className="mt-3 max-w-[24rem] text-[0.8125rem] leading-[1.8] break-keep text-white/65">
              {person.officialRole.full}
            </p>
          </div>

          <nav aria-label="사이트 메뉴">
            <p className="label-caps text-brand-soft/70">SITE</p>
            <ul className="mt-5 flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display inline-flex min-h-9 items-center text-[0.7rem] font-semibold tracking-[0.16em] text-white/70 uppercase transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-caps text-brand-soft/70">CHANNELS</p>
            <ul className="mt-5 flex flex-col gap-1">
              {channels.map((channel) => (
                <li key={channel.key}>
                  {isLinkable(channel) ? (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-9 items-center text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {channel.name}
                    </a>
                  ) : (
                    <span className="inline-flex min-h-9 items-center text-sm text-white/60">
                      {channel.name}
                      <span className="label-caps ml-2 text-white/55">
                        준비 중
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-[0.75rem] text-white/62 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="label-caps text-white/60">
            {person.primaryExpertiseEn}
          </p>
        </div>
      </Container>
    </footer>
  );
}
