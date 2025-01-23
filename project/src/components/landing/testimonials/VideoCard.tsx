import React from 'react';

interface VideoCardProps {
  id: number;
  url: string;
  title: string;
}

export default function VideoCard({ url, title }: VideoCardProps) {
  return (
    <div className="w-full snap-center">
      <div className="relative pt-[177.78%]"> {/* 9:16 aspect ratio */}
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
          controls
          playsInline
        >
          <source src={url} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
      <h3 className="mt-4 text-center text-lg font-medium text-gray-900">{title}</h3>
    </div>
  );
}