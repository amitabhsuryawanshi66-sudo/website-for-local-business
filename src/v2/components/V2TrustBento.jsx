import { motion } from "framer-motion";
import { V2Section } from "./V2Section";
import { Award, Star, MapPin, Sparkles } from "lucide-react";

export const V2TrustBento = ({ data }) => {
  const { trust, theme } = data;

  const icons = [Award, Star, Sparkles, MapPin];

  return (
    <V2Section id="trust" className="bg-slate-50/50 v2-section-py">
      <div className="v2-container">
        <div className="text-center mb-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="v2-glass px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 mb-8"
          >
            Verified Pune Heritage
          </motion.div>
          <h2 className="text-6xl md:text-[100px] v2-heading">Trust. <span className="italic" style={{ color: theme.accent }}>Excellence.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          {trust.map((item, index) => {
            const Icon = icons[index % icons.length];
            const spanClass = index === 0 ? 'md:col-span-4' : index === 1 ? 'md:col-span-8' : index === 2 ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05 }}
                className={`v2-card p-12 md:p-16 flex flex-col justify-between hover:shadow-v2-deep ${spanClass}`}
              >
                <div className="flex justify-between items-start mb-16">
                  <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-sm" style={{ backgroundColor: `${theme.accent}15`, color: theme.accent }}>
                    <Icon size={28} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{item.label}</div>
                </div>

                <div>
                  <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter" style={{ color: theme.primary }}>{item.value}</div>
                  <p className="text-xl v2-body max-w-[240px]">{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </V2Section>
  );
};
