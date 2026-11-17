import { motion } from "motion/react";
import CountUp from "@/components/CountUp";
import {
  Layers,
  Bot,
  Shield,
  Zap,
  Cpu,
  ArrowDownRight
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 md:py-36 relative bg-[#F4F0E8] text-[#171719] overflow-hidden">
      {/* Top Transition Mask into Warm Ivory */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-20">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="relative block w-full h-10 sm:h-16 fill-[#101322]">
          <path d="M0,0 C300,70 700,10 1200,60 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Decorative Editorial Background Elements */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#315BFF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#FF6659]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead: Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-20 md:mb-28">
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#171719]/10 text-xs font-mono font-bold text-[#315BFF] mb-5 shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>THE MANIFESTO</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171719] leading-[1.05]">
              Eliminate the <br />
              <span className="text-[#315BFF] italic">five-app</span> headache.
            </h2>
          </div>

          <div className="lg:col-span-4 text-left">
            <p className="text-base sm:text-lg text-[#171719]/70 leading-relaxed">
              Most people abandon wellness habits because logging calories in one app, tracking water in another, checking workouts in a third, and consulting chatbots in a fourth creates friction and mental fatigue.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono font-bold text-[#315BFF] uppercase tracking-wider">
              <span>ONE COHESIVE SYSTEM</span>
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Asymmetric 4 Pillars Editorial Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-20">
          {/* Pillar 1: Large Feature Card (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-8 rounded-[36px] bg-white p-8 sm:p-12 border border-[#171719]/10 shadow-[0_20px_50px_rgba(23,23,25,0.06)] flex flex-col justify-between group hover:border-[#315BFF]/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#315BFF] bg-[#315BFF]/10 px-3 py-1 rounded-full">
                  01 / COHERENT ARCHITECTURE
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#315BFF]/10 flex items-center justify-center text-[#315BFF] group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171719] mb-4">
                Unified Biometric Intelligence
              </h3>
              <p className="text-base sm:text-lg text-[#171719]/70 max-w-2xl leading-relaxed">
                Your calories, water, steps, and recovery sleep are not disconnected data silos. When you walk 10,000 steps, HealthFreak automatically adapts your water targets and calculates your remaining macro fuel.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#171719]/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-[11px] font-mono text-[#171719]/50 uppercase">Sync Speed</span>
                <strong className="text-sm sm:text-base font-bold text-[#315BFF]">Instant On-Device</strong>
              </div>
              <div>
                <span className="block text-[11px] font-mono text-[#171719]/50 uppercase">Data Silos</span>
                <strong className="text-sm sm:text-base font-bold text-[#FF6659]">Zero Fragmentation</strong>
              </div>
              <div>
                <span className="block text-[11px] font-mono text-[#171719]/50 uppercase">Adaptive Targets</span>
                <strong className="text-sm sm:text-base font-bold text-[#171719]">100% Dynamic</strong>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Tall Feature Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-4 rounded-[36px] bg-[#171719] text-white p-8 sm:p-10 border border-[#171719] shadow-[0_20px_50px_rgba(23,23,25,0.15)] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D5F45B] bg-[#D5F45B]/15 px-3 py-1 rounded-full border border-[#D5F45B]/30">
                  02 / VISION
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#D5F45B] group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Sub-Second Vision
              </h3>
              <p className="text-sm sm:text-base text-[#B9BAC4] leading-relaxed">
                No endless text searching through 100,000 barcode entries. Point your camera, and multimodal vision detects foods and balances macros instantly.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-[#D5F45B] font-bold">
                ✓ 98.4% Average portion accuracy
              </span>
            </div>
          </motion.div>

          {/* Pillar 3: Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-6 rounded-[36px] bg-white p-8 sm:p-10 border border-[#171719]/10 shadow-[0_20px_50px_rgba(23,23,25,0.06)] flex flex-col justify-between group hover:border-[#B9A8FF]/60 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#315BFF] bg-[#315BFF]/10 px-3 py-1 rounded-full">
                  03 / REAL VOICE
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#B9A8FF]/20 flex items-center justify-center text-[#315BFF] group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#171719] mb-3">
                Coach Alex: Human Cadence
              </h3>
              <p className="text-sm sm:text-base text-[#171719]/70 leading-relaxed">
                Experience real conversational telephone sessions powered by low-latency LiveKit pipelines. Get genuine verbal guidance tailored to your real logs.
              </p>
            </div>
          </motion.div>

          {/* Pillar 4: Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-6 rounded-[36px] bg-gradient-to-br from-[#171D36] to-[#121626] text-white p-8 sm:p-10 border border-[#315BFF]/30 shadow-[0_20px_50px_rgba(23,23,25,0.15)] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6659] bg-[#FF6659]/15 px-3 py-1 rounded-full border border-[#FF6659]/30">
                  04 / OBSIDIAN PRIVACY
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#FF6659] group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Zero Ads. Zero Surveillance.
              </h3>
              <p className="text-sm sm:text-base text-[#B9BAC4] leading-relaxed">
                No full-screen video ads. No third-party data broker SDKs. Your biometrics, meals, and voice transcripts remain 100% private and protected.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Impact Counters in Warm Ivory / Pure White Band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[36px] bg-white border border-[#171719]/10 p-8 sm:p-12 shadow-[0_25px_60px_rgba(23,23,25,0.06)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#171719]/10">
            <div>
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#315BFF] mb-2 flex items-center justify-center gap-0.5">
                <CountUp from={0} to={100} duration={1.8} trigger="view" />
                <span>%</span>
              </div>
              <div className="text-xs sm:text-sm font-bold font-mono text-[#171719]/70 uppercase tracking-wider">
                Unified Ecosystem
              </div>
            </div>

            <div className="pt-6 md:pt-0">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF6659] mb-2 flex items-center justify-center gap-1">
                <span>&lt;</span>
                <CountUp from={10} to={1} duration={1.5} trigger="view" />
                <span>s</span>
              </div>
              <div className="text-xs sm:text-sm font-bold font-mono text-[#171719]/70 uppercase tracking-wider">
                Meal AI Recognition
              </div>
            </div>

            <div className="pt-6 md:pt-0">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#171719] mb-2 flex items-center justify-center gap-1">
                <CountUp from={0} to={240} duration={1.6} trigger="view" />
                <span>ms</span>
              </div>
              <div className="text-xs sm:text-sm font-bold font-mono text-[#171719]/70 uppercase tracking-wider">
                Audio Voice Latency
              </div>
            </div>

            <div className="pt-6 md:pt-0">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#315BFF] mb-2 flex items-center justify-center gap-1">
                <CountUp from={100} to={0} duration={1.2} trigger="view" />
                <span>Ads</span>
              </div>
              <div className="text-xs sm:text-sm font-bold font-mono text-[#171719]/70 uppercase tracking-wider">
                100% Private Focus
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Transition Drop into Pinned Choreography Universe */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-20">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="relative block w-full h-10 sm:h-16 fill-[#10131E]">
          <path d="M0,80 C400,20 800,75 1200,10 L1200,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
};
