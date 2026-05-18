import { useState, useEffect } from 'react';
import { V2_BUSINESS_DATA } from './data/v2ClientConfig';
import { V2MobileNav } from './components/V2MobileNav';
import { V2Hero } from './components/V2Hero';
import { V2About } from './components/V2About';
import { V2TrustBento } from './components/V2TrustBento';
import { V2Packages } from './components/V2Packages';
import { V2Gallery } from './components/V2Gallery';
import { V2Process } from './components/V2Process';
import { V2Testimonials } from './components/V2Testimonials';
import { V2FAQ } from './components/V2FAQ';
import { V2FinalCTA } from './components/V2FinalCTA';
import { V2StickyWhatsApp } from './components/V2StickyWhatsApp';
import { V2Footer } from './components/V2Footer';

export const V2App = () => {
  const [demo, setDemo] = useState('bridal_makeup');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const demoParam = params.get('demo');
    if (demoParam && V2_BUSINESS_DATA[demoParam]) {
      setDemo(demoParam);
    }
  }, []);

  const data = V2_BUSINESS_DATA[demo];

  if (!data) return <div className="p-10 text-center">Business not found.</div>;

  return (
    <div className="min-h-screen bg-white" style={{ '--brand-primary': data.tokens.primary, '--brand-accent': data.tokens.accent }}>
      {/* V2 Demo Switcher (Floating Glass Pill) */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[110] v2-glass px-5 py-2.5 rounded-full flex gap-3 text-[10px] font-black uppercase tracking-widest shadow-deep border border-slate-200 no-scrollbar overflow-x-auto max-w-[90vw] whitespace-nowrap">
        {Object.keys(V2_BUSINESS_DATA).map((key) => (
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

      <V2MobileNav data={data} />
      <V2Hero data={data} />
      <V2About data={data} />
      <V2TrustBento data={data} />
      <V2Packages data={data} />
      <V2Gallery data={data} />
      <V2Process data={data} />
      <V2Testimonials data={data} />
      <V2FAQ data={data} />
      <V2FinalCTA data={data} />
      <V2Footer data={data} />
      <V2StickyWhatsApp data={data} />
    </div>
  );
};
