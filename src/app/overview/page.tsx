import OverviewBenefits from '../../components/overview/Benefits';
import OverviewExamples from '../../components/overview/Examples';
import OverviewHero from '../../components/overview/Hero';
import OverviewOffer from '../../components/overview/Offer';
import OverviewSocialProof from '../../components/overview/SocialProof';
import OverviewVideo from '../../components/overview/Video';

const OverviewPage = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <a href="\" className="fixed">
        voltar
      </a>
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
