import React from 'react';
import VideoSection from './landing/VideoSection';
import HeroSection from './landing/HeroSection';
import BenefitsSection from './landing/BenefitsSection';
import TestimonialsSection from './landing/TestimonialsSection';
import ApplicationSection from './landing/ApplicationSection';
import CalendlySection from './landing/CalendlySection';

export default function LandingPage() {
  return (
    <div className="relative">
      <HeroSection />
      <VideoSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ApplicationSection />
      <CalendlySection />
    </div>
  );
}