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
      {/* WebGL Fallback / Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foreground/10 via-background to-background" />

      {/* WebGL Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <GenerativeForm />
          </Suspense>
        </Canvas>
      </div>

      {/* Editorial Overlay - Asymmetrical */}
      <div className="z-10 absolute bottom-16 md:bottom-24 left-8 md:left-24 max-w-2xl pointer-events-none">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-tighter text-foreground drop-shadow-lg leading-[0.9]">
          Software<br />Developer
        </h1>
      </div>

      <div className="z-10 absolute bottom-16 md:bottom-24 right-8 md:right-24 flex flex-col items-end gap-6 text-right pointer-events-none">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/80 drop-shadow">
          Creative Engineering
        </p>
        <button
          onClick={handleInitialize}
          className="px-6 py-3 border border-foreground/30 hover:border-foreground/80 hover:bg-foreground/5 transition-all duration-500 font-mono text-xs uppercase tracking-widest pointer-events-auto backdrop-blur-sm"
          aria-label="Scroll to next section"
        >
          Initialize
        </button>
      </div>
    </section>
  );
}
