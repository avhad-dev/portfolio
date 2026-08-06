"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import GenerativeForm from "./GenerativeForm";
import { useLenis } from "lenis/react";

export default function HeroScene() {
  const lenis = useLenis();

  const handleInitialize = () => {
    if (lenis) {
      lenis.scrollTo("#about", { offset: 0, duration: 1.5 });
    } else {
      // Fallback if Lenis is not available
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-background overflow-hidden">
      {/* WebGL Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <GenerativeForm />
          </Suspense>
        </Canvas>
      </div>

      {/* Editorial Overlay */}
      <div className="z-10 flex flex-col items-center gap-8 text-center px-4 pointer-events-none">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-foreground drop-shadow-lg">
          Software Developer
        </h1>
        <p className="font-mono text-sm md:text-base uppercase tracking-[0.3em] text-foreground/80 drop-shadow">
          Creative Engineering
        </p>
        <button
          onClick={handleInitialize}
          className="mt-16 px-8 py-4 border border-foreground/30 hover:border-foreground/80 hover:bg-foreground/5 transition-all duration-500 font-mono text-xs md:text-sm uppercase tracking-widest pointer-events-auto backdrop-blur-sm"
          aria-label="Scroll to next section"
        >
          Initialize
        </button>
      </div>

      {/* Sparse metadata */}
      <div className="absolute bottom-8 left-8 z-10 font-mono text-xs uppercase tracking-widest text-foreground/50 pointer-events-none hidden md:block">
        00 / Index
      </div>
      <div className="absolute bottom-8 right-8 z-10 font-mono text-xs uppercase tracking-widest text-foreground/50 pointer-events-none hidden md:block flex gap-2 items-center">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block mr-2"></span>
        Available for work
      </div>
    </section>
  );
}
