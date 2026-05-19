import { motion, useReducedMotion } from "framer-motion";
import { v5Stagger } from "../utils/motion";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";
import { ArrowUpRight, MapPin } from "lucide-react";

export const IntentHero = ({ business, playbook }) => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative min-h-[92svh] lg:min-h-screen flex flex-col justify-center v5-container pt-32 pb-16 overflow-hidden">
      <motion.div
        variants={v5Stagger.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10"
      >
        <div className="lg:col-span-8 order-2 lg:order-1">
          <motion.div variants={v5Stagger.item(shouldReduce)} className="mb-10">
            <span className="v5-badge bg-white/5 border-white/10 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] inline-flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: business.theme.accent }} />
              {business.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={v5Stagger.item(shouldReduce)}
            className="text-6xl sm:text-8xl lg:text-[140px] v5-heading mb-10"
            dangerouslySetInnerHTML={{ __html: business.hero.headline }}
          />

          <motion.div variants={v5Stagger.item(shouldReduce)} className="flex flex-col md:flex-row gap-6 mb-16">
            <a
              href={buildWhatsAppIntent(business.phone, business.niche, 'consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-v5 bg-white text-black group"
            >
              {playbook.primaryCTA}
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-widest opacity-40">
              <MapPin size={16} />
              {business.location}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 order-1 lg:order-2">
           <motion.div
             variants={v5Stagger.item(shouldReduce)}
             className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-v5-high"
           >
             <img src={business.hero.image} alt={business.name} className="w-full h-full object-cover" />
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
