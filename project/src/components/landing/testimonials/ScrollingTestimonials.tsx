import React from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollNavigation } from '../../../hooks/useScrollNavigation';
import { testimonials } from '../../../data/testimonials';

export default function ScrollingTestimonials() {
  const { scrollRef, handleScroll } = useScrollNavigation();

  return (
    <div className="relative">
      <button
        onClick={() => handleScroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      
      <button
        onClick={() => handleScroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-none w-full md:w-[400px] snap-center">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}