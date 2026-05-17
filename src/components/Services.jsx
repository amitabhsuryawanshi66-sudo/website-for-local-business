import { motion } from "framer-motion";
import { Section } from "./Section";

export const Services = ({ services, colors }) => {
  return (
    <Section id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Packages</h2>
        <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.accent }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="premium-card overflow-hidden flex flex-col h-full"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-slate-900 shadow-sm">
                {service.price}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              <button
                className="w-full py-3 rounded-xl font-medium transition-colors border-2"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                Inquire Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
