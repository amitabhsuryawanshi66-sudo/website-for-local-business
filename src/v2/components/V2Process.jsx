import { motion } from "framer-motion";
import { V2Section } from "./V2Section";

export const V2Process = ({ data }) => {
  const { process, colors } = data;

  return (
    <V2Section id="process" className="bg-slate-900 text-white section-py overflow-hidden">
      <div className="container-px">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-32">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="v2-badge bg-white/5 border-white/10 text-white/60 mb-8"
            >
              The Path to Perfection
            </motion.div>
            <h2 className="text-6xl md:text-[100px] heading-v2 text-white">How it <br/><span className="italic" style={{ color: colors.accent }}>works.</span></h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-32 relative">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full md:w-1/2 md:px-20 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-3xl font-black mb-6">{step.title}</h3>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed">{step.detail}</p>
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black shadow-deep border-4 border-slate-900"
                      style={{ backgroundColor: colors.accent, color: 'white' }}
                    >
                      0{index + 1}
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
