import { motion, useReducedMotion } from "framer-motion";
import { V2Section } from "./V2Section";
import { ArrowUpRight, MapPin } from "lucide-react";

export const V2Hero = ({ data }) => {
  const shouldReduceMotion = useReducedMotion();
  const { name, hero, location, whatsappNumber, tokens } = data;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40, filter: "blur(20px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <V2Section id="hero" className="relative min-h-[95svh] lg:min-h-screen flex flex-col justify-center container-px pt-32 pb-16 overflow-hidden">
      {/* Editorial Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[60%] aspect-square rounded-full blur-[100px]"
          style={{ backgroundColor: tokens.accent }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
      >
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div variants={item} className="mb-10">
            <span className="v2-badge bg-white shadow-sm border border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: tokens.accent }} />
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-6xl sm:text-8xl lg:text-[120px] heading-v2 mb-10"
            dangerouslySetInnerHTML={{ __html: hero.headline }}
          />

          <motion.div variants={item} className="flex flex-col md:flex-row gap-6 mb-16">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-v2-primary group"
              style={{ backgroundColor: tokens.primary }}
            >
              {hero.ctaPrimary}
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-v2-secondary"
            >
              {hero.ctaSecondary}
            </button>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-10 pt-10 border-t border-slate-100">
            {hero.proofPoints.map((point, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-black" style={{ color: tokens.primary }}>{point.value}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{point.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900">
              <MapPin size={14} style={{ color: tokens.accent }} />
              {location}
            </div>
          </motion.div>
        </div>

        {/* Editorial Image Composition */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <motion.div
            variants={item}
            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-deep z-10"
          >
            <img src={hero.mainImage} alt={name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            variants={item}
            className="absolute -bottom-10 -left-10 w-2/3 aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-deep z-20 hidden md:block"
          >
            <img src={hero.secondaryImage} alt={`${name} work`} className="w-full h-full object-cover" />
          </motion.div>

          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-slate-200 rounded-tr-[3rem] opacity-50 hidden lg:block" />
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 vertical-text">Explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-200 to-transparent" />
      </motion.div>
    </V2Section>
  );
};
