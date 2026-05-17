import { motion } from "framer-motion";
import { Section } from "./Section";
import { Check, ArrowRight } from "lucide-react";

export const Services = ({ services, colors }) => {
  return (
    <Section id="services" className="bg-slate-50/50">
      <div className="text-center mb-16">
        <motion.span
          className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 block"
        >
          Specialized Services
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Our Signature <span style={{ color: colors.accent }}>Packages</span></h2>
        <p className="text-slate-500 max-w-xl mx-auto text-lg">Choose a package that perfectly fits your requirements and budget.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white rounded-[40px] p-2 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative"
          >
            <div className="relative h-72 overflow-hidden rounded-[32px] mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur inline-block px-5 py-2 rounded-full font-black text-slate-900 shadow-xl text-lg">
                  {service.price}
                </div>
              </div>
            </div>

            <div className="px-6 pb-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-black mb-4 group-hover:text-slate-700 transition-colors">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">{service.description}</p>

              <ul className="space-y-3 mb-10 flex-grow">
                {['Premium Quality', 'Same-day Delivery', 'Expert Consultation'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.accent}15`, color: colors.accent }}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ gap: '12px' }}
                className="w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 border-2 border-slate-100 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900"
              >
                Select Package
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
