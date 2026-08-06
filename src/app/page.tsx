import HeroScene from "@/components/hero/HeroScene";
import AboutSection from "@/components/about/AboutSection";
import WorkSection from "@/components/work/WorkSection";
import ArsenalSection from "@/components/arsenal/ArsenalSection";
import FooterSection from "@/components/footer/FooterSection";

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
      <FooterSection />
    </div>
  );
}
