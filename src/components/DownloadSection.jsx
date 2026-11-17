import { siteConfig } from "@/config/site";
import Magnet from "@/components/Magnet";
import ShinyText from "@/components/ShinyText";
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Zap
} from "lucide-react";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-28 md:py-36 relative bg-[#171719] text-white overflow-hidden">
      {/* High-Voltage Cobalt & Coral Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#315BFF]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#FF6659]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-[44px] bg-gradient-to-br from-[#1E2338] via-[#171D36] to-[#121626] border border-[#315BFF]/40 p-8 sm:p-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_55px_rgba(49,91,255,0.25)] relative overflow-hidden">
          {/* Subtle Concentric Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-white/5 rounded-full pointer-events-none" />

          {/* Badge with ShinyText */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#315BFF]/20 border border-[#315BFF]/40 text-xs font-mono font-bold text-white mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D5F45B]" />
            <ShinyText
              text="OFFICIAL APPLICATION RELEASE"
              color="#B9BAC4"
              shineColor="#FFFFFF"
              speed={2}
              className="text-xs font-mono tracking-widest font-extrabold uppercase"
            />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-5">
            Your wellness journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5F45B] via-[#FFFFFF] to-[#B9A8FF]">
              starts here.
            </span>
          </h2>

          {/* Subtext */}
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#B9BAC4] leading-relaxed mb-10">
            Download <strong>HealthFreak</strong> on Google Play today. Step into a unified health world uniting AI multimodal vision, dynamic hydration, and real-time voice coaching.
          </p>

          {/* Action Area: High-Voltage Download CTA with Magnet */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
            <Magnet padding={50} disabled={false}>
              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-10 py-5 rounded-2xl text-base font-extrabold text-[#171719] bg-[#D5F45B] hover:bg-[#cbf04a] shadow-[0_0_35px_rgba(213,244,91,0.5)] hover:shadow-[0_0_55px_rgba(213,244,91,0.75)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 01-.61-.926V2.74c0-.348.214-.666.61-.926zm11.235 11.238l2.25 2.25-11.83 6.83 9.58-9.08zm0-2.104l-9.58-9.08 11.83 6.83-2.25 2.25zm1.485 1.052l4.89 2.825c.87.502.87 1.32 0 1.823l-4.89 2.825-2.29-2.29 2.29-2.29z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#171719]/70">
                    AVAILABLE NOW ON
                  </span>
                  <span className="text-base font-extrabold text-[#171719]">Google Play</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#171719]/70 ml-1" />
              </a>
            </Magnet>

            <div className="inline-flex items-center gap-2.5 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 backdrop-blur-md">
              <Smartphone className="w-4 h-4 text-[#D5F45B]" />
              <span>Android 8.0 & Above Supported</span>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#B9BAC4] pt-6 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D5F45B]" />
              <span>Free to download & explore</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#315BFF]" />
              <span>Zero third-party trackers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#FF6659]" />
              <span>Regular feature updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
