"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const statements = [
  "Write code that does one thing and does it well.",
  "Expect the output of every system to become the input to another.",
  "Design for clarity and simplicity above all else.",
  "Small is beautiful. Build with restraint and precision."
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useReducedMotion();

  // Track vertical scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Calculate velocity for the skew effect
  const velocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const skewX = useTransform(smoothVelocity, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Conditionally apply motion values based on viewport and accessibility preferences
  const shouldAnimate = isDesktop;
  const shouldSkew = shouldAnimate && !prefersReducedMotion;

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative md:h-[300vh] w-full"
    >
      {/* 
        On desktop: sticky container to pin the view while scrolling.
        On mobile: standard flow (relative, min-h-screen).
      */}
      <div className="md:sticky md:top-0 w-full md:h-screen md:overflow-hidden flex flex-col justify-center py-32 px-8 md:px-0">
        
        {/* Desktop Layout (Horizontal Scroll) */}
        {isDesktop ? (
          <motion.div 
            className="flex items-center gap-16 md:gap-32 px-8 md:px-24 whitespace-nowrap will-change-transform"
            style={{ 
              x: shouldAnimate ? x : 0, 
              skewX: shouldSkew ? skewX : 0 
            }}
          >
            {statements.map((statement, index) => (
              <h2 
                key={index} 
                className="text-4xl md:text-7xl lg:text-9xl font-serif leading-tight shrink-0 text-foreground"
              >
                {statement}
              </h2>
            ))}
          </motion.div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-24">
            {statements.map((statement, index) => (
              <h2 
                key={index} 
                className={`text-4xl font-serif leading-tight ${index % 2 !== 0 ? "text-foreground/60" : "text-foreground"}`}
              >
                {statement}
              </h2>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
