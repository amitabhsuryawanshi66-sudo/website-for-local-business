import { ArrowUpRight } from "lucide-react";

export const V5Footer = ({ business }) => {
  return (
    <footer className="bg-white py-20 border-t border-slate-100">
      <div className="v2-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 text-slate-500 font-bold text-sm">
            <span>© 2024 {business.name}.</span>
            <span className="hidden md:block opacity-20">|</span>
            <span className="text-slate-700">Premium Mini Site V5 — Niche Engine Build</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500 text-sm font-black uppercase tracking-widest">
            Niche-Engine Powered
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};
