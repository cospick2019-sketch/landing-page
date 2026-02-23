"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { heroConfig } from "@/config/hero.config";
import { headerConfig } from "@/config/header.config";
import { useConsultModal } from "@/components/ConsultModal";

const Hero = () => {
  const { text, underline } = heroConfig;
  const { open: openConsult } = useConsultModal();
  const { logo, navigation, cta, style } = headerConfig;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > style.scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [style.scrollThreshold]);

  return (
    <section id="hero" className="relative min-h-svh">
      {/* 배경 컨테이너 */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-section-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 헤더/네비게이션 - 글래스모피즘 */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-16 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 flex items-center">
          {/* 좌측: 로고 */}
          <a href="/" className="flex-shrink-0">
            <img
              src={scrolled ? logo.srcScrolled : logo.src}
              alt={logo.alt}
              className={`${logo.height} w-auto object-contain transition-all duration-300`}
            />
          </a>

          {/* 중앙: 네비게이션 (뷰포트 정중앙) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 우측: CTA 버튼 */}
          <button
            onClick={openConsult}
            className={`hidden md:inline-flex ml-auto items-center h-10 px-4 text-sm font-medium rounded-full transition-colors duration-150 ${
              scrolled
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
          >
            {cta.label}
          </button>

          {/* 모바일: 햄버거 */}
          <button className="md:hidden ml-auto p-2" aria-label="메뉴 열기">
            <svg
              className={`w-6 h-6 transition-colors duration-150 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <div className="relative z-[2] max-w-7xl mx-auto px-4 md:px-6 min-h-svh flex items-center justify-center">
        <div className="w-full text-center">
          {/* 아이브라우 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base md:text-lg font-normal text-gray-300"
          >
            <span>{text.eyebrow.prefix}</span>
            <span className="font-semibold"> {text.eyebrow.suffix}</span>
          </motion.p>

          {/* 메인 헤드라인 H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 md:mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white"
          >
            <span>{text.headline.line1}</span>
            <br />
            <span>{text.headline.line2}</span>
          </motion.h1>

          {/* 히어로 리드 텍스트 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 md:mt-4 text-base md:text-lg font-normal leading-[1.7] text-gray-300 max-w-xl mx-auto"
          >
            <span>{text.lead.line1}</span>
            <br />
            <span>{text.lead.line2.prefix}</span>
            <span className={underline.style}>{text.lead.line2.highlight}</span>
            <br />
            <span>{text.lead.line3.prefix}</span>
            <span className={`font-semibold ${underline.style}`}>{text.lead.line3.highlight}</span>
          </motion.p>

          {/* CTA 버튼 - Large Primary + Glow Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 md:mt-8 relative group inline-block"
          >
            <div className="absolute inset-0 -m-2 rounded-full bg-white/30 opacity-50 blur-xl transition-all group-hover:opacity-70 group-hover:blur-2xl"></div>
            <button
              onClick={openConsult}
              className="relative z-10 inline-flex items-center justify-center h-12 md:h-14 px-8 text-base font-semibold bg-white text-gray-900 rounded-full hover:bg-white/90 transition-all shadow-2xl gap-3"
            >
              <span>{text.ctaButton.text}</span>
              <span>{text.ctaButton.arrow}</span>
            </button>
          </motion.div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
