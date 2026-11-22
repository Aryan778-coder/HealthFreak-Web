import { useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import Magnet from "@/components/Magnet";
import ShinyText from "@/components/ShinyText";
import RefinedBackgroundAtmosphere from "@/components/RefinedBackgroundAtmosphere";
import KineticTitle from "@/components/KineticTypography";
import { gsap, ScrollTrigger, useGSAP } from "@/utils/gsapSetup";
import {
  Droplets,
  Activity,
  ArrowRight,
  Zap,
  PhoneCall,
  CheckCircle2,
  Compass,
} from "lucide-react";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const titleLeftRef = useRef(null);
  const titleRightRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const phoneWrapperRef = useRef(null);
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
          end: "+=140%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Kinetic headline parting & scaling
      tl.to(
        titleLeftRef.current,
        {
          xPercent: -40,
          opacity: 0,
          scale: 1.15,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        titleRightRef.current,
        {
          xPercent: 40,
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
          scale: 1.48,
          y: 35,
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
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0A0D16] text-white select-none"
    >
      {/* 1. Refined Background Atmosphere (Navy & Charcoal with Soft Blue/Purple Glows & Subtle Light Trails) */}
      <RefinedBackgroundAtmosphere intensity={0.85} />

      {/* 2. Soft Ambient Vignette */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Cobalt Radial Burst */}
        <div className="absolute -top-32 left-1/4 w-[750px] h-[750px] bg-[#315BFF]/15 rounded-full blur-[200px]" />
        {/* Soft Violet/Lavender Ambient Depth */}
        <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-[#7C3AED]/12 rounded-full blur-[190px]" />
        {/* Subtle Bottom Grounding */}
        <div className="absolute -bottom-28 left-1/3 w-[700px] h-[600px] bg-[#1E293B]/20 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 pb-8 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Expressive Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20 pointer-events-auto">
            {/* Shimmering Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#315BFF]/20 border border-[#315BFF]/40 text-xs font-mono font-bold text-white mb-4 shadow-[0_0_25px_rgba(49,91,255,0.4)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#D5F45B] animate-pulse" />
              <ShinyText
                text="NEXT-GEN AI WELLNESS PLATFORM"
                color="#B9BAC4"
                shineColor="#FFFFFF"
                speed={2.2}
                className="text-[11px] font-mono tracking-widest font-extrabold uppercase"
              />
            </div>

            {/* Extreme Kinetic Typography Title */}
            <div ref={titleLeftRef} className="w-full text-center lg:text-left mb-2">
              <KineticTitle
                text="HEALTHFREAK"
                subtitle="ALL-IN-ONE AI WELLNESS OS"
                accentColor="#D5F45B"
                className="my-1"
              />
            </div>

            {/* Editorial Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F0E8] leading-[1.08] mb-5">
              <span ref={titleRightRef} className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#315BFF] via-[#B9A8FF] to-[#D5F45B] will-change-transform">
                Where your body fuels & speaks.
              </span>
            </h1>

            {/* Subtext */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg text-[#B9BAC4] max-w-xl leading-relaxed mb-8"
            >
              Stop juggling fragmented apps for calorie logging, water timers, step counters, and advice.
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
                href="#choreography"
                data-cursor="pointer"
                data-cursor-text="EXPLORE"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-[#315BFF]"
              >
                <Compass className="w-4 h-4 text-[#B9A8FF]" />
                <span>3D Choreography</span>
              </a>
            </div>

            {/* Trust Telemetry Strip */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#B9BAC4]">
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
          <div className="lg:col-span-5 flex justify-center relative items-center pointer-events-auto">
            {/* Phone Wrapper with Scroll-Triggered Scaling & Perspective */}
            <div
              ref={phoneWrapperRef}
              className="relative z-10 will-change-transform transform-gpu"
              style={{
                perspective: "1200px",
              }}
            >
              {/* Outer Glow Halo behind Phone */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#315BFF]/35 via-[#D5F45B]/20 to-[#FF6659]/30 rounded-[56px] blur-2xl opacity-75 -z-10" />

              {/* Realistic Titanium Phone Chassis with Specular Glare */}
              <div
                className="relative w-[285px] sm:w-[320px] md:w-[340px] h-[580px] sm:h-[640px] md:h-[680px] rounded-[50px] p-[10px] bg-gradient-to-b from-[#4A4E5A] via-[#232733] to-[#12151E] shadow-[0_30px_90px_rgba(0,0,0,0.85),_0_0_0_1px_rgba(255,255,255,0.18)_inset] transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateX(${-mousePos.y * 18}deg) rotateY(${mousePos.x * 22}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Titanium Rim Highlight */}
                <div className="absolute inset-0 rounded-[50px] border border-white/25 pointer-events-none" />

                {/* Glass Front Screen Frame */}
                <div className="w-full h-full rounded-[42px] overflow-hidden bg-black relative flex flex-col justify-between">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3.5 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-[#171D36] border border-white/20" />
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D5F45B] animate-pulse" />
                      <span className="text-[9px] font-mono font-bold text-[#D5F45B]">
                        ALEX LIVE
                      </span>
                    </div>
                  </div>

                  {/* Real Application UI Screenshot */}
                  <div className="relative w-full h-full flex flex-col bg-[#0C0F17]">
                    <img
                      src="/assets/screenshots/app_home_dashboard.jpg"
                      alt="HealthFreak Home Dashboard"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Specular Glare Layer */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen rounded-[42px]"
                    style={{
                      background:
                        "linear-gradient(115deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.2) 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Floating Satellite 1: Liquid Glass Hydration Gauge */}
              <div
                ref={satellite1Ref}
                className="absolute -left-12 bottom-20 z-20 p-3.5 rounded-2xl bg-[#171D36]/85 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center gap-3 transition-transform duration-300"
                style={{
                  transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#315BFF]/20 border border-[#315BFF]/40 flex items-center justify-center text-[#315BFF]">
                  <Droplets className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#B9A8FF] font-bold">
                    HYDRATION PULSE
                  </div>
                  <div className="text-sm font-extrabold text-white">2,750 mL</div>
                </div>
              </div>

              {/* Floating Satellite 2: Accelerometer Step Matrix */}
              <div
                ref={satellite2Ref}
                className="absolute -right-8 top-24 z-20 p-3.5 rounded-2xl bg-[#171D36]/85 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center gap-3 transition-transform duration-300"
                style={{
                  transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#D5F45B]/20 border border-[#D5F45B]/40 flex items-center justify-center text-[#D5F45B]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#D5F45B] font-bold">
                    DAILY TARGET
                  </div>
                  <div className="text-sm font-extrabold text-white">10,482 Steps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kinetic Marquee Ticker */}
      <div className="absolute bottom-2 left-0 right-0 py-2.5 overflow-hidden border-t border-b border-white/10 bg-[#101322]/80 backdrop-blur-md z-10 pointer-events-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="mx-4 text-[11px] font-mono tracking-widest text-[#B9BAC4] uppercase flex items-center gap-4"
            >
              <span>MULTIMODAL AI VISION</span>
              <span className="text-[#315BFF]">·</span>
              <span>LIVEKIT SUB-240MS SPEECH</span>
              <span className="text-[#FF6659]">·</span>
              <span>LIQUID GLASS GAUGES</span>
              <span className="text-[#D5F45B]">·</span>
              <span>ZERO FRAGMENTATION</span>
              <span className="text-[#B9A8FF]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
