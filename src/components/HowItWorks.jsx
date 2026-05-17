import { Section } from "./Section";

export const HowItWorks = ({ steps, colors }) => {
  return (
    <Section className="bg-slate-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.accent }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            <div className="mb-6 flex items-center gap-4">
              <span
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: colors.accent, color: 'white' }}
              >
                {index + 1}
              </span>
              <div className="h-px flex-grow bg-white/10 hidden lg:block" />
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-slate-400 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
