import { useState } from "react";
import { siteConfig } from "@/config/site";
import { LegalModal } from "./LegalModals";
import { Smartphone, ArrowUpRight, Mail } from "lucide-react";

export const Footer = () => {
  const [modalType, setModalType] = useState(null);

  return (
    <footer className="bg-[#121214] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#24242A] to-[#171719] border border-white/15 flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform">
                <img
                  src={siteConfig.logo}
                  alt="HealthFreak Mascot Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(49,91,255,0.4)]"
                />
              </div>
              <div className="font-serif text-2xl font-bold tracking-tight">
                <span className="text-[#F4F0E8]">Health</span>
                <span className="text-[#315BFF] ml-1">Freak</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6659] ml-1 inline-block" />
              </div>
            </a>

            <p className="text-sm text-[#B9BAC4] max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="pt-2 text-xs text-[#B9BAC4] flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#315BFF]" />
              <span>Contact: </span>
              <a
                href="mailto:support@healthfreak.app"
                className="text-white hover:text-[#315BFF] underline transition-colors"
              >
                support@healthfreak.app
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#B9BAC4]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App / Download */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest">
              Download HealthFreak
            </h4>
            <p className="text-xs text-[#B9BAC4] leading-relaxed">
              Get the official HealthFreak Android application and experience all-in-one AI nutrition, water tracking, and live voice coaching.
            </p>
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 hover:border-[#D5F45B] text-xs font-bold text-white hover:text-[#D5F45B] transition-all shadow-md group"
            >
              <Smartphone className="w-4 h-4 text-[#D5F45B] group-hover:scale-110 transition-transform" />
              <span>Google Play Listing</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B9BAC4]">
          <div>
            © {siteConfig.copyrightYear} HealthFreak. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setModalType("privacy")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setModalType("terms")}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>

          <div className="flex items-center gap-1 font-semibold text-neutral-300">
            <span>Made by</span>
            <span className="text-[#315BFF] font-bold">{siteConfig.creators}</span>
          </div>
        </div>
      </div>

      {/* Legal Popups */}
      <LegalModal
        isOpen={modalType === "privacy"}
        onClose={() => setModalType(null)}
        title="Privacy Policy"
        type="privacy"
      />
      <LegalModal
        isOpen={modalType === "terms"}
        onClose={() => setModalType(null)}
        title="Terms & Conditions"
        type="terms"
      />
    </footer>
  );
};
