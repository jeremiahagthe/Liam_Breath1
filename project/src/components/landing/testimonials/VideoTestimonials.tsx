import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollNavigation } from '../../../hooks/useScrollNavigation';
import { videos } from '../../../data/videos';
import VideoCard from './VideoCard';

export default function VideoTestimonials() {
  const { scrollRef, handleScroll } = useScrollNavigation();

  return (
    <div className="relative">
      {/* Navigation Buttons - Only visible on mobile */}
      <button
        onClick={() => handleScroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors lg:hidden"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={() => handleScroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors lg:hidden"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Videos Container */}
      <div 
        ref={scrollRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory lg:overflow-visible"
      >
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}