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

| 변수                   | 필요 시점             | 설명                                 |
| ---------------------- | --------------------- | ------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | 도메인 확정 후 (권장) | canonical · OG · sitemap 의 기준 URL |

미설정 시 해석 순서: `NEXT_PUBLIC_SITE_URL` → Vercel 자동 주입 값
(`NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL` / `NEXT_PUBLIC_VERCEL_URL`) →
`http://localhost:3000` (개발 fallback, production 빌드 시 경고 출력).

## Vercel Preview 배포

1. Vercel에서 **New Project → Import Git Repository → `ko-a-ra-homepage`** 선택
   (이 저장소만 독립 프로젝트로 연결한다).
2. 빌드 설정은 자동 감지값 그대로 둔다.
   - Framework: Next.js / Build: `next build` / Install: `npm install`
3. **환경변수는 필수가 아니다.** 설정하지 않으면 Preview 배포가 자기 자신의
   배포 URL을 canonical/OG 기준으로 사용한다.
   도메인이 확정되면 Production 환경에만 `NEXT_PUBLIC_SITE_URL` 을 추가한다.
4. 커스텀 도메인은 아직 연결하지 않는다.
5. `claude/...` 브랜치에 push하면 Preview 배포가 생성된다.
   Vercel Preview는 기본적으로 `X-Robots-Tag: noindex` 가 적용되어 색인되지 않는다.

## 현재 상태 (Phase 1)

전체 정보구조 · HOME 브랜드 경험 · 디자인 시스템 · 반응형 · 콘텐츠 데이터 구조 ·
SEO/GEO 기술 기반까지 완료된 상태다.
STORY 원고, 도서 정보, 프로젝트 내용, 외부 채널 URL 등 실제 콘텐츠는
Phase 2에서 확정된 자료로 채운다.
