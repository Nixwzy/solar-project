import Header from '../components/layout/Header';
import Hero from '../components/landing/Hero';
import LandingVSL from '../components/landing/VSL';
import Footer from '@/components/layout/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <LandingVSL />
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
