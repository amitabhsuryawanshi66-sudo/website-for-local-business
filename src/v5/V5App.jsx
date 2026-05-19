import { useState, useEffect } from 'react';
import { V5_DEMO_BUSINESSES } from './data/v5DemoBusinesses';
import { NICHE_PLAYBOOKS } from './engine/nichePlaybooks';
import { ARCHETYPES } from './engine/archetypeRegistry';
import { IntentHero } from './components/IntentHero';
import { DecisionDock } from './components/DecisionDock';
import { InteractiveOfferBoard } from './components/InteractiveOfferBoard';
import { ObjectionResolver } from './components/ObjectionResolver';
import { VisualNarrative } from './components/VisualNarrative';
import { ProofMap } from './components/ProofMap';
import { FinalDecisionPanel } from './components/FinalDecisionPanel';
import { V5Footer } from './components/V5Footer';
import { NicheSignalStrip } from './components/NicheSignalStrip';
import { StickyDecisionBar } from './components/StickyDecisionBar';

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

  if (!business) return <div className="p-20 text-center font-black uppercase tracking-widest text-red-500">Engine Error: Niche not found.</div>;

  const componentMap = {
    hero: <IntentHero key="hero" business={business} playbook={playbook} />,
    signals: <NicheSignalStrip key="signals" business={business} />,
    decision_dock: <DecisionDock key="dock" business={business} playbook={playbook} />,
    visual_narrative: <VisualNarrative key="gallery" business={business} />,
    offers: <InteractiveOfferBoard key="offers" business={business} playbook={playbook} />,
    proof: <ProofMap key="proof" business={business} />,
    objection_resolver: <ObjectionResolver key="faq" business={business} />,
    close: <FinalDecisionPanel key="close" business={business} playbook={playbook} />
  };

  return (
    <div
      className={`min-h-screen archetype-${business.archetype} selection:bg-red-600 selection:text-white`}
      style={{
        '--brand-primary': business.theme.primary,
        '--brand-accent': business.theme.accent,
        '--glow-color': `${business.theme.accent}22`
      }}
    >
      {/* V5 Pro Max Demo Switcher */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[110] bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex gap-1 shadow-floating">
        {Object.keys(V5_DEMO_BUSINESSES).map(key => (
          <button
            key={key}
            onClick={() => setDemoKey(key)}
            className={`px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all ${demoKey === key ? 'bg-white text-black shadow-high' : 'text-white/40 hover:text-white'}`}
          >
            {key}
          </button>
        ))}
      </div>

      {playbook.sectionFlow.map(sectionId => componentMap[sectionId])}

      <V5Footer business={business} />
      <StickyDecisionBar business={business} playbook={playbook} />
    </div>
  );
};
