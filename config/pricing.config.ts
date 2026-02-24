export const pricingConfig = {
  heading: {
    title: "가격 안내",
    subtitle: "기획 포함 / 광고 미포함",
    description: "합리적인 가격으로 팔리는 랜딩페이지를 만들어 드립니다.",
  },

  plans: [
    {
      name: "라이트",
      nameEn: "LIGHT",
      price: "40",
      unit: "만원~",
      description: "빠르게 시작하고 싶은 분들을 위한 플랜",
      features: [
        "1페이지 랜딩페이지",
        "반응형 웹 디자인",
        "기본 폼 연동",
        "기본 SEO 설정",
      ],
      recommended: false,
    },
    {
      name: "베이직",
      nameEn: "BASIC",
      price: "70",
      unit: "만원~",
      description: "전환율을 높이고 싶은 분들을 위한 플랜",
      features: [
        "라이트 플랜 전체 포함",
        "맞춤 기획 & 카피라이팅",
        "고급 인터랙션 효과",
        "A/B 테스트 가이드",
        "관리자 페이지 제공",
      ],
      recommended: true,
    },
    {
      name: "프리미엄",
      nameEn: "PREMIUM",
      price: "100",
      unit: "만원~",
      description: "최고의 퍼포먼스를 원하는 분들을 위한 플랜",
      features: [
        "베이직 플랜 전체 포함",
        "프리미엄 디자인 & 모션",
        "다국어 지원",
        "퍼널 최적화 컨설팅",
        "우선 유지보수 지원",
        "마케팅 연동 가이드",
      ],
      recommended: false,
    },
  ],

  includedFeatures: {
    title: "모든 플랜 기본 제공",
    items: [
      {
        text: "반응형 웹",
        description: "모바일, 태블릿, PC 모든 기기에 최적화",
      },
      {
        text: "기본 관리자 페이지 제공",
        description: "DB폼 커스터마이징, DB폼 섹션 무상 디자인 제공",
      },
      {
        text: "기본 유지보수 1개월",
        description: "오타 수정 등 기본적인 유지보수 무상 지원",
      },
      {
        text: "네이버 웹마스터 도구 설정",
        description: "검색 노출을 위한 기본 설정 무상 지원 1개월",
      },
    ],
  },
};
