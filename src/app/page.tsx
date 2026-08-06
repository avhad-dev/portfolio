import HeroScene from "@/components/hero/HeroScene";
import AboutSection from "@/components/about/AboutSection";
import WorkSection from "@/components/work/WorkSection";
import ArsenalSection from "@/components/arsenal/ArsenalSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero — living system */}
      <HeroScene />

      {/* 2. About — stream of thought */}
      <AboutSection />

      {/* 3. Selected work — distortion gallery */}
      <WorkSection />

      {/* 4. Technical arsenal */}
      <ArsenalSection />

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
