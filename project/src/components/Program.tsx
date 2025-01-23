import React, { useState } from 'react';
import Week1Program from './program/week1/Week1Program';
import Week2Program from './program/week2/Week2Program';

export default function Program() {
  const [activeWeek, setActiveWeek] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveWeek(1)}
            className={`px-4 py-2 rounded-md ${
              activeWeek === 1
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Week 1
          </button>
          <button
            onClick={() => setActiveWeek(2)}
            className={`px-4 py-2 rounded-md ${
              activeWeek === 2
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Week 2
          </button>
        </div>
      </div>
      {activeWeek === 1 ? <Week1Program /> : <Week2Program />}
    </div>
  );
}