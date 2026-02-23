# Pickso 랜딩페이지 프로젝트 작업 기록

## 프로젝트 개요
- **프로젝트명:** Pickso 랜딩페이지 (팔리는 랜딩페이지)
- **기술 스택:** Next.js 16.1.4 (Turbopack) + Tailwind CSS + Framer Motion + GSAP
- **폰트:** Paperlogy, Pretendard
- **브랜드 컬러:** #ec622d (오렌지)
- **배포:** Vercel - https://pickso-landing.vercel.app/
- **GitHub:** https://github.com/cospick2019-sketch/landing-page.git (main 브랜치)
- **로컬 경로:** C:\Users\하령\Desktop\code\landing-sales-cursor

---

## 완료된 작업

### 1. GitHub 연결 및 배포
- GitHub repo `cospick2019-sketch/landing-page`에 연결
- collaborator로 `dlgkfud2534-wq` 추가하여 push 권한 확보
- Vercel에 배포 완료 (git push 시 자동 배포)

### 2. korean-landing-layout 스킬 적용 (라이트 테마 전환)
`korean-landing-layout/` 폴더의 SKILL.md + layout-spec.md 스펙에 따라 전체 리디자인 완료.

#### 핵심 변경사항:
- **테마:** 다크(#0a0a0a) → 라이트(bg-white / bg-gray-50 교차)
- **반응형:** sm/lg/xl/2xl 브레이크포인트 전부 제거 → **md: only** (2단계)
- **globals.css:** Section4 별 애니메이션 CSS ~2080줄 삭제, body 배경/텍스트 반전
- **헤더:** 고정 오렌지 헤더 → 글래스모피즘 (투명 → bg-white/80 backdrop-blur-md)
- **타이포그래피 표준:**
  - H1: text-4xl md:text-6xl font-extrabold leading-tight tracking-tight
  - H2: text-3xl md:text-5xl font-bold leading-tight tracking-tight
  - H3: text-xl md:text-2xl font-semibold
  - body: text-base md:text-lg leading-[1.7]
- **컨테이너:** max-w-7xl mx-auto px-4 md:px-6
- **섹션 패딩:** py-12 md:py-20
- **CTA 버튼:** rounded-full, h-12 md:h-14 px-8

#### 섹션별 배경색 배치:
| 섹션 | 배경 | id |
|------|------|-----|
| Hero | 비디오 + 다크 오버레이 | hero |
| Section2 | 배경 이미지 (원본 유지, maxWidth: 1900px) | problem |
| Section3 | bg-gray-50 | comparison |
| Section4 | bg-white | process |
| Section5 | bg-gray-50 | stats |
| Section5_1 | bg-white | cta-mid |
| Section6 | bg-gray-50 | guarantee |
| Section7_1 | bg-gray-900 (다크 유지) | video |
| Section8 | bg-white | faq |

#### 수정된 파일 목록 (21개):
**컴포넌트:**
- `components/Hero.tsx` - 글래스모피즘 헤더 + 히어로 표준화 + CTA 글로우 효과
- `components/Section2.tsx` - 배경 이미지/maxWidth 원본 유지, id 추가
- `components/Section3.tsx` - bg-gray-50, md: 통일
- `components/Section4.tsx` - 별 배경 제거, bg-white
- `components/Section5.tsx` - bg-gray-50, 통계 레이아웃 표준화
- `components/Section5_1.tsx` - 다크 → bg-white
- `components/Section6.tsx` - bg-gray-50, 카드 스타일 전환
- `components/Section7_1.tsx` - bg-gray-900 유지 (다크 섹션)
- `components/Section8.tsx` - 다크 → bg-white, FAQ 라이트
- `components/ConsultModal.tsx` - 다크 → bg-white
- `components/feature-section.tsx` - 라이트 테마 색상 적용

**설정:**
- `config/header.config.ts` - 글래스모피즘용 설정
- `config/hero.config.ts` - 간소화 (eyebrow, lead 등)
- `config/section4.config.ts` - 색상 설정 제거
- `config/section5.config.ts` - 라이트 테마 색상
- `config/section5-1.config.ts` - 라이트 테마 색상
- `config/section6.config.ts` - 라이트 테마 색상
- `config/section7_1.config.ts` - bg-gray-900 유지
- `config/section8.config.ts` - 라이트 테마 색상

**글로벌:**
- `app/globals.css` - body 테마 전환, 별 애니메이션 삭제
- `app/page.tsx` - bg-white, 섹션 주석 추가

---

## 진행 예정 작업

### 1. 21st.dev 효과 적용
- 사용자가 21st.dev에서 원하는 컴포넌트/효과를 직접 선택
- 선택된 효과의 URL/이름을 받아서 각 섹션에 적용
- **참고:** Magic MCP(@21st-dev/magic) 서버가 현재 응답 형식 버그 있음 (inspiration, refiner 도구 사용 불가, builder만 부분 작동)

### 2. 상담 폼 수정 + Firebase 연동
- 폼 내용 확정 후 수정
- Firebase Firestore에 폼 데이터 저장 연동
- `components/ConsultModal.tsx` 수정 예정

### 3. 추가 디자인 개선
- 사용자가 21st.dev에서 선택한 variant별 효과 적용
- 히어로: 버튼 효과 (variant 선택 대기), 스크롤 패럴랙스 텍스트 효과 (variant 선택 대기)

---

## 프로젝트 구조 (주요 파일)
```
landing-sales-cursor/
├── app/
│   ├── globals.css          # 글로벌 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 페이지 (섹션 조합)
├── components/
│   ├── Hero.tsx             # 히어로 + 헤더 (글래스모피즘)
│   ├── Section2.tsx         # 문제 제기 (GSAP 레이어 애니메이션)
│   ├── Section3.tsx         # 비교 섹션
│   ├── Section4.tsx         # 기능 소개 (FeatureSteps)
│   ├── Section5.tsx         # 통계 + 포트폴리오 마키
│   ├── Section5_1.tsx       # 중간 CTA
│   ├── Section6.tsx         # 보장 카드
│   ├── Section7_1.tsx       # 비디오 섹션 (다크)
│   ├── Section8.tsx         # FAQ 아코디언
│   ├── ConsultModal.tsx     # 상담 신청 모달
│   ├── feature-section.tsx  # FeatureSteps 컴포넌트
│   └── hero-video.tsx       # 비디오 스크롤 애니메이션 컴포넌트
├── config/                  # 각 섹션별 설정 파일
│   ├── header.config.ts
│   ├── hero.config.ts
│   ├── section2.config.ts
│   ├── section3.config.ts
│   ├── section4.config.ts
│   ├── section5.config.ts
│   ├── section5-1.config.ts
│   ├── section6.config.ts
│   ├── section7_1.config.ts
│   └── section8.config.ts
├── korean-landing-layout/   # 레이아웃 스킬 스펙 (참고용)
│   ├── SKILL.md
│   └── references/layout-spec.md
└── public/                  # 정적 에셋 (이미지, 비디오)
```

---

## 디자인 스펙 요약 (korean-landing-layout)
- **반응형:** 2단계만 사용 (기본=모바일, md:=768px+)
- **배경 교차:** bg-white ↔ bg-gray-50, 최대 2개 bg-gray-900
- **텍스트 색상:** gray-900(제목), gray-600(리드), gray-700(본문), gray-500(캡션)
- **CTA:** bg-[#ec622d] text-white rounded-full (브랜드 Primary)
- **헤더:** 글래스모피즘, h-14 md:h-16, 3단 구조(로고/네비/CTA)
- **간격:** 8px 그리드 (gap-2, gap-4, gap-6, gap-8 ...)
- **정렬:** 기본 text-center

---

## 참고사항
- `npm run dev`로 로컬 개발 서버 실행 (localhost:3000)
- `git push origin main`하면 Vercel 자동 배포
- Section2는 max-w-7xl이 아닌 원본 maxWidth(1900px) 사용 (이미지 레이어 애니메이션 특성상)
- Hero의 CTA 버튼에 글로우 효과(blur-xl) 적용됨
- 로고: 스크롤 전 흰색(`/pickso-logo-white.png`), 스크롤 후 초록(`/pickso-logo-green.png`)
