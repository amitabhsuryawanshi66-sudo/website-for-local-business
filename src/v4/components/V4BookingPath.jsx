import { motion } from "framer-motion";
import { V4Section } from "./V4Section";

export const V4BookingPath = ({ data }) => {
  const { booking, theme } = data;

  return (
    <V4Section id="booking" className="bg-[#0A0A0A] v4-section-py">
      <div className="v4-container">
        <div className="text-center mb-32">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="v4-glass px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/40 mb-8"
          >
            The Appointment Path
          </motion.div>
          <h2 className="text-6xl md:text-9xl v4-heading">Securing your <br/><span className="italic" style={{ color: theme.accent }}>Session.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {booking.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-[120px] font-black text-white/5 leading-none absolute -top-10 -left-6 select-none">{item.step}</div>
              <div className="relative z-10 pt-10">
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </V4Section>
  );
};
