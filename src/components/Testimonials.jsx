import { Section } from "./Section";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials = ({ reviews, colors }) => {
  return (
    <Section className="bg-slate-50/50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
          style={{ backgroundColor: colors.primary, color: 'white' }}
        >
          <Quote fill="currentColor" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Kind words from <span style={{ color: colors.accent }}>Pune.</span></h2>
        <p className="text-slate-500 text-lg">We've helped hundreds of local clients achieve their vision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all duration-500"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={18} fill={colors.accent} color={colors.accent} />
              ))}
            </div>

            <p className="text-xl text-slate-700 mb-10 font-medium leading-relaxed italic">
              "{item.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center font-bold text-slate-400">
                {item.name.charAt(0)}
              </div>
              <div>
                <div className="font-black text-slate-900 leading-tight">{item.name}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Verified Client</div>
              </div>
            </div>

            <div className="absolute top-10 right-10 text-slate-50 group-hover:text-slate-100 transition-colors -z-0">
              <Quote size={80} fill="currentColor" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
