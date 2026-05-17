import { Section } from "./Section";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const FAQ = ({ faqs, colors }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="faq" className="bg-slate-50 section-py">
      <div className="container-px">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: colors.accent }}>Common Questions</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">Everything you <br/><span style={{ color: colors.accent }}>need to know.</span></h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-8 md:px-12 py-8 flex items-center justify-between text-left"
                  >
                    <span className="text-xl md:text-2xl font-bold pr-8">{faq.question}</span>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
                      style={{ backgroundColor: isOpen ? colors.primary : 'transparent', border: `1px solid ${isOpen ? colors.primary : '#e2e8f0'}`, color: isOpen ? 'white' : 'inherit' }}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-8 md:px-12 pb-10">
                          <div className="h-px w-full bg-slate-100 mb-8" />
                          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
