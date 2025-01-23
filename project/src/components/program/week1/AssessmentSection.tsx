import React from 'react';
import { ClipboardList, Activity, Stethoscope } from 'lucide-react';

export default function AssessmentSection() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Activation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

        <div className="flex items-start space-x-3">
          <Stethoscope className="w-6 h-6 text-indigo-600 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900">Spirometer</h3>
            <p className="text-gray-600">Test breathing capacity</p>
          </div>
        </div>
      </div>
    </section>
  );
}