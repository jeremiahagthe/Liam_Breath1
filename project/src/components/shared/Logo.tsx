import React from 'react';

export function Logo({ className = "h-[150px]" }: { className?: string }) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center">
        <img
          src="https://i.imgur.com/AKkGIY6.jpg"
          alt="BreatheEasy Logo"
          style={{ width: '150px', height: 'auto' }}
          className="object-contain"
        />
      </div>
    </div>
  );
}