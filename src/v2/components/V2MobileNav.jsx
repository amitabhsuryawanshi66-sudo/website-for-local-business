import { motion } from "framer-motion";

export const V2MobileNav = ({ data }) => {
  const { theme } = data;

  const links = [
    { label: "Portfolio", id: "gallery" },
    { label: "Packages", id: "services" },
    { label: "Trust", id: "trust" },
    { label: "FAQ", id: "faq" }
  ];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full v2-container pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
        className="v2-glass px-3 py-2.5 rounded-full flex items-center justify-between gap-4 shadow-v2-deep border border-white/50 pointer-events-auto overflow-hidden"
      >
        <div className="flex items-center gap-1 overflow-x-auto v2-no-scrollbar px-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="h-8 w-px bg-slate-200 shrink-0 hidden sm:block" />

        <button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden sm:flex px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg active:scale-95 transition-all shrink-0"
          style={{ backgroundColor: theme.primary }}
        >
          Book Now
        </button>
      </motion.nav>
    </div>
  );
};
