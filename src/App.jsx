import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
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
        {/* Act 1: Cinematic Deep Midnight Hero */}
        <HeroSection />

        {/* Act 2: Warm Ivory Editorial Manifesto */}
        <AboutSection />

        {/* Act 3: MotionSites-Level Pinned Scroll Storytelling (360vh) */}
        <PinnedScrollExperience />

        {/* Act 4: Warm Ivory Interactive Biometric Laboratory */}
        <FeaturesSection />

        {/* Act 5: Deep Midnight Hardware Screenshot Showcase */}
        <ScreenshotsSection />

        {/* Act 6: Warm Ivory Anti-Fragmentation Comparison */}
        <WhyHealthFreakSection />

        {/* Act 7: Deep Charcoal & Lavender Coach Alex Voice Studio */}
        <AiCompanionSection />

        {/* Act 8: High-Voltage Electric Cobalt Download Finale */}
        <DownloadSection />
      </main>

      {/* 9. Official Art-Directed Footer */}
      <Footer />
    </div>
  );
}
