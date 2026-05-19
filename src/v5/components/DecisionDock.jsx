import { motion } from "framer-motion";
import { v5Spring } from "../utils/motion";

export const DecisionDock = ({ business, playbook }) => {
  const options = [
    { label: "Book Consultation", action: "consultation" },
    { label: "Request Pricing", action: "pricing" },
    { label: "Check Available Slots", action: "availability" }
  ];

  return (
    <div className="v5-thumb-dock no-scrollbar overflow-x-auto">
      <div className="flex gap-2 w-full">
        {options.map((opt, idx) => (
          <button
            key={opt.action}
            className={`px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all active:scale-95
              ${idx === 0 ? 'bg-white text-black shadow-tactile' : 'bg-black/10 text-slate-500 border border-white/10'}
            `}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};
