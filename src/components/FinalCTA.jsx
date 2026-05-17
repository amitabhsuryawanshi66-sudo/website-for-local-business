import { motion } from "framer-motion";
import { Section } from "./Section";
import { MessageCircle, ArrowRight, ArrowUp } from "lucide-react";

export const FinalCTA = ({ name, ctaText, whatsappNumber, colors }) => {
  const message = encodeURIComponent(`Hi ${name}, I'm interested in working with you!`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <Section className="pb-24 pt-0">
      <div className="container-px">
        <div
          className="relative overflow-hidden rounded-[4rem] px-8 py-20 md:p-32 text-center text-white shadow-hover"
          style={{ backgroundColor: colors.primary }}
        >
          {/* High-impact Animated Background */}
          <div className="absolute inset-0 opacity-40 mix-blend-soft-light pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-from)_0%,_transparent_50%)]" style={{ '--tw-gradient-from': colors.accent }} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-12"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Slots available this month</span>
            </motion.div>

            <h2 className="text-6xl md:text-[110px] font-black mb-12 leading-[0.85] tracking-[ -0.05em]">Let's build <br/><span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>magic together.</span></h2>

            <p className="text-xl md:text-3xl opacity-70 mb-16 font-medium leading-tight max-w-2xl mx-auto">
              Join Pune's elite circle of clients. Start your journey with a single tap.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-8 rounded-[2.5rem] bg-white text-slate-900 font-black text-2xl shadow-2xl flex items-center justify-center gap-4 group"
              >
                <MessageCircle fill="currentColor" size={28} className="group-hover:rotate-12 transition-transform" />
                {ctaText}
              </motion.a>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Go to Top
                <ArrowUp size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
