"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { section8Config } from "@/config/section8.config";

const { section, copy, faq, styles } = section8Config;

const Section8 = () => {
  const [activeId, setActiveId] = useState<number>(faq[0]?.id ?? 1);
  const activeImage = faq.find((item) => item.id === activeId)?.image ?? faq[0]?.image;

  return (
    <section
      className={`${section.backgroundColor} font-['Paperlogy'] py-24 md:py-32`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 ${styles.titleColor}`}
        >
          {copy.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* 좌측: 아코디언 */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                  className={styles.borderColor}
                >
                  <AccordionTrigger
                    onClick={() => setActiveId(item.id)}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-lg md:text-xl font-semibold text-left ${
                        item.id === activeId
                          ? styles.questionColor
                          : "text-neutral-500"
                      }`}
                    >
                      {item.question}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p
                      className={`mt-1 text-base md:text-lg leading-relaxed whitespace-pre-line ${styles.answerColor}`}
                    >
                      {item.answer}
                    </p>
                    {/* 모바일에서만 이미지 표시 */}
                    <div className="mt-4 lg:hidden">
                      <div className="overflow-hidden rounded-lg bg-neutral-900 aspect-[4/3]">
                        <img
                          src={item.image}
                          alt={item.question}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* 우측: 선택된 항목의 이미지 (데스크탑) */}
          <div className="relative hidden lg:block m-auto w-full overflow-hidden rounded-l-none rounded-r-xl bg-neutral-900">
            <img
              src={activeImage}
              alt="Feature preview"
              className="aspect-[4/3] w-full rounded-l-none rounded-r-xl object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* 이미지 없을 때 placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-lg -z-10">
              이미지 준비 중
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
