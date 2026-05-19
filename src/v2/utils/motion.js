import { motion, useReducedMotion } from "framer-motion";

/**
 * Emil Kowalski Motion Tokens
 */
export const v2Easing = [0.16, 1, 0.3, 1];

export const v2Stagger = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },
  item: (shouldReduce) => ({
    hidden: {
      opacity: 0,
      y: shouldReduce ? 0 : 40,
      filter: shouldReduce ? "none" : "blur(20px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: v2Easing }
    }
  })
};

export const v2Spring = {
  type: "spring",
  stiffness: 260,
  damping: 20
};
