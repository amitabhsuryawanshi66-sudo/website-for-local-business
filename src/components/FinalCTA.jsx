import { motion } from "framer-motion";
import { Section } from "./Section";
import { MessageCircle, ArrowRight } from "lucide-react";

export const FinalCTA = ({ name, ctaText, whatsappNumber, colors }) => {
  const message = encodeURIComponent(`Hi ${name}, I'm interested in working with you!`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <Section className="pb-24">
      <div
        className="relative overflow-hidden rounded-[50px] p-12 md:p-24 text-center text-white shadow-2xl shadow-slate-200"
        style={{ backgroundColor: colors.primary }}
      >
        {/* Animated Background Gradients */}
        <div
          className="absolute inset-0 opacity-30 blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 10% 20%, ${colors.accent} 0%, transparent 40%), radial-gradient(circle at 90% 80%, ${colors.accent} 0%, transparent 40%)`
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Available for new bookings</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tight">Ready to create something <span className="opacity-70">special?</span></h2>

          <p className="text-lg md:text-xl opacity-80 mb-12 font-medium">
            Join 500+ happy clients in Pune. Click below to start a quick chat on WhatsApp and get a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-6 rounded-[30px] bg-white text-slate-900 font-black text-xl shadow-2xl flex items-center justify-center gap-3"
            >
              <MessageCircle fill="currentColor" />
              {ctaText}
            </motion.a>

            <button className="w-full sm:w-auto px-8 py-6 rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              Back to top
              <ArrowRight size={20} className="-rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
