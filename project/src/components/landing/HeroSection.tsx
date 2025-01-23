import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-[#00B2FF] to-[#0041B2] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="z-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Breathe Your Way to Transformation
            </h1>
            <p className="mt-8 text-xl text-blue-100 max-w-2xl">
              Join our comprehensive 4-week program designed to help you manage asthma naturally through proven breathing techniques.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link
                to="/assessment"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-[#0041B2] bg-white hover:bg-blue-50 transition-colors duration-150 shadow-lg"
              >
                Start Your Journey
              </Link>
              <a
                href="#watch-video"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white border-2 border-white/30 hover:bg-white/10 transition-colors duration-150"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src="https://i.imgur.com/US1ViGL.jpg"
                alt="Breathwork with Liam"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}