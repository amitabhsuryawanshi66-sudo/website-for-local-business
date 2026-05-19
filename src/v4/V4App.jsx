import { V4_CLIENT_DATA } from './data/v4ClientConfig';
import { V4Hero } from './components/V4Hero';
import { V4SignalBar } from './components/V4SignalBar';
import { V4ExperienceFlow } from './components/V4ExperienceFlow';
import { V4Packages } from './components/V4Packages';
import { V4VisualStory } from './components/V4VisualStory';
import { V4ProofWall } from './components/V4ProofWall';
import { V4BookingPath } from './components/V4BookingPath';
import { V4FAQ } from './components/V4FAQ';
import { V4StickyInquiry } from './components/V4StickyInquiry';
import { V4FinalClose } from './components/V4FinalClose';
import { V4Footer } from './components/V4Footer';

export const V4App = () => {
  const data = V4_CLIENT_DATA;

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-slate-100 overflow-x-hidden">
      <V4Hero data={data} />
      <V4SignalBar data={data} />
      <V4ExperienceFlow data={data} />
      <V4VisualStory data={data} />
      <V4Packages data={data} />
      <V4ProofWall data={data} />
      <V4BookingPath data={data} />
      <V4FAQ data={data} />
      <V4FinalClose data={data} />
      <V4Footer data={data} />
      <V4StickyInquiry data={data} />
    </main>
  );
};
