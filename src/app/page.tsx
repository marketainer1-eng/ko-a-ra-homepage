import { AboutCtaSection } from "@/components/home/AboutCtaSection";
import { BooksSection } from "@/components/home/BooksSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FeaturedStorySection } from "@/components/home/FeaturedStorySection";
import { FollowSection } from "@/components/home/FollowSection";
import { FutureSection } from "@/components/home/FutureSection";
import { Hero } from "@/components/home/Hero";
import { MediaSection } from "@/components/home/MediaSection";
import { PastSection } from "@/components/home/PastSection";
import { PresentSection } from "@/components/home/PresentSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";

/**
 * HOME.
 *
 * 01 HERO
 * 02 PAST — WHERE I STARTED
 * 03 PRESENT — WHERE I AM
 * 04 CURRENT ECOSYSTEM
 * 05 FUTURE — WHAT I AM BUILDING
 * 06 FEATURED STORY
 * 07 BOOKS & PUBLICATIONS
 * 08 PROJECTS
 * 09 WRITING & MEDIA
 * 10 FOLLOW KO A RA
 * 11 ABOUT / CONTACT CTA
 *
 * 한 번 스크롤하면 PAST → PRESENT → FUTURE 가 자연스럽게 읽히도록 구성한다.
 * metadata 는 app/layout.tsx 의 기본값(= HOME title/description)을 사용한다.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <PastSection />
      <PresentSection />
      <EcosystemSection />
      <FutureSection />
      <FeaturedStorySection />
      <BooksSection />
      <ProjectsSection />
      <MediaSection />
      <FollowSection />
      <AboutCtaSection />
    </>
  );
}
