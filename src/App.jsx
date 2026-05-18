import { useState, useEffect } from 'react';
import { BUSINESS_DATA } from './data/clientConfig';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { FinalCTA } from './components/FinalCTA';
import { Location } from './components/Location';

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
      {/* V2 Demo Switcher (Floating Glass Pill) */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] v2-glass px-5 py-2.5 rounded-full flex gap-3 text-[10px] font-black uppercase tracking-widest shadow-deep border border-slate-200 no-scrollbar overflow-x-auto max-w-[90vw] whitespace-nowrap">
        {Object.keys(BUSINESS_DATA).map((key) => (
          <button
            key={key}
            onClick={() => {
              setDemo(key);
              window.history.pushState({}, '', `?demo=${key}`);
            }}
            className={`px-4 py-2 rounded-full transition-all ${
              demo === key
                ? 'bg-slate-950 text-white shadow-xl'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {key.replace('_', ' ')}
          </button>
        ))}
      </div>

      <Hero data={data} />

      <About data={data} />

      <Services data={data} />

      <Gallery data={data} />

      <HowItWorks data={data} />

      <Testimonials
        reviews={data.testimonials}
        colors={data.colors}
      />

      <FAQ data={data} />

      <FinalCTA
        name={data.name}
        ctaText={data.ctaText}
        whatsappNumber={data.whatsappNumber}
        prefill={data.whatsappPrefill}
        colors={data.colors}
      />

      <Location
        address={data.address}
        mapEmbed={data.mapEmbed}
        phone={data.whatsappNumber}
        instagram={data.instagramLink}
        colors={data.colors}
      />

      <Footer data={data} />

      <WhatsAppCTA
        phone={data.whatsappNumber}
        businessName={data.name}
        prefill={data.whatsappPrefill}
      />
    </div>
  );
}

export default App;
