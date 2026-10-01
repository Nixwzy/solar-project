import Header from '../components/layout/Header';
import Hero from '../components/landing/Hero';
import LandingVSL from '../components/landing/VSL';

const Page = () => {
  return (
    <div>
      <Header />

      <main>
        <LandingVSL />
        <Hero />
      </main>
    </div>
  );
};

export default Page;