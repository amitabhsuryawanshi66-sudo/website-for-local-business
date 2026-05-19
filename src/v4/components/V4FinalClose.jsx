import { motion } from "framer-motion";
import { V4Section } from "./V4Section";
import { ArrowRight, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const V4FinalClose = ({ data }) => {
  const { business, finalClose, theme } = data;
  const whatsappUrl = getWhatsAppUrl(business.whatsapp, "Hi! I'm ready to discuss my custom tattoo idea. Let's connect.");

  return (
    <V4Section className="bg-[#0A0A0A] v4-section-py overflow-hidden">
      <div className="v4-container">
        <div className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden border border-white/5 bg-white/[0.02] flex flex-col items-center text-center">
          {/* Animated Glow */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-[-50%] left-[-25%] w-full h-full rounded-full blur-[140px]"
            style={{ backgroundColor: theme.accent }}
          />

          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="v4-glass px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-10 border-red-500/20"
            >
              Consultation Desk
            </motion.div>

            <h2
              className="text-5xl md:text-[110px] v4-heading text-white mb-12"
              dangerouslySetInnerHTML={{ __html: finalClose.headline }}
            />

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-12 py-8 bg-white rounded-full text-black text-2xl font-black shadow-2xl transition-all"
            >
              {finalClose.btn}
              <MessageSquare size={28} />
            </motion.a>
          </div>

          {/* Subtle Watermark */}
          <div className="absolute bottom-10 left-0 right-0 opacity-[0.02] pointer-events-none select-none">
            <div className="text-[180px] font-black uppercase tracking-tighter whitespace-nowrap overflow-hidden leading-none">
              {business.name} {business.name} {business.name}
            </div>
          </div>
        </div>
      </div>
    </V4Section>
  );
};
