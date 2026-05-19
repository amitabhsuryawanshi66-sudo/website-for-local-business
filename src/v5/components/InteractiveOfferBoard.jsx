import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { ArrowRight, Info, Zap } from "lucide-react";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";

export const InteractiveOfferBoard = ({ business, playbook }) => {
  return (
    <V5Section id="offers" className="v5-section-py">
      <div className="v5-container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-32">
           <div className="max-w-4xl">
             <motion.div
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="flex items-center gap-4 mb-8 text-red-500"
             >
               <Zap size={18} fill="currentColor" />
               <span className="text-[11px] font-black uppercase tracking-[0.4em]">Intent Selector</span>
             </motion.div>
             <h2 className="text-6xl md:text-9xl v5-heading">Curated <br/><span className="italic" style={{ color: business.theme.accent }}>Directions.</span></h2>
           </div>
           <p className="text-xl v5-subheading max-w-sm">
             Select the intent that matches your vision. Pricing is anchored on complexity and total session time.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="card-decision flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">{offer.title}</h3>
                <div className="px-3 py-1 rounded bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/40">{offer.time}</div>
              </div>

              <div className="mb-12 p-8 bg-white/[0.03] rounded-[2rem] border border-white/5">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Starting Investment</div>
                <div className="text-4xl font-black text-white">{offer.price}</div>
              </div>

              <div className="flex-grow space-y-8 mb-16">
                 <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <p className="text-sm font-black uppercase tracking-widest text-slate-400">{offer.bestFor}</p>
                 </div>
                 <p className="text-lg font-medium text-slate-500 leading-relaxed italic">
                    Ideal for those seeking precision and anatomical flow.
                 </p>
              </div>

              <motion.a
                href={buildWhatsAppIntent(business.phone, business.niche, 'pricing')}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="btn-intent-primary bg-white text-black w-full"
              >
                Inquire Slot
                <ArrowRight size={22} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </V5Section>
  );
};
