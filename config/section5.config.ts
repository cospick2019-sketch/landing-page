export const section5Config = {
  // 섹션 설정
  section: {
    backgroundColor: "bg-white",
    paddingY: 120, // 상하 패딩 (px)
  },

  // 헤딩 설정
  heading: {
    text1: "말로만 전문가?",
    text2: "숫자로 증명합니다",
    // 서브카피 색상
    text1Color: "#2C2C2C",
    // 메인카피 색상 (브랜드 주황색)
    text2Color: "#EC622D",
  },

  // 통계 항목들
  stats: [
    {
      value: 45,
      suffix: "%",
      prefix: "",
      decimalPlaces: 0,
      label: "평균 전환율 상승",
      description: "랜딩페이지 도입 후",
    },
    {
      value: 15.5,
      suffix: "K+",
      prefix: "",
      decimalPlaces: 1,
      label: "누적 광고 집행",
      description: "검증된 마케팅 노하우",
    },
    {
      value: 20,
      suffix: "B+",
      prefix: "",
      decimalPlaces: 0,
      label: "누적 매출",
      description: "고객사 총 매출 기준",
    },
  ],

  // 애니메이션 설정
  animation: {
    duration: 2.5, // 숫자 애니메이션 시간 (초)
  },

  // 구분선 설정
  divider: {
    marginX: 48, // 구분선 양옆 마진 (px)
    height: 80,  // 구분선 높이 (px)
    color: "#D4D4D4", // 구분선 색상
  },

  // 통계 항목 너비 (숫자 카운팅 시 레이아웃 고정)
  statItemWidth: 260, // 각 항목 고정 너비 (px)

  // 마키 설정
  marquee: {
    enabled: true,
    baseVelocity: 0.8, // 속도 줄임
    repeat: 4,
    // 이미지 스케일 (기준: 160x90, 16:9 비율 고정)
    // 1.0 = 160x90, 1.2 = 192x108, 1.5 = 240x135, 2.0 = 320x180
    imageScale: {
      mobile: 1.2,  // 모바일 (192x108)
      sm: 1.5,      // 태블릿 (240x135)
      md: 2.5,      // 데스크탑 (288x162)
    },
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=225&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=225&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=225&fit=crop",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=225&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=225&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=225&fit=crop",
    ],
  },
};
