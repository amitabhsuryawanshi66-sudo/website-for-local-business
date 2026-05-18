import { motion } from "framer-motion";
import { Section } from "./Section";
import { Check, ArrowUpRight } from "lucide-react";

export const Services = ({ data }) => {
  const { services, colors, whatsappNumber } = data;

  return (
    <Section id="services" className="bg-slate-50/50 section-py">
      <div className="container-px">
        {/* V2 Master Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px" style={{ backgroundColor: colors.accent }} />
              <span className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: colors.accent }}>The Experience</span>
            </motion.div>
            <h2 className="text-6xl md:text-[100px] heading-v2">Choose your <br/><span className="italic" style={{ color: colors.accent }}>perfection.</span></h2>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-xl body-v2 max-w-sm">
              Transparent investment for premium results. Tailored for Pune's finest celebrations.
            </p>
          </div>
        </div>

        {/* Pro Max Service Cards (21st.dev Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="v2-card group overflow-hidden flex flex-col h-full hover:-translate-y-4"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                  <div>
                    <div className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Starting from</div>
                    <div className="text-white text-4xl font-black">{service.price}</div>
                  </div>
                  {service.badge && (
                    <div className="v2-glass px-4 py-2 rounded-full mb-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{service.badge}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-12 flex-grow flex flex-col">
                <h3 className="text-3xl font-black mb-6 group-hover:text-accent transition-colors" style={{ '--accent': colors.accent }}>{service.title}</h3>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed font-medium">{service.description}</p>

                <div className="space-y-5 mb-12 flex-grow">
                  {[
                    'Premium Product Standards',
                    'Expert Service Delivery',
                    'Digital Gallery included',
                    'Priority Support'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.accent}15`, color: colors.accent }}>
                        <Check size={10} strokeWidth={4} />
                      </div>
                      <span className="text-sm font-bold text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I'm interested in the ${service.title} package. Please share details!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="btn-v2-primary w-full"
                  style={{ backgroundColor: colors.primary }}
                >
                  Check Availability
                  <ArrowUpRight size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
