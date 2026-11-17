/**
 * HealthFreak Official Website Configuration
 * Central source of truth for site metadata, download links, and navigation.
 */

export const siteConfig = {
  name: "HealthFreak",
  shortName: "HealthFreak",
  tagline: "Your Health. Your AI. Your Lifestyle.",
  description:
    "HealthFreak is the all-in-one AI wellness companion uniting nutrition and macro tracking, smart hydration, biometric workout logging, and real-time voice coaching into a single, cohesive daily ritual.",
  url: "https://healthfreak.app",
  ogImage: "/assets/logo/HealthFreakLogoBlackbg.png",
  logo: "/assets/logo/HealthFreakLogoTransparent.png",
  logoBlackBg: "/assets/logo/HealthFreakLogoBlackbg.png",
  
  // Centralized Google Play Store Listing URL
  // Replace this placeholder once official listing URL is available.
  playStoreUrl: "[INSERT_OFFICIAL_PLAY_STORE_URL]",
  
  packageName: "com.healthfreak.app",
  creators: "Abhishek & Aryan",
  copyrightYear: 2026,

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Why HealthFreak", href: "#why-healthfreak" },
    { label: "AI Companion", href: "#ai-companion" },
    { label: "Download", href: "#download" },
  ],

  stats: [
    { value: "All-in-One", label: "Unified Health Stack" },
    { value: "< 1 Sec", label: "AI Meal Recognition" },
    { value: "24 / 7", label: "Live Voice Coach Alex" },
    { value: "100% Private", label: "Encrypted Biometrics" },
  ],

  features: [
    {
      id: "nutrition",
      title: "Nutrition & Macro Tracking",
      subtitle: "Precision Fueling",
      description:
        "Effortlessly log and monitor your daily caloric intake alongside granular protein, carbohydrate, and fat targets to meet your physique and health milestones.",
      category: "Nutrition",
      badge: "Macros & Calories",
      color: "emerald",
      metrics: [
        { label: "Protein Goal", value: "145g / 160g" },
        { label: "Carbs", value: "210g" },
        { label: "Fats", value: "54g" },
      ],
    },
    {
      id: "scanner",
      title: "AI Camera Food Scanner",
      subtitle: "Instant Computer Vision",
      description:
        "Point your camera at any meal or snack. HealthFreak's multimodal AI recognizes portions, estimates calories, and updates your macro rings automatically.",
      category: "AI Vision",
      badge: "Real-Time Scan",
      color: "cyan",
      metrics: [
        { label: "Recognition Speed", value: "Instant" },
        { label: "Nutrient Depth", value: "Macros + Micronutrients" },
      ],
    },
    {
      id: "hydration",
      title: "Smart Daily Hydration",
      subtitle: "Dynamic Water Bottle Widget",
      description:
        "Track every sip with our signature frosted liquid glass bottle widget. Set adaptive targets based on activity level and ambient weather conditions.",
      category: "Hydration",
      badge: "Interactive Widget",
      color: "blue",
      metrics: [
        { label: "Daily Target", value: "3,200 mL" },
        { label: "Current Intake", value: "2,450 mL (76%)" },
      ],
    },
    {
      id: "fitness",
      title: "Fitness & Workout Guidance",
      subtitle: "Calibrated Motion Tracking",
      description:
        "Visualize your daily step momentum with our signature dot-matrix spline chart. Track active burn, training minutes, and scheduled fitness routines.",
      category: "Activity",
      badge: "Biometrics",
      color: "amber",
      metrics: [
        { label: "Steps Today", value: "10,482" },
        { label: "Active Calories", value: "624 kcal" },
        { label: "Workout Time", value: "48 mins" },
      ],
    },
    {
      id: "progress",
      title: "Weight & Body Composition",
      subtitle: "Quantifiable Progress",
      description:
        "Log weight weigh-ins, track body measurements over time, and celebrate milestone streaks with intelligent trend smoothing.",
      category: "Analytics",
      badge: "Trends & Streaks",
      color: "purple",
      metrics: [
        { label: "Streak", value: "18 Days Active" },
        { label: "Trend", value: "-2.4 kg Lean Cut" },
      ],
    },
    {
      id: "lifestyle",
      title: "Skincare & Lifestyle Wellness",
      subtitle: "Holistic Daily Balance",
      description:
        "Perform quick holistic check-ins capturing sleep quality, skin clarity, stress levels, and emotional energy states to harmonize your physical health.",
      category: "Wellness",
      badge: "Mind & Skin",
      color: "rose",
      metrics: [
        { label: "Check-in State", value: "Energized" },
        { label: "Sleep Quality", value: "8h 12m Deep" },
      ],
    },
    {
      id: "voice-ai",
      title: "AI Voice Companion (Coach Alex)",
      subtitle: "Natural Two-Way Speech",
      description:
        "Experience human-like voice conversations powered by LiveKit low-latency audio pipelines. Ask Coach Alex for workout adjustments, diet tips, or morning motivation.",
      category: "Conversational AI",
      badge: "Live Audio",
      color: "emerald",
      metrics: [
        { label: "Audio Engine", value: "LiveKit Real-Time" },
        { label: "Voice Latency", value: "Sub-Second" },
      ],
    },
  ],

  comparison: [
    {
      feature: "Nutrition & Macro Tracking",
      healthfreak: "Built-in with AI Food Scanner",
      traditional: "Clunky manual database logging",
    },
    {
      feature: "Interactive Hydration Widget",
      healthfreak: "Frosted glass dynamic liquid bottle",
      traditional: "Separate standalone water app",
    },
    {
      feature: "Personal AI Voice Coach",
      healthfreak: "Coach Alex with natural LiveKit calls",
      traditional: "Generic chatbots or expensive coaches",
    },
    {
      feature: "Fitness & Dot-Matrix Spline",
      healthfreak: "Unified daily motion & streak tracking",
      traditional: "Disconnected fitness watch apps",
    },
    {
      feature: "Holistic Wellness & Skincare",
      healthfreak: "Integrated daily energy & habit check-in",
      traditional: "Not available in fitness trackers",
    },
    {
      feature: "User Experience & Privacy",
      healthfreak: "Obsidian dark mode, 0 ads, encrypted",
      traditional: "Ad-heavy, cluttered paywalls",
    },
  ],
};
