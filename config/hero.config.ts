// 히어로 섹션 설정 파일
// 이 파일에서 텍스트와 스타일을 직접 수정할 수 있습니다.

export const heroConfig = {
  // ========================================
  // 텍스트 내용
  // ========================================
  text: {
    // 서브 타이틀 (첫 번째 줄)
    subTitle: {
      prefix: "디자이너에게",      // 앞부분 (얇은 폰트)
      suffix: "맡기지 마세요",     // 뒷부분 (굵은 폰트)
    },

    // 메인 헤드라인 (큰 글씨)
    headline: {
      line1: {
        prefix: "그들은 ",         // 앞부분 (얇은 폰트)
      },
      line2: "장사를 모릅니다",          // 두 번째 줄 (굵은 폰트)
    },

    // 서브 카피 (설명 텍스트)
    subCopy: {
      line1: "연매출 30억 '장사꾼'이 만드는 페이지는 다릅니다.",
      line2: {
        prefix: "예쁜 디자인? 아닙니다. ",
        highlight: "'팔리는 페이지'를 만듭니다.",
      },
      line3: {
        prefix: "페이지 제작부터 마케팅까지, 효과 없으면 ",
        highlight: "100% 환불",    // 밑줄 강조
      },
    },

    // CTA 버튼
    ctaButton: {
      text: "문의하기",
      arrow: "→",
    },
  },

  // ========================================
  // 간격 설정 (Tailwind 클래스)
  // ========================================
  spacing: {
    // 서브 타이틀 → 메인 헤드라인 간격 (일정한 간격 적용)
    subTitleMarginBottom: "mb-4 sm:mb-6 lg:mb-8",

    // 메인 헤드라인 행간
    headlineLeading: "leading-[1.1] lg:leading-[1.12]",

    // 메인 헤드라인 → 서브 카피 간격 (일정한 간격 적용)
    headlineMarginBottom: "mb-4 sm:mb-6 lg:mb-8",

    // 서브 카피 행간
    subCopyLeading: "leading-relaxed lg:leading-[1.6]",

    // 서브 카피 → CTA 버튼 간격 (일정한 간격 적용)
    subCopyMarginBottom: "mb-4 sm:mb-6 lg:mb-8",
    
    // CTA 버튼 패딩
    ctaButtonPadding: "px-6 py-3 sm:px-8 sm:py-3.5 lg:px-9 lg:py-3.5",
  },

  // ========================================
  // 폰트 크기 설정 (Tailwind 클래스)
  // ========================================
  fontSize: {
    // 서브 타이틀
    subTitle: "text-lg sm:text-xl lg:text-xl 2xl:text-2xl",

    // 메인 헤드라인
    headline: "text-[36px] sm:text-[48px] lg:text-[54px] 2xl:text-[72px]",

    // 서브 카피
    subCopy: "text-base sm:text-base lg:text-lg 2xl:text-xl",

    // CTA 버튼
    ctaButton: "text-base lg:text-lg 2xl:text-xl",
  },

  // ========================================
  // 폰트 굵기 설정 (100~900 사이 숫자)
  // 100: 매우 얇음, 400: 보통, 700: 굵음, 900: 매우 굵음
  // ========================================
  fontWeight: {
    // 서브 타이틀
    subTitlePrefix: "font-[400]",     // "디자이너에게" (400 = 보통)
    subTitleSuffix: "font-[700]",     // "맡기지 마세요" (700 = 굵음)

    // 메인 헤드라인
    headlineNormal: "font-[300]",     // "그들은", "를" (300 = 얇음)
    headlineStrong: "font-[700]",     // "'장사'", "모릅니다." (700 = 굵음)

    // 서브 카피 (3줄 설명 텍스트)
    subCopyLine1: "font-[400]",       // "연매출 30억..." (400 = 보통)
    subCopyLine2: "font-[400]",       // "예쁜 디자인?..." (400 = 보통)
    subCopyLine3Prefix: "font-[400]", // "페이지 제작부터..." (400 = 보통)
    subCopyLine3Highlight: "font-[400]", // "100% 환불 보장" (700 = 굵음)
  },

  // ========================================
  // 밑줄 스타일 (100% 환불)
  // ========================================
  underline: {
    style: "underline underline-offset-4",
  },

  // ========================================
  // 배경 설정
  // ========================================
  background: {
    // 주황색 오버레이 투명도 (0~100)
    // 0: 완전 투명 (배경 이미지만 보임)
    // 100: 완전 불투명 (주황색만 보임)
    overlayOpacity: 90,
  },

  // ========================================
  // 콘텐츠 위치 설정
  // ========================================
  position: {
    // 좌측 텍스트 그룹 위쪽 여백 (px 단위)
    // 숫자가 클수록 아래로 내려감
    leftGroupTopOffset: 80,

    // 우측 목업 그룹 위쪽 여백 (px 단위)
    // 숫자가 클수록 아래로 내려감
    rightGroupTopOffset: 60,
  },
};

export type HeroConfig = typeof heroConfig;
