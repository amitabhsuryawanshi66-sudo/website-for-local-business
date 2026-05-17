import { Section } from "./Section";
import { MapPin, Phone, Camera } from "lucide-react";

export const Location = ({ address, mapEmbed, phone, instagram, colors }) => {
  return (
    <Section className="bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
        <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.accent }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="flex gap-4 p-6 rounded-3xl bg-white shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.accent}15`, color: colors.accent }}>
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Our Studio</h3>
              <p className="text-slate-600">{address}</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-3xl bg-white shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.accent}15`, color: colors.accent }}>
              <Camera size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Social Feed</h3>
              <a href={instagram} target="_blank" rel="noreferrer" className="text-slate-600 hover:underline">
                @{instagram.split('/').pop()}
              </a>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-3xl bg-white shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.accent}15`, color: colors.accent }}>
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Call/WhatsApp</h3>
              <p className="text-slate-600">+{phone}</p>
            </div>
          </div>
        </div>

        <div className="h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
          <iframe
            src={mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};
