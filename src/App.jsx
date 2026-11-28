import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScreenshotsSection } from "@/components/ScreenshotsSection";
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
        {/* Section 1: Cinematic Navy Hero with Authentic App Mockup & Download CTA */}
        <HeroSection />

        {/* Section 2: Interactive Feature Explorer */}
        <FeaturesSection />

        {/* Section 3: Authentic Application Screenshots Showcase */}
        <ScreenshotsSection />

        {/* Section 4: High-Voltage Download Call-to-Action */}
        <DownloadSection />
      </main>

      {/* 5. Official Art-Directed Footer */}
      <Footer />
    </div>
  );
}
