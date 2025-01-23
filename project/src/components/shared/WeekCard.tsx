import React from 'react';

interface WeekCardProps {
  week: string;
  title: string;
  description: string;
}

export function WeekCard({ week, title, description }: WeekCardProps) {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
      <div className="absolute -top-4 left-6 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
        {week}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}