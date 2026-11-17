import { useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import Magnet from "@/components/Magnet";
import ShinyText from "@/components/ShinyText";
import { gsap, ScrollTrigger, useGSAP } from "@/utils/gsapSetup";
import {
  Droplets,
  Activity,
  ArrowRight,
  Zap,
  PhoneCall,
  CheckCircle2,
  Compass
} from "lucide-react";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const titleLeftRef = useRef(null);
  const titleRightRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const phoneWrapperRef = useRef(null);
  const phoneInnerRef = useRef(null);
  const badgeRef = useRef(null);
  const satellite1Ref = useRef(null);
  const satellite2Ref = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax for the 3D phone
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // GSAP ScrollTrigger Pinned & Scrubbed Timeline
  useGSAP(
    () => {
      if (!heroRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=130%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Kinetic headline parting & fading
      tl.to(
        titleLeftRef.current,
        {
          xPercent: -45,
          opacity: 0,
          scale: 1.15,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        titleRightRef.current,
        {
          xPercent: 45,
          opacity: 0,
          scale: 1.15,
          ease: "power2.out",
        },
        0
      );

      // 2. Subtitle, badges & CTA exit
      tl.to(
        [subtitleRef.current, ctaRef.current, badgeRef.current],
        {
          y: -40,
          opacity: 0,
          stagger: 0.05,
          ease: "power2.out",
        },
        0
      );

      // 3. Floating satellite capsules drift away
      tl.to(
        satellite1Ref.current,
        {
          x: -180,
          y: -80,
          opacity: 0,
          scale: 0.8,
          ease: "power2.out",
        },
        0.05
      );

      tl.to(
        satellite2Ref.current,
        {
          x: 180,
          y: 80,
          opacity: 0,
          scale: 0.8,
          ease: "power2.out",
        },
        0.05
      );

      // 4. Phone scales up dramatically into the viewport
      tl.to(
        phoneWrapperRef.current,
        {
          scale: 1.55,
          y: 40,
          rotateX: 0,
          rotateY: 0,
          ease: "power2.inOut",
        },
        0
      );

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === heroRef.current) st.kill();
        });
      };
    },
    { scope: heroRef }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#171D36] text-white select-none"
    >
      {/* 1. Kinetic Ambient Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Cobalt Light Burst */}
        <div className="absolute -top-32 left-1/4 w-[800px] h-[800px] bg-[#315BFF]/25 rounded-full blur-[200px]" />
        {/* Coral Ambient Flare */}
        <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-[#FF6659]/18 rounded-full blur-[180px]" />
        {/* Lavender Bottom Depth */}
        <div className="absolute -bottom-28 left-1/3 w-[700px] h-[600px] bg-[#B9A8FF]/18 rounded-full blur-[200px]" />
        
        {/* Film Grain Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: "url('/assets/glass_grain_texture.png')",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Expressive Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            {/* Shimmering Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#315BFF]/20 border border-[#315BFF]/40 text-xs font-mono font-bold text-white mb-6 shadow-[0_0_25px_rgba(49,91,255,0.4)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#D5F45B] animate-pulse" />
              <ShinyText
                text="BIOMETRIC INTELLIGENCE ENGINE"
                color="#B9BAC4"
                shineColor="#FFFFFF"
                speed={2.2}
                className="text-[11px] font-mono tracking-widest font-extrabold uppercase"
              />
            </div>

            {/* Oversized Headline split into Left and Right animation targets */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4F0E8] leading-[1.05] mb-6">
              <span ref={titleLeftRef} className="block will-change-transform">
                Revolutionize how
              </span>
              <span ref={titleRightRef} className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#315BFF] via-[#B9A8FF] to-[#D5F45B] will-change-transform">
                your body fuels & speaks.
              </span>
            </h1>

            {/* Subtext */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg text-[#B9BAC4] max-w-xl leading-relaxed mb-8"
            >
              Stop juggling separate apps for calorie logging, water reminders, step counting, and advice.
              HealthFreak unites computer-vision meal scanning, liquid glass hydration, and <strong>Coach Alex</strong> in real time.
            </p>

            {/* Action Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Magnet padding={40} disabled={false}>
                <a
                  href={siteConfig.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  data-cursor-text="GET APP"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-extrabold text-[#171719] bg-[#D5F45B] hover:bg-[#cbf04a] shadow-[0_0_30px_rgba(213,244,91,0.5)] hover:shadow-[0_0_45px_rgba(213,244,91,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                >
                  <span>Download HealthFreak</span>
                  <ArrowRight className="w-4 h-4 text-[#171719]" />
                </a>
              </Magnet>

              <a
                href="#features"
                data-cursor="pointer"
                data-cursor-text="EXPLORE"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-[#315BFF]"
              >
                <Compass className="w-4 h-4 text-[#B9A8FF]" />
                <span>Explore Biometric Lab</span>
              </a>
            </div>

            {/* Trust Telemetry Strip */}
            <div className="mt-9 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#B9BAC4]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D5F45B]" />
                <span>Zero Ads or Distractions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#315BFF]" />
                <span>&lt; 1s Meal AI Vision</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-[#B9A8FF]" />
                <span>240ms LiveKit Speech Engine</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Hardware Smartphone Stage */}
          <div className="lg:col-span-5 flex justify-center relative items-center">
            {/* Phone Wrapper with Scroll-Triggered Scaling & Perspective */}
            <div
              ref={phoneWrapperRef}
              className="relative z-10 will-change-transform transform-gpu"
              style={{
                perspective: "1200px",
              }}
            >
              <div
                ref={phoneInnerRef}
                style={{
                  transform: `rotateY(${mousePos.x * 16}deg) rotateX(${-mousePos.y * 12}deg)`,
                  transition: "transform 0.15s ease-out",
                }}
                data-cursor="pointer"
                data-cursor-text="VIEW"
                className="relative w-[300px] sm:w-[335px] rounded-[48px] p-3.5 bg-gradient-to-b from-[#2D334D] via-[#1E2338] to-[#121524] border-[3px] border-[#444E75] shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_45px_rgba(49,91,255,0.35)]"
              >
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-end px-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Genuine HealthFreak Interface Display */}
                <div className="rounded-[36px] bg-[#0E111C] overflow-hidden border border-[#2B324D] min-h-[465px] flex flex-col justify-between p-4 text-left relative">
                  {/* Diagonal Specular Sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent z-20" />

                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] font-semibold text-[#B9BAC4] mb-3 px-2">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#D5F45B] font-bold">5G</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Header User Banner */}
                  <div className="flex justify-between items-center p-3 rounded-2xl bg-[#171D36] border border-[#2B3456]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#315BFF]">
                        <img
                          src="/assets/coach_alex.png"
                          alt="Coach Alex Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#B9BAC4]">Welcome back</div>
                        <div className="text-xs font-bold text-white">Aryan's Vitality</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF6659]/20 text-[#FF6659] border border-[#FF6659]/30">
                      👑 18 Streak
                    </span>
                  </div>

                  {/* Live Calorie & Macro Target Card */}
                  <div className="p-3.5 rounded-2xl bg-[#171D36] border border-[#2B3456] space-y-2.5 my-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white">Calorie Target</span>
                      <span className="font-mono font-extrabold text-[#D5F45B]">1,840 / 2,300 kcal</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#0E111C] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#315BFF] via-[#B9A8FF] to-[#D5F45B] w-[80%] rounded-full shadow-[0_0_12px_rgba(49,91,255,0.6)]" />
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] pt-1">
                      <div className="p-1.5 rounded-lg bg-[#0E111C] border border-[#222A46]">
                        <span className="text-neutral-400 block text-[8px] uppercase">Protein</span>
                        <strong className="text-[#315BFF] font-mono">145g</strong>
                      </div>
                      <div className="p-1.5 rounded-lg bg-[#0E111C] border border-[#222A46]">
                        <span className="text-neutral-400 block text-[8px] uppercase">Carbs</span>
                        <strong className="text-[#B9A8FF] font-mono">190g</strong>
                      </div>
                      <div className="p-1.5 rounded-lg bg-[#0E111C] border border-[#222A46]">
                        <span className="text-neutral-400 block text-[8px] uppercase">Fats</span>
                        <strong className="text-[#FF6659] font-mono">52g</strong>
                      </div>
                    </div>
                  </div>

                  {/* Hydration Mini Banner */}
                  <div className="p-2.5 rounded-xl bg-[#171D36] border border-[#2B3456] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-[#315BFF]" />
                      <span className="text-xs font-bold text-white">Hydration Target</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#315BFF]">2,450 / 3,200 mL (76%)</span>
                  </div>

                  {/* Coach Alex Live Call Audio Strip */}
                  <div className="p-2.5 rounded-xl bg-[#12162A] border border-[#315BFF]/30 flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5 text-[#B9A8FF] animate-pulse" />
                      <span className="text-[11px] font-bold text-white">Coach Alex Online</span>
                    </div>
                    <div className="flex items-center gap-1 h-3.5">
                      {[6, 12, 16, 9, 14, 8].map((h, i) => (
                        <div
                          key={i}
                          className="w-0.5 bg-[#B9A8FF] rounded-full animate-wave-bar"
                          style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Orbiting Satellite Badge: AI Vision */}
            <div
              ref={satellite1Ref}
              data-cursor="pointer"
              data-cursor-text="SCAN"
              className="hidden sm:flex absolute -top-8 -left-12 p-3 rounded-2xl bg-[#171719]/90 backdrop-blur-xl border border-[#315BFF]/40 shadow-2xl items-center gap-3 z-30 will-change-transform"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#24242A] border border-[#315BFF]/50 shrink-0">
                <img
                  src="/assets/healthy_bowl_clean.png"
                  alt="Meal preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left text-xs">
                <div className="font-bold text-white flex items-center gap-1.5">
                  Meal Recognized
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5F45B] animate-pulse" />
                </div>
                <span className="text-[10px] text-[#B9BAC4]">520 kcal • 42g Prot</span>
              </div>
            </div>

            {/* Floating Orbiting Satellite Badge: Live Step Sensors */}
            <div
              ref={satellite2Ref}
              data-cursor="pointer"
              data-cursor-text="STEPS"
              className="hidden sm:flex absolute -bottom-8 -right-8 p-3 rounded-2xl bg-[#171719]/90 backdrop-blur-xl border border-[#D5F45B]/40 shadow-2xl items-center gap-3 z-30 will-change-transform"
            >
              <div className="w-9 h-9 rounded-xl bg-[#D5F45B]/15 border border-[#D5F45B]/30 flex items-center justify-center text-[#D5F45B]">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-left text-xs">
                <div className="font-bold text-white">10,482 Steps Today</div>
                <span className="text-[10px] text-[#D5F45B] font-semibold">624 Active kcal burned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
