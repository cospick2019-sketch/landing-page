
export const section3Config = {
  // 섹션 기본 설정
  section: {
    backgroundColor: "#F9FAFB", // 배경색 (아주 연한 회색)
    paddingTop: "100px",
    paddingBottom: "100px",
  },

  // 헤드라인 텍스트
  headline: {
    main: "머리 아픈 기획, 하지 마세요.\n팔리는 논리는 제가 짭니다.",
  },

  // 비교 콘텐츠
  comparison: {
    // 일반 웹 에이전시 (Bad Case)
    bad: {
      title: "일반 웹 에이전시",
      description: "\"원고 주세요, 사진 주세요, 기획안 주세요...\"",
      result: "(결국 대표님이 다 해야 합니다.)",
      theme: {
        bgColor: "#F3F4F6", // 어두운 회색 배경
        borderColor: "#E5E7EB",
        textColor: "#6B7280", // 텍스트 색상 (회색)
        titleColor: "#374151",
        boxShadow: "none",
      }
    },

    // vs 텍스트
    vs: "vs",

    // 우리의 제작 방식 (Good Case)
    good: {
      title: "우리의 제작 방식",
      description: "\"제품과 장점만 던져주세요.\"",
      result: "대표님은 그 시간에\n제품 소싱과 배송에만 신경 쓰세요.",
      steps: [
        { text: "연매출 30억 노하우로 기획", icon: "💡" },
        { text: "고객 심리를 꿰뚫는 카피라이팅", icon: "✍️" },
        { text: "구매 전환 디자인", icon: "🎨" },
      ],
      theme: {
        bgColor: "#FFFFFF", // 흰색 배경
        borderColor: "#EC622D", // 브랜드 컬러 (주황색)
        textColor: "#1F2937",
        titleColor: "#EC622D",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // 그림자 효과
      }
    }
  }
};

export type Section3Config = typeof section3Config;
