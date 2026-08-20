import type { Metadata } from "next";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { mainNav, routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "404",
  description: "요청하신 페이지를 찾을 수 없습니다.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-ivory py-28 sm:py-36 lg:py-44">
      <Container size="narrow">
        <p className="font-display text-brand text-[clamp(3.5rem,14vw,8rem)] leading-none font-semibold tracking-[0.08em]">
          404
        </p>

        <h1 className="text-navy mt-8 font-serif text-2xl leading-snug font-medium break-keep sm:text-3xl">
          요청하신 페이지를 찾을 수 없습니다.
        </h1>

        <p className="text-charcoal/70 mt-5 text-[0.975rem] leading-[1.9] break-keep">
          주소가 변경되었거나 삭제된 페이지일 수 있습니다. 아래 메뉴에서
          원하시는 내용을 찾아보실 수 있습니다.
        </p>

        <div className="mt-10">
          <ActionLink href={routes.home}>HOME</ActionLink>
        </div>

        <nav aria-label="사이트 메뉴" className="mt-14">
          <ul className="border-charcoal/12 flex flex-wrap gap-x-6 gap-y-1 border-t pt-6">
            {mainNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-charcoal/70 hover:text-brand inline-flex min-h-11 items-center text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
