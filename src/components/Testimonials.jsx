import { Section } from "./Section";
import { Star } from "lucide-react";

export const Testimonials = ({ reviews, colors }) => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Love</h2>
        <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.accent }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reviews.map((item, index) => (
          <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 italic relative">
            <div className="flex gap-1 mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={16} fill={colors.accent} color={colors.accent} />
              ))}
            </div>
            <p className="text-slate-700 mb-6 relative z-10">"{item.text}"</p>
            <span className="font-bold text-slate-900 not-italic">— {item.name}</span>
            <div className="absolute top-6 right-8 text-6xl text-slate-200 font-serif leading-none select-none -z-0">“</div>
          </div>
        ))}
      </div>
    </Section>
  );
};
