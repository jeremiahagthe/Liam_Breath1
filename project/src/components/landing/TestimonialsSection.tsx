import React from 'react';
import VideoTestimonials from './testimonials/VideoTestimonials';
import ScrollingTestimonials from './testimonials/ScrollingTestimonials';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how our program has helped others transform their lives
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <VideoTestimonials />
        </div>

        {/* Text Testimonials */}
        <div>
          <ScrollingTestimonials testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}