import { motion } from "framer-motion";
import { V2Section } from "./V2Section";
import { ArrowRight, Instagram } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const V2FinalCTA = ({ data }) => {
  const { business, theme, footerCTA } = data;
  const whatsappUrl = getWhatsAppUrl(business.whatsapp, "Hi! I'm ready to book. Let's discuss my date.");

  return (
    <V2Section className="bg-white v2-section-py overflow-hidden">
      <div className="v2-container">
        <div
          className="relative rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-v2-deep flex flex-col items-center text-center"
          style={{ backgroundColor: theme.primary }}
        >
          {/* V2 Motion Orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/4 w-full h-full rounded-full blur-[140px]"
            style={{ backgroundColor: theme.accent }}
          />

          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="v2-glass px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white/80 border-white/10 mb-10"
            >
              The Final Step
            </motion.div>

            <h2
              className="text-5xl md:text-[110px] v2-heading text-white mb-12"
              dangerouslySetInnerHTML={{ __html: footerCTA.headline }}
            />

            <p className="text-xl md:text-2xl text-white/60 font-medium mb-20 max-w-2xl mx-auto leading-relaxed">
              {footerCTA.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-8 bg-white rounded-full text-slate-950 text-2xl font-black shadow-v2-deep flex items-center justify-center gap-4 transition-all"
              >
                {footerCTA.btn}
                <ArrowRight size={28} />
              </motion.a>

              <motion.a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-white text-lg font-black flex items-center justify-center gap-3 transition-all hover:bg-white/20"
              >
                <Instagram size={20} />
                Follow Instagram
              </motion.a>
            </div>
          </div>

          {/* Editorial Watermark */}
          <div className="absolute bottom-10 left-0 right-0 opacity-[0.03] pointer-events-none select-none">
            <div className="text-[180px] font-black uppercase tracking-tighter whitespace-nowrap overflow-hidden leading-none">
              {business.name} {business.name} {business.name}
            </div>
          </div>
        </div>
      </div>
    </V2Section>
  );
};
