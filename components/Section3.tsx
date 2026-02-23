"use client";

import { motion } from "framer-motion";
import { section3Config } from "@/config/section3.config";

const Section3 = () => {
  const { section, headline, comparison } = section3Config;

  // 화살표 아이콘 (SVG)
  const ArrowDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6 text-[#ec622d] animate-bounce mx-auto my-2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
    </svg>
  );

  return (
    <section
      id="comparison"
      className="relative overflow-hidden py-12 md:py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 헤드라인 */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 whitespace-pre-wrap leading-tight tracking-tight"
          >
            {headline.main}
          </motion.h2>
        </div>

        {/* 비교 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative">

          {/* VS 뱃지 (데스크탑 중앙, 모바일 사이) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#ec622d] rounded-full items-center justify-center z-10 text-white font-bold text-xl shadow-lg">
            VS
          </div>

          {/* 왼쪽: 일반 웹 에이전시 (Bad Case) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between relative border"
            style={{
              backgroundColor: comparison.bad.theme.bgColor,
              borderColor: comparison.bad.theme.borderColor,
            }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-8" style={{ color: comparison.bad.theme.titleColor }}>
                {comparison.bad.title}
              </h3>
              <div className="bg-white/50 rounded-xl p-6 mb-8 text-center italic border border-dashed border-gray-300">
                <p className="text-lg leading-relaxed" style={{ color: comparison.bad.theme.titleColor }}>
                  {comparison.bad.description}
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-bold text-gray-500">
                {comparison.bad.result}
              </p>
            </div>
          </motion.div>

          {/* 모바일용 VS */}
          <div className="flex md:hidden justify-center items-center -my-4 z-10">
            <div className="w-12 h-12 bg-[#ec622d] rounded-full flex items-center justify-center text-white font-bold shadow-lg">VS</div>
          </div>

          {/* 오른쪽: 우리의 제작 방식 (Good Case) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-8 md:p-12 h-full flex flex-col relative border-2 overflow-hidden"
            style={{
              backgroundColor: comparison.good.theme.bgColor,
              borderColor: comparison.good.theme.borderColor,
              boxShadow: comparison.good.theme.boxShadow
            }}
          >
            {/* 배경 데코레이션 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ec622d]/5 rounded-bl-full -mr-8 -mt-8"></div>

            <h3 className="text-2xl font-bold mb-2" style={{ color: comparison.good.theme.titleColor }}>
              {comparison.good.title}
            </h3>
            <p className="text-gray-500 mb-8 font-medium">
              {comparison.good.description}
            </p>

            {/* 단계별 프로세스 */}
            <div className="space-y-4 mb-8 flex-grow">
              {comparison.good.steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#ec622d]/5 rounded-xl p-4 flex items-center gap-4 border border-[#ec622d]/10">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="font-bold text-gray-800 text-lg">{step.text}</span>
                  </div>
                  {/* 마지막 항목이 아니면 화살표 표시 */}
                  {index < comparison.good.steps.length - 1 && (
                    <div className="h-6 flex items-center justify-center">
                      <div className="w-0.5 h-full bg-[#ec622d]/20"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-[#ec622d] rounded-xl p-6 text-center text-white shadow-md transform transition-transform hover:scale-105">
              <p className="text-lg font-bold leading-relaxed whitespace-pre-wrap">
                {comparison.good.result}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section3;
