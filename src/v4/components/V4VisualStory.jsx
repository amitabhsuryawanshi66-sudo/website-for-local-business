import { motion } from "framer-motion";
import { V4Section } from "./V4Section";
import { Instagram, ArrowUpRight } from "lucide-react";

export const V4VisualStory = ({ data }) => {
  const { portfolio, business, theme } = data;

  return (
    <V4Section id="gallery" className="bg-[#0A0A0A] v4-section-py border-y border-white/5">
      <div className="v4-container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-white/20" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40">Visual Journal</span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl v4-heading">Art in <br/><span className="italic" style={{ color: theme.accent }}>Motion.</span></h2>
          </div>

          <motion.a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-6 v4-glass px-10 py-6 rounded-[2.5rem] hover:bg-white hover:text-black transition-all duration-500"
          >
            <div className="text-left">
              <div className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-60">Follow Studio</div>
              <div className="text-xl font-black">{business.igHandle}</div>
            </div>
            <Instagram size={24} />
          </motion.a>
        </div>

        {/* Editorial Collage Layout (No V1/V2 reuse) */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[350px]">
          {portfolio.map((img, index) => {
            const spanClass =
              index === 0 ? 'col-span-2 md:col-span-4 md:row-span-1' :
              index === 1 ? 'col-span-2 md:col-span-8 md:row-span-2' :
              index === 2 ? 'col-span-2 md:col-span-4 md:row-span-2' :
              'col-span-2 md:col-span-8 md:row-span-1';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-[2.5rem] shadow-2xl group cursor-pointer border border-white/5 ${spanClass}`}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />

                <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-2">Style</div>
                  <div className="text-2xl font-black text-white uppercase italic">{img.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </V4Section>
  );
};
