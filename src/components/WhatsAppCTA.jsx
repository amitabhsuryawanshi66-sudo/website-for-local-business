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
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-[2rem] shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute inset-0 bg-white/20 rounded-[2rem] animate-ping group-hover:hidden" />
      <MessageCircle size={32} fill="currentColor" className="relative z-10" />
      <span className="absolute right-full mr-5 bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl border border-slate-800 whitespace-nowrap hidden md:block opacity-0 group-hover:opacity-100 transition-all">
        Send WhatsApp
      </span>
    </motion.a>
  );
};
