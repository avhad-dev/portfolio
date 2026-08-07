"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const statements = [
  "Correctness comes before cleverness.",
  "Every transaction is a state transition.",
  "Build for throughput without losing traceability.",
  "Failure paths deserve first-class design."
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
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const x4 = useTransform(scrollYProgress, [0, 1], ["-25%", "5%"]);

  const transforms = [x1, x2, x3, x4];

  // Calculate velocity for the skew effect
  const velocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const skewX = useTransform(smoothVelocity, [-0.5, 0.5], ["-3deg", "3deg"]);

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
        
        {/* Section Context & Summary */}
        <div className="absolute top-32 left-8 md:left-24 z-10 max-w-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-6">
            01 / Profile
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 leading-relaxed">
            Four-plus years building backend and data-intensive systems
            where correctness, throughput, and recoverability matter.
          </p>
        </div>

        {/* Desktop Layout (Parallax Horizontal Scroll) */}
        <div className="hidden md:flex flex-col justify-center gap-8 lg:gap-16 w-full h-full overflow-hidden will-change-transform mt-24">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              className="whitespace-nowrap px-8 md:px-24"
              style={{
                x: shouldAnimate ? transforms[index % transforms.length] : 0,
                skewX: shouldSkew ? skewX : 0,
              }}
            >
              <h2 className={`text-5xl md:text-6xl lg:text-8xl font-serif tracking-tight ${index % 2 !== 0 ? "text-foreground/40 italic" : "text-foreground"}`}>
                {statement}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout (Vertical Stack) */}
        <div className="md:hidden max-w-4xl mx-auto space-y-24">
          {statements.map((statement, index) => (
            <h2 
              key={index} 
              className={`text-4xl font-serif leading-tight ${index % 2 !== 0 ? "text-foreground/60" : "text-foreground"}`}
            >
              {statement}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}
