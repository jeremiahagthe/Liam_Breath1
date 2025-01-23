import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          icon={<LucideIcons.Activity className="h-6 w-6" />}
          title="Weekly Progress"
          value="85%"
          description="Completion rate"
        />
        <StatCard
          icon={<LucideIcons.Clock className="h-6 w-6" />}
          title="Practice Time"
          value="3.5h"
          description="This week"
        />
        <StatCard
          icon={<LucideIcons.TrendingUp className="h-6 w-6" />}
          title="CO₂ Tolerance"
          value="+15%"
          description="Improvement"
        />
        <StatCard
          icon={<LucideIcons.Calendar className="h-6 w-6" />}
          title="Next Session"
          value="Today"
          description="2:00 PM"
        />
      </div>

      {/* Weekly Progress */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Progress</h2>
        <div className="space-y-4">
          {progressItems.map((item, index) => (
            <ProgressItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Sessions</h2>
        <div className="space-y-4">
          {upcomingSessions.map((session, index) => (
            <SessionCard key={index} {...session} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, description }: { icon: React.ReactNode; title: string; value: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <div className="text-indigo-600">{icon}</div>
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-lg font-semibold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ProgressItem({ title, progress }: { title: string; progress: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm font-medium text-gray-500">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 rounded-full h-2"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function SessionCard({ title, time, type }: { title: string; time: string; type: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <span className="px-3 py-1 text-sm text-indigo-600 bg-indigo-100 rounded-full">
        {type}
      </span>
    </div>
  );
}

const progressItems = [
  { title: 'Breathing Exercises', progress: 85 },
  { title: 'Daily Check-ins', progress: 70 },
  { title: 'Weekly Assessments', progress: 100 },
  { title: 'Practice Sessions', progress: 90 },
];

const upcomingSessions = [
  { title: 'Diaphragmatic Breathing', time: 'Today, 2:00 PM', type: 'Exercise' },
  { title: 'Weekly Assessment', time: 'Tomorrow, 10:00 AM', type: 'Assessment' },
  { title: 'Group Session', time: 'Friday, 3:00 PM', type: 'Group' },
];