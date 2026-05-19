import { motion } from "framer-motion";
import { V2Section } from "./V2Section";
import { ArrowRight, Instagram } from "lucide-react";

export const V2FinalCTA = ({ data }) => {
  const { name, colors, whatsappNumber, whatsappPrefill, instagramLink, finalCTA } = data;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappPrefill)}`;

  return (
    <V2Section className="bg-white py-32 overflow-hidden">
      <div className="container-px">
        <div
          className="relative rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-deep flex flex-col items-center text-center"
          style={{ backgroundColor: colors.primary }}
        >
          {/* V2 Motion Orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/4 w-full h-full rounded-full blur-[140px]"
            style={{ backgroundColor: colors.accent }}
          />

          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="v2-badge border-white/10 bg-white/10 text-white/80 mb-10"
            >
              Start Your Journey
            </motion.div>

            <h2
              className="text-5xl md:text-[110px] heading-v2 text-white mb-12"
              dangerouslySetInnerHTML={{ __html: finalCTA.headline }}
            />

            <p className="text-xl md:text-2xl text-white/60 font-medium mb-20 max-w-2xl mx-auto leading-relaxed">
              {finalCTA.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-8 bg-white rounded-full text-slate-900 text-2xl font-black shadow-deep flex items-center justify-center gap-4 transition-all"
              >
                {finalCTA.primaryButton}
                <ArrowRight size={28} />
              </motion.a>

              <motion.a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-white text-lg font-black flex items-center justify-center gap-3 transition-all hover:bg-white/20"
              >
                <Instagram size={20} />
                {finalCTA.secondaryButton}
              </motion.a>
            </div>
          </div>

          {/* Editorial Watermark */}
          <div className="absolute bottom-10 left-0 right-0 opacity-[0.03] pointer-events-none select-none">
            <div className="text-[180px] font-black uppercase tracking-tighter whitespace-nowrap overflow-hidden leading-none">
              {name} {name} {name}
            </div>
          </div>
        </div>
      </div>
    </V2Section>
  );
};
