import { Section } from "./Section";

export const Gallery = ({ images, colors }) => {
  return (
    <Section className="bg-slate-50/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
        <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.accent }} />
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-2xl shadow-sm">
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
