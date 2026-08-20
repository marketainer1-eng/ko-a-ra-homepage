import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-3xl font-semibold tracking-[0.2em] sm:text-4xl">
          {siteConfig.name}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          준비 중입니다.
        </p>
      </div>
    </main>
  );
}
