import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const KineticTitle = ({
  text = "HEALTHFREAK",
  subtitle = "ALL-IN-ONE AI WELLNESS OS",
  accentColor = "#D5F45B",
  className = "",
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const letters = text.split("");

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative select-none text-center lg:text-left group ${className}`}
    >
      {/* Subtitle with Refined Ambient Pulse */}
      <motion.div
        animate={{
          letterSpacing: isHovered ? "0.32em" : "0.22em",
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="inline-flex items-center gap-2.5 text-xs md:text-sm font-mono tracking-[0.22em] uppercase text-zinc-400 mb-2"
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: accentColor,
            boxShadow: `0 0 10px ${accentColor}`,
          }}
        />
        <span>{subtitle}</span>
      </motion.div>

      {/* Main Refined Kinetic Word */}
      <div className="relative flex justify-center lg:justify-start items-center overflow-visible py-1">
        {letters.map((char, idx) => (
          <RefinedLetter
            key={idx}
            char={char}
            index={idx}
            isHovered={isHovered}
          />
        ))}
      </div>
    </div>
  );
};

const RefinedLetter = ({ char, index }) => {
  const [letterHovered, setLetterHovered] = useState(false);
  const yOffset = useMotionValue(0);
  const springY = useSpring(yOffset, { stiffness: 380, damping: 24 });

  const delay = index * 0.015;

  const handleMouseEnter = () => {
    setLetterHovered(true);
    yOffset.set(-8);
  };

  const handleMouseLeave = () => {
    setLetterHovered(false);
    yOffset.set(0);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ y: springY }}
      animate={{
        scale: letterHovered ? 1.08 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 22, delay }}
      className="relative inline-block font-black tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.2rem] leading-none transition-colors duration-200 cursor-pointer"
    >
      <span
        className={`block transition-all duration-300 ${
          letterHovered
            ? "text-white drop-shadow-[0_0_20px_rgba(49,91,255,0.7)]"
            : "bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent"
        }`}
      >
        {char}
      </span>
    </motion.div>
  );
};

export default KineticTitle;
