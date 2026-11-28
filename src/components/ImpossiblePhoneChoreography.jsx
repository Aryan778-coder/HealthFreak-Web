import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/utils/gsapSetup";
import {
  Sparkles,
  Layers,
} from "lucide-react";

export default function ImpossiblePhoneChoreography() {
  const containerRef = useRef(null);
  const stageRef = useRef(null);

  // References for device triad
  const leftDeviceRef = useRef(null);
  const midDeviceRef = useRef(null);
  const rightDeviceRef = useRef(null);

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
      // Initial Stage: Set generous, distinct gaps between the 3 phones
      // -------------------------------------------------------------
      gsap.set(leftDeviceRef.current, {
        x: -390,
        y: 0,
        z: 0,
        rotationY: 16,
        rotationX: -4,
        rotationZ: 0,
        scale: 0.93,
        opacity: 1,
      });

      gsap.set(midDeviceRef.current, {
        x: 0,
        y: 0,
        z: 30,
        rotationY: 0,
        rotationX: 0,
        rotationZ: 0,
        scale: 1,
        opacity: 1,
      });

      gsap.set(rightDeviceRef.current, {
        x: 390,
        y: 0,
        z: 0,
        rotationY: -16,
        rotationX: -4,
        rotationZ: 0,
        scale: 0.93,
        opacity: 1,
      });

      // -------------------------------------------------------------
      // ACT 1 -> ACT 2: Center device elevates, outer devices widen smoothly
      // (No collisions, no overlapping, generous gaps maintained throughout)
      // -------------------------------------------------------------
      tl.to(
        midDeviceRef.current,
        {
          z: 110,
          scale: 1.08,
          y: -10,
          ease: "power2.out",
        },
        0.15
      );

      tl.to(
        leftDeviceRef.current,
        {
          x: -430,
          y: 10,
          z: -40,
          rotationY: 22,
          scale: 0.89,
          opacity: 0.8,
          ease: "power2.inOut",
        },
        0.15
      );

      tl.to(
        rightDeviceRef.current,
        {
          x: 430,
          y: 10,
          z: -40,
          rotationY: -22,
          scale: 0.89,
          opacity: 0.8,
          ease: "power2.inOut",
        },
        0.15
      );

      // -------------------------------------------------------------
      // ACT 2 -> ACT 3: Synchronized multi-angle perspective orbit
      // (Phones remain strictly in their lanes; zero crossing or collision)
      // -------------------------------------------------------------
      tl.to(
        stageRef.current,
        {
          rotationY: 6,
          rotationX: 2,
          ease: "power1.inOut",
        },
        0.52
      );

      tl.to(
        midDeviceRef.current,
        {
          z: 50,
          scale: 1.02,
          y: 0,
          ease: "power1.inOut",
        },
        0.52
      );

      tl.to(
        leftDeviceRef.current,
        {
          x: -390,
          y: -8,
          z: 40,
          rotationY: 10,
          scale: 0.94,
          opacity: 0.95,
          ease: "power1.inOut",
        },
        0.52
      );

      tl.to(
        rightDeviceRef.current,
        {
          x: 390,
          y: 8,
          z: -20,
          rotationY: -18,
          scale: 0.91,
          opacity: 0.85,
          ease: "power1.inOut",
        },
        0.52
      );

      // -------------------------------------------------------------
      // ACT 3 -> ACT 4: Flagship Showcase (Center phone takes main stage)
      // (Outer phones fade gracefully outward, center phone scales up)
      // -------------------------------------------------------------
      tl.to(
        stageRef.current,
        {
          rotationY: 0,
          rotationX: 0,
          ease: "power2.out",
        },
        0.80
      );

      tl.to(
        midDeviceRef.current,
        {
          z: 130,
          scale: 1.14,
          y: -10,
          ease: "power2.out",
        },
        0.80
      );

      tl.to(
        leftDeviceRef.current,
        {
          x: -450,
          y: 35,
          scale: 0.82,
          opacity: 0,
          ease: "power2.in",
        },
        0.80
      );

      tl.to(
        rightDeviceRef.current,
        {
          x: 450,
          y: 35,
          scale: 0.82,
          opacity: 0,
          ease: "power2.in",
        },
        0.80
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
      {/* Background Ambient Radiance & Subtle Refined Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#315BFF]/18 via-[#7C3AED]/12 to-[#1E3A8A]/15 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
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
          {activeStage === 2 && "ELEVATED FOCUS · CIRCADIAN TRACKING"}
          {activeStage === 3 && "SYNCHRONIZED HARMONY · MULTI-SURFACE VIEW"}
          {activeStage === 4 && "FLAGSHIP SHOWCASE · FULL SUITE"}
        </p>
      </div>

      {/* 3D Stage Scaling Wrapper for responsive fit & wide viewports */}
      <div className="w-full flex items-center justify-center scale-[0.62] xs:scale-[0.72] sm:scale-[0.82] md:scale-[0.92] lg:scale-100 transition-transform origin-center">
        {/* 3D Stage Container */}
        <div
          ref={stageRef}
          className="relative w-[290px] sm:w-[310px] md:w-[320px] h-[590px] sm:h-[630px] md:h-[660px] flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* ============================================================== */}
          {/* SATELLITE LEFT DEVICE (Daily Schedule & Plan) */}
          {/* ============================================================== */}
          <div
            ref={leftDeviceRef}
            className="absolute w-full h-full pointer-events-none"
            style={{
              transform: "translate3d(-390px, 0px, 0px) rotateY(16deg) rotateX(-4deg) scale(0.93)",
              transformStyle: "preserve-3d",
            }}
          >
            <PhoneFrame
              title="DAILY SCHEDULE"
              accent="#315BFF"
              badge="METABOLIC PLAN"
            >
              <div className="relative w-full h-full bg-[#0C0F17] flex flex-col overflow-hidden">
                <img
                  src="/assets/screenshots/app_daily_plan.jpg"
                  alt="HealthFreak Daily Plan & Schedule"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </PhoneFrame>
          </div>

          {/* ============================================================== */}
          {/* SATELLITE RIGHT DEVICE (Coach Alex AI Audio Call) */}
          {/* ============================================================== */}
          <div
            ref={rightDeviceRef}
            className="absolute w-full h-full pointer-events-none"
            style={{
              transform: "translate3d(390px, 0px, 0px) rotateY(-16deg) rotateX(-4deg) scale(0.93)",
              transformStyle: "preserve-3d",
            }}
          >
            <PhoneFrame
              title="COACH ALEX"
              accent="#FF6659"
              badge="LIVE VOICE CALL"
            >
              <div className="relative w-full h-full bg-[#0C0F17] flex flex-col overflow-hidden">
                <img
                  src="/assets/screenshots/app_voice_active_call.jpg"
                  alt="HealthFreak In-App Voice Call"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </PhoneFrame>
          </div>

          {/* ============================================================== */}
          {/* CENTER FLAGSHIP DEVICE (Smart Hydration & Sleep) */}
          {/* ============================================================== */}
          <div
            ref={midDeviceRef}
            className="relative w-full h-full"
            style={{
              transform: "translate3d(0px, 0px, 30px)",
              transformStyle: "preserve-3d",
            }}
          >
            <PhoneFrame
              title="HYDRATION & RECOVERY"
              accent="#D5F45B"
              badge="CIRCADIAN CORE"
            >
              <div className="relative w-full h-full bg-[#0C0F17] flex flex-col overflow-hidden">
                <img
                  src="/assets/screenshots/app_hydration_sleep.jpg"
                  alt="HealthFreak Smart Hydration & Sleep"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </PhoneFrame>

            {/* Top Live Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none px-3.5 py-1.5 rounded-xl bg-black/85 border border-[#D5F45B]/60 backdrop-blur-md shadow-2xl text-[11px] font-mono text-[#D5F45B] flex items-center gap-2 whitespace-nowrap z-20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE AI WELLNESS SYNAPSE</span>
            </div>

            {/* Bottom Metric Card */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-2 rounded-xl bg-black/85 border border-[#315BFF]/70 backdrop-blur-md shadow-2xl text-center whitespace-nowrap z-20">
              <div className="text-[10px] font-mono text-zinc-400">DAILY ACTIVE BURN</div>
              <div className="text-sm font-bold text-white font-mono flex items-center justify-center gap-2">
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
