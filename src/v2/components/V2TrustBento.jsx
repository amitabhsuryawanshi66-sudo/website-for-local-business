import { motion } from "framer-motion";
import { V2Section } from "./V2Section";
import { Award, Star, MapPin, Sparkles } from "lucide-react";

export const V2TrustBento = ({ data }) => {
  const { trustBento, colors } = data;

  const bentoItems = [
    { ...trustBento.experience, icon: Award, class: 'md:col-span-4' },
    { ...trustBento.reviews, icon: Star, class: 'md:col-span-8' },
    { ...trustBento.location, icon: MapPin, class: 'md:col-span-7' },
    { ...trustBento.specialization, icon: Sparkles, class: 'md:col-span-5' }
  ];

  return (
    <V2Section className="bg-slate-50 section-py">
      <div className="container-px">
        <div className="text-center mb-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="v2-badge mb-8 bg-slate-100"
          >
            Pune Verified
          </motion.div>
          <h2 className="text-6xl md:text-[100px] heading-v2">Trust. <span className="italic" style={{ color: colors.accent }}>Excellence.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className={`v2-card p-12 md:p-16 flex flex-col justify-between hover:shadow-deep ${item.class}`}
            >
              <div className="flex justify-between items-start mb-16">
                <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-sm" style={{ backgroundColor: `${colors.accent}15`, color: colors.accent }}>
                  <item.icon size={28} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{item.label}</div>
              </div>

              <div>
                <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter" style={{ color: colors.primary }}>{item.value}</div>
                <p className="text-xl body-v2 max-w-[240px]">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </V2Section>
  );
};
