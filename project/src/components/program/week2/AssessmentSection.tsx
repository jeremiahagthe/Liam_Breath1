import React from 'react';
import { ClipboardList, Activity, Timer } from 'lucide-react';

export default function AssessmentSection() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Assessments</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <ClipboardList className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">Assessment</h3>
              <p className="text-gray-600">Baseline score</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Activity className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">Pulse Check</h3>
              <p className="text-gray-600">Start & end of session</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <Timer className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900">Carbon Dioxide Test</h3>
              <p className="text-gray-600 mb-4">A measure of how well you tolerate carbon dioxide</p>
              
              <ul className="space-y-2 text-gray-700">
                <li>• Take a deep inhale</li>
                <li>• Exhale as slowly as possible through nose or mouth without pausing</li>
                <li>• Time how long it takes you to exhale fully</li>
                <li>• Any interruptions and the timer ends (stop, swallow, or panic)</li>
              </ul>

              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">Scoring Guide</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Discard Rate</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tolerance Level</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">&lt;20 Sec</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Low CO₂ Tolerance</td>
                        <td className="px-4 py-2 text-sm text-gray-900">3-4</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">25-45 Sec</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Moderate CO₂ Tolerance</td>
                        <td className="px-4 py-2 text-sm text-gray-900">5-7</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">50+ Sec</td>
                        <td className="px-4 py-2 text-sm text-gray-900">High CO₂ Tolerance</td>
                        <td className="px-4 py-2 text-sm text-gray-900">8-10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}