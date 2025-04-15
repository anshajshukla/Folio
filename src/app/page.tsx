import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <div className="container mx-auto mt-4 px-6 md:px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
}
