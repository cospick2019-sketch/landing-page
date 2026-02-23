// 섹션 2 설정 파일
// 이 파일에서 레이아웃과 위치를 직접 수정할 수 있습니다.

export const section2Config = {
  // ========================================
  // 섹션 기본 설정
  // ========================================
  section: {
    // 상단 여백 (px)
    paddingTop: 33,
    // 하단 여백 (px)
    paddingBottom: 33,
    // 배경 이미지 경로
    backgroundImage: "/section-2/section2-bg.webp",
  },

  // ========================================
  // 컨테이너 설정
  // ========================================
  container: {
    // 최대 너비 (px)
    maxWidth: 1900,
    // 가로세로 비율 (width/height)
    aspectRatio: "1456/816",
  },

  // ========================================
  // 전체 콘텐츠 그룹 위치/크기 조정
  // 모든 레이어 이미지를 하나의 그룹으로 조정
  // ========================================
  contentGroup: {
    // 수평 이동 (px) - 양수: 오른쪽, 음수: 왼쪽
    offsetX: 0,
    // 수직 이동 (px) - 양수: 아래쪽, 음수: 위쪽
    offsetY: 1.1,
    // 스케일 (1 = 100%, 0.9 = 90%, 1.1 = 110%)
    scale: 1,
    // 그룹 너비 (%) - 100 = 컨테이너 100% 차지
    width: 100,
    // 그룹 높이 (%) - 100 = 컨테이너 100% 차지
    height: 100,
  },

  // ========================================
  // 애니메이션 설정
  // ========================================
  animation: {
    // ScrollTrigger 시작 위치 (예: "top 60%" = 섹션 상단이 뷰포트 60% 위치에 도달했을 때)
    triggerStart: "top 60%",

    // 컨테이너 페이드인
    container: {
      duration: 0.6,
      yOffset: 60, // 시작 y 위치 (px)
    },

    // 태블릿 목업 (2D 플랫 회전)
    tablet: {
      // 회전 각도 (deg) - 360 = 한바퀴
      rotationY: 360,
      // 프레임 수 (60fps 기준, 41프레임 = 0.68초)
      frames: 41,
      // 이징 함수
      ease: "power1.out",
      // 시작 투명도 (0 = 완전 투명, 1 = 완전 불투명)
      startOpacity: 0,
      // 끝 투명도
      endOpacity: 1,
      // 회전 중심점 X (%) - 태블릿 실제 중심 위치
      originX: 48.6,
      // 회전 중심점 Y (%)
      originY: 50,
    },

    // 메인 텍스트
    mainText: {
      duration: 0.5,
      xOffset: -50, // 시작 x 위치 (px)
    },

    // 캐릭터
    character: {
      duration: 0.6,
      yOffset: 80, // 시작 y 위치 (px)
      ease: "back.out(1.7)",
    },

    // 추가 텍스트들
    additionalTexts: {
      duration: 0.4,
      yOffset: 30, // 시작 y 위치 (px)
      stagger: 0.1, // 순차 딜레이 (초)
    },
  },

  // ========================================
  // 레이어 이미지 경로
  // ========================================
  layers: {
    layer1: "/section-2/section2-2.png", // 메인 텍스트
    layer2: "/section-2/section2-1.png", // 태블릿 목업
    layer3: "/section-2/section2-3.png", // 캐릭터
    layer4: "/section-2/section2-4.png", // 매출은 0원
    layer5: "/section-2/section2-5.png", // 밑 빠진 독
    layer6: "/section-2/section2-6.png", // 고객을 설득하는
  },
};

export type Section2Config = typeof section2Config;
