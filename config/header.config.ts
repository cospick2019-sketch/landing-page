// 헤더 섹션 설정 파일
// 이 파일에서 헤더의 텍스트와 스타일을 직접 수정할 수 있습니다.

export const headerConfig = {
  // ========================================
  // 로고 설정
  // ========================================
  logo: {
    src: "/pickso-logo-white.png",
    srcScrolled: "/pickso-logo-green.png",
    alt: "Pickso Logo",
    height: "h-8",
  },

  // ========================================
  // 네비게이션 메뉴
  // ========================================
  navigation: [
    { label: "서비스 소개", href: "#service" },
    { label: "포트폴리오", href: "#portfolio" },
    { label: "가격 안내", href: "#price" },
    { label: "자주 묻는 질문", href: "#faq" },
  ],

  // ========================================
  // CTA 버튼
  // ========================================
  cta: {
    label: "무료 상담",
  },

  // ========================================
  // 스타일 설정
  // ========================================
  style: {
    scrollThreshold: 50,
  },
};

export type HeaderConfig = typeof headerConfig;
