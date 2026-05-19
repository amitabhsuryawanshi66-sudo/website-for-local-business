/**
 * V4 Motion Engineering (Emil Kowalski Rules)
 */

export const v4Easing = [0.16, 1, 0.3, 1];

export const v4Stagger = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  },
  item: (shouldReduce) => ({
    hidden: {
      opacity: 0,
      y: shouldReduce ? 0 : 30,
      filter: shouldReduce ? "none" : "blur(15px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: v4Easing }
    }
  })
};

export const v4Spring = {
  type: "spring",
  stiffness: 260,
  damping: 20
};
