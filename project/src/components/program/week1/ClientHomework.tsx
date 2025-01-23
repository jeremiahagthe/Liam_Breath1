import React from 'react';
import { BookOpen, Bell, Moon } from 'lucide-react';

export default function ClientHomework() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Client Homework</h2>

      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <BookOpen className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
          <p className="text-gray-700">
            Practice conscious nose breathing while driving, going for a walk, while you're working etc.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <Bell className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
          <p className="text-gray-700">
            Practice 365 method Cadence Breathing - 3 times a day. Set 3 alarms. Ask yourself, have you
            been consciously nose breathing.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <Moon className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
          <p className="text-gray-700">
            Recommend mouth taping especially at night.
          </p>
        </div>
      </div>
    </section>
  );
}