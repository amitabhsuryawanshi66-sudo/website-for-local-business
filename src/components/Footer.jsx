import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";

export const Footer = ({ name, niche, instagram, colors }) => {
  return (
    <footer className="py-20 container-px border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black text-slate-900 mb-2">{name}</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{niche}</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
            >
              <Camera size={24} />
            </motion.a>
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shadow-sm">
              <MapPin size={24} />
            </div>
          </div>
          <p className="text-xs font-bold text-slate-300 uppercase tracking-[0.2em] text-center md:text-right">
            © {new Date().getFullYear()} {name}. <br className="md:hidden" /> Crafted for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};
