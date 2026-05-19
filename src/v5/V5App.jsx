import { useState, useEffect } from 'react';
import { V5_DEMO_BUSINESSES } from './data/v5DemoBusinesses';
import { NICHE_PLAYBOOKS } from './engine/nichePlaybooks';
import { ARCHETYPES } from './engine/archetypeRegistry';
import { IntentHero } from './components/IntentHero';
import { DecisionDock } from './components/DecisionDock';
import { NicheSignalStrip } from './components/NicheSignalStrip';
import { InteractiveOfferBoard } from './components/InteractiveOfferBoard';
import { ObjectionResolver } from './components/ObjectionResolver';
import { V5Footer } from './components/V5Footer';

export const V5App = () => {
  const [demoKey, setDemoKey] = useState('tattoo');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = params.get('demo');
    if (d && V5_DEMO_BUSINESSES[d]) setDemoKey(d);
  }, []);

  const business = V5_DEMO_BUSINESSES[demoKey];
  const playbook = NICHE_PLAYBOOKS[business.niche];
  const archetype = ARCHETYPES[business.archetype];

  if (!business) return <div>Engine Error: Niche not found.</div>;

  return (
    <div
      className={`min-h-screen archetype-${business.archetype}`}
      style={{
        '--brand-primary': business.theme.primary,
        '--brand-accent': business.theme.accent,
        '--glow-color': `${business.theme.accent}33`
      }}
    >
      {/* V5 Demo Switcher */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[110] bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full flex gap-2">
        {Object.keys(V5_DEMO_BUSINESSES).map(key => (
          <button
            key={key}
            onClick={() => setDemoKey(key)}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${demoKey === key ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            {key}
          </button>
        ))}
      </div>

      <IntentHero business={business} playbook={playbook} />
      <NicheSignalStrip business={business} />
      <DecisionDock business={business} playbook={playbook} />
      <InteractiveOfferBoard business={business} playbook={playbook} />
      <ObjectionResolver business={business} playbook={playbook} />
      <V5Footer business={business} />
    </div>
  );
};
