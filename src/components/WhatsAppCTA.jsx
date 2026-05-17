import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppCTA = ({ phone, businessName }) => {
  const message = encodeURIComponent(`Hi ${businessName}, I found your website and I'm interested in your services!`);
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-medium shadow-sm border border-slate-100 whitespace-nowrap hidden md:block">
        Chat with us
      </span>
    </motion.a>
  );
};
