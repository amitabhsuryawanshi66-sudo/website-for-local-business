import { motion, useReducedMotion } from "framer-motion";
import { v5Stagger } from "../utils/motion";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";

export const IntentHero = ({ business, playbook }) => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative min-h-[95svh] lg:min-h-screen flex flex-col justify-center v5-container pt-32 pb-20 overflow-hidden">
      {/* Editorial Background Composition */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 pointer-events-none opacity-[0.1]">
        <div
          className="absolute top-[-10%] right-[-10%] w-[80%] aspect-square rounded-full blur-[140px]"
          style={{ backgroundColor: business.theme.accent }}
        />
      </div>

      <motion.div
        variants={v5Stagger.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end relative z-10"
      >
        {/* Content Column */}
        <div className="lg:col-span-8">
          <motion.div variants={v5Stagger.item(shouldReduce)} className="mb-12">
            <span className="v5-glass px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.4em] text-white/50 inline-flex items-center gap-3 border border-white/5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: business.theme.accent }} />
              {business.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={v5Stagger.item(shouldReduce)}
            className="text-6xl sm:text-8xl lg:text-[150px] v5-heading mb-12"
            dangerouslySetInnerHTML={{ __html: business.hero.headline }}
          />

          <motion.div variants={v5Stagger.item(shouldReduce)} className="flex flex-col md:flex-row items-start md:items-center gap-10">
             <a
              href={buildWhatsAppIntent(business.phone, business.niche, 'consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-intent-primary bg-white text-black"
            >
              {playbook.primaryCTA}
              <ArrowUpRight size={24} />
            </a>

            <div className="flex flex-col gap-2">
               <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.4em] text-white opacity-40">
                 <MapPin size={14} />
                 {business.location}
               </div>
               <p className="text-lg v5-subheading max-w-sm italic opacity-60">
                 {business.hero.subheadline}
               </p>
            </div>
          </motion.div>
        </div>

        {/* Visual Composition Column */}
        <div className="lg:col-span-4 relative hidden lg:block">
           <motion.div
             variants={v5Stagger.item(shouldReduce)}
             className="relative aspect-[3/4] rounded-[var(--radius-editorial)] overflow-hidden shadow-floating border border-white/5"
           >
             <img src={business.hero.image} alt={business.name} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
           </motion.div>

           {/* Floating Info Card */}
           <motion.div
             variants={v5Stagger.item(shouldReduce)}
             className="absolute -bottom-10 -left-20 v5-glass p-8 rounded-[2.5rem] shadow-floating max-w-[240px] border border-white/10"
           >
             <ShieldCheck className="mb-4 text-red-500" size={32} />
             <div className="text-3xl font-black mb-1 uppercase tracking-tighter">Verified</div>
             <p className="text-xs font-black uppercase tracking-widest text-white/40 leading-relaxed">
                Hospital-grade protocol standard in Pune studio.
             </p>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
