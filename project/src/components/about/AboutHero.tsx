import React from 'react';

export default function AboutHero() {
  return (
    <div className="relative bg-gradient-to-br from-[#00B2FF] to-[#0041B2] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            About Liam
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
            Breathwork Facilitator & Wellness Coach
          </p>
        </div>
      </div>
    </div>
  );
}