import { motion } from "framer-motion";
import { V4Section } from "./V4Section";
import { Shield, Sparkles, Heart } from "lucide-react";

export const V4ProofWall = ({ data }) => {
  const { proofWall, theme } = data;
  const icons = [Shield, Sparkles, Heart];

  return (
    <V4Section className="bg-[#0A0A0A] v4-section-py">
      <div className="v4-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {proofWall.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="v4-card p-12 flex flex-col gap-10 hover:shadow-v2-glow"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-red-500">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </V4Section>
  );
};
