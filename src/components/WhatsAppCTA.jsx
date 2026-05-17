import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppCTA = ({ phone, businessName, prefill }) => {
  const message = encodeURIComponent(prefill || `Hi ${businessName}, I'm interested in your services!`);
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  const shouldReduceMotion = useReducedMotion();

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
      <motion.div
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-white/40 rounded-[2rem] group-hover:hidden"
      />
      <MessageCircle size={32} fill="currentColor" className="relative z-10" />
      <span className="absolute right-full mr-5 bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl border border-slate-800 whitespace-nowrap hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        Enquire on WhatsApp
      </span>
    </motion.a>
  );
};
