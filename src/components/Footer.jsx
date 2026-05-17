import { Instagram, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = ({ name, niche, location, instagram, colors }) => {
  return (
    <footer className="bg-slate-900 text-white pt-32 pb-12">
      <div className="container-px">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-6">{name}</h2>
            <p className="text-slate-400 text-xl font-medium max-w-md mb-10 leading-relaxed">
              Premium {niche.toLowerCase()} services in {location}. Focused on quality, elegance, and customer satisfaction.
            </p>
            <div className="flex gap-4">
              <motion.a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['About', 'Services', 'Gallery', 'Reviews', 'FAQ'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = link.toLowerCase() === 'reviews' ? 'testimonials' : link.toLowerCase();
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-lg font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="shrink-0 mt-1" style={{ color: colors.accent }} size={20} />
                <span className="text-lg font-bold text-slate-300">{location}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="shrink-0" style={{ color: colors.accent }} size={20} />
                <span className="text-lg font-bold text-slate-300">Available on WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 font-bold text-sm">
            © 2024 {name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
            Designed for <span className="text-white">Premium Pune Brands</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
};
