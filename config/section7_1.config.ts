export const section7_1Config = {
  // 섹션 설정
  section: {
    backgroundColor: "bg-black",
  },

  // 카피 설정
  copy: {
    subTitle: "죄송합니다",
    mainTitle: "월 12팀만 받습니다",
    description: [
      "공장식으로 찍어내지 않습니다. 한 땀 한 땀 제 사업처럼 기획하고 광고 돌려야 직성이 풀립니다.",
      "환불 공약을 걸었기 때문에, 제가 봐도 확신이 없는 아이템은 정중히 거절합니다.",
      "즉, 제가 계약을 수락했다면? 대표님의 아이템은 성공 가능성이 매우 높다는 뜻입니다.",
    ],
  },

  // 비디오 설정
  video: {
    src: "/section-7/section7-video2.mp4",
    poster: "/section-7/section7-poster.jpg",
  },

  // 애니메이션 설정
  animation: {
    translateYRange: ["-25%", "50%"] as [string, string],
    insetYRange: [35, 0] as [number, number],
    insetXRange: [42, 0] as [number, number],
    roundednessRange: [1000, 16] as [number, number],
    scrollRange: [0, 0.86] as [number, number],
  },

  // 스타일 설정
  styles: {
    mainTitleColor: "text-white",
    descriptionColor: "text-neutral-400",
  },
};
