import React from 'react';
import CoherenceBreathing from './CoherenceBreathing';
import DiaphragmaticBreathing from './DiaphragmaticBreathing';
import ResultLog from './ResultLog';
import ClientHomework from './ClientHomework';
import AssessmentSection from './AssessmentSection';

export default function Week1Program() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Week 1: Foundation</h1>
        <p className="text-xl text-gray-600 mb-2">Goal: Nasal breath awareness and diaphragm activation</p>
      </div>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connection</h2>
          <div className="space-y-4">
            <p className="text-gray-700">1. Sharp inhales together</p>
            <p className="text-gray-700">2. Describe how their health has recently been? Reestablish the client's relationship with asthma and goals again</p>
            <p className="text-gray-700">3. What is breathwork?</p>
            <p className="text-gray-700">4. Why is nose breathing so important?</p>
            <p className="text-gray-700">5. Why is breathing in our diaphragm important?</p>
            <div className="pl-6">
              <p className="text-gray-600 mb-2">The diaphragm is a large muscle just below your lungs that helps you breathe. When you breathe in, it moves down to make room for your lungs to fill with air. When you breathe out, it moves up to help push the air out.</p>
              <p className="text-gray-600">Using our diaphragm for deep breathing helps us take in more oxygen and breathe more easily. It's especially helpful for people with asthma because it makes breathing more efficient and less stressful on your body.</p>
            </div>
            <p className="text-gray-700">6. What is coherence breathing?</p>
          </div>
        </section>

        <AssessmentSection />
        <CoherenceBreathing />
        <DiaphragmaticBreathing />
        <ClientHomework />
        <ResultLog />
      </div>
    </div>
  );
}