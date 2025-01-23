import React from 'react';

const benefits = [
  {
    title: "Emotional Release",
    description: "Unveil and release stored emotions such as fear, anger, grief, and anxiety that no longer serve you."
  },
  {
    title: "Mental Clarity",
    description: "Increase clarity, focus, and cognitive vitality as breath nourishes the mind with life-giving prana (energy)."
  },
  {
    title: "Stress Relief",
    description: "Alleviate tension and lower cortisol levels, promoting a state of calm and equanimity."
  },
  {
    title: "Self-Awareness",
    description: "Deepen your awareness of the mind-body connection and uncover hidden patterns, enabling transformation from within."
  },
  {
    title: "Connection to Purpose",
    description: "Reconnect to your true essence and the deeper meaning of your life's journey."
  },
  {
    title: "Restorative Sleep",
    description: "Encourage a peaceful, restful state that supports deep healing and rejuvenation during sleep."
  },
  {
    title: "Transformational Healing",
    description: "Harmonize ancient wisdom with modern science, rewiring your nervous system and reprogramming limiting beliefs to create lasting change."
  }
];

export default function BenefitsList() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          The Benefits of Breathwork:
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}