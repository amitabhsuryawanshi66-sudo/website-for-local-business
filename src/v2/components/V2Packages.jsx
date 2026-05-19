import { motion } from "framer-motion";
import { V2Section } from "./V2Section";
import { Check, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const V2Packages = ({ data }) => {
  const { packages, business, theme } = data;

  return (
    <V2Section id="services" className="bg-slate-50/50 v2-section-py">
      <div className="v2-container">
        {/* V2 Mastery Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px" style={{ backgroundColor: theme.accent }} />
              <span className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: theme.accent }}>Exclusive Packages</span>
            </motion.div>
            <h2 className="text-6xl md:text-[100px] v2-heading">Select your <br/><span className="italic" style={{ color: theme.accent }}>perfection.</span></h2>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-xl v2-body max-w-sm">
              Transparent investment tiers for Pune's most celebrated occasions. Crafted for durability and impact.
            </p>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="v2-card p-12 md:p-20 flex flex-col h-full hover:shadow-v2-deep group"
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-4xl font-black mb-4 group-hover:text-accent transition-colors" style={{ '--accent': theme.accent }}>{pkg.title}</h3>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">{pkg.desc}</p>
                </div>
                {pkg.badge && (
                  <span className="v2-glass px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 border border-slate-100">
                    {pkg.badge}
                  </span>
                )}
              </div>

              <div className="mb-12">
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Total Investment</div>
                <div className="text-5xl font-black" style={{ color: theme.primary }}>{pkg.price}</div>
              </div>

              <div className="space-y-6 mb-16 flex-grow">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: `${theme.accent}15`, color: theme.accent }}>
                      <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-lg font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={getWhatsAppUrl(business.whatsapp, pkg.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="btn-v2-primary w-full"
                style={{ backgroundColor: theme.primary }}
              >
                Check Availability
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </V2Section>
  );
};
