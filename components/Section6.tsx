"use client";

import { motion, Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { section6Config } from "@/config/section6.config";

const { section, copy, features } = section6Config;

// 애니메이션 설정
const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};

const STAGGER_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Section6 = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={STAGGER_CONTAINER_VARIANTS}
      className="font-['Paperlogy']"
      style={{
        backgroundColor: section.backgroundColor,
        paddingTop: section.paddingY.desktop,
        paddingBottom: section.paddingY.desktop,
      }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* 타이틀 영역 */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            variants={FADE_UP_VARIANTS}
            className="text-3xl font-bold tracking-tight sm:text-5xl"
            style={{ color: copy.titleColor }}
          >
            {copy.title.line1}
            <br />
            {copy.title.line2.replace(copy.title.highlight, "")}
            <span style={{ color: copy.highlightColor }}>{copy.title.highlight}</span>
          </motion.h2>

          <motion.p
            variants={FADE_UP_VARIANTS}
            className="mt-6 text-lg leading-8 whitespace-pre-line"
            style={{ color: copy.subtitleColor }}
          >
            {copy.subtitle}
          </motion.p>
        </div>

        {/* 피처 카드 그리드 */}
        <motion.div
          variants={STAGGER_CONTAINER_VARIANTS}
          className="mt-16 grid grid-cols-1 gap-6 sm:mt-24 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.a
              key={feature.id}
              href={feature.href}
              aria-label={feature.title}
              variants={FADE_UP_VARIANTS}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="block"
            >
              <Card className="group h-full overflow-hidden rounded-xl border-0 bg-neutral-100 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md">
                {/* 카드 이미지 */}
                <div className="overflow-hidden">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="aspect-square w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* 카드 콘텐츠 */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {feature.title}
                    </h3>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/50 transition-colors duration-300 group-hover:bg-neutral-200">
                      <ArrowRight className="h-5 w-5 text-neutral-500 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section6;
