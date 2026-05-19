import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { CheckCircle2, ShieldCheck, Trophy, Users } from "lucide-react";

export const ProofMap = ({ business }) => {
  const icons = {
    healed: <Trophy size={32} />,
    concept: <CheckCircle2 size={32} />,
    review: <Users size={32} />,
    default: <ShieldCheck size={32} />
  };

  return (
    <V5Section id="proof" className="v5-section-py bg-white">
      <div className="v5-container">
        <div className="mb-24">
          <h2 className="text-6xl md:text-9xl v5-heading">Evidence.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {business.proof.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card-proof group hover:bg-slate-900 hover:text-white transition-all duration-500"
            >
              <div className="text-red-500 group-hover:text-white transition-colors">
                {icons[item.type] || icons.default}
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-2">{item.type}</div>
                <p className="text-xl font-bold leading-tight">
                  {item.text || "Verified performance in the Pune market."}
                </p>
              </div>
              {item.url && (
                <div className="mt-auto aspect-square rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={item.url} alt="Proof" className="w-full h-full object-cover" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </V5Section>
  );
};
