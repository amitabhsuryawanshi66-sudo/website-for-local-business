import { motion } from "framer-motion";
import { Section } from "./Section";

export const About = ({ name, colors, image, text }) => {
  return (
    <Section id="about" className="bg-white section-py">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-hover"
            >
              <img
                src={image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"}
                alt={`About ${name}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Experience Floating Badge */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-8 glass-morphism p-8 rounded-[2.5rem] shadow-2xl hidden md:block"
            >
              <div className="text-5xl font-black mb-1" style={{ color: colors.primary }}>05+</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-500">Years of <br/> Pune Heritage</div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px w-10" style={{ backgroundColor: colors.accent }} />
                <span className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: colors.accent }}>Our Story</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">Crafting beauty, <br/>defining <span style={{ color: colors.accent }}>artistry.</span></h2>
            </div>

            <div className="space-y-6 max-w-2xl">
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
                Welcome to {name}. We specialize in bringing your vision to life through a blend of artistry and technical expertise.
              </p>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                {text || "With half a decade of experience serving the vibrant community of Pune, we've built a reputation for excellence, reliability, and an uncompromising eye for detail. Whether it's a grand wedding or an intimate celebration, we treat your moments as our own."}
              </p>
            </div>

            <div className="flex flex-wrap gap-12 pt-6">
              {[
                { label: 'Happy Clients', value: '500+' },
                { label: 'Service Areas', value: '12+' },
                { label: 'Rating', value: '4.9/5' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black mb-1" style={{ color: colors.primary }}>{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
