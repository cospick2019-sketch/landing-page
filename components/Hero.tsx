"use client";

import { motion } from "framer-motion";
import { heroConfig } from "@/config/hero.config";
import { headerConfig } from "@/config/header.config";
import { useConsultModal } from "@/components/ConsultModal";

const Hero = () => {
  const { text, spacing, fontSize, fontWeight, underline } = heroConfig;
  const { open: openConsult } = useConsultModal();
  const { logo, navigation, style } = headerConfig;

  return (
    <section className="relative h-screen font-['Paperlogy']">
      {/* 배경 컨테이너 - clip으로 섹션 내에서만 보이도록 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 배경 영상 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-section-video.mp4" type="video/mp4" />
        </video>

        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* 헤더/네비게이션 */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#ec622d]"
      >
        <div className={`max-w-7xl mx-auto px-6 py-5 flex items-center justify-between ${style.height}`}>
          {/* 로고 */}
          <div className="flex items-center h-full">
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${logo.height} w-auto object-contain`}
            />
          </div>

          {/* 네비게이션 */}
          <nav className={`hidden md:flex items-center ${style.navGap} h-full`}>
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`${style.textColor} ${style.textColorHover} transition-colors ${style.navFontSize} ${style.navFontWeight}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 h-screen flex items-center pt-[80px]">
        <div className="w-full">
          {/* 텍스트 영역 */}
          <div className="text-white">
            {/* 서브 타이틀 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-white ${fontSize.subTitle} ${spacing.subTitleMarginBottom}`}
            >
              <span className={fontWeight.subTitlePrefix}>{text.subTitle.prefix}</span>
              <span className={fontWeight.subTitleSuffix}> {text.subTitle.suffix}</span>
            </motion.p>

            {/* 메인 헤드라인 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`${fontSize.headline} ${spacing.headlineLeading} ${spacing.headlineMarginBottom} text-white`}
            >
              <span className={fontWeight.headlineNormal}>{text.headline.line1.prefix}</span>
              <br />
              <span className={`${fontWeight.headlineStrong} text-[#ec622d]`}>{text.headline.line2}</span>
            </motion.h1>

            {/* 서브 카피 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-white ${fontSize.subCopy} ${spacing.subCopyMarginBottom} ${spacing.subCopyLeading} max-w-lg`}
            >
              <span className={fontWeight.subCopyLine1}>{text.subCopy.line1}</span>
              <br />
              <span className={fontWeight.subCopyLine2}>{text.subCopy.line2.prefix}</span>
              <span className={`${fontWeight.subCopyLine2} ${underline.style}`}>{text.subCopy.line2.highlight}</span>
              <br />
              <span className={fontWeight.subCopyLine3Prefix}>{text.subCopy.line3.prefix}</span>
              <span className={fontWeight.subCopyLine3Highlight}>{text.subCopy.line3.highlight}</span>
            </motion.p>

            {/* CTA 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button onClick={openConsult} className={`group bg-white text-[#ec622d] ${spacing.ctaButtonPadding} rounded-full font-bold ${fontSize.ctaButton} transition-all duration-300 hover:bg-[#ec622d] hover:text-white flex items-center gap-3`}>
                <span className="transition-transform duration-300 group-hover:scale-110">{text.ctaButton.text}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">{text.ctaButton.arrow}</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 우측 하단 전화 버튼 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-30"
      >
        <button className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </motion.div>

      {/* 스크롤 유도 애니메이션 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/70 text-xs font-medium tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2.5 bg-white/70 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
