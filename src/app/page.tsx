import HeroScene from "@/components/hero/HeroScene";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero — living system */}
      <HeroScene />

      {/* 2. About — stream of thought */}
      <section id="about" className="py-32 px-8 md:px-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            [Placeholder statement about engineering philosophy, product thinking, and approach to software.]
          </h2>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-foreground/60">
            [Second statement elaborating on approach.]
          </h2>
        </div>
      </section>

      {/* 3. Selected work — distortion gallery */}
      <section className="py-32 px-8 md:px-24 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm mb-16 uppercase tracking-widest text-foreground/60">01 / Selected Work</p>
          <div className="space-y-4">
            {/* Project Row Placeholder */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-foreground/10 hover:border-foreground/30 transition-colors cursor-pointer">
                <h3 className="text-3xl md:text-5xl font-serif group-hover:italic transition-all">Project {i}</h3>
                <div className="flex items-center gap-8 mt-4 md:mt-0 font-mono text-sm text-foreground/60">
                  <span>202{i}</span>
                  <span>Frontend</span>
                  <span className="hidden md:inline-block">React, TypeScript, WebGL</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical arsenal */}
      <section className="py-32 overflow-hidden border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-8 md:px-24 mb-16">
          <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">02 / Technical Arsenal</p>
        </div>
        <div className="flex flex-col gap-4 whitespace-nowrap opacity-50">
          <div className="text-5xl md:text-7xl font-serif italic tracking-tighter">
            [TypeScript] [React] [Next.js] [WebGL] [Three.js] [Node.js] [Tailwind]
          </div>
          <div className="text-5xl md:text-7xl font-serif italic tracking-tighter ml-[-20vw]">
            [Architecture] [Performance] [Accessibility] [Interaction] [Systems]
          </div>
        </div>
      </section>

      {/* 5. Footer — hand-off */}
      <footer className="py-32 px-8 md:px-24 border-t border-foreground/10 flex flex-col items-center">
        <a href="#" className="relative group inline-block text-5xl md:text-8xl font-serif hover:text-accent transition-colors duration-500">
          Let&apos;s Collaborate
        </a>
        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center font-mono text-sm text-foreground/60 gap-4">
          <p>[Local Time Placeholder]</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
