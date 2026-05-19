import { motion, useReducedMotion } from "framer-motion";
import { v2Stagger } from "../utils/motion";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

export const V2Hero = ({ data }) => {
  const shouldReduce = useReducedMotion();
  const { business, hero, theme } = data;

  const whatsappUrl = getWhatsAppUrl(business.whatsapp, "Hi! I saw your work on the website. Checking your availability!");

  return (
    <section className="relative min-h-[92svh] lg:min-h-screen flex flex-col justify-center v2-container pt-32 pb-16 overflow-hidden">
      {/* Editorial Decorative Background */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 pointer-events-none opacity-[0.05]">
        <div
          className="absolute top-[-10%] right-[-10%] w-[70%] aspect-square rounded-full blur-[120px]"
          style={{ backgroundColor: theme.accent }}
        />
      </div>

      <motion.div
        variants={v2Stagger.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10"
      >
        {/* Text Stack */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div variants={v2Stagger.item(shouldReduce)} className="mb-10">
            <span className="v2-glass px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 inline-flex items-center gap-2 border border-slate-100">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: theme.accent }} />
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={v2Stagger.item(shouldReduce)}
            className="text-6xl sm:text-8xl lg:text-[130px] v2-heading mb-10"
            dangerouslySetInnerHTML={{ __html: hero.headline }}
          />

          <motion.div variants={v2Stagger.item(shouldReduce)} className="flex flex-col md:flex-row gap-6 mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-v2-primary group"
              style={{ backgroundColor: theme.primary }}
            >
              {hero.ctaPrimary}
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-6 rounded-full font-black text-lg bg-slate-50 text-slate-900 border border-slate-100 flex items-center justify-center gap-3 transition-all hover:bg-slate-100 active:scale-95"
            >
              {hero.ctaSecondary}
            </button>
          </motion.div>

          <motion.div variants={v2Stagger.item(shouldReduce)} className="flex flex-wrap items-center gap-10 pt-10 border-t border-slate-100">
            <div className="flex flex-col">
              <span className="text-3xl font-black" style={{ color: theme.primary }}>{hero.proof.split(' ')[0]}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{hero.proof.split(' ').slice(1).join(' ')}</span>
            </div>
            <div className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-widest text-slate-900">
              <MapPin size={16} style={{ color: theme.accent }} />
              {business.location}
            </div>
          </motion.div>
        </div>

        {/* Editorial Image Composition (21st.dev Style) */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <motion.div
            variants={v2Stagger.item(shouldReduce)}
            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-v2-deep z-10"
          >
            <img src={hero.images.main} alt={business.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            variants={v2Stagger.item(shouldReduce)}
            className="absolute -bottom-10 -left-10 w-2/3 aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-v2-deep z-20 hidden md:block"
          >
            <img src={hero.images.float} alt={`${business.name} detail`} className="w-full h-full object-cover" />
          </motion.div>

          <div className="absolute top-[-5%] right-[-5%] w-24 h-24 border-t-2 border-r-2 border-slate-200 rounded-tr-[3rem] opacity-40 hidden lg:block" />
        </div>
      </motion.div>

      {/* Vertical Explore Tab */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 vertical-text">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-200 to-transparent" />
      </motion.div>
    </section>
  );
};
