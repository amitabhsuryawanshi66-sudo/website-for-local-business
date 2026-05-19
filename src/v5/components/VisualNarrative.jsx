import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { Instagram, ArrowUpRight } from "lucide-react";

export const VisualNarrative = ({ business }) => {
  const { proof, name } = business;

  return (
    <V5Section id="gallery" className="bg-[#0A0A0A] v5-section-py border-y border-white/5">
      <div className="v5-container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8 text-white/40"
            >
              <Instagram size={18} />
              <span className="text-[11px] font-black uppercase tracking-[0.5em]">Style Fragments</span>
            </motion.div>
            <h2 className="text-6xl md:text-[120px] v5-heading text-white">Visual <br/><span className="italic text-red-500">Authority.</span></h2>
          </div>

          <motion.a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-8 v5-glass px-12 py-8 rounded-[4rem] hover:bg-white hover:text-black transition-all duration-700"
          >
            <div className="text-left">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Follow Daily Story</div>
              <div className="text-2xl font-black">{business.igHandle}</div>
            </div>
            <ArrowUpRight size={28} className="opacity-20 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>

        {/* Asymmetric Narrative Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-10 auto-rows-[300px] md:auto-rows-[450px]">
          {proof.filter(p => p.url).map((img, index) => {
            const spanClass =
              index === 0 ? 'col-span-2 md:col-span-8 md:row-span-1' :
              index === 1 ? 'col-span-2 md:col-span-4 md:row-span-2' :
              'col-span-2 md:col-span-8 md:row-span-1';

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                className={`narrative-item group ${spanClass}`}
              >
                <img
                  src={img.url}
                  alt={`${name} Proof`}
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />

                <div className="absolute bottom-12 left-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                  <div className="text-[11px] font-black uppercase tracking-[0.4em] text-red-500 mb-3">Portfolio</div>
                  <div className="text-3xl font-black text-white uppercase italic tracking-tighter">
                     {img.type === 'healed' ? 'Healed Evidence' : 'Concept Phase'}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </V5Section>
  );
};
