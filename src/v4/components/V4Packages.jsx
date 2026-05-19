import { motion } from "framer-motion";
import { V4Section } from "./V4Section";
import { ArrowRight, Clock, UserCheck } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const V4Packages = ({ data }) => {
  const { services, business, theme } = data;

  return (
    <V2Section id="services" className="bg-[#0A0A0A] v4-section-py border-t border-white/5">
      <div className="v4-container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-white/20" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40">Work Styles</span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl v4-heading">Service <br/><span className="italic" style={{ color: theme.accent }}>Tiers.</span></h2>
          </div>
          <p className="text-xl v4-subheading max-w-sm">
            Pricing is estimated based on complexity and session time. Custom sketches included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="v4-card p-10 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-2xl font-black text-white group-hover:text-red-500 transition-colors uppercase tracking-tighter">{service.title}</h3>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/20">{service.time}</div>
              </div>

              <div className="mb-10 p-6 bg-white/5 rounded-2xl">
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Investment</div>
                 <div className="text-2xl font-black text-white">{service.price}</div>
              </div>

              <div className="space-y-8 flex-grow mb-12">
                 <div>
                   <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-red-500 mb-3">
                     <UserCheck size={12} />
                     Best For
                   </div>
                   <p className="text-slate-400 font-bold">{service.bestFor}</p>
                 </div>
                 <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>

              <motion.a
                href={getWhatsAppUrl(business.whatsapp, service.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="btn-v4-outline w-full group-hover:bg-white group-hover:text-black transition-all"
              >
                Inquire Now
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </V2Section>
  );
};
