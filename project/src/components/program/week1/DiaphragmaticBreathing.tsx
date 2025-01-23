import React from 'react';

export default function DiaphragmaticBreathing() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Diaphragmatic Breathing (Low, Slow & Deep)</h2>

      <div className="space-y-8">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-medium text-purple-900 mb-4">Sit Down</h3>
          <ul className="space-y-2 text-purple-800">
            <li>• Breathe using your diaphragm</li>
            <li>• Place your hands under your bottom two ribs</li>
            <li>• 360 degree Lateral expansion</li>
            <li>• Slight extension of bottom ribs</li>
          </ul>
        </div>

        <div className="bg-rose-50 p-4 rounded-lg">
          <h3 className="font-medium text-rose-900 mb-4">Lay Down</h3>
          <ul className="space-y-2 text-rose-800">
            <li>• Book on the belly</li>
            <li>• If too easy place a weight 1.25kg or 2.5kg on the belly</li>
            <li>• Important: use your breath to expand the diaphragm DON'T just push the belly out</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="text-amber-900">
            Why is this important for asthma? People with asthma experience high chest breathing and
            shortness of breath. We focus on activating the diaphragm and nasal breathing
          </p>
        </div>
      </div>
    </section>
  );
}