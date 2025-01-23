import React from 'react';
import { Heart, Wind, Users } from 'lucide-react';

export default function AboutMission() {
  return (
    <div className="py-16 bg-gradient-to-br from-[#00B2FF]/5 to-[#0041B2]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Mission
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Empowering people to take control of their respiratory health through education and practice
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <MissionCard
            icon={<Heart className="h-8 w-8 text-[#0041B2]" />}
            title="Passion"
            description="Dedicated to improving lives through better breathing techniques"
          />
          <MissionCard
            icon={<Wind className="h-8 w-8 text-[#0041B2]" />}
            title="Expertise"
            description="Years of experience in breathwork and respiratory health"
          />
          <MissionCard
            icon={<Users className="h-8 w-8 text-[#0041B2]" />}
            title="Community"
            description="Building a supportive community of breathing practitioners"
          />
        </div>
      </div>
    </div>
  );
}

function MissionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}