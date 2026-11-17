import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import ImpossiblePhoneChoreography from "@/components/ImpossiblePhoneChoreography";
import { PinnedScrollExperience } from "@/components/PinnedScrollExperience";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScreenshotsSection } from "@/components/ScreenshotsSection";
import { WhyHealthFreakSection } from "@/components/WhyHealthFreakSection";
import { AiCompanionSection } from "@/components/AiCompanionSection";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#171719] text-[#171719] flex flex-col font-sans selection:bg-[#315BFF] selection:text-white">
      {/* 0. Kinetic Custom Cursor */}
      <CustomCursor />

      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        {/* Act 1: Surreal 3D Hero + Kinetic Typography + ShaderCanvas */}
        <HeroSection />

        {/* Act 2: Warm Ivory Editorial Manifesto */}
        <AboutSection />

        {/* Act 3: Impossible Smartphone Choreography (Triad -> Z-Explosion -> Orbit -> Convergence) */}
        <div id="choreography">
          <ImpossiblePhoneChoreography />
        </div>

        {/* Act 4: MotionSites Pinned Scroll Deep Dive (Multimodal, Steps, Water, Voice) */}
        <PinnedScrollExperience />

        {/* Act 5: Warm Ivory Interactive Biometric Laboratory */}
        <FeaturesSection />

        {/* Act 6: Deep Midnight Hardware Screenshot Showcase */}
        <ScreenshotsSection />

        {/* Act 7: Warm Ivory Anti-Fragmentation Comparison */}
        <WhyHealthFreakSection />

        {/* Act 8: Deep Charcoal & Lavender Coach Alex Voice Studio */}
        <AiCompanionSection />

        {/* Act 9: High-Voltage Electric Cobalt Download Finale */}
        <DownloadSection />
      </main>

      {/* 10. Official Art-Directed Footer */}
      <Footer />
    </div>
  );
}
