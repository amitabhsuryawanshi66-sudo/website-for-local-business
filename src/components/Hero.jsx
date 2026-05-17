import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export const Hero = ({ name, niche, tagline, ctaText, colors, stats }) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      filter: shouldReduceMotion ? "none" : "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Fallback stats if not provided
  const displayStats = stats || [
    { value: '500+', label: 'Happy Clients' },
    { value: '5yr+', label: 'Experience' },
    { value: 'Pune', label: 'Based' }
  ];

  return (
    <section className="relative min-h-[90svh] lg:min-h-screen flex flex-col items-center justify-center text-center container-px overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: colors.accent }}
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-10%] left-[-10%] w-[60%] aspect-square rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: colors.primary }}
        />
      </div>

      <motion.div
        className="max-w-5xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: colors.accent }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: colors.accent }} />
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            Now booking for 2024-25 in Pune
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-[100px] font-black tracking-tight text-slate-900 mb-8 leading-[0.9] flex flex-col"
        >
          <span>{name.split(' ')[0]}</span>
          <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${colors.primary}` }}>
            {name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <span className="h-px w-8 bg-slate-200 hidden md:block" />
          <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-xl leading-snug">
            {tagline}
          </p>
          <span className="h-px w-8 bg-slate-200 hidden md:block" />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-8">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-12 py-6 rounded-full font-black text-xl text-white shadow-2xl flex items-center justify-center gap-3 transition-transform relative group overflow-hidden"
            style={{ backgroundColor: colors.primary }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10">{ctaText}</span>
            <ArrowDownRight size={24} className="relative z-10 group-hover:rotate-45 transition-transform" />
          </motion.button>

          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-8 border-t border-slate-100 w-full max-w-2xl">
            {displayStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl font-black" style={{ color: colors.primary }}>{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
