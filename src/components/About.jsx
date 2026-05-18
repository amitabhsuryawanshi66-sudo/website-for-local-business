import { motion } from "framer-motion";
import { Section } from "./Section";
import { Sparkles } from "lucide-react";

export const About = ({ name, colors, image, text }) => {
  return (
    <Section id="about" className="bg-white section-py">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium"
            >
              <img
                src={image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"}
                alt={`About ${name}`}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent" />
            </motion.div>

            {/* Pro Max Floating Context */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute -bottom-12 -right-8 glass-morphism p-10 rounded-[3rem] shadow-hover hidden md:block max-w-[280px]"
            >
              <Sparkles className="mb-4" style={{ color: colors.accent }} />
              <div className="text-4xl font-black mb-2 tracking-tighter" style={{ color: colors.primary }}>05+</div>
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 leading-relaxed">
                Years of heritage defining premium standards in Pune.
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 space-y-12">
            <div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-12" style={{ backgroundColor: colors.accent }} />
                <span className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: colors.accent }}>The Visionary</span>
              </motion.div>
              <h2 className="text-6xl md:text-[84px] heading-pro-max">Crafting beauty, <br/><span className="italic" style={{ color: colors.accent }}>defining artistry.</span></h2>
            </div>

            <div className="space-y-8">
              <p className="text-2xl md:text-3xl text-slate-900 font-bold tracking-tight leading-[1.3]">
                Welcome to {name}. We specialize in bringing your vision to life through a blend of artistry and technical expertise.
              </p>
              <p className="text-lg text-slate-500 font-medium leading-[1.8]">
                {text || "With half a decade of experience serving the vibrant community of Pune, we've built a reputation for excellence, reliability, and an uncompromising eye for detail. Whether it's a grand wedding or an intimate celebration, we treat your moments as our own."}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-100">
              {[
                { label: 'Happy Clients', value: '500+' },
                { label: 'Service Areas', value: '12+' },
                { label: 'Avg Rating', value: '4.9/5' }
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
