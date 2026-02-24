"use client";

import { useState, useEffect } from "react";
import { headerConfig } from "@/config/header.config";
import { useConsultModal } from "@/components/ConsultModal";

interface HeaderProps {
  /** true면 항상 흰색 배경 (비디오 배경 없는 페이지용) */
  forceSolid?: boolean;
}

const Header = ({ forceSolid = false }: HeaderProps) => {
  const { open: openConsult } = useConsultModal();
  const { logo, navigation, cta, style } = headerConfig;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (forceSolid) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > style.scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [style.scrollThreshold, forceSolid]);

  const isSolid = forceSolid || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-16 transition-all duration-300 ${
        isSolid
          ? "bg-white/80 backdrop-blur-md border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 flex items-center">
        {/* 좌측: 로고 */}
        <a href="/" className="flex-shrink-0">
          <img
            src={isSolid ? logo.srcScrolled : logo.src}
            alt={logo.alt}
            className={`${logo.height} w-auto object-contain transition-all duration-300`}
          />
        </a>

        {/* 중앙: 네비게이션 */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-150 ${
                isSolid
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
            isSolid
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
              isSolid ? "text-gray-900" : "text-white"
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
  );
};

export default Header;
