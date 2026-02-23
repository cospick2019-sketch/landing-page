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
      id="faq"
      className={`${section.backgroundColor} font-['Paperlogy'] py-12 md:py-20`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2
          className={`text-3xl md:text-5xl font-bold leading-tight tracking-tight text-center mb-12 ${styles.titleColor}`}
        >
          {copy.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                          : "text-gray-500"
                      }`}
                    >
                      {item.question}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p
                      className={`mt-1 text-base md:text-lg leading-[1.7] whitespace-pre-line ${styles.answerColor}`}
                    >
                      {item.answer}
                    </p>
                    {/* 모바일에서만 이미지 표시 */}
                    <div className="mt-4 md:hidden">
                      <div className="overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
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
          <div className="relative hidden md:block m-auto w-full overflow-hidden rounded-l-none rounded-r-xl bg-gray-100">
            <img
              src={activeImage}
              alt="Feature preview"
              className="aspect-[4/3] w-full rounded-l-none rounded-r-xl object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* 이미지 없을 때 placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg -z-10">
              이미지 준비 중
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
