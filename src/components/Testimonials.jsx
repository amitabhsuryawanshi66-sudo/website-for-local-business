import { motion } from "framer-motion";
import { Section } from "./Section";
import { Star } from "lucide-react";

export const Testimonials = ({ reviews, colors }) => {
  return (
    <Section id="testimonials" className="bg-white section-py overflow-hidden">
      <div className="container-px">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10" style={{ backgroundColor: colors.accent }} />
              <span className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: colors.accent }}>Success Stories</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">Trusted by <br/><span style={{ color: colors.accent }}>hundreds.</span></h2>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="font-black text-xl">4.9/5 Average</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-8 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-10 italic text-slate-800">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black text-white" style={{ backgroundColor: colors.primary }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-black text-lg">{review.name}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Verified Customer</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
