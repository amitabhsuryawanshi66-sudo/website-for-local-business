import { motion, useReducedMotion } from "framer-motion";
import { v4Easing } from "../utils/motion";

export const V4Section = ({ children, className = "", id }) => {
  const shouldReduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: shouldReduce ? 0 : 50,
        filter: shouldReduce ? "none" : "blur(15px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: v4Easing }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
