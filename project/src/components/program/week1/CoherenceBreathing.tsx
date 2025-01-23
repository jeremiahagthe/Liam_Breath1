import React from 'react';
import { Timer } from 'lucide-react';

export default function CoherenceBreathing() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Coherence Breathing</h2>
      
      <div className="space-y-6">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-medium text-indigo-900 mb-3">Initial Setup</h3>
          <ul className="space-y-2 text-indigo-800">
            <li>• Relax, focus, & balance</li>
            <li>• Sit upright</li>
            <li>• Placing a gentle awareness on your heart</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-3">Breathing Pattern</h3>
          <div className="space-y-2 text-blue-800">
            <p>• Breathe in for 5 seconds</p>
            <p>• Breathe out for 5 seconds</p>
            <p>• Repeat for 5 minutes</p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium text-green-900 mb-3">Key Points</h3>
          <ul className="space-y-2 text-green-800">
            <li>• Aligns all our systems together (emotions, body, brain, and heart)</li>
            <li>• Mouth closed, lips together, breathe through your nose</li>
            <li>• Relax shoulders, soften the belly</li>
            <li>• Breathe from the belly</li>
            <li>• Breathing should be gentle and quiet</li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <a 
            href="https://www.youtube.com/watch?v=dPkpW5lqL3E&t=22s" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <Timer className="w-5 h-5 mr-2" />
            Watch Guided Session
          </a>
        </div>
      </div>
    </section>
  );
}