import { motion } from "framer-motion";

export const NicheSignalStrip = ({ business }) => {
  const signals = business.signals || ["Certified Quality", "Pune Studio", "Professional Care"];

  return (
    <div className="bg-slate-900 py-4 overflow-hidden border-y border-white/5">
      <motion.div
        animate={{ x: [0, -500] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 whitespace-nowrap items-center"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex gap-20">
            {signals.map((signal, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-red-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">{signal}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
