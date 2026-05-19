import { Instagram, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const V4Footer = ({ data }) => {
  const { business, theme } = data;

  return (
    <footer className="bg-[#0A0A0A] text-white pt-40 pb-16 relative overflow-hidden border-t border-white/5">
      <div className="v4-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">{business.name}</h2>
            <p className="text-slate-500 text-2xl font-medium max-w-lg mb-12 leading-relaxed">
              Boutique appointment-only artistry specializing in the permanent and the profound.
            </p>
            <div className="flex gap-6">
              <motion.a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 shadow-xl"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </motion.a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-600 mb-10">Intel</h3>
            <ul className="space-y-6">
              {['Experience', 'Services', 'Gallery', 'FAQ'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xl font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-tight"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-600 mb-10">KP Studio</h3>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <MapPin className="shrink-0 mt-1 text-red-600" size={24} />
                <span className="text-xl font-bold text-slate-300">{business.location}</span>
              </div>
              <div className="flex items-center gap-5">
                <Phone className="shrink-0 text-red-600" size={24} />
                <span className="text-xl font-bold text-slate-300 uppercase tracking-tighter">Inquiry Only</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 text-slate-600 font-bold text-sm">
            <span>© 2024 {business.name}.</span>
            <span className="hidden md:block opacity-20">|</span>
            <span className="text-slate-400">Premium Mini Site V4 — Clean-Room Skill Build</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600 text-sm font-black uppercase tracking-widest">
            Handcrafted for <span className="text-white">Pune Artistry</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};
