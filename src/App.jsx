import { useState, useEffect } from 'react';
import { BUSINESS_DATA } from './config';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppCTA } from './components/WhatsAppCTA';

function App() {
  const [demo, setDemo] = useState('bridal_makeup');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const demoParam = params.get('demo');
    if (demoParam && BUSINESS_DATA[demoParam]) {
      setDemo(demoParam);
    }
  }, []);

  const data = BUSINESS_DATA[demo];

  if (!data) return <div className="p-10 text-center">Business not found.</div>;

  return (
    <div className="min-h-screen bg-white" style={{ '--brand-primary': data.colors.primary, '--brand-accent': data.colors.accent }}>
      {/* Demo Switcher - Floating Pill (Only for demo purposes) */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] glass-morphism px-4 py-2 rounded-full flex gap-4 text-xs font-bold uppercase tracking-wider shadow-xl border border-slate-200">
        {Object.keys(BUSINESS_DATA).map((key) => (
          <button
            key={key}
            onClick={() => {
              setDemo(key);
              window.history.pushState({}, '', `?demo=${key}`);
            }}
            className={`px-3 py-1.5 rounded-full transition-all ${
              demo === key
                ? 'bg-slate-900 text-white'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {key.replace('_', ' ')}
          </button>
        ))}
      </div>

      <Hero
        name={data.name}
        niche={data.niche}
        tagline={data.tagline}
        ctaText={data.ctaText}
        colors={data.colors}
      />

      <About
        name={data.name}
        colors={data.colors}
      />

      <Services
        services={data.services}
        colors={data.colors}
      />

      <Gallery
        images={data.gallery}
        colors={data.colors}
      />

      <HowItWorks
        steps={data.process}
        colors={data.colors}
      />

      <Testimonials
        reviews={data.testimonials}
        colors={data.colors}
      />

      <FAQ
        faqs={data.faqs}
        colors={data.colors}
      />

      <Location
        address={data.address}
        mapEmbed={data.mapEmbed}
        phone={data.whatsappNumber}
        instagram={data.instagramLink}
        colors={data.colors}
      />

      <Footer
        name={data.name}
        niche={data.niche}
        location={data.location}
        instagram={data.instagramLink}
        colors={data.colors}
      />

      <WhatsAppCTA
        phone={data.whatsappNumber}
        businessName={data.name}
      />
    </div>
  );
}

export default App;
