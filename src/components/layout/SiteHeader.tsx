"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/layout/Wordmark";
import { siteConfig } from "@/config/site";
import { isActivePath, mainNav, routes } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const panelId = useId();

  // 경로가 바뀌면 모바일 메뉴를 닫는다.
  // (effect 대신 렌더 중 상태 조정 — 불필요한 리렌더 연쇄를 만들지 않는다)
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Escape 로 닫기
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="border-charcoal/10 bg-ivory/95 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3.5">
        <Link
          href={routes.home}
          className="text-navy inline-flex min-h-11 items-center text-[0.8125rem] sm:text-sm"
          aria-label={`${siteConfig.name} — HOME`}
        >
          <Wordmark />
        </Link>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-display inline-flex min-h-11 items-center px-3 text-[0.7rem] font-semibold tracking-[0.16em] uppercase transition-colors",
                      active
                        ? "text-brand"
                        : "text-charcoal/70 hover:text-navy",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="border-charcoal/20 text-navy hover:border-brand hover:text-brand inline-flex size-11 items-center justify-center border transition-colors md:hidden"
        >
          <span className="sr-only">{open ? "메뉴 닫기" : "메뉴 열기"}</span>
          <span aria-hidden="true" className="flex flex-col items-center gap-1">
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform",
                open && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-current transition-transform",
                open && "-translate-y-[5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id={panelId}
        hidden={!open}
        className="border-charcoal/10 bg-ivory border-t md:hidden"
      >
        <Container>
          <nav aria-label="모바일 메뉴">
            <ul className="flex flex-col py-2">
              {mainNav.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "border-charcoal/5 font-display flex min-h-12 items-center border-b text-xs font-semibold tracking-[0.18em] uppercase transition-colors",
                        active ? "text-brand" : "text-charcoal/75",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
