import React from 'react';
import { Calendar } from 'lucide-react';

export default function CalendlySection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Schedule a Free Consultation
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Book a 30-minute call with our breathing specialist to discuss your needs and see if our program is right for you.
          </p>
          <div className="inline-flex items-center justify-center">
            <a
              href="https://calendly.com/your-calendar-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}