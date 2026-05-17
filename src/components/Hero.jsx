import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const Hero = ({ name, niche, tagline, ctaText, colors }) => {
  return (
    <section className="relative min-h-[90svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10"
        style={{
          background: `radial-gradient(circle at center, ${colors.primary} 0%, transparent 70%)`
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-6"
          style={{ backgroundColor: `${colors.accent}15`, color: colors.accent }}
        >
          {niche}
        </motion.span>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          {name}
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          {tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-2"
            style={{ backgroundColor: colors.primary }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {ctaText}
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
