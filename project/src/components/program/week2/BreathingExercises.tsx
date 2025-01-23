import React from 'react';
import { Timer } from 'lucide-react';

export default function BreathingExercises() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Breathing Exercises</h2>
      
      <div className="space-y-6">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-medium text-indigo-900 mb-4">1. Short breath holds (increase carbon dioxide) BOTTOM TRIANGLE</h3>
          <ul className="space-y-3 text-indigo-800">
            <li>• Breathe gently in a calm and controlled environment</li>
            <li>• Inhale for 5 seconds, exhale for 5 seconds, pause the breath for 5 seconds</li>
            <li>• Continue for 5 mins</li>
            <li>• Repeat 3 times throughout the day</li>
          </ul>
          <p className="mt-4 text-indigo-900 font-medium">
            Very good method to use when you're feeling strong asthma symptoms
          </p>
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