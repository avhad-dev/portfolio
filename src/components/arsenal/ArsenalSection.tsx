"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, useInView } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const technologies = ["Java", "Python", "SQL", "Spring", "Jakarta EE", "Oracle", "Snowflake", "Docker"];
const concepts = ["Transaction Processing", "Data Modeling", "ETL", "Schema Design", "Batch Processing", "Real-Time Processing", "Concurrency", "Performance Engineering", "Distributed Systems"];

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

function MarqueeRow({ items, direction = "left", speed = 0.5 }: MarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "0px 0px 200px 0px" });
  const prefersReducedMotion = useReducedMotion();

  const baseX = useMotionValue(0);
  
  // Create 4 copies of the list to ensure we have enough width to scroll continuously
  const content = [...items, ...items, ...items, ...items];
  
  // Map base value into a percentage transform
  // The items list is duplicated 4 times, so 1 full cycle is 25% of the total width
  const x = useTransform(baseX, (v) => `${(v % 25) - 25}%`);

  useAnimationFrame((t, delta) => {
    if (prefersReducedMotion || !isInView) return;

    let moveBy = direction === "left" ? -speed : speed;
    
    // Normalize delta for 60fps (approx 16.6ms) to keep speed consistent regardless of framerate
    const timeFactor = delta / 16.666;
    moveBy *= timeFactor;
    
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={containerRef} className="flex overflow-hidden whitespace-nowrap py-4">
      {prefersReducedMotion ? (
        // Static fallback for reduced motion
        <div className="flex flex-wrap gap-8 px-8 opacity-50">
          {items.map((item, index) => (
            <span key={index} className="text-4xl md:text-6xl font-serif italic tracking-tighter text-foreground">
              [{item}]
            </span>
          ))}
        </div>
      ) : (
        // Animated Marquee
        <motion.div
          className="flex gap-16 pr-16 will-change-transform"
          style={{ x }}
        >
          {content.map((item, index) => {
            // Only expose the first set to screen readers
            const isAriaHidden = index >= items.length;
            return (
              <span
                key={`${item}-${index}`}
                aria-hidden={isAriaHidden}
                tabIndex={!isAriaHidden ? 0 : -1}
                className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tighter text-foreground/40 [-webkit-text-stroke:1px_rgba(242,240,234,0.5)] hover:text-foreground hover:[-webkit-text-stroke:transparent] focus:text-foreground focus:[-webkit-text-stroke:transparent] transition-all duration-300 cursor-default focus:outline-none"
              >
                {item}
              </span>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}

export default function ArsenalSection() {
  return (
    <section id="stack" className="py-32 overflow-hidden border-t border-foreground/10 bg-background">
      <div className="max-w-6xl mx-auto px-8 md:px-24 mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">03 / Technical Arsenal</p>
      </div>
      
      <div className="flex flex-col gap-8 md:gap-16">
        <MarqueeRow items={technologies} direction="left" speed={0.05} />
        <MarqueeRow items={concepts} direction="right" speed={0.04} />
      </div>
    </section>
  );
}
