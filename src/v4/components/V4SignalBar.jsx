import { motion } from "framer-motion";

export const V4SignalBar = ({ data }) => {
  const { signals, theme } = data;

  return (
    <div className="bg-white py-4 overflow-hidden border-y border-slate-100">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 whitespace-nowrap items-center"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex gap-20">
            {signals.map((signal, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">{signal}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
