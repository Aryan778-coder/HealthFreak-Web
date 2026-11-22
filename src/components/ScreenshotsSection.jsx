import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  LayoutDashboard,
  Droplets,
  Mic,
  Smile,
  Activity,
  MessageSquare,
  User,
  Check
} from "lucide-react";

export const ScreenshotsSection = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const screens = [
    {
      id: "dashboard",
      name: "Dashboard & Targets",
      icon: LayoutDashboard,
      tagline: "Metabolic Health & Fueling",
      accentGlow: "rgba(49, 91, 255, 0.35)", // Electric Cobalt
      accentPill: "text-[#315BFF] bg-[#315BFF]/15 border-[#315BFF]/30",
      description:
        "Single-view command center tracking metabolic health, daily calorie targets, protein, carbs, fats, water balance, and the AI meal scanner.",
      image: "/assets/screenshots/app_home_dashboard.jpg",
    },
    {
      id: "hydration",
      name: "Smart Hydration & Sleep",
      icon: Droplets,
      tagline: "Liquid Glass Widget & Sleep Metrics",
      accentGlow: "rgba(255, 102, 89, 0.35)", // Vivid Coral
      accentPill: "text-[#FF6659] bg-[#FF6659]/15 border-[#FF6659]/30",
      description:
        "Signature tactile water bottle widget with quick intake increments (+150mL, +250mL, +500mL) and circadian sleep architecture breakdown.",
      image: "/assets/screenshots/app_hydration_sleep.jpg",
    },
    {
      id: "plan",
      name: "Daily Rhythm & Plan",
      icon: Calendar,
      tagline: "Tailored Daily Schedule",
      accentGlow: "rgba(213, 244, 91, 0.3)", // Acid Lime
      accentPill: "text-[#D5F45B] bg-[#D5F45B]/15 border-[#D5F45B]/30",
      description:
        "Complete daily routine balancing morning Surya Namaskar, nutrient-dense meals, high-protein superfoods, and evening strength yoga.",
      image: "/assets/screenshots/app_daily_plan.jpg",
    },
    {
      id: "insights",
      name: "Progress & Insights",
      icon: Activity,
      tagline: "Long-Term Habit Trajectory",
      accentGlow: "rgba(49, 91, 255, 0.35)",
      accentPill: "text-[#315BFF] bg-[#315BFF]/15 border-[#315BFF]/30",
      description:
        "Active streak scoring, weekly activity volume, step metrics, and 7-day nutrition trend coverage without data silos.",
      image: "/assets/screenshots/app_progress_insights.jpg",
    },
    {
      id: "voice",
      name: "Coach Alex Voice Call",
      icon: Mic,
      tagline: "Encrypted Live Audio Call",
      accentGlow: "rgba(185, 168, 255, 0.35)", // Soft Lavender
      accentPill: "text-[#B9A8FF] bg-[#B9A8FF]/15 border-[#B9A8FF]/30",
      description:
        "Real-time, two-way conversational voice guidance powered by the official HealthFreak AI Coach mascot with on-device latency optimization.",
      image: "/assets/screenshots/app_voice_active_call.jpg",
    },
    {
      id: "chat",
      name: "Coach Alex Chat",
      icon: MessageSquare,
      tagline: "Bilingual Hinglish AI Partner",
      accentGlow: "rgba(213, 244, 91, 0.3)",
      accentPill: "text-[#D5F45B] bg-[#D5F45B]/15 border-[#D5F45B]/30",
      description:
        "Intelligent coaching companion that converses in your natural tone (English & Hinglish), provides recovery tips, and tracks daily workouts.",
      image: "/assets/screenshots/app_coach_alex_chat.jpg",
    },
    {
      id: "avatars",
      name: "Cartoon Avatars",
      icon: Smile,
      tagline: "Fictional Wellness Squad",
      accentGlow: "rgba(255, 102, 89, 0.3)",
      accentPill: "text-[#FF6659] bg-[#FF6659]/15 border-[#FF6659]/30",
      description:
        "Select your personal wellness character: Sunny (High Energy), Blush (Zen), Clover (Balance), Pebble (Recovery), Flexy (Hypertrophy), and Splash.",
      image: "/assets/screenshots/app_cartoon_avatars.jpg",
    },
    {
      id: "profile",
      name: "Profile & Diagnostics",
      icon: User,
      tagline: "Language & Health Data Hub",
      accentGlow: "rgba(49, 91, 255, 0.3)",
      accentPill: "text-[#315BFF] bg-[#315BFF]/15 border-[#315BFF]/30",
      description:
        "Seamless language switching (English, Hindi, Hinglish), diagnostic blood report tracking, and daily energy check-in logs.",
      image: "/assets/screenshots/app_profile_settings.jpg",
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
            <span className="text-[#315BFF]">100% Authentic Application UI.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#B9BAC4] leading-relaxed">
            Every interface below is an authoritative, unedited screenshot directly from the official HealthFreak Android application.
          </p>

          {/* Screen Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {screens.map((screen, idx) => {
              const IconComp = screen.icon;
              const isActive = activeScreenIndex === idx;

              return (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 z-10 ${
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
                  <IconComp className="w-3.5 h-3.5" />
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
                <span>Original HealthFreak application screen</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#315BFF] shrink-0" />
                <span>Pixel-accurate layout & verified data</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B9A8FF] shrink-0" />
                <span>Zero AI-generated replacement UI</span>
              </div>
            </div>
          </div>

          {/* Right: Realistic Phone Frame with Original Screenshot */}
          <div className="md:col-span-6 flex justify-center relative z-10">
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-[280px] sm:w-[310px] rounded-[44px] p-3 bg-gradient-to-b from-[#2E375C] via-[#1E2338] to-[#121626] border-[3px] border-[#445084] shadow-[0_25px_70px_rgba(0,0,0,0.9)] transform perspective-1000"
            >
              {/* Dynamic Island Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#171D36] border border-white/20" />
              </div>

              <div className="rounded-[34px] bg-[#0E111C] overflow-hidden border border-[#2B3456] h-[520px] flex flex-col justify-center relative">
                {/* Specular Diagonal Reflection Sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent z-20" />

                {/* Animated Screenshot View */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreen.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="relative w-full h-full bg-[#0C0F17]"
                  >
                    <img
                      src={currentScreen.image}
                      alt={currentScreen.name}
                      className="w-full h-full object-cover object-top"
                    />
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
