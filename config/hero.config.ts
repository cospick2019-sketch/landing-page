// 히어로 섹션 설정 파일
// 이 파일에서 텍스트와 스타일을 직접 수정할 수 있습니다.

export const heroConfig = {
  // ========================================
  // 텍스트 내용
  // ========================================
  text: {
    // 아이브라우 (제목 위 라벨)
    eyebrow: {
      prefix: "디자이너에게",
      suffix: "맡기지 마세요",
    },

    // 메인 헤드라인 (큰 글씨)
    headline: {
      line1: "그들은",
      line2: "장사를 모릅니다",
    },

    // 리드 텍스트 (설명)
    lead: {
      line1: "연매출 30억 '장사꾼'이 만드는 페이지는 다릅니다.",
      line2: {
        prefix: "예쁜 디자인? 아닙니다. ",
        highlight: "'팔리는 페이지'를 만듭니다.",
      },
      line3: {
        prefix: "페이지 제작부터 마케팅까지, 효과 없으면 ",
        highlight: "100% 환불",
      },
    },

    // CTA 버튼
    ctaButton: {
      text: "문의하기",
      arrow: "→",
    },
  },

  // ========================================
  // 밑줄 스타일 (100% 환불)
  // ========================================
  underline: {
    style: "underline underline-offset-4",
  },
};

export type HeroConfig = typeof heroConfig;
