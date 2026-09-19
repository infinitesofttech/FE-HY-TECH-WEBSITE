import React from 'react';
import { Users, BookOpen, UserCheck, Star } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Users,
    number: "8,000",
    suffix: "+",
    label: "Active Students"
  },
  {
    id: 2,
    icon: BookOpen,
    number: "300",
    suffix: "+",
    label: "Quality Courses"
  },
  {
    id: 3,
    icon: UserCheck,
    number: "100",
    suffix: "+",
    label: "Expert Instructors"
  },
  {
    id: 4,
    icon: Star,
    number: "99.9",
    suffix: "%",
    label: "Satisfaction Rate"
  }
];

export default function StatsCounter() {
  return (
    <section className="bg-[#F96400] py-16 relative overflow-hidden">
      {/* Optional Noise Background Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center text-center p-8 ${
                index % 2 !== 0 ? 'md:border-l border-white/20 lg:border-l-0' : ''
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-[#1E293B] flex items-center justify-center mb-6 shadow-lg">
                <stat.icon className="w-8 h-8 text-white stroke-[1.5]" />
              </div>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  {stat.number}
                </span>
                <span className="text-4xl lg:text-5xl font-bold text-white ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-white/90 text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
