import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Droplets,
  Plus,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Scan,
  Check,
  Flame,
  Activity,
  Heart,
  LineChart,
  RotateCw
} from "lucide-react";
import KineticGimbal from "@/components/KineticGimbal";

const MODULES = [
  {
    id: "nutrition",
    title: "Nutrition & Caloric Targets",
    category: "Macro Fueling",
    tagline: "Dynamic Macro Distribution",
    accent: "#315BFF", // Electric Cobalt
    badge: "bg-[#315BFF]/15 text-[#315BFF] border-[#315BFF]/30",
    description: "Granular daily tracking across protein, carbs, and fats calibrated to your body composition targets.",
    icon: Flame,
  },
  {
    id: "camera",
    title: "AI Camera Food Scanner",
    category: "Multimodal Vision",
    tagline: "Sub-Second Portion Detection",
    accent: "#FF6659", // Vivid Coral
    badge: "bg-[#FF6659]/15 text-[#FF6659] border-[#FF6659]/30",
    description: "Multimodal computer vision detects ingredients and portion weights instantly from a single smartphone camera snapshot.",
    icon: Scan,
  },
  {
    id: "hydration",
    title: "Frosted Liquid Hydration",
    category: "Water Physics",
    tagline: "Tactile Glass Bottle Widget",
    accent: "#315BFF", // Electric Cobalt
    badge: "bg-[#315BFF]/15 text-[#315BFF] border-[#315BFF]/30",
    description: "Dynamic fluid physics simulate real water levels. Adaptive reminders adjust automatically based on exercise and heat.",
    icon: Droplets,
  },
  {
    id: "fitness",
    title: "Fitness & Dot-Matrix Spline",
    category: "Motion Sensors",
    tagline: "Accelerometer & Calibrated Steps",
    accent: "#D5F45B", // Acid Lime
    badge: "bg-[#D5F45B]/20 text-[#171719] border-[#D5F45B]/40",
    description: "Weekly step momentum visualized on an ultra-precise dot-matrix spline, calculating active calorie burn directly.",
    icon: Activity,
  },
  {
    id: "body",
    title: "Weight & Body Composition",
    category: "Milestone Streaks",
    tagline: "Trend Smoothing & Recomposition",
    accent: "#B9A8FF", // Soft Lavender
    badge: "bg-[#B9A8FF]/20 text-[#315BFF] border-[#B9A8FF]/40",
    description: "Log weigh-ins with rolling averages that filter daily water fluctuations and celebrate milestone habits.",
    icon: LineChart,
  },
  {
    id: "wellness",
    title: "Mind, Sleep & Skin Clarity",
    category: "Holistic Health",
    tagline: "Daily 30-Second Micro-Ritual",
    accent: "#FF6659", // Vivid Coral
    badge: "bg-[#FF6659]/15 text-[#FF6659] border-[#FF6659]/30",
    description: "Track the interplay between deep sleep hours, skin recovery, and subjective emotional energy levels.",
    icon: Heart,
  },
  {
    id: "gimbal",
    title: "3D Kinetic Motion Gimbal",
    category: "Sensory Physics",
    tagline: "3-Axis Motion Telemetry",
    accent: "#D5F45B", // Acid Lime
    badge: "bg-[#D5F45B]/20 text-[#171719] border-[#D5F45B]/40",
    description: "Interactive 3D gyroscope engine that computes real-time activity momentum, energy pacing, and movement torque with tactile drag physics.",
    icon: RotateCw,
  },
];

export const FeaturesSection = () => {
  const [activeModuleId, setActiveModuleId] = useState("nutrition");
  
  // Interactive Hydration State
  const [waterMl, setWaterMl] = useState(2450);
  const maxWater = 3200;
  const waterPercentage = Math.min(100, Math.round((waterMl / maxWater) * 100));

  // Interactive Skincare/Lifestyle Check-in State
  const [checkInState, setCheckInState] = useState("Energized");
  const checkInOptions = {
    Energized: { icon: "☀️", sleep: "8h 12m Deep", skin: "High", stress: "Low", note: "Ready for high-intensity training" },
    Balanced: { icon: "🌿", sleep: "7h 30m Restful", skin: "Good", stress: "Moderate", note: "Optimal for steady aerobic pacing" },
    Fatigued: { icon: "🌙", sleep: "5h 45m Broken", skin: "Dry", stress: "Elevated", note: "Coach Alex recommends active recovery" },
  };

  // Interactive Fitness day selector
  const [selectedDay, setSelectedDay] = useState(5); // Saturday
  const stepDays = [
    { day: "Mon", steps: "8,420", kcal: "480", pct: 45 },
    { day: "Tue", steps: "9,100", kcal: "520", pct: 60 },
    { day: "Wed", steps: "7,850", kcal: "440", pct: 40 },
    { day: "Thu", steps: "11,200", kcal: "680", pct: 90 },
    { day: "Fri", steps: "10,050", kcal: "590", pct: 75 },
    { day: "Sat", steps: "10,482", kcal: "624", pct: 100 },
    { day: "Sun", steps: "9,600", kcal: "560", pct: 85 },
  ];

  const activeModule = MODULES.find((m) => m.id === activeModuleId) || MODULES[0];

  return (
    <section id="features" className="py-28 md:py-36 relative bg-[#F4F0E8] text-[#171719] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#315BFF]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#FF6659]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#171719]/10 text-xs font-mono font-bold text-[#315BFF] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE FEATURE EXPLORER</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171719] leading-tight mb-5">
            Engineered for precision. <br />
            <span className="text-[#315BFF] italic">Interactive by design.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#171719]/70 leading-relaxed">
            Select any capability on the left to take direct control of the genuine HealthFreak application modules in real time.
          </p>
        </div>

        {/* The Interactive Laboratory Console (Two Columns: Module Selector & Live Sandbox) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Module Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {MODULES.map((mod) => {
              const isSelected = activeModuleId === mod.id;
              const ModIcon = mod.icon;

              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveModuleId(mod.id)}
                  data-cursor="pointer"
                  data-cursor-text="SELECT"
                  className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-white border-[#315BFF] shadow-[0_15px_35px_rgba(49,91,255,0.12)] -translate-x-1"
                      : "bg-white/60 hover:bg-white border-[#171719]/8 hover:border-[#171719]/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? "bg-[#315BFF] text-white" : "bg-[#171719]/5 text-[#171719] group-hover:bg-[#315BFF]/10 group-hover:text-[#315BFF]"
                    }`}>
                      <ModIcon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${mod.badge}`}>
                          {mod.category}
                        </span>
                      </div>
                      <h3 className={`font-serif text-lg font-bold transition-colors ${
                        isSelected ? "text-[#315BFF]" : "text-[#171719] group-hover:text-[#315BFF]"
                      }`}>
                        {mod.title}
                      </h3>
                      <p className="text-xs text-[#171719]/60 leading-relaxed max-w-sm line-clamp-2">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                    isSelected
                      ? "bg-[#315BFF] text-white"
                      : "bg-[#171719]/5 text-[#171719]/40 group-hover:text-[#171719] group-hover:translate-x-0.5"
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Sandbox Stage */}
          <div className="lg:col-span-7">
            <div className="rounded-[40px] bg-[#171719] text-white p-6 sm:p-10 border border-white/10 shadow-[0_30px_90px_rgba(23,23,25,0.25)] relative overflow-hidden min-h-[520px] flex flex-col justify-between">
              {/* Dynamic Ambient Glow inside the sandbox */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[130px] pointer-events-none transition-all duration-700 opacity-40"
                style={{ backgroundColor: activeModule.accent }}
              />

              {/* Stage Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D5F45B]">
                    INTERACTIVE LAB PLAYGROUND
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                    {activeModule.title}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                  Interactive Console
                </span>
              </div>

              {/* Active Module Playground Contents */}
              <div className="relative z-10 my-8">
                <AnimatePresence mode="wait">
                  {/* Playground 1: Nutrition & Macros */}
                  {activeModuleId === "nutrition" && (
                    <motion.div
                      key="module-nutrition"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 text-left"
                    >
                      <div className="p-6 rounded-3xl bg-[#202026] border border-white/10 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-white">Daily Target: 2,300 kcal</span>
                          <span className="text-sm font-mono font-extrabold text-[#D5F45B]">1,840 kcal (80%)</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-[#121216] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#315BFF] via-[#B9A8FF] to-[#D5F45B] w-[80%] rounded-full shadow-[0_0_15px_rgba(49,91,255,0.6)]" />
                        </div>
                        <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                          <div className="p-3 rounded-2xl bg-[#17171C] border border-white/10">
                            <span className="text-[10px] text-neutral-400 uppercase font-mono block">Protein Goal</span>
                            <strong className="text-lg font-bold text-[#315BFF]">145g <span className="text-xs text-neutral-500 font-normal">/ 160g</span></strong>
                          </div>
                          <div className="p-3 rounded-2xl bg-[#17171C] border border-white/10">
                            <span className="text-[10px] text-neutral-400 uppercase font-mono block">Carbohydrates</span>
                            <strong className="text-lg font-bold text-[#B9A8FF]">190g <span className="text-xs text-neutral-500 font-normal">/ 240g</span></strong>
                          </div>
                          <div className="p-3 rounded-2xl bg-[#17171C] border border-white/10">
                            <span className="text-[10px] text-neutral-400 uppercase font-mono block">Fats Ratio</span>
                            <strong className="text-lg font-bold text-[#FF6659]">52g <span className="text-xs text-neutral-500 font-normal">/ 65g</span></strong>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-[#B9BAC4]">
                        ✓ Connected to HealthFreak's dynamic metabolic formula. Real-time calorie synchronization.
                      </p>
                    </motion.div>
                  )}

                  {/* Playground 2: AI Food Scanner */}
                  {activeModuleId === "camera" && (
                    <motion.div
                      key="module-camera"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-left"
                    >
                      <div className="p-4 rounded-3xl bg-[#202026] border border-white/10 flex flex-col sm:flex-row items-center gap-5">
                        <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-[#17171C] border border-[#FF6659]/50 shrink-0 shadow-lg">
                          <img
                            src="/assets/healthy_bowl_clean.png"
                            alt="Scanned Food Bowl"
                            className="w-full h-full object-cover"
                          />
                          {/* Animated Laser Scanline */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6659]/60 to-transparent h-4 animate-scanline pointer-events-none" />
                          <div className="absolute inset-1.5 border border-dashed border-[#FF6659] rounded-xl" />
                        </div>
                        <div className="space-y-2 text-left">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF6659]/20 text-[#FF6659] text-[10px] font-mono font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6659] animate-pulse" />
                            MULTIMODAL AI DETECTED
                          </div>
                          <h4 className="text-lg font-bold text-white">Grilled Chicken & Avocado Bowl</h4>
                          <div className="text-xs text-[#B9BAC4]">
                            Serving estimate: 340g • Confidence score: 98.4%
                          </div>
                          <div className="flex gap-2 pt-1">
                            <span className="px-2.5 py-1 rounded-lg bg-[#17171C] text-xs font-mono font-bold text-white">520 kcal</span>
                            <span className="px-2.5 py-1 rounded-lg bg-[#17171C] text-xs font-mono font-bold text-[#315BFF]">42g Prot</span>
                            <span className="px-2.5 py-1 rounded-lg bg-[#17171C] text-xs font-mono font-bold text-[#B9A8FF]">48g Carb</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Playground 3: Tactile Liquid Hydration */}
                  {activeModuleId === "hydration" && (
                    <motion.div
                      key="module-hydration"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-3xl bg-[#202026] border border-white/10 space-y-5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-20 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center relative overflow-hidden shadow-inner">
                            <motion.div
                              animate={{ height: `${Math.min(100, waterPercentage)}%` }}
                              transition={{ type: "spring", stiffness: 120, damping: 15 }}
                              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 via-[#315BFF] to-cyan-300"
                            />
                            <Droplets className="w-6 h-6 text-white relative z-10 drop-shadow-md" />
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-bold text-white">Dynamic Hydration Level</div>
                            <div className="text-2xl font-serif font-bold text-[#315BFF] mt-0.5">
                              {waterMl.toLocaleString()} <span className="text-xs text-[#B9BAC4] font-normal">/ {maxWater.toLocaleString()} mL</span>
                            </div>
                            <span className="text-xs text-[#D5F45B] font-mono">{waterPercentage}% of daily goal</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Tap Buttons */}
                      <div className="flex items-center gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setWaterMl((p) => Math.min(maxWater + 500, p + 250))}
                          data-cursor="pointer"
                          data-cursor-text="TAP +250"
                          className="flex-1 py-2.5 rounded-xl bg-[#315BFF]/20 hover:bg-[#315BFF]/30 border border-[#315BFF]/40 text-xs font-mono font-bold text-white flex items-center justify-center gap-1.5 transition-all active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#315BFF]" /> Log +250 mL
                        </button>
                        <button
                          type="button"
                          onClick={() => setWaterMl((p) => Math.min(maxWater + 500, p + 500))}
                          data-cursor="pointer"
                          data-cursor-text="TAP +500"
                          className="flex-1 py-2.5 rounded-xl bg-[#315BFF]/20 hover:bg-[#315BFF]/30 border border-[#315BFF]/40 text-xs font-mono font-bold text-white flex items-center justify-center gap-1.5 transition-all active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#315BFF]" /> Log +500 mL
                        </button>
                        {waterMl > 2450 && (
                          <button
                            type="button"
                            onClick={() => setWaterMl(2450)}
                            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#B9BAC4] hover:text-white transition-all"
                            title="Reset sample"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Playground 4: Fitness & Steps */}
                  {activeModuleId === "fitness" && (
                    <motion.div
                      key="module-fitness"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-3xl bg-[#202026] border border-white/10 space-y-4"
                    >
                      <div className="flex justify-between items-center text-left">
                        <div>
                          <div className="text-xs text-[#B9BAC4] font-mono">SELECTED DAY: {stepDays[selectedDay].day.toUpperCase()}</div>
                          <div className="text-2xl font-serif font-bold text-white">{stepDays[selectedDay].steps} Steps</div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono text-[#D5F45B] font-bold block">{stepDays[selectedDay].kcal} Active kcal</span>
                          <span className="text-[10px] text-neutral-400">Accelerometer verified</span>
                        </div>
                      </div>

                      {/* Interactive Spline Bars */}
                      <div className="flex items-end justify-between gap-2 pt-3 h-28">
                        {stepDays.map((item, i) => (
                          <button
                            key={item.day}
                            type="button"
                            onClick={() => setSelectedDay(i)}
                            data-cursor="pointer"
                            data-cursor-text={item.day}
                            className="flex-1 flex flex-col items-center gap-2 h-full justify-end group focus:outline-none"
                          >
                            <div
                              className={`w-full rounded-full transition-all duration-300 ${
                                selectedDay === i
                                  ? "bg-[#D5F45B] shadow-[0_0_15px_rgba(213,244,91,0.7)]"
                                  : "bg-[#2E2E38] group-hover:bg-[#3D3D4B]"
                              }`}
                              style={{ height: `${item.pct}%` }}
                            />
                            <span className={`text-[10px] font-mono transition-colors ${
                              selectedDay === i ? "text-[#D5F45B] font-bold" : "text-neutral-500"
                            }`}>
                              {item.day}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Playground 5: Body Composition */}
                  {activeModuleId === "body" && (
                    <motion.div
                      key="module-body"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-3xl bg-[#202026] border border-white/10 space-y-4 text-left"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-[10px] font-mono text-[#B9BAC4] uppercase">Current Active Phase</span>
                          <div className="text-xl font-bold font-serif text-white">Lean Cut & Recomposition</div>
                        </div>
                        <span className="px-3.5 py-1.5 rounded-xl bg-[#B9A8FF]/20 border border-[#B9A8FF]/30 text-[#B9A8FF] text-xs font-mono font-bold">
                          👑 18-DAY STREAK
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-3.5 rounded-2xl bg-[#17171C] border border-white/10">
                          <span className="text-[10px] text-neutral-400 block font-mono">30-Day Trend</span>
                          <strong className="text-base font-bold text-emerald-400">-2.4 kg body fat</strong>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-[#17171C] border border-white/10">
                          <span className="text-[10px] text-neutral-400 block font-mono">Lean Mass Retention</span>
                          <strong className="text-base font-bold text-[#B9A8FF]">99.2% Preserved</strong>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Playground 6: Mind & Skin */}
                  {activeModuleId === "wellness" && (
                    <motion.div
                      key="module-wellness"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-3xl bg-[#202026] border border-white/10 space-y-4 text-left"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        {Object.keys(checkInOptions).map((k) => (
                          <button
                            key={k}
                            type="button"
                            onClick={() => setCheckInState(k)}
                            data-cursor="pointer"
                            data-cursor-text={k}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                              checkInState === k
                                ? "bg-[#FF6659] text-white shadow-[0_0_15px_rgba(255,102,89,0.5)]"
                                : "bg-[#17171C] text-neutral-400 hover:text-white border border-white/10"
                            }`}
                          >
                            {checkInOptions[k].icon} {k}
                          </button>
                        ))}
                      </div>

                      <div className="p-4 rounded-2xl bg-[#17171C] border border-white/10 space-y-1">
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>Status: {checkInState}</span>
                          <span className="text-xs text-[#FF6659]">({checkInOptions[checkInState].icon})</span>
                        </div>
                        <div className="text-xs text-[#B9BAC4]">
                          Sleep: {checkInOptions[checkInState].sleep} • Skin Clarity: {checkInOptions[checkInState].skin} • Stress: {checkInOptions[checkInState].stress}
                        </div>
                        <div className="text-xs text-[#D5F45B] pt-1 font-mono">
                          {checkInOptions[checkInState].note}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Playground 7: 3D Kinetic Motion Gimbal */}
                  {activeModuleId === "gimbal" && (
                    <motion.div
                      key="module-gimbal"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center p-2"
                    >
                      <KineticGimbal className="w-full max-w-[420px]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Stage Footer */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#B9BAC4]">
                <span>HealthFreak Mobile Engine v2.4</span>
                <span className="text-[#315BFF] font-mono font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#D5F45B]" /> Hardware Accelerated 60FPS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
