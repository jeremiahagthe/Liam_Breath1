import React from 'react';

export default function Connection() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connection</h2>
      
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-3">Progress Check</h3>
          <ul className="space-y-3 text-blue-800">
            <li>• How have you been feeling since we started practicing conscious nose breathing?</li>
            <li>• Can you describe any changes you've noticed in your breathing patterns or overall well-being?</li>
            <li>• Have you encountered any challenges or difficulties while trying to integrate these techniques into your life?</li>
            <li>• Is there anything else you'd like to share or any questions you have about the breathing techniques we've been working on?</li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-medium text-indigo-900 mb-3">Understanding CO₂</h3>
          <ul className="space-y-3 text-indigo-800">
            <li>• What is carbon dioxide?</li>
            <li>• Why is it important to increase CO₂ for asthma?</li>
          </ul>
        </div>
      </div>
    </section>
  );
}