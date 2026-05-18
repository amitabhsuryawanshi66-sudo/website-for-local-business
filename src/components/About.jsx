import { motion } from "framer-motion";
import { Section } from "./Section";

export const About = ({ data }) => {
  const { name, about, colors } = data;

  return (
    <Section id="about" className="bg-white section-py overflow-hidden">
      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          {/* V2 Editorial Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-deep group"
            >
              <img
                src={about.image}
                alt={`About ${name}`}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute -bottom-10 -right-10 v2-glass p-12 rounded-[3.5rem] shadow-deep hidden md:block max-w-[280px]"
            >
              <div className="text-6xl font-black mb-3 tracking-tighter" style={{ color: colors.primary }}>05+</div>
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 leading-relaxed">
                Years of heritage defining premium standards in Pune.
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="h-px w-12" style={{ backgroundColor: colors.accent }} />
                <span className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: colors.accent }}>{about.title}</span>
              </motion.div>
              <h2
                className="text-6xl md:text-[90px] heading-v2"
                dangerouslySetInnerHTML={{ __html: about.headline }}
              />
            </div>

            <div className="space-y-8 max-w-2xl">
              <p className="text-2xl md:text-3xl text-slate-900 font-bold tracking-tight leading-[1.35]">
                {about.text.split('.')[0]}.
              </p>
              <p className="text-xl text-slate-500 font-medium leading-[1.7]">
                {about.text.split('.').slice(1).join('.')}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-slate-100">
              {[
                { label: 'Happy Clients', value: '500+' },
                { label: 'Avg Rating', value: '4.9/5' },
                { label: 'Studio', value: 'Pune' }
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
