import { motion, useReducedMotion } from "framer-motion";
import { v2Easing } from "../utils/motion";

export const V2Section = ({ children, className = "", id }) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: shouldReduce ? 0 : 50,
        filter: shouldReduce ? "none" : "blur(20px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.4, ease: v2Easing }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
