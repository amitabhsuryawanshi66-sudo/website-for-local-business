import { motion, useReducedMotion } from "framer-motion";
import { v4Stagger } from "../utils/motion";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";

export const V4Hero = ({ data }) => {
  const shouldReduce = useReducedMotion();
  const { business, hero, theme } = data;

  const whatsappUrl = getWhatsAppUrl(business.whatsapp, "Hi Obsidian! I saw your work on the website. Checking your availability for a tattoo session.");

  return (
    <section className="relative min-h-[92svh] lg:min-h-screen flex flex-col justify-center v4-container pt-32 pb-16 overflow-hidden bg-[#0A0A0A]">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 pointer-events-none opacity-[0.1]">
        <div
          className="absolute top-[-10%] right-[-10%] w-[80%] aspect-square rounded-full blur-[140px]"
          style={{ backgroundColor: theme.accent }}
        />
      </div>

      <motion.div
        variants={v4Stagger.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10"
      >
        {/* Text Stack */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div variants={v4Stagger.item(shouldReduce)} className="mb-10">
            <span className="v4-glass px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white/60 inline-flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accent }} />
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={v4Stagger.item(shouldReduce)}
            className="text-6xl sm:text-8xl lg:text-[140px] v4-heading mb-10"
            dangerouslySetInnerHTML={{ __html: hero.headline }}
          />

          <motion.div variants={v4Stagger.item(shouldReduce)} className="flex flex-col md:flex-row gap-6 mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-v4-ink group"
            >
              {hero.ctaPrimary}
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-v4-outline"
            >
              {hero.ctaSecondary}
            </button>
          </motion.div>

          <motion.div variants={v4Stagger.item(shouldReduce)} className="flex flex-wrap items-center gap-10 pt-10 border-t border-white/5">
             <div className="flex items-center gap-3">
               <ShieldCheck size={24} style={{ color: theme.accent }} />
               <div className="flex flex-col">
                 <span className="text-xl font-black text-white">{hero.trust.split(' ')[2]}</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Global Standards</span>
               </div>
             </div>
            <div className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-widest text-white/40">
              <MapPin size={16} />
              {business.location}
            </div>
          </motion.div>
        </div>

        {/* Cinematic Card Stack */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <motion.div
            variants={v4Stagger.item(shouldReduce)}
            className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl z-10"
          >
            <img src={hero.images.main} alt="Tattoo Concept" className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
          </motion.div>

          <motion.div
            variants={v4Stagger.item(shouldReduce)}
            className="absolute -bottom-10 -left-10 w-2/3 aspect-square rounded-[2rem] overflow-hidden border-[12px] border-[#0A0A0A] shadow-2xl z-20 hidden md:block"
          >
            <img src={hero.images.secondary} alt="Artist Detail" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
