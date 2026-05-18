import { motion, AnimatePresence } from "framer-motion";
import { V2Section } from "./V2Section";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const V2FAQ = ({ data }) => {
  const { faqs, colors } = data;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <V2Section id="faq" className="bg-slate-50 section-py">
      <div className="container-px">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="v2-badge mb-8 bg-white"
            >
              Curated FAQ
            </motion.div>
            <h2 className="text-6xl md:text-[100px] heading-v2">Expert <br/><span className="italic" style={{ color: colors.accent }}>Answers.</span></h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-premium group"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-10 md:px-14 py-10 flex items-center justify-between text-left group-hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-2xl md:text-3xl font-black tracking-tight pr-8">{faq.question}</span>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500"
                      style={{
                        backgroundColor: isOpen ? colors.primary : 'transparent',
                        border: `2px solid ${isOpen ? colors.primary : '#f1f5f9'}`,
                        color: isOpen ? 'white' : 'inherit'
                      }}
                    >
                      {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-10 md:px-14 pb-12">
                          <div className="h-px w-full bg-slate-100 mb-10" />
                          <p className="text-xl md:text-2xl body-v2 leading-relaxed">
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
    </V2Section>
  );
};
