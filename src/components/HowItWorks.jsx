import { motion, useReducedMotion } from "framer-motion";
import { Section } from "./Section";

export const HowItWorks = ({ steps, colors }) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Section className="bg-slate-900 text-white section-py">
      <div className="container-px">
        <div className="text-center mb-24">
          <motion.span
            className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 block mb-6"
          >
            The Journey
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">Simple. Seamless. <br/><span style={{ color: colors.accent }}>Success.</span></h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group">
              <div className="mb-8 flex items-center gap-6">
                <span
                  className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center font-black text-2xl transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500 shadow-2xl"
                  style={{ backgroundColor: colors.accent, color: 'white' }}
                >
                  {index + 1}
                </span>
                <div className="h-px flex-grow bg-white/10 hidden lg:block" />
              </div>
              <h3 className="text-2xl font-black mb-4">{step.title}</h3>
              <p className="text-white/50 text-lg font-medium leading-relaxed group-hover:text-white/70 transition-colors">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
