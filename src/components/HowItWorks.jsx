import { motion } from "framer-motion";
import { Section } from "./Section";

export const HowItWorks = ({ steps, colors }) => {
  return (
    <Section id="process" className="bg-slate-900 text-white section-py">
      <div className="container-px">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Our Methodology</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">The path to <br/>your <span style={{ color: colors.accent }}>perfection.</span></h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-1/2 md:px-20 text-center md:text-right">
                    {index % 2 === 0 ? (
                      <div>
                        <h3 className="text-3xl font-black mb-4">{step.title}</h3>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">{step.description}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black shadow-2xl border-4 border-slate-900"
                      style={{ backgroundColor: colors.accent, color: 'white' }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 md:px-20 text-center md:text-left">
                    {index % 2 !== 0 ? (
                      <div>
                        <h3 className="text-3xl font-black mb-4">{step.title}</h3>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed">{step.description}</p>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
