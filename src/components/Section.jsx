import { motion, useReducedMotion } from "framer-motion";

export const Section = ({ children, className = "", id }) => {
  const shouldReduceMotion = useReducedMotion();

  // V2 Pro Max Reveal System: Heavy Blur + Smooth Slide + Editorial Feel
  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 60,
      filter: shouldReduceMotion ? "none" : "blur(20px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1], // Pro Max Easing
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
};
