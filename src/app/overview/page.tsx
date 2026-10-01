import OverviewBenefits from '@/components/overview/Benefits';
import OverviewExamples from '@/components/overview/Examples';
import OverviewHero from '@/components/overview/Hero';
import OverviewOffer from '@/components/overview/Offer';
import OverviewSocialProof from '@/components/overview/SocialProof';
import OverviewVideo from '@/components/overview/Video';
import Link from 'next/link';

const OverviewPage = () => {
  return (
    <main className="min-h-screen bg-(--dark-background) text-white">
      <OverviewHero />
      <OverviewVideo />
      <OverviewExamples />
      <OverviewBenefits />
      <OverviewSocialProof />
      <OverviewOffer />
    </main>
  );
};

export default OverviewPage;
