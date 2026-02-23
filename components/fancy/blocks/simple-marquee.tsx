"use client";

import React, { useRef, useEffect, useState, RefObject } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useVelocity,
} from "framer-motion";

interface SimpleMarqueeProps {
  children: React.ReactNode;
  className?: string;
  baseVelocity?: number;
  repeat?: number;
  draggable?: boolean;
  scrollSpringConfig?: { damping: number; stiffness: number };
  slowDownFactor?: number;
  slowdownOnHover?: boolean;
  slowDownSpringConfig?: { damping: number; stiffness: number };
  scrollAwareDirection?: boolean;
  scrollContainer?: RefObject<HTMLDivElement | null>;
  useScrollVelocity?: boolean;
  direction?: "left" | "right";
}

function SimpleMarquee({
  children,
  className = "",
  baseVelocity = 5,
  repeat = 4,
  slowdownOnHover = false,
  slowDownFactor = 0.3,
  scrollAwareDirection = false,
  scrollContainer,
  useScrollVelocity = false,
  direction = "left",
}: SimpleMarqueeProps) {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const { scrollY } = useScroll({
    container: scrollContainer,
  });

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef<number>(direction === "left" ? -1 : 1);

  useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.querySelector(
        "[data-marquee-content]"
      );
      if (firstChild) {
        setContentWidth(firstChild.scrollWidth);
      }
    }
  }, [children]);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 50;

    if (slowdownOnHover && isHovered) {
      moveBy *= slowDownFactor;
    }

    if (useScrollVelocity) {
      moveBy += directionFactor.current * velocityFactor.get() * (delta / 1000) * 50;
    }

    if (scrollAwareDirection) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = direction === "left" ? 1 : -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = direction === "left" ? -1 : 1;
      }
    }

    let newX = baseX.get() + moveBy;

    if (contentWidth > 0) {
      if (newX <= -contentWidth) {
        newX += contentWidth;
      } else if (newX >= 0) {
        newX -= contentWidth;
      }
    }

    baseX.set(newX);
  });

  const x = useTransform(baseX, (v) => `${v}px`);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {[...Array(repeat)].map((_, i) => (
          <div
            key={i}
            className="flex flex-shrink-0"
            data-marquee-content={i === 0 ? true : undefined}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SimpleMarquee;
