import React from 'react';
import Hero from './Hero';
import SocialProof from './SocialProof';
import Features from './Features';
import Showcase from './Showcase';
import CTA from './CTA';
import Footer from './Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased">
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
