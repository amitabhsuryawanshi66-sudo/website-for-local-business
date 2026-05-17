import { motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Section } from "./Section";
import { useState } from "react";

export const FAQ = ({ faqs, colors }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section className="bg-white section-py">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="max-w-md sticky top-32">
            <motion.span
              className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 block"
            >
              Frequently Asked
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10">Common <br/>Questions <span style={{ color: colors.accent }}>Answered.</span></h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              Everything you need to know about our services, booking process, and policies.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout={!shouldReduceMotion}
                className={`rounded-[2.5rem] transition-all duration-500 overflow-hidden ${openIndex === index ? 'bg-slate-50 shadow-sm' : 'bg-white border border-slate-100 hover:border-slate-300'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-8 md:p-10 flex items-center justify-between text-left group"
                >
                  <span className="font-black text-xl md:text-2xl leading-tight pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${openIndex === index ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}
                  >
                    {openIndex === index ? (
                      <Minus size={24} strokeWidth={3} />
                    ) : (
                      <Plus size={24} strokeWidth={3} />
                    )}
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-8 md:px-10 pb-10 text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
