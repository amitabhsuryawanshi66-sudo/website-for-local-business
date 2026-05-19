import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { CheckCircle, ShieldAlert, BadgeInfo } from "lucide-react";

export const ObjectionResolver = ({ business }) => {
  const icons = [CheckCircle, ShieldAlert, BadgeInfo];

  return (
    <V5Section id="faq" className="v5-section-py border-t border-white/5">
      <div className="v2-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-[120px] v5-heading text-white">Concierge <br/><span className="italic text-red-500">Briefing.</span></h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {business.faqs.map((faq, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/[0.03] p-12 md:p-16 rounded-[4rem] border border-white/5 group hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex flex-col md:flex-row items-start gap-10">
                     <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                       <Icon size={36} />
                     </div>
                     <div>
                       <h3 className="text-3xl font-black uppercase mb-6 text-white tracking-tighter">{faq.q}</h3>
                       <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                         {faq.a}
                       </p>
                     </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </V5Section>
  );
};
