// 헤더 섹션 설정 파일
// 이 파일에서 헤더의 텍스트와 스타일을 직접 수정할 수 있습니다.

export const headerConfig = {
  // ========================================
  // 로고 설정
  // ========================================
  logo: {
    src: "/pickso-logo-white.png",
    alt: "Pickso Logo",
    height: "h-[40px]",
  },

  // ========================================
  // 네비게이션 메뉴
  // ========================================
  navigation: [
    { label: "서비스 소개", href: "#service" },
    { label: "포트폴리오", href: "#portfolio" },
    { label: "가격 안내", href: "#price" },
    { label: "자주 묻는 질문", href: "#faq" },
    { label: "무료 상담", href: "#contact" },
  ],

  // ========================================
  // 스타일 설정
  // ========================================
  style: {
    // 헤더 높이
    height: "h-[80px]",

    // 네비게이션 간격
    navGap: "gap-12",

    // 네비게이션 폰트 크기
    navFontSize: "text-base",

    // 네비게이션 폰트 굵기
    navFontWeight: "font-medium",

    // 텍스트 색상 (기본)
    textColor: "text-white/90",

    // 텍스트 색상 (호버)
    textColorHover: "hover:text-white",

    // 스크롤 시 배경색 (Tailwind 클래스 또는 HEX)
    scrolledBgColor: "bg-[#ec622d]",

    // 스크롤 감지 시작 위치 (px)
    scrollThreshold: 100,
  },
};

export type HeaderConfig = typeof headerConfig;
