import React from 'react';

export default function MeetLiam() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Meet Liam Dragwidge
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              With over three years of dedicated study, Liam has earned certifications in trauma release and modern breathwork facilitation. He has had the honor of guiding groups around the world, including in Bali, Thailand, Los Angeles, Costa Rica, Australia, and Canada. His work is driven by a passion to help individuals awaken to their fullest potential through the sacred practice of breath.
            </p>
            <div className="bg-gradient-to-br from-[#00B2FF]/10 to-[#0041B2]/10 p-8 rounded-lg">
              <p className="text-lg text-gray-800 italic mb-8">
                "In every breath, there lies the potential for deep healing. In every moment, you are invited to step into your highest self. What will you choose today?"
              </p>
              <p className="text-lg text-gray-800">
                Join Liam for a Breakthrough Breathwork journey—a sacred space to heal, expand, and align with the truth of who you are.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://i.imgur.com/JkvNAU9.jpeg"
              alt="Liam Dragwidge"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}