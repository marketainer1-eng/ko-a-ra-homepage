# ko-a-ra-homepage

KO A RA 공식 홈페이지 (Personal Brand Archive + Official Entity Hub + Media Hub).

> **브랜드 표기 규칙**
> 화면·metadata·콘텐츠·구조화 데이터 등 사용자 또는 검색엔진에 노출되는 모든
> 영역에서는 반드시 **`KO A RA`** 로 표기한다.
> `KO ARA` / `KOARA` / `GO A RA` / `KO A  RA` 등 변형은 금지한다.
> 저장소명(`ko-a-ra-homepage`), 패키지명, slug 같은 기술 식별자만 예외다.
> 노출용 표기는 `src/config/site.ts` 의 `BRAND_NAME_EN` 상수를 통해서만 사용한다.

## 기술 스택

| 항목       | 버전                                  |
| ---------- | ------------------------------------- |
| Next.js    | 16.3.1 (App Router)                   |
| React      | 19.2.8                                |
| TypeScript | 5.x (strict)                          |
| Tailwind   | CSS v4 (`@tailwindcss/postcss`)       |
| ESLint     | 9.x (`eslint-config-next`, flat 설정) |
| Prettier   | 3.x (+ `prettier-plugin-tailwindcss`) |
| Node.js    | 20.9 이상 (개발 기준 22.x, `.nvmrc`)  |

## 로컬 실행

```bash
npm install
npm run dev     # http://localhost:3000
```

| 명령                   | 설명                                 |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | 개발 서버                            |
| `npm run build`        | 프로덕션 빌드                        |
| `npm run start`        | 빌드 결과 실행                       |
| `npm run lint`         | ESLint 검사                          |
| `npm run typecheck`    | `next typegen` + `tsc --noEmit`      |
| `npm run format`       | Prettier 포맷 적용                   |
| `npm run format:check` | Prettier 포맷 검사                   |
| `npm run check`        | lint + typecheck + format:check 일괄 |

## URL 구조

| URL                | 설명                                    |
| ------------------ | --------------------------------------- |
| `/`                | HOME (PAST → PRESENT → FUTURE 서사)     |
| `/story`           | STORY 목록                              |
| `/story/[slug]`    | STORY 상세                              |
| `/vision`          | Vertical AI / Expert IP Ecosystem       |
| `/books`           | BOOKS 목록                              |
| `/books/[slug]`    | BOOKS 상세                              |
| `/projects`        | PROJECTS 목록                           |
| `/projects/[slug]` | PROJECTS 상세 (WHY/PROBLEM/BUILD/…)     |
| `/media`           | 외부 채널 링크 허브                     |
| `/about`           | 공식 프로필                             |
| `/robots.txt`      | robots (`src/app/robots.ts`)            |
| `/sitemap.xml`     | sitemap (published 콘텐츠만)            |
| `/opengraph-image` | 기본 OG 이미지 (`next/og` 로 자동 생성) |

URL 변경 시 `src/lib/routes.ts` 를 수정하고, `next.config.ts` 의 `redirects()` 에
301 규칙을 추가한다.

## 폴더 구조

```
src/
├── app/                     # 라우트 (App Router)
│   ├── layout.tsx           # 폰트 · 전역 metadata · Person/WebSite JSON-LD
│   ├── page.tsx             # HOME (11개 섹션 조합)
│   ├── story|vision|books|projects|media|about/
│   ├── not-found.tsx        # 404
│   ├── robots.ts / sitemap.ts
│   └── opengraph-image.tsx / twitter-image.tsx
├── components/
│   ├── layout/              # SiteHeader · SiteFooter · Wordmark
│   ├── home/                # HOME 섹션 11종
│   ├── diagrams/            # PastTimeline · VerticalAI · ExpertIP (HTML/CSS)
│   ├── cards/               # Story · Book · Project · Channel 카드
│   ├── ui/                  # Section · Container · ActionLink · Badge 등
│   └── seo/JsonLd.tsx
├── config/
│   ├── site.ts              # 브랜드 상수 · 배포 URL 해석
│   └── person.ts            # Person Entity
├── content/                 # 콘텐츠 데이터 (UI와 분리)
│   ├── types.ts  narrative.ts  stories.ts  books.ts  projects.ts  media.ts
└── lib/
    ├── routes.ts  content.ts  metadata.ts  jsonld.ts  cn.ts
```

경로 별칭: `@/*` → `src/*`

## 콘텐츠 운영 규칙

- **UI와 데이터 분리**: 페이지는 `src/lib/content.ts` 의 함수만 사용한다.
  CMS를 붙이더라도 이 파일의 구현만 교체하면 된다.
- **status**
  - `draft` → 화면에는 보이지만 `noindex, follow` + sitemap 제외 + JSON-LD 미출력
  - `published` → `index, follow` + sitemap 포함 + JSON-LD 출력
- **확인되지 않은 사실은 넣지 않는다.** 연도·성과·ISBN·기관 관계·외부 URL이
  확인되기 전에는 `null` / 빈 배열로 두고, 구조화 데이터에도 출력하지 않는다.
  외부 채널은 `verified: true` 이고 `url` 이 있을 때만 링크로 렌더링된다.

## 환경 변수

| 변수                   | 필요 시점              | 설명                                                      |
| ---------------------- | ---------------------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Production 배포 (필수) | canonical · OG · sitemap · robots · JSON-LD 의 기준 URL   |
| `URL`                  | Netlify 자동 주입      | Production 배포에서 `NEXT_PUBLIC_SITE_URL` 미설정 시 사용 |
| `DEPLOY_PRIME_URL`     | Netlify 자동 주입      | Deploy Preview · Branch deploy 의 기준 URL                |

해석 순서 (`src/config/site.ts`):

1. `NEXT_PUBLIC_SITE_URL`
2. Netlify 자동 주입 값 — Production(`CONTEXT=production`)은 `URL`,
   Deploy Preview / Branch deploy 는 `DEPLOY_PRIME_URL`
3. `http://localhost:3000` — 로컬 개발 환경에서만 허용한다.
   Netlify/CI 빌드에서 기준 URL을 알 수 없으면 빌드가 실패한다.

## 개발 · 배포 흐름

**Claude Code → GitHub → Netlify**

1. Claude Code에서 작업 브랜치에 커밋하고 GitHub에 push한다.
2. Netlify가 GitHub 저장소(`ko-a-ra-homepage`)를 감지해 빌드한다.
   - 빌드 설정은 `netlify.toml` 에 있다 (`npm run build`, Node 22).
   - Next.js는 Netlify가 자동 감지하므로 별도 plugin 설정을 추가하지 않는다.
3. Pull Request / 브랜치는 Deploy Preview로 확인한다.
   Preview는 환경변수 없이도 자기 자신의 배포 URL을 기준 URL로 사용한다.
4. Production 배포 시에는 Netlify 환경변수에 `NEXT_PUBLIC_SITE_URL` 을
   최종 공식 도메인으로 설정한다.

Production 배포와 커스텀 도메인 연결은 아직 진행하지 않았다.

## 현재 상태 (Phase 2-A)

- **Phase 1**: 정보구조 · 디자인 시스템 · 반응형 · 콘텐츠 데이터 구조 · SEO/GEO 기반
- **Phase 2-A (완료)**: HOME / ABOUT / VISION 실제 콘텐츠 반영
  - 서사 데이터는 `src/content/narrative.ts`, Person 기준정보는 `src/config/person.ts`
  - 기관 관계는 화면 표시(`relation`)와 Schema 출력 조건(`url` + `verified`)을 분리했다.
    공식 URL과 관계가 검증되기 전에는 founder / affiliation / worksFor 등을 출력하지 않는다.
- **남은 단계**: BOOKS 데이터(Phase 2-B), STORY 원고 · PROJECTS 내용 ·
  외부 채널 URL · 기관 관계 Schema 확정(Phase 2-C)
