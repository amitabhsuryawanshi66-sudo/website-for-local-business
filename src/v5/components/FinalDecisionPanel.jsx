import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { MessageSquare, ArrowRight } from "lucide-react";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";

export const FinalDecisionPanel = ({ business, playbook }) => {
  const whatsappUrl = buildWhatsAppIntent(business.phone, business.niche, 'availability');

  return (
    <V5Section className="bg-[#0A0A0A] v5-section-py overflow-hidden border-t border-white/5">
      <div className="v5-container">
        <div className="relative rounded-[4rem] p-16 md:p-32 overflow-hidden border border-white/5 bg-white/[0.01] flex flex-col items-center text-center">
          {/* V5 Dynamic Aura */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-[-50%] left-[-25%] w-full h-full rounded-full blur-[160px]"
            style={{ backgroundColor: business.theme.accent }}
          />

          <div className="relative z-10 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="v4-glass px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.5em] text-red-500 mb-12 border-red-500/20"
            >
              The Mark of Excellence
            </motion.div>

            <h2 className="text-5xl md:text-[130px] v5-heading text-white mb-16 leading-[0.8]">
              Your idea deserves a <br/><span className="italic text-red-500">custom mark.</span>
            </h2>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-6 px-16 py-10 bg-white rounded-full text-black text-3xl font-black shadow-floating transition-all"
            >
              Start Consultation
              <MessageSquare size={32} />
            </motion.a>
          </div>

          {/* Editorial Watermark */}
          <div className="absolute bottom-16 left-0 right-0 opacity-[0.02] pointer-events-none select-none">
            <div className="text-[220px] font-black uppercase tracking-tighter whitespace-nowrap overflow-hidden leading-none">
              {business.name} {business.name} {business.name}
            </div>
          </div>
        </div>
      </div>
    </V5Section>
  );
};
