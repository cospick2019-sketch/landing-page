"use client";

import { motion, Variants } from "framer-motion";
import { pricingConfig } from "@/config/pricing.config";
import { useConsultModal } from "@/components/ConsultModal";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function PricingSection() {
  const { heading, plans, includedFeatures } = pricingConfig;
  const { open: openConsult } = useConsultModal();

  return (
    <section className="pt-28 md:pt-32 pb-12 md:pb-20 bg-white font-['Paperlogy']">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 헤딩 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p variants={FADE_UP} className="text-sm md:text-base font-semibold text-[#ec622d] mb-2 tracking-wider">
            {heading.subtitle}
          </motion.p>
          <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-3">
            {heading.title}
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-base md:text-lg text-gray-500">
            {heading.description}
          </motion.p>
        </motion.div>

        {/* 가격 카드 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.nameEn}
              variants={FADE_UP}
              className={`relative rounded-2xl p-6 md:p-8 transition-shadow duration-300 flex flex-col ${
                plan.recommended
                  ? "bg-white ring-2 ring-[#ec622d] shadow-lg shadow-[#ec622d]/10"
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* 추천 배지 */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-[#ec622d] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    BEST
                  </span>
                </div>
              )}

              {/* 플랜 이름 */}
              <p className={`text-xs font-bold tracking-widest mb-2 ${
                plan.recommended ? "text-[#ec622d]" : "text-gray-400"
              }`}>
                {plan.nameEn}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                {plan.description}
              </p>

              {/* 가격 */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
                  plan.recommended ? "text-[#ec622d]" : "text-gray-900"
                }`}>
                  {plan.price}
                </span>
                <span className="text-lg md:text-xl font-semibold text-gray-500">{plan.unit}</span>
              </div>

              {/* 구분선 */}
              <div className="h-px bg-gray-100 mb-5" />

              {/* 기능 리스트 */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-gray-700">
                    <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.recommended ? "text-[#ec622d]" : "text-gray-400"
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA 버튼 */}
              <button
                onClick={openConsult}
                className={`w-full py-3.5 rounded-xl font-bold text-base transition-all duration-200 active:scale-[0.98] ${
                  plan.recommended
                    ? "bg-[#ec622d] text-white hover:bg-[#d55526] shadow-md"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                무료 상담 신청
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* 기본 제공 항목 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={STAGGER}
          className="bg-gray-50 rounded-2xl p-6 md:p-10"
        >
          <motion.h3 variants={FADE_UP} className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            {includedFeatures.title}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {includedFeatures.items.map((item, i) => (
              <motion.div
                key={i}
                variants={FADE_UP}
                className="flex items-start gap-3 bg-white rounded-xl p-4 md:p-5 border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-[#ec622d]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#ec622d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">{item.text}</p>
                  <p className="text-gray-500 text-xs md:text-sm mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
