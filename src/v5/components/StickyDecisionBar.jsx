import { motion } from "framer-motion";
import { MessageSquare, Instagram } from "lucide-react";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";

export const StickyDecisionBar = ({ business, playbook }) => {
  const whatsappUrl = buildWhatsAppIntent(business.phone, business.niche, 'availability');

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-48px)] max-w-lg">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 3 }}
        className="v4-glass p-2.5 rounded-full flex gap-3 shadow-floating border border-white/20"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow flex items-center justify-center gap-4 py-5 rounded-full bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] active:scale-95 transition-all shadow-2xl"
        >
          <MessageSquare size={18} />
          Brief Artist
        </a>
        <a
          href={business.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-90 transition-all border border-white/10"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
      </motion.div>
    </div>
  );
};
