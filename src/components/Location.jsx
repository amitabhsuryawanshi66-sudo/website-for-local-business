import { motion } from "framer-motion";
import { Section } from "./Section";
import { MapPin, Phone, Camera } from "lucide-react";

export const Location = ({ address, mapEmbed, phone, instagram, colors }) => {
  return (
    <Section className="bg-slate-50 section-py">
      <div className="container-px">
        <div className="text-center mb-20">
          <motion.span
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block mb-6"
          >
            Our Presence
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">Find us in <br/><span style={{ color: colors.accent }}>Pune City.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Our Studio", detail: address, link: null },
              { icon: Camera, title: "Social Feed", detail: `@${instagram.split('/').pop()}`, link: instagram },
              { icon: Phone, title: "Call/WhatsApp", detail: `+${phone}`, link: `https://wa.me/${phone}` }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="flex gap-6 p-8 rounded-[2.5rem] bg-white shadow-premium border border-slate-100 group transition-all"
              >
                <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110" style={{ backgroundColor: `${colors.accent}15`, color: colors.accent }}>
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="text-lg text-slate-500 font-medium hover:text-slate-900 transition-colors">
                      {item.detail}
                    </a>
                  ) : (
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.detail}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-[500px] rounded-[3.5rem] overflow-hidden shadow-hover border-8 border-white sticky top-32"
          >
            <iframe
              src={mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
