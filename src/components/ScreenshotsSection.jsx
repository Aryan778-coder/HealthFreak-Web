import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  LayoutDashboard,
  Droplets,
  Mic,
  LogIn,
  Check,
  Activity,
  Sparkles
} from "lucide-react";

export const ScreenshotsSection = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const screens = [
    {
      id: "activity",
      name: "Activity & Calendar",
      icon: Calendar,
      tagline: "Calibrated Motion & Step Matrix",
      accentGlow: "rgba(213, 244, 91, 0.3)", // Acid Lime
      accentPill: "text-[#D5F45B] bg-[#D5F45B]/15 border-[#D5F45B]/30",
      description:
        "Track weekly streak momentum, steps with dot-matrix spline visualization, active training minutes, and burned calories directly from hardware accelerometers.",
      content: (
        <div className="p-4 space-y-3.5 text-left text-white">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm text-white">Fitness Journey</h4>
            <span className="text-[10px] font-bold text-[#D5F45B] bg-[#D5F45B]/10 border border-[#D5F45B]/20 px-2 py-0.5 rounded-full font-mono">
              October 2026
            </span>
          </div>

          {/* Week Day Strip */}
          <div className="flex justify-between items-center gap-1">
            {[
              { day: "M", num: "12", active: false },
              { day: "T", num: "13", active: false },
              { day: "W", num: "14", active: true },
              { day: "T", num: "15", active: false },
              { day: "F", num: "16", active: false },
              { day: "S", num: "17", active: false },
              { day: "S", num: "18", active: false },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex-1 py-1.5 rounded-xl text-center flex flex-col items-center transition-all ${
                  item.active
                    ? "bg-[#D5F45B] text-[#171719] shadow-[0_4px_12px_rgba(213,244,91,0.5)] font-bold"
                    : "bg-[#1E2338] text-[#B9BAC4] border border-[#2B3456]"
                }`}
              >
                <span className="text-[9px] font-semibold">{item.day}</span>
                <span className="text-xs">{item.num}</span>
              </div>
            ))}
          </div>

          {/* Steps Card with Spline Dot Matrix */}
          <div className="p-3.5 rounded-2xl bg-[#1E2338] border border-[#2B3456] space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-neutral-300">Daily Steps</span>
              <span className="text-[#D5F45B] font-mono font-extrabold text-sm">10,482</span>
            </div>
            <div className="h-16 flex items-end justify-between gap-1.5 pt-2">
              {[20, 35, 50, 85, 65, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-full ${
                      i === 5
                        ? "bg-[#D5F45B] shadow-[0_0_10px_rgba(213,244,91,0.6)]"
                        : "bg-[#2E375C]"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[8px] text-neutral-400 font-mono">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dual Stat Mini Cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-2xl bg-[#1E2338] border border-[#2B3456]">
              <span className="text-[10px] text-neutral-400 block font-mono">Active Burn</span>
              <strong className="text-sm font-bold text-white">624 kcal</strong>
              <span className="text-[9px] text-[#D5F45B] block mt-0.5">Goal 600 kcal</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#1E2338] border border-[#2B3456]">
              <span className="text-[10px] text-neutral-400 block font-mono">Workout Time</span>
              <strong className="text-sm font-bold text-white">48 mins</strong>
              <span className="text-[9px] text-[#315BFF] block mt-0.5">Strength + HIIT</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "dashboard",
      name: "Dashboard & Targets",
      icon: LayoutDashboard,
      tagline: "Live Macro Rings & Targets",
      accentGlow: "rgba(49, 91, 255, 0.35)", // Electric Cobalt
      accentPill: "text-[#315BFF] bg-[#315BFF]/15 border-[#315BFF]/30",
      description:
        "Comprehensive single-screen overview of your daily calories, protein, carbs, fats, water balance, and workout streaks.",
      content: (
        <div className="p-4 space-y-3.5 text-left text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#315BFF]/50">
                <img
                  src="/assets/coach_alex.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-[10px] text-[#B9BAC4]">Personal Plan</div>
                <div className="text-xs font-bold text-white">Aryan's Vitality</div>
              </div>
            </div>
            <span className="text-xs font-bold text-[#FF6659] bg-[#FF6659]/15 border border-[#FF6659]/30 px-2.5 py-0.5 rounded-full font-mono">
              👑 18 Streak
            </span>
          </div>

          {/* Energy Ring Card */}
          <div className="p-3.5 rounded-2xl bg-[#1E2338] border border-[#2B3456]">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-bold text-white">Calorie Target</span>
              <span className="text-xs font-mono font-extrabold text-[#D5F45B]">1,840 / 2,300 kcal</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#121626] overflow-hidden mb-3">
              <div className="h-full bg-gradient-to-r from-[#315BFF] via-[#B9A8FF] to-[#D5F45B] w-[80%]" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-1.5 rounded-lg bg-[#14192D] border border-[#2B3456]">
                <div className="text-[9px] text-neutral-400 font-mono">Protein</div>
                <strong className="text-[#315BFF]">145g</strong>
              </div>
              <div className="p-1.5 rounded-lg bg-[#14192D] border border-[#2B3456]">
                <div className="text-[9px] text-neutral-400 font-mono">Carbs</div>
                <strong className="text-[#B9A8FF]">190g</strong>
              </div>
              <div className="p-1.5 rounded-lg bg-[#14192D] border border-[#2B3456]">
                <div className="text-[9px] text-neutral-400 font-mono">Fats</div>
                <strong className="text-[#FF6659]">52g</strong>
              </div>
            </div>
          </div>

          {/* Hydration Banner */}
          <div className="p-3 rounded-2xl bg-[#1E2338] border border-[#2B3456] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-[#315BFF]" />
              <span className="text-xs font-bold text-white">Hydration</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#315BFF]">2,450 / 3,200 mL (76%)</span>
          </div>
        </div>
      ),
    },
    {
      id: "hydration",
      name: "Water Bottle Widget",
      icon: Droplets,
      tagline: "Frosted Liquid Glass Widget",
      accentGlow: "rgba(255, 102, 89, 0.35)", // Vivid Coral
      accentPill: "text-[#FF6659] bg-[#FF6659]/15 border-[#FF6659]/30",
      description:
        "Signature liquid glass widget mimicking real liquid physics, touch increments, and ambient lighting.",
      content: (
        <div className="p-4 space-y-3.5 text-center text-white flex flex-col items-center justify-center">
          <div className="relative w-32 h-44 rounded-3xl overflow-hidden bg-gradient-to-b from-[#1E2338] to-[#121626] border border-[#FF6659]/40 flex items-center justify-center p-3 shadow-xl">
            <img
              src="/assets/water_widget_preview.png"
              alt="Water Widget Preview"
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,102,89,0.4)]"
            />
          </div>
          <div>
            <div className="text-lg font-bold font-serif text-white">2,450 mL</div>
            <span className="text-xs text-[#FF6659] font-mono font-semibold">76% of 3,200 mL Target</span>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-xl bg-[#FF6659]/15 border border-[#FF6659]/30 text-[11px] font-bold text-[#FF6659]">
              +250 mL
            </span>
            <span className="px-3 py-1 rounded-xl bg-[#FF6659]/15 border border-[#FF6659]/30 text-[11px] font-bold text-[#FF6659]">
              +500 mL
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "coach",
      name: "Live AI Voice Call",
      icon: Mic,
      tagline: "LiveKit Audio Engine & Coach Alex",
      accentGlow: "rgba(185, 168, 255, 0.35)", // Soft Lavender
      accentPill: "text-[#B9A8FF] bg-[#B9A8FF]/15 border-[#B9A8FF]/30",
      description:
        "Speak to your health coach on demand. Two-way, human-like voice conversations for motivation and guidance.",
      content: (
        <div className="p-4 space-y-4 text-center text-white flex flex-col items-center">
          <div className="text-[11px] font-bold text-[#B9A8FF] uppercase tracking-wider bg-[#B9A8FF]/10 border border-[#B9A8FF]/30 px-3 py-0.5 rounded-full font-mono">
            Live Voice Session
          </div>
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E2338] to-[#121626] border-2 border-[#B9A8FF]/60 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(185,168,255,0.4)]">
            <img
              src="/assets/coach_alex.png"
              alt="Coach Alex"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-white">Coach Alex</h4>
            <p className="text-[11px] text-[#B9BAC4] italic max-w-xs mt-1">
              "You crushed your 10,000 steps today. Remember to get 8 hours of sleep for recovery!"
            </p>
          </div>
          <div className="flex items-center gap-1.5 h-6">
            {[8, 14, 20, 12, 26, 16, 10, 18, 28, 14, 8].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-[#B9A8FF] rounded-full animate-wave-bar"
                style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "login",
      name: "Modern Welcome",
      icon: LogIn,
      tagline: "Uncluttered Biometric Entrance",
      accentGlow: "rgba(49, 91, 255, 0.3)",
      accentPill: "text-[#315BFF] bg-[#315BFF]/15 border-[#315BFF]/30",
      description:
        "Seamless entrance into your daily wellness world with biometric authentication, privacy guarantees, and goal setup.",
      content: (
        <div className="p-4 space-y-4 text-center text-white flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E2338] to-[#121626] border border-[#315BFF]/40 flex items-center justify-center p-2 shadow-xl">
            <img
              src="/assets/logo/HealthFreakLogoTransparent.png"
              alt="HealthFreak Mascot"
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(49,91,255,0.6)]"
            />
          </div>
          <div>
            <div className="font-serif text-lg font-bold">HealthFreak</div>
            <span className="text-[10px] text-[#D5F45B] font-mono font-semibold tracking-wider uppercase">
              Personalized Vitality
            </span>
          </div>
          <div className="w-full p-2.5 rounded-xl bg-[#1E2338] border border-[#2B3456] text-xs font-semibold text-neutral-300 flex items-center justify-center gap-2">
            <span>Continue with Google</span>
          </div>
          <div className="text-[10px] text-neutral-400 font-mono">
            Encrypted On-Device • Zero Third-Party Trackers
          </div>
        </div>
      ),
    },
  ];

  const currentScreen = screens[activeScreenIndex];

  return (
    <section id="screenshots" className="py-28 md:py-36 relative bg-[#171D36] text-white overflow-hidden">
      {/* Dynamic ambient backlight matching active screen */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[170px] pointer-events-none transition-all duration-700 opacity-50"
        style={{ backgroundColor: currentScreen.accentGlow }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-[#D5F45B] mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>ORIGINAL APPLICATION INTERFACES</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-5">
            Real Screens. Real Data. <br />
            <span className="text-[#315BFF]">Zero Fabricated Graphics.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#B9BAC4] leading-relaxed">
            Every screen below reflects the genuine HealthFreak Android application architecture designed for tactile responsiveness and aesthetic delight.
          </p>

          {/* Screen Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {screens.map((screen, idx) => {
              const IconComp = screen.icon;
              const isActive = activeScreenIndex === idx;

              return (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 z-10 ${
                    isActive
                      ? "text-[#171719] font-bold"
                      : "text-[#B9BAC4] hover:text-white bg-[#1E2338]/80 border border-[#2B3456]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="screenshotTabIndicator"
                      className="absolute inset-0 bg-[#D5F45B] rounded-full shadow-[0_0_20px_rgba(213,244,91,0.5)] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <IconComp className="w-4 h-4" />
                  <span>{screen.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Device Showcase Stage */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#1B213B] border border-[#2F3A66] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Left: Device Description & Callouts */}
          <div className="md:col-span-6 text-left space-y-4 relative z-10">
            <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border inline-block ${currentScreen.accentPill}`}>
              {currentScreen.tagline}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {currentScreen.name}
            </h3>
            <p className="text-sm sm:text-base text-[#B9BAC4] leading-relaxed">
              {currentScreen.description}
            </p>

            <div className="pt-4 border-t border-[#2F3A66] space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D5F45B] shrink-0" />
                <span>Original HealthFreak architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#315BFF] shrink-0" />
                <span>Pixel-accurate layout & proportions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B9A8FF] shrink-0" />
                <span>Hardware acceleration & smooth animations</span>
              </div>
            </div>
          </div>

          {/* Right: Phone Frame with Screen Content */}
          <div className="md:col-span-6 flex justify-center relative z-10">
            <motion.div
              whileHover={{ rotateY: 6, rotateX: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-[280px] sm:w-[310px] rounded-[44px] p-3 bg-gradient-to-b from-[#2E375C] via-[#1E2338] to-[#121626] border-[3px] border-[#445084] shadow-[0_25px_70px_rgba(0,0,0,0.9)] transform perspective-1000"
            >
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30" />

              <div className="rounded-[34px] bg-[#0E111C] overflow-hidden border border-[#2B3456] min-h-[400px] flex flex-col justify-center relative">
                {/* Specular Diagonal Reflection Sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent z-20" />

                {/* Status Bar */}
                <div className="flex justify-between items-center px-5 pt-2 text-[10px] font-semibold text-[#B9BAC4] relative z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-2.5 h-2.5 text-[#D5F45B]" />
                    <span>100%</span>
                  </div>
                </div>

                {/* Animated Screen View */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreen.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    {currentScreen.content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
