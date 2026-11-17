import { X, ShieldCheck, FileText } from "lucide-react";

export const LegalModal = ({ isOpen, onClose, title, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0d1410] border border-[#213227] p-6 sm:p-8 text-left shadow-2xl text-neutral-300">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1b2720] mb-5">
          <div className="flex items-center gap-2.5">
            {type === "privacy" ? (
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            ) : (
              <FileText className="w-5 h-5 text-cyan-400" />
            )}
            <h3 className="font-serif text-xl font-bold text-white">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#16221b] text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {type === "privacy" ? (
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#a3a69f]">
            <p>
              <strong>Last Updated: November 2026</strong>
            </p>
            <p>
              At <strong>HealthFreak</strong> ("we", "our", or "us"), we prioritize the privacy
              and integrity of your health and wellness data. This Privacy Policy describes how
              the HealthFreak application and website handle information.
            </p>

            <h4 className="font-bold text-white text-sm">1. Information We Collect</h4>
            <p>
              • <strong>Camera Access:</strong> Used solely when you invoke the AI Food Scanner to estimate
              nutritional values. Images are processed ephemerally and are not sold to third parties.
            </p>
            <p>
              • <strong>Microphone Access:</strong> Used exclusively for two-way live voice conversations
              with Coach Alex via secure audio streams (LiveKit). Voice audio is not retained for advertising.
            </p>
            <p>
              • <strong>Activity & Fitness:</strong> Motion steps, water intake, weight, and check-in logs
              are stored securely to generate your daily wellness analytics.
            </p>

            <h4 className="font-bold text-white text-sm">2. Data Security & Storage</h4>
            <p>
              All personal and health-related telemetry is encrypted in transit and at rest using
              modern cryptographic standards. We never sell, rent, or trade your personal wellness
              records.
            </p>

            <h4 className="font-bold text-white text-sm">3. Your Rights & Control</h4>
            <p>
              You maintain total ownership of your health logs. You may export or permanently delete
              your HealthFreak profile and associated history at any time.
            </p>

            <h4 className="font-bold text-white text-sm">4. Contact Us</h4>
            <p>
              For privacy inquiries or data removal requests, contact the development team at{" "}
              <span className="text-emerald-400">support@healthfreak.app</span>.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#a3a69f]">
            <p>
              <strong>Last Updated: November 2026</strong>
            </p>
            <p>
              Welcome to <strong>HealthFreak</strong>. By using our website and mobile application,
              you agree to the following terms and conditions.
            </p>

            <h4 className="font-bold text-white text-sm">1. Informational & Fitness Purpose</h4>
            <p>
              HealthFreak, including AI Coach Alex, provides wellness guidance, nutritional estimation,
              and fitness tracking for educational and lifestyle purposes only. HealthFreak is not a
              licensed medical diagnostic provider and is not a substitute for professional clinical advice.
            </p>

            <h4 className="font-bold text-white text-sm">2. User Responsibilities</h4>
            <p>
              You agree to consult a qualified physician prior to beginning any rigorous workout or
              restrictive dietary plan. You assume personal responsibility for your physical training.
            </p>

            <h4 className="font-bold text-white text-sm">3. Intellectual Property</h4>
            <p>
              All trademarks, logos, mascot designs, and software architecture are the intellectual
              property of HealthFreak and its creators (Abhishek & Aryan).
            </p>

            <h4 className="font-bold text-white text-sm">4. Modifications</h4>
            <p>
              We reserve the right to refine or update these Terms to reflect service enhancements.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#1b2720] text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
