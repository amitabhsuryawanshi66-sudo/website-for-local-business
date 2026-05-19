import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { CheckCircle } from "lucide-react";

export const ObjectionResolver = ({ business, playbook }) => {
  return (
    <V5Section id="faq" className="v5-section-py border-t border-slate-100">
      <div className="v5-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-9xl v5-heading">Briefing.</h2>
          </div>

          <div className="space-y-6">
            {business.faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50/50 p-10 rounded-[2.5rem] border border-slate-100">
                <div className="flex items-start gap-5">
                   <CheckCircle className="shrink-0 mt-1" size={24} />
                   <div>
                     <h3 className="text-2xl font-black uppercase mb-4">{faq.q}</h3>
                     <p className="text-xl v5-subheading">{faq.a}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </V5Section>
  );
};
