"use client";

import { useRef } from "react";
import NumberTicker from "@/components/fancy/text/basic-number-ticker";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";
import { section5Config } from "@/config/section5.config";

const { section, heading, stats, animation, divider, statItemWidth, marquee } = section5Config;

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-2 md:mx-4 hover:scale-105 cursor-pointer duration-300 ease-in-out">
    {children}
  </div>
);

// 16:9 비율 이미지 사이즈 계산 (기준: 160x90)
const baseWidth = 160;
const baseHeight = 90;
const { imageScale } = marquee;

// 반응형 사이즈 계산
const sizes = {
  mobile: {
    width: Math.round(baseWidth * imageScale.mobile),
    height: Math.round(baseHeight * imageScale.mobile),
  },
  sm: {
    width: Math.round(baseWidth * imageScale.sm),
    height: Math.round(baseHeight * imageScale.sm),
  },
  md: {
    width: Math.round(baseWidth * imageScale.md),
    height: Math.round(baseHeight * imageScale.md),
  },
};

// 반응형 CSS 변수 스타일
const responsiveImageStyle = {
  "--img-w-mobile": `${sizes.mobile.width}px`,
  "--img-h-mobile": `${sizes.mobile.height}px`,
  "--img-w-sm": `${sizes.sm.width}px`,
  "--img-h-sm": `${sizes.sm.height}px`,
  "--img-w-md": `${sizes.md.width}px`,
  "--img-h-md": `${sizes.md.height}px`,
} as React.CSSProperties;

const Section5 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 이미지 배열을 3개씩 2줄로 나눔
  const row1 = marquee.images.slice(0, 3);
  const row2 = marquee.images.slice(3, 6);

  return (
    <section
      id="stats"
      ref={containerRef}
      className="py-12 md:py-20 bg-gray-50 font-['Paperlogy']"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* 헤딩 */}
        <div className="text-center mb-16">
          {/* 서브 카피 */}
          <p
            className="text-base md:text-lg font-medium mb-4 md:mb-6 text-gray-600"
          >
            {heading.text1}
          </p>
          {/* 메인 카피 */}
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900"
            style={{ color: heading.text2Color }}
          >
            {heading.text2}
          </h2>
        </div>

        {/* 통계 그리드 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="text-center" style={{ width: statItemWidth }}>
                {/* 숫자 */}
                <div className="text-4xl md:text-6xl font-[700] text-gray-900 mb-4 leading-[1.1]">
                  <NumberTicker
                    from={0}
                    target={stat.value}
                    autoStart={true}
                    transition={{ duration: animation.duration }}
                    decimalPlaces={stat.decimalPlaces}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    restartOnView={true}
                  />
                </div>
                {/* 라벨 */}
                <p className="text-gray-500 text-base md:text-lg font-[400] leading-relaxed">
                  {stat.label}
                  <br />
                  {stat.description}
                </p>
              </div>
              {/* 구분선 (마지막 항목 제외) */}
              {index < stats.length - 1 && (
                <div
                  className="hidden md:block w-px"
                  style={{
                    height: divider.height,
                    backgroundColor: divider.color,
                    marginLeft: divider.marginX,
                    marginRight: divider.marginX,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 마키 영역 */}
      {marquee.enabled && (
        <div className="mt-20 space-y-2 md:space-y-4" style={responsiveImageStyle}>
          <SimpleMarquee
            className="w-full"
            baseVelocity={marquee.baseVelocity}
            repeat={marquee.repeat}
            slowdownOnHover
            slowDownFactor={0.1}
            scrollAwareDirection={true}
            scrollContainer={containerRef}
            useScrollVelocity={true}
            direction="left"
          >
            {row1.map((src, i) => (
              <MarqueeItem key={i}>
                <img
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  className="marquee-img object-cover rounded-lg"
                />
              </MarqueeItem>
            ))}
          </SimpleMarquee>

          <SimpleMarquee
            className="w-full"
            baseVelocity={marquee.baseVelocity}
            repeat={marquee.repeat}
            slowdownOnHover
            slowDownFactor={0.1}
            scrollAwareDirection={true}
            scrollContainer={containerRef}
            useScrollVelocity={true}
            direction="right"
          >
            {row2.map((src, i) => (
              <MarqueeItem key={i}>
                <img
                  src={src}
                  alt={`Portfolio ${i + 6}`}
                  className="marquee-img object-cover rounded-lg"
                />
              </MarqueeItem>
            ))}
          </SimpleMarquee>
        </div>
      )}
    </section>
  );
};

export default Section5;
