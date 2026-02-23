"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import { section5_1Config } from "@/config/section5-1.config";
import { cn } from "@/lib/utils";
import { useConsultModal } from "@/components/ConsultModal";

const { section, copy, button, marquee } = section5_1Config;

// CTA Marquee 컴포넌트
interface CTAMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function CTAMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 40,
}: CTAMarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]",
        className
      )}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

// 스크램블 버튼
function ScrambleButton() {
  const { open: openConsult } = useConsultModal();
  const [displayText, setDisplayText] = useState(button.text);
  const [isScrambling, setIsScrambling] = useState(false);
  const originalText = button.text;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = originalText.length;

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <button
      onClick={openConsult}
      onMouseEnter={scramble}
      className="bg-[#ec622d] text-white rounded-full h-12 md:h-14 px-8 text-base font-semibold transition-colors shadow-lg hover:bg-[#d55526]"
    >
      {displayText}
    </button>
  );
}

const Section5_1 = () => {
  return (
    <div
      id="cta-mid"
      className="min-h-[600px] flex items-center overflow-hidden relative font-['Paperlogy'] py-12 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3
              className="text-3xl md:text-5xl font-bold leading-tight tracking-tight whitespace-pre-line text-gray-900"
              style={{ color: copy.mainColor }}
            >
              {copy.main}
            </h3>
            <div className="space-y-1 text-gray-700" style={{ color: copy.subColor }}>
              {copy.sub.map((line, idx) => (
                <p key={idx} className="text-base md:text-lg">
                  {line}
                </p>
              ))}
            </div>
            <ScrambleButton />
          </div>

          {/* Right Marquee - Single Row */}
          <div className="overflow-hidden flex items-center">
            <CTAMarquee speed={marquee.speed} className={`[--gap:${marquee.gap}]`}>
              {[...marquee.images1, ...marquee.images2].map((src, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ width: marquee.imageSize, height: marquee.imageSize }}
                >
                  <Image
                    src={src}
                    alt={`Portfolio ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </CTAMarquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5_1;
