import { motion } from "framer-motion";
import { V2Section } from "./V2Section";

export const V2Testimonials = ({ data }) => {
  const { testimonials, colors } = data;

  return (
    <V2Section id="testimonials" className="bg-white section-py overflow-hidden">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px" style={{ backgroundColor: colors.accent }} />
              <span className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: colors.accent }}>Verified Praise</span>
            </motion.div>
            <h2 className="text-6xl md:text-[100px] heading-v2">Loved by <br/><span className="italic" style={{ color: colors.accent }}>hundreds.</span></h2>
          </div>
          <div className="lg:col-span-4 lg:pb-4 flex flex-col items-start lg:items-end gap-3">
             <div className="flex text-yellow-400">
               {[...Array(5)].map((_, i) => (
                 <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
               ))}
             </div>
             <span className="font-black text-2xl tracking-tighter">4.9/5 Overall Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="p-12 md:p-16 rounded-[4rem] bg-slate-50/50 border border-slate-100 flex flex-col justify-between relative group"
            >
              <div className="relative z-10">
                <div className="mb-10 opacity-20 group-hover:opacity-40 transition-opacity">
                   <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: colors.primary }}>
                     <path d="M13.2353 0C5.93277 0 0 5.68421 0 12.6316C0 17.6842 2.64706 20.8421 6.61765 20.8421C4.63235 25.2632 2.31513 28.4211 0 30.9474L2.64706 36C8.60294 32.2105 13.5651 25.8947 17.2059 17.6842L18.5294 13.8947V0H13.2353ZM39.7059 0C32.4034 0 26.4706 5.68421 26.4706 12.6316C26.4706 17.6842 29.1176 20.8421 33.0882 20.8421C31.1029 25.2632 28.7857 28.4211 26.4706 30.9474L29.1176 36C35.0735 32.2105 40.0357 25.8947 43.6765 17.6842L45 13.8947V0H39.7059Z" fill="currentColor"/>
                   </svg>
                </div>
                <p className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.3] mb-16 text-slate-800 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-deep" style={{ backgroundColor: colors.primary }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-black text-xl tracking-tight">{review.name}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Verified Client</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </V2Section>
  );
};
