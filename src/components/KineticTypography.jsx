import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const KineticTitle = ({
  text = "HEALTHFREAK",
  subtitle = "BIOMETRIC ARTIFICIAL INTELLIGENCE",
  accentColor = "#D5F45B",
  className = "",
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseVelocity, setMouseVelocity] = useState(0);
  const lastMousePos = useRef({ x: 0, y: 0, time: 0 });

  const letters = text.split("");

  const handleMouseMove = (e) => {
    const now = Date.now();
    const dt = lastMousePos.current.time ? Math.max(1, now - lastMousePos.current.time) : 16;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    const speed = Math.sqrt(dx * dx + dy * dy) / dt;
    setMouseVelocity(Math.min(speed * 15, 30));
    lastMousePos.current = { x: e.clientX, y: e.clientY, time: now };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setMouseVelocity((prev) => Math.max(0, prev * 0.85));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative select-none text-center cursor-crosshair group ${className}`}
    >
      {/* SVG Liquid Distortion Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="kinetic-glitch" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={isHovered ? "0.04 0.95" : "0.001 0.001"}
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isHovered ? mouseVelocity + 12 : 0}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Kinetic Subtitle with Letter Spacing Morph */}
      <motion.div
        animate={{
          letterSpacing: isHovered ? "0.38em" : "0.22em",
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="inline-flex items-center gap-3 text-xs md:text-sm font-mono tracking-[0.25em] uppercase text-zinc-400 mb-3"
      >
        <span
          className="w-2 h-2 rounded-full animate-ping"
          style={{ backgroundColor: accentColor }}
        />
        <span>{subtitle}</span>
      </motion.div>

      {/* Main Massive Kinetic Word */}
      <div
        className="relative flex justify-center items-center overflow-visible"
        style={{
          filter: isHovered && mouseVelocity > 2 ? "url(#kinetic-glitch)" : "none",
        }}
      >
        {letters.map((char, idx) => (
          <KineticLetter
            key={idx}
            char={char}
            index={idx}
            isHovered={isHovered}
            mouseVelocity={mouseVelocity}
          />
        ))}
      </div>
    </div>
  );
};

const KineticLetter = ({ char, index, isHovered, mouseVelocity }) => {
  const [letterHovered, setLetterHovered] = useState(false);
  const yOffset = useMotionValue(0);
  const springY = useSpring(yOffset, { stiffness: 350, damping: 22 });

  const delay = index * 0.02;

  const handleMouseEnter = () => {
    setLetterHovered(true);
    yOffset.set(-18);
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
        scaleY: letterHovered ? 1.25 : isHovered ? 1 + mouseVelocity * 0.015 : 1,
        scaleX: letterHovered ? 0.9 : 1,
        rotateZ: letterHovered ? (index % 2 === 0 ? -6 : 6) : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20, delay }}
      className="relative inline-block font-black tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-9xl transition-colors duration-200"
    >
      {/* Sliced Top Half */}
      <span
        className="block overflow-hidden transition-transform duration-300"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
          transform: letterHovered ? "translateX(-6px)" : "none",
          textShadow: letterHovered
            ? `-4px 0 #315BFF, 4px 0 #FF6659`
            : "none",
        }}
      >
        <span
          className={
            letterHovered
              ? "text-white"
              : "bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent"
          }
        >
          {char}
        </span>
      </span>

      {/* Sliced Bottom Half */}
      <span
        className="absolute inset-0 overflow-hidden transition-transform duration-300"
        style={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
          transform: letterHovered ? "translateX(6px)" : "none",
          textShadow: letterHovered
            ? `4px 0 #315BFF, -4px 0 #FF6659`
            : "none",
        }}
      >
        <span
          className={
            letterHovered
              ? "text-white"
              : "bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 bg-clip-text text-transparent"
          }
        >
          {char}
        </span>
      </span>
    </motion.div>
  );
};

export default KineticTitle;
