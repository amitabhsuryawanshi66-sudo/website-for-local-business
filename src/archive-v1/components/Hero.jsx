import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

export const Hero = ({ data }) => {
  const shouldReduceMotion = useReducedMotion();
  const { name, hero, colors, location, ctaText, whatsappNumber, whatsappPrefill } = data;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappPrefill)}`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center container-px pt-20 pb-12 overflow-hidden">
      {/* Editorial Background */}
      <div className="absolute inset-0 -z-20 bg-white" />
      <div className="absolute top-0 right-0 w-full h-full -z-10 overflow-hidden opacity-10">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] aspect-square rounded-full blur-[120px]" style={{ backgroundColor: colors.accent }} />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full relative z-10"
      >
        {/* V2 Badge */}
        <motion.div variants={item} className="mb-12">
          <span className="v2-badge">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
            </span>
            {hero.badge}
          </span>
        </motion.div>

        {/* Pro Max Title Composition (Asymmetric) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9">
            <motion.h1 variants={item} className="text-6xl sm:text-8xl lg:text-[140px] heading-v2 mb-8">
              <span className="block">{name.split(' ')[0]}</span>
              <span className="block text-transparent italic leading-[0.7]" style={{ WebkitTextStroke: `2px ${colors.primary}` }}>
                {name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>
          </div>

          <div className="lg:col-span-3 lg:pb-12">
            <motion.div variants={item} className="flex items-center gap-2 text-slate-400 mb-6 font-black uppercase tracking-widest text-[10px]">
              <MapPin size={12} />
              {location}
            </motion.div>
            <motion.p variants={item} className="text-xl md:text-2xl body-v2 mb-10 max-w-sm">
              {hero.subheadline}
            </motion.p>
          </div>
        </div>

        {/* Conversion & Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 border-t border-slate-100 items-start">
          <motion.div variants={item} className="md:col-span-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-v2-primary w-full group"
              style={{ backgroundColor: colors.primary }}
            >
              {ctaText}
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={item} className="md:col-span-8 grid grid-cols-3 gap-8 md:pl-12">
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-black mb-1" style={{ color: colors.primary }}>{stat.value}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 w-px h-32 bg-slate-100 hidden lg:block" />
    </section>
  );
};
