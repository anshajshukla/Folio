// @ts-nocheck
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ParticlesBackground from '@/components/ParticlesBackground';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import AchievementsSection from '@/components/AchievementsSection';
import FrameworkLogosBackground from '@/components/FrameworkLogosBackground';
import ResumeSection from '@/components/ResumeSection';

export default function Home() {
  return (
    <>
      {/* Background components */}
      <ParticlesBackground />
      <Navbar />
      <div className="container mx-auto mt-4 px-6 md:px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </>
  );
}
