import { motion } from "framer-motion";
import { V2Section } from "./V2Section";
import { ArrowUpRight } from "lucide-react";

export const V2Gallery = ({ data }) => {
  const { gallery, colors, instagramHandle, instagramLink } = data;

  return (
    <V2Section id="gallery" className="bg-white section-py">
      <div className="container-px">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px" style={{ backgroundColor: colors.accent }} />
              <span className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: colors.accent }}>Visual Journal</span>
            </motion.div>
            <h2 className="text-6xl md:text-[100px] heading-v2">Bespoke <br/><span className="italic" style={{ color: colors.accent }}>Portfolio.</span></h2>
          </div>

          <motion.a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group inline-flex items-center gap-5 v2-glass px-10 py-6 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all duration-500"
          >
            <div className="text-left">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-60">Follow Story</div>
              <div className="text-xl font-black">{instagramHandle}</div>
            </div>
            <ArrowUpRight size={24} className="opacity-40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </motion.a>
        </div>

        {/* Editorial Masonry/Collage Layout */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {gallery.map((img, index) => {
            const spanClass =
              index === 0 ? 'col-span-2 md:col-span-8 md:row-span-2' :
              index === 1 ? 'col-span-2 md:col-span-4 md:row-span-2' :
              index === 2 ? 'col-span-2 md:col-span-4 md:row-span-1' :
              index === 3 ? 'col-span-2 md:col-span-8 md:row-span-1' :
              'col-span-2 md:col-span-6 md:row-span-1';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-[3rem] shadow-premium group cursor-pointer ${spanClass}`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-black/20 backdrop-blur-[4px]">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-deep scale-50 group-hover:scale-100 transition-transform duration-700">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </V2Section>
  );
};
