import { motion } from "framer-motion";

export const DecisionDock = ({ business, playbook }) => {
  const options = [
    { label: "Availability", action: "availability" },
    { label: "Pricing", action: "pricing" },
    { label: "Book", action: "consultation" }
  ];

  return (
    <div className="decision-dock">
      {options.map((opt) => (
        <button
          key={opt.action}
          className="px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-950 transition-colors"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};
