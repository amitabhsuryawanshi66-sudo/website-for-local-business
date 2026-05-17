import { Section } from "./Section";

export const About = ({ name, colors }) => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div
            className="absolute -inset-4 rounded-[40px] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"
            style={{ backgroundColor: colors.accent }}
          />
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
            alt="About owner"
            className="relative rounded-[32px] w-full aspect-[4/5] object-cover shadow-2xl"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">Driven by passion, dedicated to your <span style={{ color: colors.accent }}>story.</span></h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Welcome to {name}. We specialize in bringing your vision to life through a blend of artistry and technical expertise. With years of experience serving clients across Pune, we've built a reputation for excellence and reliability.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether it's your wedding day, a corporate milestone, or a simple celebration at home, we treat every project with the same level of care and precision. Our goal isn't just to provide a service, but to create an unforgettable experience.
          </p>

          <div className="pt-6 grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold mb-1" style={{ color: colors.primary }}>500+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1" style={{ color: colors.primary }}>5+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
