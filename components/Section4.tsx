"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { FeatureSteps } from "@/components/feature-section";
import { section4Config } from "@/config/section4.config";

const { copy, autoPlayInterval, features } = section4Config;

const Section4 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="font-['Paperlogy'] py-20 relative overflow-hidden"
    >
      {/* 별 배경 */}
      <div className="section4-stars-container">
        <div className={`section4-stars ${isInView ? "section4-animate" : "section4-paused"}`}></div>
        <div className={`section4-stars2 ${isInView ? "section4-animate" : "section4-paused"}`}></div>
        <div className={`section4-stars3 ${isInView ? "section4-animate" : "section4-paused"}`}></div>
      </div>

      {/* 커스텀 헤더 */}
      <div className="text-center mb-10 px-4 relative z-10">
        <p
          className="text-lg md:text-xl mb-2"
          style={{ color: copy.subColor }}
        >
          {copy.sub}
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold"
          style={{ color: copy.mainColor }}
        >
          {copy.main}
        </h2>
      </div>

      <div className="relative z-10">
        <FeatureSteps
          features={features}
          title=""
          autoPlayInterval={autoPlayInterval}
          className="text-white"
        />
      </div>
    </section>
  );
};

export default Section4;
