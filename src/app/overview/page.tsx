import OverviewBenefits from '../../components/sections/OverviewBenefits';
import OverviewExamples from '../../components/sections/OverviewExamples';
import OverviewHero from '../../components/sections/OverviewHero';
import OverviewOffer from '../../components/sections/OverviewOffer';
import OverviewSocialProof from '../../components/sections/OverviewSocialProof';
import OverviewVideo from '../../components/sections/OverviewVideo';

const OverviewPage = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
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
