import { motion } from "framer-motion";
import { V4Section } from "./V4Section";

export const V4ExperienceFlow = ({ data }) => {
  const { experience, theme } = data;

  return (
    <V4Section id="experience" className="bg-[#0A0A0A] text-white v4-section-py overflow-hidden">
      <div className="v4-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-white/20" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40">Our Method</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl v4-heading mb-10">{experience.title}</h2>
            <p className="text-xl v4-subheading max-w-sm">
              We treat every tattoo as a bespoke concierge service, from initial thought to final mark.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-32 lg:pl-20 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />

            {experience.steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="relative pl-12 md:pl-24"
              >
                <div
                  className="absolute -left-[13px] top-0 w-6 h-6 rounded-full border-4 border-[#0A0A0A]"
                  style={{ backgroundColor: theme.accent }}
                />
                <div className="text-[10px] font-black text-white/20 mb-4 tracking-[0.5em]">{step.id}</div>
                <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">{step.title}</h3>
                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </V4Section>
  );
};
