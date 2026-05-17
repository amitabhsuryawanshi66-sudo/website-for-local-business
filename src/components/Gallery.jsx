import { Section } from "./Section";
import { motion } from "framer-motion";

export const Gallery = ({ images, colors }) => {
  return (
    <Section className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="max-w-xl text-left">
          <motion.span
            className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 block"
          >
            Visual Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">Moments we've <span style={{ color: colors.accent }}>captured.</span></h2>
        </div>
        <button
          className="px-8 py-3 rounded-2xl font-bold border-2 border-slate-100 hover:border-slate-900 transition-colors"
        >
          View Instagram
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
        {images.slice(0, 6).map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-[32px] group cursor-pointer shadow-sm
              ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              ${index === 3 ? 'md:col-span-2' : ''}
            `}
          >
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-900 shadow-xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
