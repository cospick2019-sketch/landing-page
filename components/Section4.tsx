"use client";

import { FeatureSteps } from "@/components/feature-section";
import { section4Config } from "@/config/section4.config";

const { copy, autoPlayInterval, features } = section4Config;

const Section4 = () => {
  return (
    <section
      id="process"
      className="py-12 md:py-20 bg-white relative overflow-hidden"
    >
      {/* 섹션 헤딩 */}
      <div className="text-center mb-8 md:mb-12 px-4 md:px-6 relative z-10">
        <p className="text-sm font-medium text-gray-500">
          {copy.sub}
        </p>
        <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
          {copy.main}
        </h2>
      </div>

      <div className="relative z-10">
        <FeatureSteps
          features={features}
          title=""
          autoPlayInterval={autoPlayInterval}
        />
      </div>
    </section>
  );
};

export default Section4;
