"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { section2Config } from "@/config/section2.config";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Section2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentGroupRef = useRef<HTMLDivElement>(null);

  // 각 레이어 이미지 ref
  const layer1Ref = useRef<HTMLImageElement>(null);
  const layer2Ref = useRef<HTMLImageElement>(null);
  const layer3Ref = useRef<HTMLImageElement>(null);
  const layer4Ref = useRef<HTMLImageElement>(null);
  const layer5Ref = useRef<HTMLImageElement>(null);
  const layer6Ref = useRef<HTMLImageElement>(null);

  const { section, container, contentGroup, animation, layers } = section2Config;

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const containerEl = containerRef.current;

    if (!sectionEl || !containerEl) return;

    // 초기 상태 설정
    gsap.set(containerEl, {
      opacity: 0,
      y: animation.container.yOffset,
    });

    // 태블릿 목업 - 2D 플랫 회전 초기 상태
    gsap.set(layer2Ref.current, {
      opacity: animation.tablet.startOpacity,
      rotationY: animation.tablet.rotationY,
      transformOrigin: `${animation.tablet.originX}% ${animation.tablet.originY}%`,
    });

    // 메인 질문 텍스트 - 왼쪽에서 슬라이드인
    gsap.set(layer1Ref.current, {
      opacity: 0,
      x: animation.mainText.xOffset,
    });

    // 캐릭터 - 아래에서 바운스
    gsap.set(layer3Ref.current, {
      opacity: 0,
      y: animation.character.yOffset,
    });

    // 나머지 텍스트들 - 순차 페이드인
    gsap.set([layer4Ref.current, layer5Ref.current, layer6Ref.current], {
      opacity: 0,
      y: animation.additionalTexts.yOffset,
    });

    // 메인 타임라인
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: animation.triggerStart,
        end: "bottom top",
        onEnter: () => tl.restart(),
        onLeave: () => {
          tl.progress(0).pause();
          // 리셋
          gsap.set(containerEl, { opacity: 0, y: animation.container.yOffset });
          gsap.set(layer2Ref.current, { opacity: animation.tablet.startOpacity, rotationY: animation.tablet.rotationY, transformOrigin: `${animation.tablet.originX}% ${animation.tablet.originY}%` });
          gsap.set(layer1Ref.current, { opacity: 0, x: animation.mainText.xOffset });
          gsap.set(layer3Ref.current, { opacity: 0, y: animation.character.yOffset });
          gsap.set([layer4Ref.current, layer5Ref.current, layer6Ref.current], {
            opacity: 0, y: animation.additionalTexts.yOffset,
          });
        },
        onEnterBack: () => tl.restart(),
        onLeaveBack: () => {
          tl.progress(0).pause();
          // 리셋
          gsap.set(containerEl, { opacity: 0, y: animation.container.yOffset });
          gsap.set(layer2Ref.current, { opacity: animation.tablet.startOpacity, rotationY: animation.tablet.rotationY, transformOrigin: `${animation.tablet.originX}% ${animation.tablet.originY}%` });
          gsap.set(layer1Ref.current, { opacity: 0, x: animation.mainText.xOffset });
          gsap.set(layer3Ref.current, { opacity: 0, y: animation.character.yOffset });
          gsap.set([layer4Ref.current, layer5Ref.current, layer6Ref.current], {
            opacity: 0, y: animation.additionalTexts.yOffset,
          });
        },
      },
    });

    // 1. 컨테이너 페이드인
    tl.to(containerEl, {
      opacity: 1,
      y: 0,
      duration: animation.container.duration,
      ease: "power3.out",
    });

    // 2. 태블릿 목업 - 2D 플랫 회전
    tl.to(layer2Ref.current, {
      opacity: animation.tablet.endOpacity,
      rotationY: 0,
      duration: animation.tablet.frames / 60, // 프레임을 초로 변환 (60fps 기준)
      ease: animation.tablet.ease,
    }, "-=0.3");

    // 3. 메인 질문 텍스트 - 왼쪽에서 슬라이드인
    tl.to(layer1Ref.current, {
      opacity: 1,
      x: 0,
      duration: animation.mainText.duration,
      ease: "power2.out",
    }, "-=0.2");

    // 4. 캐릭터 - 아래에서 톡 튀어오르며 등장 (바운스)
    tl.to(layer3Ref.current, {
      opacity: 1,
      y: 0,
      duration: animation.character.duration,
      ease: animation.character.ease,
    }, "-=0.2");

    // 5. "매출은 0원" - 페이드인 + 위로
    tl.to(layer4Ref.current, {
      opacity: 1,
      y: 0,
      duration: animation.additionalTexts.duration,
      ease: "power2.out",
    }, "-=0.1");

    // 6. "밑 빠진 독" - 페이드인 + 위로
    tl.to(layer5Ref.current, {
      opacity: 1,
      y: 0,
      duration: animation.additionalTexts.duration,
      ease: "power2.out",
    }, "-=0.2");

    // 7. "고객을 설득하는" - 페이드인 + 위로
    tl.to(layer6Ref.current, {
      opacity: 1,
      y: 0,
      duration: animation.additionalTexts.duration,
      ease: "power2.out",
    }, "-=0.2");

    // 클린업
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animation]);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        paddingTop: `${section.paddingTop}px`,
        paddingBottom: `${section.paddingBottom}px`,
        backgroundImage: `url(${section.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 메인 컨테이너 */}
      <div
        ref={containerRef}
        className="relative mx-auto flex items-center justify-center w-full"
        style={{
          maxWidth: `${container.maxWidth}px`,
          aspectRatio: container.aspectRatio,
        }}
      >
        {/* 전체 콘텐츠 그룹 - 위치/크기 조정 가능 */}
        <div
          ref={contentGroupRef}
          className="absolute"
          style={{
            width: `${contentGroup.width}%`,
            height: `${contentGroup.height}%`,
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translate(${contentGroup.offsetX}px, ${contentGroup.offsetY}px) scale(${contentGroup.scale})`,
          }}
        >
          {/* 레이어 1: 텍스트 이미지 */}
          <img
            ref={layer1Ref}
            src={layers.layer1}
            alt="예쁜 쓰레기가 되진 않았나요?"
            className="absolute inset-0 w-full h-full object-contain z-10"
          />

          {/* 레이어 2: 태블릿 목업 */}
          <img
            ref={layer2Ref}
            src={layers.layer2}
            alt="태블릿 목업"
            className="absolute inset-0 w-full h-full object-contain z-20"
          />

          {/* 레이어 3: 캐릭터 이미지 */}
          <img
            ref={layer3Ref}
            src={layers.layer3}
            alt="고민하는 캐릭터"
            className="absolute inset-0 w-full h-full object-contain z-30"
          />

          {/* 레이어 4: 매출은 0원 텍스트 */}
          <img
            ref={layer4Ref}
            src={layers.layer4}
            alt="매출은 0원"
            className="absolute inset-0 w-full h-full object-contain z-40"
          />

          {/* 레이어 5: 밑 빠진 독 텍스트 */}
          <img
            ref={layer5Ref}
            src={layers.layer5}
            alt="밑 빠진 독에 광고비만 태우고 속 쓰렸던 경험"
            className="absolute inset-0 w-full h-full object-contain z-50"
          />

          {/* 레이어 6: 고객을 설득하는 기획 텍스트 */}
          <img
            ref={layer6Ref}
            src={layers.layer6}
            alt="고객을 설득하는 기획 없이 디자인만 했기 때문입니다"
            className="absolute inset-0 w-full h-full object-contain z-[60]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
