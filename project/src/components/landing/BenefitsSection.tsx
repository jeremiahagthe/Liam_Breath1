import React from 'react';
import { Stethoscope, Brain, Heart, Wind, Award, Users } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Why Choose Our Program?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A comprehensive approach to managing asthma through proper breathing techniques
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <BenefitCard
            icon={<Brain className="h-6 w-6 text-indigo-600" />}
            title="Scientifically Proven"
            description="Evidence-based breathing techniques backed by research and clinical studies"
          />
          <BenefitCard
            icon={<Heart className="h-6 w-6 text-indigo-600" />}
            title="Personalized Approach"
            description="Tailored breathing exercises adapted to your specific needs and condition"
          />
          <BenefitCard
            icon={<Award className="h-6 w-6 text-indigo-600" />}
            title="Expert Guidance"
            description="Learn from certified breathing specialists with years of experience"
          />
          <BenefitCard
            icon={<Wind className="h-6 w-6 text-indigo-600" />}
            title="Holistic Benefits"
            description="Improve not just breathing but overall health and well-being"
          />
          <BenefitCard
            icon={<Users className="h-6 w-6 text-indigo-600" />}
            title="Community Support"
            description="Join a supportive community of people on the same journey"
          />
          <BenefitCard
            icon={<Stethoscope className="h-6 w-6 text-indigo-600" />}
            title="Lasting Results"
            description="Develop sustainable breathing habits that last a lifetime"
          />
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="bg-indigo-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}