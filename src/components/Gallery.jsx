import { Section } from "./Section";
import { motion, useReducedMotion } from "framer-motion";
import { Camera, ArrowUpRight } from "lucide-react";

export const Gallery = ({ images, colors }) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Section className="bg-white section-py">
      <div className="container-px">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10" style={{ backgroundColor: colors.accent }} />
              <span className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: colors.accent }}>Visual Portfolio</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">Style. Elegance. <br/><span style={{ color: colors.accent }}>Perspective.</span></h2>
          </div>

          <motion.a
            href="#"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 bg-slate-50 px-8 py-5 rounded-[2rem] border border-slate-100 transition-all hover:bg-slate-900 hover:text-white"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm text-slate-900 group-hover:scale-110 transition-transform">
              <Camera size={24} />
            </div>
            <div className="text-left">
              <div className="text-xs font-black uppercase tracking-widest opacity-50">Follow on Instagram</div>
              <div className="text-lg font-black flex items-center gap-1">
                @thestudio_pune
                <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[350px]"
        >
          {images.slice(0, 6).map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-[2.5rem] group cursor-pointer shadow-premium
                ${index === 0 ? 'col-span-2 row-span-2' : ''}
                ${index === 3 ? 'col-span-2' : ''}
              `}
            >
              <img
                src={img}
                alt={`Portfolio Piece ${index}`}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 backdrop-blur-[2px]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500"
                >
                  <ArrowUpRight size={32} strokeWidth={2.5} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
