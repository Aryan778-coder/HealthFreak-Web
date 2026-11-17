/**
 * HealthFreak Unified Motion & Animation System
 * Engineered with motion/react for 60-120fps GPU-accelerated interaction.
 */

export const TRANSITION_EASE = [0.22, 1, 0.36, 1]; // Apple-style cubic bezier easeOutExpo
export const SPRING_TACTILE = { type: "spring", stiffness: 140, damping: 18 };
export const SPRING_GENTLE = { type: "spring", stiffness: 80, damping: 20 };

export const fadeUp = (delay = 0, distance = 30) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: TRANSITION_EASE,
    },
  },
});

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: TRANSITION_EASE,
    },
  },
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: TRANSITION_EASE,
    },
  },
});

export const slideInDirection = (direction = "left", delay = 0, distance = 40) => {
  const x = direction === "left" ? -distance : direction === "right" ? distance : 0;
  const y = direction === "up" ? distance : direction === "down" ? -distance : 0;
  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.85,
        delay,
        ease: TRANSITION_EASE,
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
