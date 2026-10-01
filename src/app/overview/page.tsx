import OverviewBenefits from '@/components/overview/Benefits';
import OverviewExamples from '@/components/overview/Examples';
import OverviewHero from '@/components/overview/Hero';
import OverviewOffer from '@/components/overview/Offer';
import OverviewSocialProof from '@/components/overview/SocialProof';
import OverviewVideo from '@/components/overview/Video';

const OverviewPage = () => {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        // gradiente teste, alterar depois
        background:
          'linear-gradient(180deg, #000000 0%, #161441 50%, #000000 100%)',
      }}
    >
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
