import React from 'react';
import { GraduationCap, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const events = [
  {
    id: 1,
    tag: "Design",
    title: "Design better digital products for creative problem solving.",
    description: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "November",
    day: "02",
    image: "/images/events/event_speaker.jpg"
  },
  {
    id: 2,
    tag: "Design",
    title: "Prepare for tomorrow's careers on future learning sessions.",
    description: "Master modern digital & tech skills through powered learning paths and structured.",
    location: "Miami, Florida, USA",
    time: "10:00am - 12:00am",
    month: "November",
    day: "08",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="bg-[#F96400] py-24 relative overflow-hidden">
      {/* Optional Noise Background Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#F96400] font-bold text-sm mb-6 shadow-sm">
            <GraduationCap className="w-4 h-4" />
            <span className="tracking-wide">LIVE & UPCOMING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl">
            Upcoming Events For<br/>Career Growth.
          </h2>
        </div>

        {/* Events List */}
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-3xl p-4 flex flex-col md:flex-row items-center gap-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 group relative z-20"
            >
              {/* Left Image */}
              <div className="w-full md:w-[280px] h-56 rounded-2xl overflow-hidden shrink-0 relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Center Content */}
              <div className="flex-1 py-4 px-2 md:px-0">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-[#F96400] text-xs font-bold mb-4">
                  {event.tag}
                </span>
                <h3 className="text-[1.7rem] font-bold text-[#1a202c] mb-3 leading-snug group-hover:text-[#F96400] transition-colors cursor-pointer">
                  {event.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed max-w-lg text-[15px]">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>

              {/* Right Content / CTA */}
              <div className="w-full md:w-56 md:border-l border-gray-100 flex flex-row md:flex-col items-center justify-between md:justify-center p-4 md:py-8 shrink-0 h-full">
                <div className="text-center mb-0 md:mb-8">
                  <span className="block text-gray-500 font-medium text-sm mb-1">{event.month}</span>
                  <span className="block text-6xl font-extrabold text-[#2a3040] tracking-tighter">{event.day}</span>
                </div>
                
                <button className="bg-[#F96400] hover:bg-[#e05a00] text-white px-6 py-3 rounded-full font-bold text-sm transition-colors flex items-center gap-2 shadow-md hover:shadow-lg w-full md:w-auto justify-center">
                  Book seat now
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
