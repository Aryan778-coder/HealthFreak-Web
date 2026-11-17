import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/config/site";
import Magnet from "@/components/Magnet";
import { Menu, X, ArrowUpRight, Smartphone } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = siteConfig.navLinks.map((l) => l.href.replace("#", ""));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const secEl = document.getElementById(sections[i]);
        if (secEl && secEl.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#171719]/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.85)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none rounded-2xl px-1"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative w-10 h-10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#24242A] via-[#1A1A1E] to-[#121214] border border-white/15 flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(49,91,255,0.25)] group-hover:border-[#315BFF] transition-colors"
            >
              <img
                src={siteConfig.logo}
                alt="HealthFreak Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(49,91,255,0.6)]"
              />
            </motion.div>
            <div className="flex flex-col text-left">
              <div className="flex items-baseline font-serif text-xl sm:text-2xl font-bold tracking-tight">
                <span className="text-[#F4F0E8]">Health</span>
                <span className="text-[#315BFF] ml-1">Freak</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6659] ml-1" />
              </div>
              <span className="text-[9px] tracking-widest font-mono font-bold uppercase text-[#B9BAC4] -mt-1 hidden sm:block">
                Biometric Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Electric Cobalt Active Indicator */}
          <nav className="hidden md:flex items-center gap-1 bg-[#171719]/80 backdrop-blur-2xl px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {siteConfig.navLinks.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 z-10 ${
                    isActive ? "text-white font-bold" : "text-[#B9BAC4] hover:text-[#F4F0E8]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#315BFF] rounded-full -z-10 shadow-[0_0_20px_rgba(49,91,255,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Download CTA Button with Magnet */}
          <div className="hidden sm:flex items-center gap-3">
            <Magnet padding={35} disabled={false}>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold text-[#171719] bg-[#D5F45B] hover:bg-[#c9ea4e] shadow-[0_0_25px_rgba(213,244,91,0.45)] hover:shadow-[0_0_35px_rgba(213,244,91,0.7)] transition-all duration-300"
              >
                <Smartphone className="w-4 h-4 text-[#171719]" />
                <span>Get App</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </motion.a>
            </Magnet>
          </div>

          {/* Mobile Menu Trigger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-2xl text-neutral-300 hover:text-white bg-[#222227] border border-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mt-3 p-4 rounded-3xl bg-[#171719]/95 backdrop-blur-2xl border border-white/15 shadow-2xl text-left"
            >
              <div className="flex flex-col gap-1.5">
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-2xl text-sm font-semibold text-[#B9BAC4] hover:text-white hover:bg-[#282830] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-white/10 mt-2">
                  <a
                    href={siteConfig.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-extrabold text-[#171719] bg-[#D5F45B] shadow-[0_0_20px_rgba(213,244,91,0.5)]"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Download on Google Play</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
