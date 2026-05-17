import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";

export const Hero = ({ name, niche, tagline, ctaText, colors }) => {
  return (
    <section className="relative min-h-[95svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[80%] aspect-square rounded-full blur-[100px]"
          style={{ backgroundColor: colors.accent }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[80%] aspect-square rounded-full blur-[100px]"
          style={{ backgroundColor: colors.primary }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl relative"
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-8 border border-white/50 shadow-xl"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
            ))}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
            Trusted by 500+ clients in Pune
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span
            className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm border border-white/20"
            style={{ backgroundColor: `${colors.accent}20`, color: colors.accent }}
          >
            {niche}
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.95]">
          {name.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-4 last:mr-0">
              {word}
            </span>
          ))}
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          {tagline}
        </p>

        <div className="flex flex-col items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-10 py-5 rounded-3xl font-bold text-lg text-white shadow-2xl transition-all flex items-center justify-center gap-3 overflow-hidden"
            style={{ backgroundColor: colors.primary }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            {ctaText}
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={colors.accent} color={colors.accent} />)}
            </div>
            <span className="text-sm font-semibold tracking-tight">4.9/5 Rating on Instagram</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-200 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
