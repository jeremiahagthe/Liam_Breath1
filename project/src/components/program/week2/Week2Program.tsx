import React from 'react';
import Connection from './Connection';
import CarbonDioxideNotes from './CarbonDioxideNotes';
import AssessmentSection from './AssessmentSection';
import BreathingExercises from './BreathingExercises';
import ClientHomework from './ClientHomework';
import ResultLog from './ResultLog';

export default function Week2Program() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Week 2: Building Strength</h1>
        <p className="text-xl text-gray-600 mb-2">Goal: Increase Carbon dioxide (part 1) & Nitric Oxide (part 2)</p>
      </div>

      <div className="space-y-8">
        <Connection />
        <CarbonDioxideNotes />
        <AssessmentSection />
        <BreathingExercises />
        <ClientHomework />
        <ResultLog />
      </div>
    </div>
  );
}