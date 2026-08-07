"use client";

import dynamic from "next/dynamic";
import { useLenis } from "lenis/react";

// Dynamically import the heavy WebGL component (as per DESIGN.md constraints)
const WebGLScene = dynamic(() => import("./WebGLScene"), {
  ssr: false,
});

export default function HeroScene() {
  const lenis = useLenis();

  const handleInitialize = () => {
    if (lenis) {
      lenis.scrollTo("#about", { offset: 0, duration: 1.5 });
    } else {
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-background overflow-hidden">
      {/* WebGL Fallback / Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foreground/10 via-background to-background" />

      {/* WebGL Canvas Background */}
      <div className="absolute inset-0 z-0">
        <WebGLScene />
      </div>

      {/* Editorial Overlay - Asymmetrical */}
      <div className="z-10 absolute bottom-16 md:bottom-24 left-8 md:left-24 max-w-2xl pointer-events-none">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-tighter text-foreground drop-shadow-lg leading-[0.9]">
          Software<br />Engineer
        </h1>
        <p className="mt-8 max-w-sm font-mono text-xs md:text-sm text-foreground/80 leading-relaxed drop-shadow">
          Building reliable systems for financial movement,
          decisioning, and high-volume data processing.
        </p>
      </div>

      <div className="z-10 absolute bottom-16 md:bottom-24 right-8 md:right-24 flex flex-col items-end gap-6 text-right pointer-events-none">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/80 drop-shadow">
          Transaction Systems / Data Engineering
        </p>
        <button
          onClick={handleInitialize}
          className="px-6 py-3 border border-foreground/30 hover:border-foreground/80 hover:bg-foreground/5 transition-all duration-500 font-mono text-xs uppercase tracking-widest pointer-events-auto backdrop-blur-sm"
          aria-label="Scroll to next section"
        >
          Explore systems
        </button>
      </div>
    </section>
  );
}
