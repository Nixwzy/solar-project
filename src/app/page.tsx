'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import LandingVSL from '../components/sections/LandingVSL';

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