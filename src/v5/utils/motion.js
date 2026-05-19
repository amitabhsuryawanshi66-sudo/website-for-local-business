import { motion, useReducedMotion } from "framer-motion";

/**
 * V5 Pro Max Motion Tokens
 */
export const v5Easing = [0.16, 1, 0.3, 1];

export const v5Stagger = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  },
  item: (shouldReduce) => ({
    hidden: {
      opacity: 0,
      y: shouldReduce ? 0 : 30,
      filter: shouldReduce ? "none" : "blur(12px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: v5Easing }
    }
  })
};

export const v5Spring = {
  type: "spring",
  stiffness: 280,
  damping: 24
};
