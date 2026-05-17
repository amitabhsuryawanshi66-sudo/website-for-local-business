import { motion, useReducedMotion } from "framer-motion";
import { Section } from "./Section";
import { Check, ArrowRight } from "lucide-react";

export const Services = ({ services, colors }) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Section id="services" className="bg-slate-50/30 section-py">
      <div className="container-px">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10" style={{ backgroundColor: colors.accent }} />
              <span className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: colors.accent }}>Premium Packages</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">Choose your <br/>perfect <span style={{ color: colors.accent }}>experience.</span></h2>
          </div>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-sm leading-relaxed">
            Transparent pricing with no hidden costs. Tailored for the modern Pune lifestyle.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="premium-card flex flex-col h-full overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="text-white text-3xl font-black mb-1">{service.price}</div>
                  <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Starting Price</div>
                </div>
                {index === 1 && (
                  <div className="absolute top-8 right-8 bg-white px-4 py-2 rounded-full shadow-xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Most Popular</span>
                  </div>
                )}
              </div>

              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{service.description}</p>

                <div className="space-y-4 mb-10 flex-grow">
                  {[
                    'Expert Stylist / Specialist',
                    'Premium Product Selection',
                    'Digital Proofs included',
                    'Priority Support'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: `${colors.accent}15`, color: colors.accent }}>
                        <Check size={10} strokeWidth={4} />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 bg-slate-900 text-white shadow-xl hover:shadow-2xl active:scale-[0.98]"
                >
                  Book this Package
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
