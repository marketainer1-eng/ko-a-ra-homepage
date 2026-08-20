# ko-a-ra-homepage

KO A RA 공식 홈페이지 프로젝트.

> 브랜드 표기 규칙: 화면·metadata·콘텐츠·구조화 데이터 등 사용자 또는 검색엔진에
> 노출되는 모든 영역에서는 반드시 **`KO A RA`** 로 표기한다.
> 저장소명(`ko-a-ra-homepage`), 패키지명 같은 기술 식별자만 예외다.
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
npm install     # 의존성 설치
npm run dev     # 개발 서버 → http://localhost:3000
```

## 스크립트

| 명령                   | 설명                                 |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | 개발 서버 실행                       |
| `npm run build`        | 프로덕션 빌드                        |
| `npm run start`        | 빌드 결과 실행 (`build` 선행 필요)   |
| `npm run lint`         | ESLint 검사                          |
| `npm run lint:fix`     | ESLint 자동 수정                     |
| `npm run typecheck`    | `tsc --noEmit` 타입 검사             |
| `npm run format`       | Prettier 포맷 적용                   |
| `npm run format:check` | Prettier 포맷 검사                   |
| `npm run check`        | lint + typecheck + format:check 일괄 |

## 폴더 구조

```
.
├── public/              # 정적 파일 (현재 비어 있음)
├── src/
│   ├── app/             # App Router 라우트
│   │   ├── globals.css  # Tailwind v4 진입점 및 테마 토큰
│   │   ├── layout.tsx   # 루트 레이아웃 + 전역 metadata
│   │   └── page.tsx     # 루트 페이지 (플레이스홀더)
│   └── config/
│       └── site.ts      # 사이트/브랜드 단일 설정 소스
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

경로 별칭: `@/*` → `src/*`

## 환경 변수

`.env.example` 참고. 배포 도메인이 확정되면 `NEXT_PUBLIC_SITE_URL` 을 설정한다
(metadata의 `metadataBase`, Open Graph URL에 사용).

## 현재 상태

초기화 단계 — 개발 환경 구성까지만 완료된 상태다. 실제 홈페이지 콘텐츠
(섹션 구성, 카피, 이미지, 구조화 데이터 등)는 아직 작성하지 않았다.
