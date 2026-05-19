import { motion } from "framer-motion";
import { V2Section } from "./V2Section";

export const V2Process = ({ data }) => {
  const { process, theme } = data;

  return (
    <V2Section id="process" className="bg-slate-950 text-white v2-section-py overflow-hidden">
      <div className="v2-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-32">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="v2-glass px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/50 mb-8 border-white/10"
            >
              The Path to Perfection
            </motion.div>
            <h2 className="text-6xl md:text-[100px] v2-heading text-white">How it <br/><span className="italic" style={{ color: theme.accent }}>works.</span></h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-32 relative">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full md:w-1/2 md:px-20 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-3xl font-black mb-6">{step.title}</h3>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black shadow-v2-deep border-4 border-slate-950"
                      style={{ backgroundColor: theme.accent, color: 'white' }}
                    >
                      {step.step}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </V2Section>
  );
};
