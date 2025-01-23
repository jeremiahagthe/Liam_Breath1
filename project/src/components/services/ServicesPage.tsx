import React from 'react';
import BreakthroughHero from './BreakthroughHero';
import BreakthroughDescription from './BreakthroughDescription';
import BenefitsList from './BenefitsList';
import MeetLiam from './MeetLiam';
import BookSession from './BookSession';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <BreakthroughHero />
      <BreakthroughDescription />
      <BenefitsList />
      <MeetLiam />
      <BookSession />
    </div>
  );
}