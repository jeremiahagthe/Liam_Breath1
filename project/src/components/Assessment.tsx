import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function Assessment() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Initial Assessment</h1>
          <p className="mt-2 text-gray-600">
            Help us understand your asthma condition better to create a personalized program.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="space-y-6">
            {/* Symptoms Section */}
            <Section title="Asthma Symptoms">
              <div className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <Checkbox key={index} label={symptom} />
                ))}
              </div>
            </Section>

            {/* Frequency Section */}
            <Section title="Symptom Frequency">
              <div className="space-y-4">
                <RadioGroup
                  options={[
                    'Less than once a week',
                    '1-2 times per week',
                    '3-4 times per week',
                    'Daily',
                  ]}
                />
              </div>
            </Section>

            {/* Triggers Section */}
            <Section title="Known Triggers">
              <div className="space-y-4">
                {triggers.map((trigger, index) => (
                  <Checkbox key={index} label={trigger} />
                ))}
              </div>
            </Section>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Complete Assessment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Checkbox({ label }: { label: string }) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <span className="ml-3 text-gray-700">{label}</span>
    </label>
  );
}

function RadioGroup({ options }: { options: string[] }) {
  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <label key={index} className="flex items-center">
          <input
            type="radio"
            name="frequency"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
          />
          <span className="ml-3 text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  );
}

const symptoms = [
  'Wheezing',
  'Shortness of breath',
  'Chest tightness',
  'Coughing',
  'Difficulty sleeping due to breathing',
];

const triggers = [
  'Exercise',
  'Allergies',
  'Cold air',
  'Stress',
  'Air pollution',
  'Respiratory infections',
];