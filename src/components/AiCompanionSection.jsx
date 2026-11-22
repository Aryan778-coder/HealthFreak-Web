import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/config/site";
import Magnet from "@/components/Magnet";
import Particles from "@/components/Particles";
import {
  Mic,
  Bot,
  Volume2,
  Sparkles,
  Clock,
  ArrowRight,
  Radio,
  Activity
} from "lucide-react";

export const AiCompanionSection = () => {
  const [activePrompt, setActivePrompt] = useState(0);

  const sampleConversations = [
    {
      user: "Alex, I have 38g of protein left for dinner. What can I make in 15 minutes?",
      alex: "Great job hitting your calories! A quick 3-egg omelet with cottage cheese and smoked salmon or grilled chicken strips with Greek yogurt sauce will easily get you 40g protein without spiking carbs.",
      context: "Nutrition & Macro Guidance",
      scenarioTag: "MEAL TIMING",
    },
    {
      user: "I walked 10,482 steps today. Should I still do my 20-minute cardio session?",
      alex: "With over 10,000 steps logged and 624 active kcal burned, your cardiovascular base is solid today! Shift that 20 minutes to light mobility and foam rolling so your legs are fresh for tomorrow's squats.",
      context: "Workout Adaptation",
      scenarioTag: "RECOVERY OPTIMIZATION",
    },
    {
      user: "My energy feels low this afternoon. Did I drink enough water?",
      alex: "Looking at your water widget, you're at 1,400 mL out of your 3,200 mL goal. Drink a tall 500 mL glass with a pinch of sea salt right now — mild dehydration is likely triggering that afternoon slump.",
      context: "Real-Time Activity & Water Sync",
      scenarioTag: "HYDRATION BALANCE",
    },
  ];

  return (
    <section id="ai-companion" className="py-28 md:py-36 relative bg-[#171719] text-white overflow-hidden select-none">
      {/* Background Particles System with Lavender & Cobalt Palette */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <Particles
          particleColors={["#B9A8FF", "#315BFF"]}
          particleCount={24}
          particleSpread={6}
          speed={0.06}
          particleBaseSize={30}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Atmospheric Radial Depth */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-[#315BFF]/15 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#B9A8FF]/12 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Contextual Explanatory Content */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B9A8FF]/15 border border-[#B9A8FF]/30 text-xs font-mono font-bold text-[#B9A8FF] mb-5 shadow-sm">
              <Bot className="w-3.5 h-3.5" />
              <span>MEET COACH ALEX • LIVEKIT VOICE ENGINE</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              A personal health coach <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B9A8FF] via-[#315BFF] to-[#D5F45B]">
                that actually speaks with you.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#B9BAC4] leading-relaxed mb-8">
              Forget texting robotic chatbots. HealthFreak features <strong>Coach Alex</strong>, an AI wellness companion powered by low-latency <strong>LiveKit</strong> audio pipelines. Experience natural, conversational voice interaction designed to answer nutrition questions, adapt workouts, and keep you accountable.
            </p>

            <div className="space-y-4 mb-9">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#315BFF]/15 border border-[#315BFF]/30 flex items-center justify-center text-[#315BFF] shrink-0 mt-0.5">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Live Two-Way Audio Calls</h4>
                  <p className="text-xs sm:text-sm text-[#B9BAC4]">
                    Talk freely while driving, walking, or cooking. Sub-240ms speech response without awkward waiting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#B9A8FF]/15 border border-[#B9A8FF]/30 flex items-center justify-center text-[#B9A8FF] shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Full Wellness Ecosystem Awareness</h4>
                  <p className="text-xs sm:text-sm text-[#B9BAC4]">
                    Coach Alex knows your exact meals, water logs, and workout steps before you even start the sentence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#D5F45B]/15 border border-[#D5F45B]/30 flex items-center justify-center text-[#D5F45B] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Scheduled Daily Check-ins</h4>
                  <p className="text-xs sm:text-sm text-[#B9BAC4]">
                    Set a 2-minute morning voice briefing or evening reflection to maintain consistent habits.
                  </p>
                </div>
              </div>
            </div>

            <Magnet padding={40} disabled={false}>
              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                data-cursor-text="TALK"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-extrabold text-[#171719] bg-[#D5F45B] hover:bg-[#c9ea4e] transition-all duration-300 shadow-[0_0_25px_rgba(213,244,91,0.45)] hover:shadow-[0_0_35px_rgba(213,244,91,0.65)] hover:-translate-y-0.5"
              >
                <span>Try Coach Alex on Android</span>
                <ArrowRight className="w-4 h-4 text-[#171719]" />
              </a>
            </Magnet>
          </div>

          {/* Right Column: Simulated Live Voice Studio Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[40px] bg-[#1E2338] border border-[#2F3A66] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.6)] relative overflow-hidden text-left">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#2F3A66]">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#14192D] border-2 border-[#B9A8FF] shadow-[0_0_20px_rgba(185,168,255,0.35)] flex items-center justify-center p-1">
                      <img
                        src="/assets/callingLogo.png"
                        alt="Coach Alex Official Mascot"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#1E2338] animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">Coach Alex</h3>
                    <span className="text-xs text-[#B9A8FF] font-mono font-semibold flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 animate-pulse" /> LiveKit Speech Engine Active
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#B9A8FF]/15 border border-[#B9A8FF]/30 text-xs font-mono font-bold text-[#B9A8FF]">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>240ms Latency</span>
                </div>
              </div>

              {/* Scenario Selector */}
              <div className="my-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B9BAC4] block mb-2.5">
                  Select a live scenario to preview Alex's response:
                </span>
                <div className="flex flex-wrap gap-2">
                  {sampleConversations.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActivePrompt(idx)}
                      data-cursor="pointer"
                      data-cursor-text="PREVIEW"
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                        activePrompt === idx
                          ? "bg-[#315BFF] text-white shadow-[0_0_15px_rgba(49,91,255,0.4)]"
                          : "bg-[#14192D] border border-[#2B3456] text-[#B9BAC4] hover:text-white"
                      }`}
                    >
                      {item.context}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Conversation Bubbles */}
              <div className="space-y-4 my-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`user-${activePrompt}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-2xl bg-[#14192D] border border-[#2B3456] text-xs sm:text-sm text-neutral-200"
                  >
                    <span className="text-[10px] font-mono font-bold text-[#B9BAC4] uppercase tracking-wider block mb-1">
                      You Said • [{sampleConversations[activePrompt].scenarioTag}]
                    </span>
                    "{sampleConversations[activePrompt].user}"
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`alex-${activePrompt}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-[#202747] via-[#1A1F38] to-[#121628] border border-[#B9A8FF]/40 text-xs sm:text-sm text-white shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-[#B9A8FF] uppercase tracking-wider flex items-center gap-1">
                        <Bot className="w-3.5 h-3.5" /> Coach Alex Responded
                      </span>
                      <span className="text-[10px] text-[#D5F45B] font-mono">240ms Speech Latency</span>
                    </div>
                    <p className="leading-relaxed text-neutral-200">
                      "{sampleConversations[activePrompt].alex}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Audio Harmonic Spectrum */}
              <div className="pt-4 border-t border-[#2F3A66] flex items-center justify-between">
                <div className="flex items-center gap-1 h-6">
                  {[8, 14, 22, 16, 28, 18, 10, 24, 14, 20, 10, 6, 12, 18, 22, 14].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#B9A8FF] rounded-full animate-wave-bar"
                      style={{
                        height: `${h}px`,
                        animationDelay: `${i * 0.08}s`,
                        animationDuration: "1.2s",
                      }}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#B9BAC4] flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-[#315BFF]" /> Live Audio Simulation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
