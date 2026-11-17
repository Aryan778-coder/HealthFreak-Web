import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/utils/gsapSetup";
import {
  Activity,
  Droplets,
  Scan,
  Mic,
  Sparkles,
  ShieldCheck,
  Layers,
  Cpu,
} from "lucide-react";

export default function ImpossiblePhoneChoreography() {
  const containerRef = useRef(null);
  const stageRef = useRef(null);

  // References for device triad
  const leftDeviceRef = useRef(null);
  const midDeviceRef = useRef(null);
  const rightDeviceRef = useRef(null);

  // References for exploded layers of mid device
  const chassisLayerRef = useRef(null);
  const circuitLayerRef = useRef(null);
  const screenLayerRef = useRef(null);
  const glassLayerRef = useRef(null);
  const hudLayerRef = useRef(null);

  // Stage indicator state
  const [activeStage, setActiveStage] = useState(1);

  useGSAP(
    () => {
      if (!containerRef.current || !stageRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=380%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.28) {
              setActiveStage(1);
            } else if (p < 0.62) {
              setActiveStage(2);
            } else if (p < 0.85) {
              setActiveStage(3);
            } else {
              setActiveStage(4);
            }
          },
        },
      });

      // -------------------------------------------------------------
      // ACT 1 -> ACT 2: Explode middle device & fly left/right devices outward
      // -------------------------------------------------------------
      tl.to(
        leftDeviceRef.current,
        {
          xPercent: -65,
          yPercent: -20,
          rotationY: -45,
          rotationZ: -8,
          scale: 0.82,
          opacity: 0.4,
          ease: "power2.inOut",
        },
        0.15
      );

      tl.to(
        rightDeviceRef.current,
        {
          xPercent: 65,
          yPercent: -20,
          rotationY: 45,
          rotationZ: 8,
          scale: 0.82,
          opacity: 0.4,
          ease: "power2.inOut",
        },
        0.15
      );

      // Middle device layer separation (Z-explosion)
      tl.to(
        chassisLayerRef.current,
        {
          z: -180,
          yPercent: 12,
          rotationX: 28,
          rotationY: -22,
          ease: "power2.out",
        },
        0.2
      );

      tl.to(
        circuitLayerRef.current,
        {
          z: -80,
          yPercent: 6,
          rotationX: 28,
          rotationY: -22,
          ease: "power2.out",
        },
        0.22
      );

      tl.to(
        screenLayerRef.current,
        {
          z: 20,
          rotationX: 28,
          rotationY: -22,
          ease: "power2.out",
        },
        0.24
      );

      tl.to(
        glassLayerRef.current,
        {
          z: 90,
          yPercent: -6,
          rotationX: 28,
          rotationY: -22,
          ease: "power2.out",
        },
        0.26
      );

      tl.to(
        hudLayerRef.current,
        {
          z: 180,
          yPercent: -14,
          rotationX: 28,
          rotationY: -22,
          opacity: 1,
          scale: 1.08,
          ease: "power2.out",
        },
        0.28
      );

      // -------------------------------------------------------------
      // ACT 2 -> ACT 3: Dynamic 3D Carousel Orbit & Perspective Inversion
      // -------------------------------------------------------------
      tl.to(
        stageRef.current,
        {
          rotationY: 180,
          scale: 1.05,
          ease: "power1.inOut",
        },
        0.55
      );

      tl.to(
        [chassisLayerRef.current, circuitLayerRef.current, glassLayerRef.current],
        {
          z: 0,
          yPercent: 0,
          rotationX: 0,
          rotationY: 0,
          ease: "power2.inOut",
        },
        0.58
      );

      tl.to(
        hudLayerRef.current,
        {
          z: 30,
          yPercent: 0,
          rotationX: 0,
          rotationY: 0,
          ease: "power2.inOut",
        },
        0.58
      );

      tl.to(
        leftDeviceRef.current,
        {
          xPercent: 40,
          yPercent: 10,
          rotationY: 195,
          scale: 0.9,
          opacity: 0.85,
          ease: "power1.inOut",
        },
        0.58
      );

      tl.to(
        rightDeviceRef.current,
        {
          xPercent: -40,
          yPercent: -10,
          rotationY: 165,
          scale: 0.9,
          opacity: 0.85,
          ease: "power1.inOut",
        },
        0.58
      );

      // -------------------------------------------------------------
      // ACT 3 -> ACT 4: Grand Slam Convergence into Single Hero Device
      // -------------------------------------------------------------
      tl.to(
        stageRef.current,
        {
          rotationY: 360,
          rotationX: 0,
          scale: 1.25,
          ease: "power3.out",
        },
        0.82
      );

      tl.to(
        [leftDeviceRef.current, rightDeviceRef.current],
        {
          xPercent: 0,
          yPercent: 0,
          scale: 0.6,
          opacity: 0,
          ease: "power2.in",
        },
        0.82
      );

      tl.to(
        screenLayerRef.current,
        {
          z: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1.05,
          ease: "power3.out",
        },
        0.85
      );

      tl.to(
        hudLayerRef.current,
        {
          z: 40,
          opacity: 1,
          scale: 1.02,
          ease: "power3.out",
        },
        0.85
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#10131E] text-white overflow-hidden flex flex-col items-center justify-center select-none"
      style={{ perspective: "1500px" }}
    >
      {/* Background Ambient Radiance & SVG Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#315BFF]/25 via-[#D5F45B]/15 to-[#FF6659]/20 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Header Telemetry Badge */}
      <div className="absolute top-8 left-6 md:left-12 z-20 flex flex-col gap-1">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#D5F45B]">
          <Layers className="w-3.5 h-3.5 text-[#315BFF]" />
          <span>IMPOSSIBLE CHOREOGRAPHY // ACT 0{activeStage}</span>
        </div>
        <p className="text-xs text-zinc-400 font-mono tracking-wider">
          {activeStage === 1 && "TRIAD EQUILIBRIUM · 3-AXIS COGNITION"}
          {activeStage === 2 && "Z-DEPTH DECONSTRUCTION · 5 DISCRETE LAYERS"}
          {activeStage === 3 && "360° ISOMETRIC ORBIT · SCREEN TRANSITION"}
          {activeStage === 4 && "CONVERGENCE MATRIX · SOVEREIGN COMPACT"}
        </p>
      </div>

      {/* 3D Stage Container */}
      <div
        ref={stageRef}
        className="relative w-[340px] sm:w-[380px] md:w-[420px] h-[660px] sm:h-[700px] md:h-[740px] flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* ============================================================== */}
        {/* SATELLITE LEFT DEVICE (Nutrition Scanner) */}
        {/* ============================================================== */}
        <div
          ref={leftDeviceRef}
          className="absolute w-full h-full pointer-events-none"
          style={{
            transform: "translateX(-280px) rotateY(26deg) rotateX(-8deg) scale(0.92)",
            transformStyle: "preserve-3d",
          }}
        >
          <PhoneFrame
            title="VISION ENGINE"
            accent="#315BFF"
            badge="MULTIMODAL AI"
          >
            <div className="relative w-full h-full bg-[#131622] flex flex-col p-4 text-left">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400 border-b border-white/10 pb-2">
                <span className="flex items-center gap-1.5 text-[#315BFF]">
                  <Scan className="w-3.5 h-3.5" /> VISION ACTIVE
                </span>
                <span>99.2% ACCURACY</span>
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/assets/healthy_bowl_clean.png"
                  alt="Vision Nutrition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/15">
                  <div className="text-xs font-semibold text-white">
                    Mediterranean Quinoa Bowl
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-zinc-300 mt-1">
                    <span className="text-[#D5F45B]">540 kcal</span>
                    <span className="text-[#315BFF]">38g Protein</span>
                    <span className="text-[#FF6659]">18g Fat</span>
                  </div>
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>

        {/* ============================================================== */}
        {/* SATELLITE RIGHT DEVICE (Coach Alex AI Audio) */}
        {/* ============================================================== */}
        <div
          ref={rightDeviceRef}
          className="absolute w-full h-full pointer-events-none"
          style={{
            transform: "translateX(280px) rotateY(-26deg) rotateX(-8deg) scale(0.92)",
            transformStyle: "preserve-3d",
          }}
        >
          <PhoneFrame
            title="COACH ALEX"
            accent="#FF6659"
            badge="LIVEKIT <240ms"
          >
            <div className="relative w-full h-full bg-[#181524] flex flex-col p-4 text-left">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400 border-b border-white/10 pb-2">
                <span className="flex items-center gap-1.5 text-[#FF6659]">
                  <Mic className="w-3.5 h-3.5 animate-pulse" /> STREAM ACTIVE
                </span>
                <span>VOICE LATENCY 210ms</span>
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#251B38] to-[#120E1E] flex flex-col items-center justify-center p-6">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#FF6659]/60 shadow-[0_0_35px_rgba(255,102,89,0.35)] mb-4">
                  <img
                    src="/assets/coach_alex.png"
                    alt="Coach Alex"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm font-bold text-white tracking-wide">
                  Coach Alex
                </div>
                <div className="text-xs font-mono text-[#D5F45B] mt-0.5">
                  &ldquo;Increase tempo on the 3rd set.&rdquo;
                </div>
                {/* Simulated Audio Bars */}
                <div className="flex items-center gap-1 mt-5 h-8">
                  {[40, 75, 90, 50, 85, 100, 60, 45, 90, 70, 35].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#FF6659] rounded-full animate-pulse"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 0.08}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>

        {/* ============================================================== */}
        {/* CENTER EXPLODED DEVICE (Multi-Layer Z-Deconstruction) */}
        {/* ============================================================== */}
        <div
          ref={midDeviceRef}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Layer 1: Titanium Rear Chassis */}
          <div
            ref={chassisLayerRef}
            className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950 border-2 border-zinc-600/80 shadow-[0_30px_70px_rgba(0,0,0,0.9)] p-2"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full rounded-[42px] bg-zinc-900 flex flex-col items-center justify-between p-6 opacity-60">
              <div className="w-12 h-1 bg-zinc-700 rounded-full" />
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-[#D5F45B]" />
                <span className="text-[10px] font-mono tracking-widest text-zinc-500">
                  TITANIUM GRADE-5 SHELL
                </span>
              </div>
              <div className="w-16 h-16 rounded-full border border-dashed border-zinc-700 flex items-center justify-center">
                <span className="text-[9px] font-mono text-zinc-500">MAGSAFE</span>
              </div>
            </div>
          </div>

          {/* Layer 2: Neural NPU Engine Circuit */}
          <div
            ref={circuitLayerRef}
            className="absolute inset-0 rounded-[48px] p-4 pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full rounded-[42px] border border-[#D5F45B]/40 bg-[#0B101E]/80 backdrop-blur-sm p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] font-mono text-[#D5F45B]">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" /> HEALTHFREAK NEURAL NPU
                </span>
                <span>3.8 TFLOPS</span>
              </div>
              <div className="grid grid-cols-4 gap-2 py-8">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-10 rounded border border-[#315BFF]/30 bg-[#315BFF]/5 flex items-center justify-center text-[9px] font-mono text-cyan-300"
                  >
                    CORE_{i + 1}
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-mono text-zinc-500">
                LOW-POWER ON-DEVICE INFERENCE
              </div>
            </div>
          </div>

          {/* Layer 3: AMOLED Main Interface Screen */}
          <div
            ref={screenLayerRef}
            className="absolute inset-0 rounded-[48px] p-2 pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full rounded-[40px] bg-[#0E1322] border border-white/20 overflow-hidden flex flex-col p-5 shadow-2xl">
              {/* Dynamic Island Status Header */}
              <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono text-zinc-300">
                <span className="font-bold text-white">9:41</span>
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1.5 px-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5F45B] animate-ping" />
                  <span className="text-[9px] text-zinc-400">ACTIVE</span>
                </div>
                <span className="text-[#315BFF] flex items-center gap-1">
                  <Activity className="w-3 h-3" /> 100%
                </span>
              </div>

              {/* Real App Screenshot & Dynamic Content */}
              <div className="flex-1 mt-3 rounded-2xl overflow-hidden relative flex flex-col gap-3">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1C2541] to-[#0B101E] border border-white/10">
                  <div className="text-xs font-mono text-zinc-400 mb-1 flex items-center justify-between">
                    <span>DAILY ACTIVITY</span>
                    <span className="text-[#D5F45B]">OPTIMAL</span>
                  </div>
                  <div className="text-2xl font-black text-white tracking-tight flex items-baseline gap-2">
                    10,482 <span className="text-xs font-mono text-zinc-400">STEPS</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#315BFF] to-[#D5F45B] h-full w-[84%]" />
                  </div>
                </div>

                {/* Liquid Glass Hydration Preview */}
                <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 relative">
                  <img
                    src="/assets/water_widget_preview.png"
                    alt="Hydration Widget"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-xs font-mono text-white flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-[#315BFF]" />
                      <span>HYDRATION FLUID LEVEL: 2,750 mL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Layer 4: Specular Sapphire Glass Refraction */}
          <div
            ref={glassLayerRef}
            className="absolute inset-0 rounded-[48px] pointer-events-none border border-white/40 shadow-inner"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.08) 100%)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* Layer 5: Floating Holographic Activity HUD Widgets */}
          <div
            ref={hudLayerRef}
            className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Top Hovering Badge */}
            <div className="self-end -mr-6 -mt-3 px-3 py-1.5 rounded-xl bg-black/80 border border-[#D5F45B]/60 backdrop-blur-md shadow-2xl text-[11px] font-mono text-[#D5F45B] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE AI WELLNESS SYNAPSE</span>
            </div>

            {/* Bottom Hovering Metric Card */}
            <div className="self-start -ml-6 -mb-4 px-4 py-2.5 rounded-xl bg-black/85 border border-[#315BFF]/70 backdrop-blur-md shadow-2xl text-left">
              <div className="text-[10px] font-mono text-zinc-400">DAILY ACTIVE BURN</div>
              <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                624 kcal
                <span className="text-[10px] text-[#D5F45B]">OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Kinetic Stage Stepper */}
      <div className="absolute bottom-8 z-20 flex items-center gap-3">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`transition-all duration-300 rounded-full h-1.5 ${
              activeStage === step
                ? "w-8 bg-[#D5F45B]"
                : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Bottom Transition Drop into Pinned Charcoal Experience */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-20">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-12 fill-[#171719]">
          <path d="M0,60 C400,15 800,55 1200,10 L1200,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}

function PhoneFrame({ title, accent, badge, children }) {
  return (
    <div className="relative w-full h-full rounded-[44px] bg-[#0A0D18] border-2 border-white/20 p-2 shadow-2xl overflow-hidden flex flex-col">
      {/* Top Header Notch */}
      <div className="flex justify-between items-center px-4 py-2 text-[10px] font-mono border-b border-white/10">
        <span className="font-bold tracking-wider" style={{ color: accent }}>
          {title}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/90">
          {badge}
        </span>
      </div>
      <div className="flex-1 rounded-[34px] overflow-hidden mt-1">{children}</div>
    </div>
  );
}
