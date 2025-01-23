import React from 'react';
import { Calendar } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00B2FF]/10 to-[#0041B2]/10 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Image Section */}
        <div>
          <img
            src="https://imgur.com/7x8uAnG.jpg"
            alt="Liam Dragwidge"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Calendly Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Schedule a Free Consultation
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a 30-minute call to discuss your needs and see if our program is right for you.
          </p>
          <a
            href="https://calendly.com/your-calendar-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full text-white bg-[#0041B2] hover:bg-[#003399] transition-colors duration-150 shadow-lg"
          >
            <Calendar className="w-6 h-6 mr-2" />
            Schedule Your Call
          </a>
        </div>
      </div>
    </div>
  );
}