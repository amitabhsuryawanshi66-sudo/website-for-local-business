import { motion, AnimatePresence } from "framer-motion";
import { V4Section } from "./V4Section";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const V4FAQ = ({ data }) => {
  const { faqs, theme } = data;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <V4Section id="faq" className="bg-[#0A0A0A] v4-section-py border-t border-white/5">
      <div className="v4-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="v4-glass px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/40 mb-8"
            >
              Session Intel
            </motion.div>
            <h2 className="text-6xl md:text-9xl v4-heading">Artist <br/><span className="italic" style={{ color: theme.accent }}>Briefing.</span></h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 rounded-3xl border border-white/5 overflow-hidden group transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-10 py-10 flex items-center justify-between text-left hover:bg-white/[0.02]"
                  >
                    <span className="text-2xl md:text-3xl font-black tracking-tight pr-8 text-white uppercase">{faq.q}</span>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500"
                      style={{
                        backgroundColor: isOpen ? theme.accent : 'transparent',
                        border: `2px solid ${isOpen ? theme.accent : 'rgba(255,255,255,0.1)'}`,
                        color: 'white'
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
                        <div className="px-10 pb-12">
                          <div className="h-px w-full bg-white/5 mb-10" />
                          <p className="text-xl md:text-2xl v4-subheading leading-relaxed">
                            {faq.a}
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
    </V4Section>
  );
};
