import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Shield,
  Zap,
  Sparkles
} from "lucide-react";

export const WhyHealthFreakSection = () => {
  return (
    <section id="why-healthfreak" className="py-28 md:py-36 relative bg-[#F4F0E8] text-[#171719] overflow-hidden">
      {/* Top Architectural Divider from Midnight Showcase */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-20">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="relative block w-full h-10 sm:h-16 fill-[#171D36]">
          <path d="M0,0 C350,65 850,15 1200,70 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#315BFF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#171719]/10 text-xs font-mono font-bold text-[#315BFF] mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>THE ARCHITECTURAL DIFFERENCE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171719] leading-tight mb-5">
            Why HealthFreak? <br />
            <span className="text-[#315BFF] italic">Built to eradicate the fragmentation.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#171719]/70 leading-relaxed">
            Compare HealthFreak’s unified biometric architecture against the disjointed, ad-saturated tools most people struggle with every day.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto overflow-hidden rounded-[36px] bg-white border border-[#171719]/10 shadow-[0_25px_60px_rgba(23,23,25,0.06)] relative"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#171719] text-white py-5 px-6 sm:px-8 text-xs sm:text-sm font-mono font-bold">
            <div className="col-span-5 text-[#B9BAC4]">WELLNESS CAPABILITY</div>
            <div className="col-span-4 text-[#D5F45B] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D5F45B] animate-pulse" />
              HEALTHFREAK AI
            </div>
            <div className="col-span-3 text-[#FF6659]">FRAGMENTED APPS</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#171719]/8">
            {siteConfig.comparison.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="grid grid-cols-12 py-4 px-6 sm:px-8 items-center hover:bg-[#F4F0E8]/50 transition-colors text-xs sm:text-sm group"
              >
                <div className="col-span-5 font-bold text-[#171719] pr-2 group-hover:text-[#315BFF] transition-colors">
                  {row.feature}
                </div>
                <div className="col-span-4 text-[#315BFF] font-semibold flex items-center gap-2 pr-2">
                  <CheckCircle2 className="w-4 h-4 text-[#315BFF] shrink-0" />
                  <span>{row.healthfreak}</span>
                </div>
                <div className="col-span-3 text-[#171719]/50 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-[#FF6659] shrink-0" />
                  <span>{row.traditional}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3 Benefit Highlights in Pure White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          <div className="p-8 rounded-[32px] bg-white border border-[#171719]/10 shadow-[0_15px_35px_rgba(23,23,25,0.04)] text-left hover:border-[#315BFF]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#315BFF]/10 text-[#315BFF] flex items-center justify-center mb-5">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#171719] mb-2.5">
              Zero Context Switching
            </h4>
            <p className="text-sm text-[#171719]/70 leading-relaxed">
              When your nutrition, water, steps, and coach live in one unified system, you eliminate the cognitive load that causes habit abandonment.
            </p>
          </div>

          <div className="p-8 rounded-[32px] bg-white border border-[#171719]/10 shadow-[0_15px_35px_rgba(23,23,25,0.04)] text-left hover:border-[#FF6659]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6659]/10 text-[#FF6659] flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#171719] mb-2.5">
              Live Voice Accountability
            </h4>
            <p className="text-sm text-[#171719]/70 leading-relaxed">
              Coach Alex speaks with you at the cadence of a real telephone conversation, keeping your mind focused and your goals on track.
            </p>
          </div>

          <div className="p-8 rounded-[32px] bg-white border border-[#171719]/10 shadow-[0_15px_35px_rgba(23,23,25,0.04)] text-left hover:border-[#D5F45B]/60 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#D5F45B]/30 text-[#171719] flex items-center justify-center mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#171719] mb-2.5">
              Obsidian Privacy
            </h4>
            <p className="text-sm text-[#171719]/70 leading-relaxed">
              No tracking pixels or advertising broker SDKs. Your biometrics and voice calls are protected with on-device encryption.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Transition Drop into Charcoal Audio Studio */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-20">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="relative block w-full h-10 sm:h-16 fill-[#171719]">
          <path d="M0,80 C320,15 780,70 1200,25 L1200,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
};
