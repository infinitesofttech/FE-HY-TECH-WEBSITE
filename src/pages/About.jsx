import React from 'react';
import AboutPlatform from '../components/sections/AboutPlatform';
import PromoBar from '../components/PromoBar';
import TrustLogos from '../components/sections/TrustLogos';
import FAQ from '../components/sections/FAQ';

export default function About() {
  return (
    <div className="bg-[var(--bg-base)] min-h-screen">
      <AboutPlatform />
      <FAQ />
      <TrustLogos />
    </div>
  );
}
