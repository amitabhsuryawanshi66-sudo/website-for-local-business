import { useState, useEffect } from 'react';
import { V2_CLIENT_DATA } from './data/v2ClientConfig';
import { V2Hero } from './components/V2Hero';
import { V2MobileNav } from './components/V2MobileNav';
import { V2Packages } from './components/V2Packages';
import { V2Gallery } from './components/V2Gallery';
import { V2TrustBento } from './components/V2TrustBento';
import { V2Process } from './components/V2Process';
import { V2Testimonials } from './components/V2Testimonials';
import { V2FAQ } from './components/V2FAQ';
import { V2StickyWhatsApp } from './components/V2StickyWhatsApp';
import { V2FinalCTA } from './components/V2FinalCTA';
import { V2Footer } from './components/V2Footer';

export const V2App = () => {
  const data = V2_CLIENT_DATA;

  return (
    <div className="min-h-screen bg-white" style={{ '--brand-primary': data.theme.primary, '--brand-accent': data.theme.accent }}>
      <V2MobileNav data={data} />
      <V2Hero data={data} />
      <V2Gallery data={data} />
      <V2Packages data={data} />
      <V2TrustBento data={data} />
      <V2Process data={data} />
      <V2Testimonials data={data} />
      <V2FAQ data={data} />
      <V2FinalCTA data={data} />
      <V2Footer data={data} />
      <V2StickyWhatsApp data={data} />
    </div>
  );
};
