import { motion } from "framer-motion";
import { MessageSquare, Instagram } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const V4StickyInquiry = ({ data }) => {
  const { business, theme } = data;
  const whatsappUrl = getWhatsAppUrl(business.whatsapp, "Hi Obsidian! I have a tattoo idea I'd like to discuss.");

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-48px)] max-w-md">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 3 }}
        className="v4-glass p-2 rounded-full flex gap-2 shadow-2xl border border-white/20"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow flex items-center justify-center gap-3 py-4 rounded-full bg-white text-black font-black uppercase text-xs tracking-widest active:scale-95 transition-transform"
        >
          <MessageSquare size={16} />
          Start Consultation
        </a>
        <a
          href={business.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-90 transition-transform"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </motion.div>
    </div>
  );
};
