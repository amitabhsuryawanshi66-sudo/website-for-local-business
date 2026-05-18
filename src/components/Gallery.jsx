import { Section } from "./Section";
import { motion } from "framer-motion";
import { Camera, ArrowUpRight } from "lucide-react";

export const Gallery = ({ data }) => {
  const { gallery, colors, instagramHandle, instagramLink } = data;

  return (
    <Section id="gallery" className="bg-white section-py">
      <div className="container-px">
        {/* V2 Header composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Camera size={18} />
              <span className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: colors.accent }}>Visual Journal</span>
            </motion.div>
            <h2 className="text-6xl md:text-[100px] heading-v2">Elegance. <br/><span className="italic" style={{ color: colors.accent }}>Perspective.</span></h2>
          </div>

          <div className="lg:col-span-4 lg:text-right lg:pb-4">
            <motion.a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 v2-glass px-8 py-6 rounded-[2.5rem] group hover:bg-slate-900 hover:text-white transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-white group-hover:scale-110 transition-all">
                <Camera size={24} />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-60 transition-opacity">Latest Work</div>
                <div className="text-lg font-black tracking-tight">{instagramHandle}</div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Pro Max Bento Portfolio (21st.dev style) */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {gallery.slice(0, 6).map((img, index) => {
            const spanClass =
              index === 0 ? 'col-span-2 row-span-2 md:col-span-3 md:row-span-2' :
              index === 1 ? 'col-span-2 row-span-1 md:col-span-3 md:row-span-1' :
              index === 2 ? 'col-span-1 row-span-1 md:col-span-2 md:row-span-1' :
              index === 3 ? 'col-span-1 row-span-1 md:col-span-2 md:row-span-1' :
              index === 4 ? 'col-span-2 row-span-1 md:col-span-2 md:row-span-1' :
              'col-span-2 row-span-1 md:col-span-3 md:row-span-1';

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
                  src={img}
                  alt={`Portfolio Piece ${index + 1}`}
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
    </Section>
  );
};
