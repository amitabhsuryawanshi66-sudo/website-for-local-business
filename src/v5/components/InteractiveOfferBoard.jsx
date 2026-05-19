import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { ArrowRight, Info } from "lucide-react";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";

export const InteractiveOfferBoard = ({ business, playbook }) => {
  return (
    <V5Section id="offers" className="v5-section-py">
      <div className="v5-container">
        <div className="mb-24">
          <h2 className="text-6xl md:text-9xl v5-heading">Offer <br/>Selection.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="intent-card flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-3xl font-black uppercase tracking-tighter">{offer.title}</h3>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-30">{offer.time}</div>
              </div>

              <div className="mb-10 p-6 bg-slate-50 rounded-3xl">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Base Investment</div>
                <div className="text-3xl font-black">{offer.price}</div>
              </div>

              <div className="flex-grow space-y-6 mb-12">
                 <div className="flex items-center gap-3 text-red-500">
                    <Info size={16} />
                    <span className="text-[11px] font-black uppercase tracking-widest">{offer.bestFor}</span>
                 </div>
              </div>

              <a
                href={buildWhatsAppIntent(business.phone, business.niche, 'pricing')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-v5 bg-slate-900 text-white w-full"
              >
                Inquire Price
                <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </V5Section>
  );
};
