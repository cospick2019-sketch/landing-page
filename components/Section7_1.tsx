"use client";

import {
  ContainerScroll,
  ContainerStagger,
  ContainerAnimated,
  ContainerInset,
} from "@/components/hero-video";
import { section7_1Config } from "@/config/section7_1.config";

const { section, copy, video, animation, styles } = section7_1Config;

const Section7_1 = () => {
  return (
    <section className={`${section.backgroundColor} font-['Paperlogy'] pt-[80px] min-h-[100vh]`}>
      <ContainerScroll className="pb-[30%]">
        {/* 텍스트 영역 */}
        <ContainerStagger className="flex flex-col items-center justify-center text-center px-4 mb-8">
          <ContainerAnimated animation="blur">
            <p className={`text-lg md:text-xl lg:text-2xl mb-1 ${styles.descriptionColor}`}>
              {copy.subTitle}
            </p>
          </ContainerAnimated>
          <ContainerAnimated animation="blur">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${styles.mainTitleColor}`}>
              {copy.mainTitle}
            </h2>
          </ContainerAnimated>
          <ContainerAnimated animation="blur" className="max-w-3xl">
            <p className={`text-sm md:text-base lg:text-lg leading-relaxed ${styles.descriptionColor}`}>
              {copy.description.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < copy.description.length - 1 && <br />}
                </span>
              ))}
            </p>
          </ContainerAnimated>
        </ContainerStagger>

        {/* 비디오 영역 */}
        <ContainerInset
          translateYRange={animation.translateYRange}
          insetYRange={animation.insetYRange}
          insetXRange={animation.insetXRange}
          roundednessRange={animation.roundednessRange}
          scrollRange={animation.scrollRange}
          className="w-full"
        >
          <video
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </ContainerInset>
      </ContainerScroll>
    </section>
  );
};

export default Section7_1;
