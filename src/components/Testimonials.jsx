import { Section } from "./Section";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials = ({ reviews, colors }) => {
  return (
    <Section className="bg-slate-900 section-py">
      <div className="container-px">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 block mb-6"
          >
            Client Satisfaction
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">Voices of <br/><span style={{ color: colors.accent }}>Excellence.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-sm relative group"
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill={colors.accent} color={colors.accent} />
                ))}
              </div>

              <p className="text-2xl text-white font-medium mb-12 leading-tight tracking-tight italic">
                "{item.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center font-black text-white text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-white text-lg leading-none mb-1">{item.name}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Verified Booking</div>
                  </div>
                </div>
                <div className="hidden sm:block opacity-20" style={{ color: colors.accent }}>
                  <Quote size={48} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
