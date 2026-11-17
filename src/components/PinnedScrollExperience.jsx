import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/utils/gsapSetup";
import {
  Sparkles,
  CheckCircle2,
  Scan,
  Compass,
  Volume2
} from "lucide-react";

export const PinnedScrollExperience = () => {
  const containerRef = useRef(null);
  const phoneWrapperRef = useRef(null);
  const progressBarRef = useRef(null);

  // Chapters Refs
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  // Screen Views inside the Phone
  const screen1Ref = useRef(null);
  const screen2Ref = useRef(null);
  const screen3Ref = useRef(null);
  const screen4Ref = useRef(null);

  const [activeAct, setActiveAct] = useState(1);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=320%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.26) setActiveAct(1);
            else if (p < 0.52) setActiveAct(2);
            else if (p < 0.76) setActiveAct(3);
            else setActiveAct(4);
          },
        },
      });

      // Initial state setup for cards and screens
      gsap.set([card2Ref.current, card3Ref.current, card4Ref.current], {
        opacity: 0,
        y: 60,
        position: "absolute",
      });
      gsap.set(card1Ref.current, { opacity: 1, y: 0, position: "relative" });

      gsap.set([screen2Ref.current, screen3Ref.current, screen4Ref.current], {
        opacity: 0,
        scale: 0.94,
        position: "absolute",
      });
      gsap.set(screen1Ref.current, { opacity: 1, scale: 1, position: "relative" });

      // Progress bar scrub
      tl.to(progressBarRef.current, { scaleX: 1, ease: "none" }, 0);

      // --- TRANSITION 1 -> 2 ---
      tl.to(
        card1Ref.current,
        { opacity: 0, y: -50, duration: 0.8, ease: "power2.inOut" },
        0.8
      );
      tl.to(
        screen1Ref.current,
        { opacity: 0, scale: 0.94, duration: 0.8, ease: "power2.inOut" },
        0.8
      );
      tl.to(
        phoneWrapperRef.current,
        { rotateY: 12, rotateX: -6, duration: 0.8, ease: "power2.inOut" },
        0.8
      );

      tl.to(
        card2Ref.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" },
        1.4
      );
      tl.to(
        screen2Ref.current,
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.inOut" },
        1.4
      );

      // --- TRANSITION 2 -> 3 ---
      tl.to(
        card2Ref.current,
        { opacity: 0, y: -50, duration: 0.8, ease: "power2.inOut" },
        2.2
      );
      tl.to(
        screen2Ref.current,
        { opacity: 0, scale: 0.94, duration: 0.8, ease: "power2.inOut" },
        2.2
      );
      tl.to(
        phoneWrapperRef.current,
        { rotateY: -10, rotateX: 6, duration: 0.8, ease: "power2.inOut" },
        2.2
      );

      tl.to(
        card3Ref.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" },
        2.8
      );
      tl.to(
        screen3Ref.current,
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.inOut" },
        2.8
      );

      // --- TRANSITION 3 -> 4 ---
      tl.to(
        card3Ref.current,
        { opacity: 0, y: -50, duration: 0.8, ease: "power2.inOut" },
        3.6
      );
      tl.to(
        screen3Ref.current,
        { opacity: 0, scale: 0.94, duration: 0.8, ease: "power2.inOut" },
        3.6
      );
      tl.to(
        phoneWrapperRef.current,
        { rotateY: 0, rotateX: 0, scale: 1.08, duration: 0.8, ease: "power2.inOut" },
        3.6
      );

      tl.to(
        card4Ref.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" },
        4.2
      );
      tl.to(
        screen4Ref.current,
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.inOut" },
        4.2
      );

      // Settle at end of pinned track
      tl.to({}, { duration: 0.5 });

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === containerRef.current) st.kill();
        });
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#171719] text-white flex items-center justify-center overflow-hidden select-none"
    >
      {/* 1. Dynamic Ambient Aura */}
      <div
        className="absolute w-[750px] h-[750px] rounded-full blur-[200px] pointer-events-none transition-colors duration-1000 opacity-40 -z-10"
        style={{
          backgroundColor:
            activeAct === 1
              ? "#315BFF"
              : activeAct === 2
              ? "#D5F45B"
              : activeAct === 3
              ? "#FF6659"
              : "#B9A8FF",
        }}
      />

      {/* Top Scrub Progress Track */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#315BFF] via-[#D5F45B] to-[#FF6659] origin-left scale-x-0"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-16">
        {/* Left Column: Stage Cards Container */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left relative min-h-[380px]">
          {/* Act Indicator Tracker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B9BAC4]">
              PINNED SCROLL STORYTELLING
            </span>
            <div className="h-px w-8 bg-[#313138]" />
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-white">
              <span>0{activeAct}</span>
              <span className="text-neutral-500">/ 04</span>
            </div>
          </div>

          {/* Act 1 Card: Multimodal AI Vision */}
          <div ref={card1Ref} className="space-y-5 top-0 left-0 w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#315BFF]/15 text-[#315BFF] border border-[#315BFF]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACT 01 — MULTIMODAL AI VISION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Point & parse your nutrition in under 1 second.
            </h2>
            <p className="text-base sm:text-lg text-[#B9BAC4] leading-relaxed max-w-lg">
              Manual logging is dead. HealthFreak's vision pipeline isolates portions, calculates calories, and balances your macros before you take your first bite.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-white/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D5F45B]" />
                <span>Sub-second camera recognition</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#315BFF]" />
                <span>Portion weight estimation</span>
              </div>
            </div>
          </div>

          {/* Act 2 Card: Motion Sensors */}
          <div ref={card2Ref} className="space-y-5 top-0 left-0 w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#D5F45B]/15 text-[#D5F45B] border border-[#D5F45B]/30">
              <Compass className="w-3.5 h-3.5" />
              <span>ACT 02 — CALIBRATED MOTION SENSORS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Every step, stride, and calorie measured directly.
            </h2>
            <p className="text-base sm:text-lg text-[#B9BAC4] leading-relaxed max-w-lg">
              Device accelerometers synchronize with our signature dot-matrix spline chart. Real-time active calorie burn without draining battery life.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-white/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D5F45B]" />
                <span>On-device hardware accelerometers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#315BFF]" />
                <span>Weekly dot-matrix spline</span>
              </div>
            </div>
          </div>

          {/* Act 3 Card: Frosted Glass Water */}
          <div ref={card3Ref} className="space-y-5 top-0 left-0 w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FF6659]/15 text-[#FF6659] border border-[#FF6659]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACT 03 — SIGNATURE FROSTED GLASS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Liquid water physics engineered to build habits.
            </h2>
            <p className="text-base sm:text-lg text-[#B9BAC4] leading-relaxed max-w-lg">
              Touch-responsive liquid simulations mimic real fluid dynamics. Visual progress that makes daily hydration genuinely satisfying.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-white/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6659]" />
                <span>Tactile +250mL / +500mL taps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D5F45B]" />
                <span>Adaptive activity targets</span>
              </div>
            </div>
          </div>

          {/* Act 4 Card: LiveKit Voice Engine */}
          <div ref={card4Ref} className="space-y-5 top-0 left-0 w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#B9A8FF]/15 text-[#B9A8FF] border border-[#B9A8FF]/30">
              <Volume2 className="w-3.5 h-3.5" />
              <span>ACT 04 — SUB-SECOND LIVEKIT AUDIO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              A voice coach that speaks at human speed.
            </h2>
            <p className="text-base sm:text-lg text-[#B9BAC4] leading-relaxed max-w-lg">
              Experience 240ms latency voice interaction with Coach Alex. Ask questions while walking or cooking with zero awkward pauses.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-white/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B9A8FF]" />
                <span>LiveKit real-time audio pipeline</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D5F45B]" />
                <span>240ms Speech Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hardware Smartphone Transforming with Scroll */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          <div
            ref={phoneWrapperRef}
            className="relative w-[305px] sm:w-[335px] rounded-[48px] p-3.5 bg-gradient-to-b from-[#282830] via-[#1A1A1E] to-[#121214] border-[3px] border-[#393945] shadow-[0_30px_90px_rgba(0,0,0,0.9)] will-change-transform transform-gpu"
            style={{ perspective: "1200px" }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-end px-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Glass Display */}
            <div className="rounded-[36px] bg-[#0E0E10] overflow-hidden border border-[#26262E] min-h-[445px] flex flex-col justify-center relative p-4 text-left">
              {/* Specular Diagonal Sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent z-20" />

              {/* Status Bar */}
              <div className="flex justify-between items-center text-[10px] font-semibold text-neutral-400 mb-4 px-2">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#D5F45B] font-bold">5G</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Screens Stage with Crossfade via GSAP */}
              <div className="relative w-full min-h-[380px] flex items-center justify-center">
                {/* Screen 1: Food Scanner View */}
                <div ref={screen1Ref} className="w-full space-y-3.5 top-0 left-0">
                  <div className="relative rounded-2xl overflow-hidden bg-[#151518] border border-[#315BFF]/40 h-44 flex items-center justify-center">
                    <img
                      src="/assets/healthy_bowl_clean.png"
                      alt="Meal Scanner Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#315BFF]/50 to-transparent h-5 animate-scanline pointer-events-none" />
                    <div className="absolute inset-2 border-2 border-dashed border-[#315BFF]/70 rounded-xl" />
                    <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-black/85 text-[10px] font-mono text-[#315BFF] font-bold flex items-center gap-1">
                      <Scan className="w-3 h-3 text-[#315BFF]" /> SCANNING • 98.4% ACCURACY
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#17171C] border border-[#2B2B36] space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-white">Grilled Chicken Bowl</span>
                      <span className="text-xs font-mono font-bold text-[#315BFF]">520 kcal</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                      <div className="p-1 rounded bg-[#101013] text-emerald-400 font-bold">42g Prot</div>
                      <div className="p-1 rounded bg-[#101013] text-cyan-400 font-bold">48g Carb</div>
                      <div className="p-1 rounded bg-[#101013] text-rose-400 font-bold">14g Fat</div>
                    </div>
                  </div>
                </div>

                {/* Screen 2: Fitness Spline View */}
                <div ref={screen2Ref} className="w-full space-y-3.5 top-0 left-0">
                  <div className="p-3.5 rounded-2xl bg-[#17171C] border border-[#2B2B36] space-y-2.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-[#D5F45B]" /> Motion Sensor Spline
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D5F45B]/20 text-[#D5F45B]">
                        LIVE
                      </span>
                    </div>
                    <div className="text-2xl font-bold font-serif text-white">
                      10,482 <span className="text-xs text-[#B9BAC4] font-normal">steps</span>
                    </div>
                    <div className="flex items-end justify-between gap-1.5 h-20 pt-2">
                      {[35, 50, 70, 95, 65, 100, 80].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                          <div
                            className={`w-full rounded-full ${
                              i === 5
                                ? "bg-[#D5F45B] shadow-[0_0_12px_rgba(213,244,91,0.6)]"
                                : "bg-[#272732]"
                            }`}
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[8px] text-neutral-500 font-mono">
                            {["M", "T", "W", "T", "F", "S", "S"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#17171C] border border-[#2B2B36]">
                      <span className="text-[10px] text-neutral-400 block font-mono">Active Burn</span>
                      <strong className="text-sm font-bold text-[#D5F45B]">624 kcal</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#17171C] border border-[#2B2B36]">
                      <span className="text-[10px] text-neutral-400 block font-mono">Training Time</span>
                      <strong className="text-sm font-bold text-white">48 mins</strong>
                    </div>
                  </div>
                </div>

                {/* Screen 3: Hydration View */}
                <div ref={screen3Ref} className="w-full space-y-4 text-center top-0 left-0">
                  <div className="relative w-28 h-36 mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-[#1C1820] to-[#121016] border border-[#FF6659]/40 flex items-center justify-center p-3 shadow-xl">
                    <img
                      src="/assets/water_widget_preview.png"
                      alt="Water Widget"
                      className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,102,89,0.4)]"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-bold font-serif text-white">2,450 mL</div>
                    <span className="text-xs text-[#FF6659] font-bold">76% of 3,200 mL Target</span>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-[#FF6659]/15 border border-[#FF6659]/30 text-xs font-bold text-[#FF6659]">
                      +250 mL
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-[#FF6659]/15 border border-[#FF6659]/30 text-xs font-bold text-[#FF6659]">
                      +500 mL
                    </span>
                  </div>
                </div>

                {/* Screen 4: LiveKit Voice Coach View */}
                <div ref={screen4Ref} className="w-full space-y-3.5 text-center flex flex-col items-center top-0 left-0">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#B9A8FF] shadow-[0_0_25px_rgba(185,168,255,0.4)]">
                    <img
                      src="/assets/coach_alex.png"
                      alt="Coach Alex Profile"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black" />
                  </div>

                  <div>
                    <h4 className="font-serif text-base font-bold text-white flex items-center justify-center gap-1.5">
                      Coach Alex
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#B9A8FF]/20 text-[#B9A8FF] font-bold flex items-center gap-1">
                        <Volume2 className="w-3 h-3" /> LiveKit 240ms
                      </span>
                    </h4>
                    <p className="text-xs text-[#B9BAC4] italic max-w-xs mt-1">
                      "You crushed your steps today! Drink 500mL water before bed."
                    </p>
                  </div>

                  {/* Soundwave Bars */}
                  <div className="flex items-center gap-1 h-6">
                    {[10, 18, 26, 14, 30, 20, 12, 24, 16, 22, 10].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[#B9A8FF] rounded-full animate-wave-bar"
                        style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
