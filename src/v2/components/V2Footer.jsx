import { Instagram, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const V2Footer = ({ data }) => {
  const { business, theme } = data;

  return (
    <footer className="bg-slate-950 text-white pt-40 pb-16 relative overflow-hidden">
      {/* Editorial Background Text */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="text-[250px] font-black uppercase tracking-tighter leading-none select-none">
          {business.name} {business.name}
        </div>
      </div>

      <div className="v2-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">{business.name}</h2>
            <p className="text-slate-400 text-2xl font-medium max-w-lg mb-12 leading-relaxed">
              Redefining boutique {business.niche.toLowerCase()} standards for Pune's most celebrated weddings.
            </p>
            <div className="flex gap-6">
              <motion.a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-500"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </motion.a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-10">Navigation</h3>
            <ul className="space-y-6">
              {['Gallery', 'Services', 'Trust', 'FAQ'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xl font-bold text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 mb-10">Studio</h3>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <MapPin className="shrink-0 mt-1" style={{ color: theme.accent }} size={24} />
                <span className="text-xl font-bold text-slate-300">{business.location}</span>
              </div>
              <div className="flex items-center gap-5">
                <Phone className="shrink-0" style={{ color: theme.accent }} size={24} />
                <span className="text-xl font-bold text-slate-300">WhatsApp First</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 text-slate-500 font-bold text-sm">
            <span>© 2024 {business.name}.</span>
            <span className="hidden md:block opacity-20">|</span>
            <span className="text-slate-700">Premium Mini Site V2 — Real Rebuild</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500 text-sm font-black uppercase tracking-widest">
            Handcrafted in <span className="text-white">Pune</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};
