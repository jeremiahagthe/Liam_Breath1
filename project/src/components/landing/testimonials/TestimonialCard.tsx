import React from 'react';

interface TestimonialCardProps {
  imageUrl: string;
  text: string;
}

export default function TestimonialCard({ imageUrl }: TestimonialCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <img 
        src={imageUrl} 
        alt="Testimonial" 
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
}