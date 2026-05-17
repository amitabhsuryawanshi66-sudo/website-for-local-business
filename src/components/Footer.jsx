import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";

export const Footer = ({ name, niche, location, instagram, colors }) => {
  return (
    <footer className="py-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{name}</h2>
          <p className="text-slate-500">{niche}</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href={instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors">
              <Camera size={20} />
            </a>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400">
              <MapPin size={20} />
            </div>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {name}. Built for same-day delivery.
          </p>
        </div>
      </div>
    </footer>
  );
};
