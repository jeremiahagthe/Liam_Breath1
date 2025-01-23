import React from 'react';

interface VideoTestimonialProps {
  videoUrl: string;
}

export default function VideoTestimonial({ videoUrl }: VideoTestimonialProps) {
  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9">
        <video
          className="w-full h-full object-cover rounded-xl shadow-lg"
          controls
          playsInline
        >
          <source src="/videos/Liam_testimonial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}