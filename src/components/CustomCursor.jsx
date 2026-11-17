import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse / trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor], a, button, input");
      if (target) {
        const text = target.getAttribute("data-cursor-text");
        if (text) {
          setCursorText(text);
          setCursorVariant("text");
        } else {
          setCursorText("");
          setCursorVariant("hover");
        }
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Magnetic Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "hover" ? 1.8 : cursorVariant === "text" ? 2.6 : 1,
          borderColor:
            cursorVariant === "hover"
              ? "rgba(49, 91, 255, 0.8)"
              : cursorVariant === "text"
              ? "rgba(213, 244, 91, 0.9)"
              : "rgba(255, 255, 255, 0.4)",
          backgroundColor:
            cursorVariant === "text"
              ? "rgba(23, 23, 25, 0.85)"
              : cursorVariant === "hover"
              ? "rgba(49, 91, 255, 0.15)"
              : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-[2px]"
      >
        {cursorText && (
          <span className="text-[7px] font-mono font-extrabold uppercase tracking-widest text-[#D5F45B] select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "hover" || cursorVariant === "text" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="w-1.5 h-1.5 rounded-full bg-[#315BFF] fixed"
      />
    </div>
  );
};
