import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, GraduationCap } from 'lucide-react';
import { events } from '../../data/events';

export default function UpcomingEvents() {
  return (
    <section className="w-full py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)' }}>
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
            <GraduationCap size={14} className="mr-1 inline" /> LIVE & UPCOMING
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Upcoming Events<br />For Families.
          </h2>
        </div>

        {/* Event Cards */}
        <div className="flex flex-col gap-8 w-full mx-auto">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-0 overflow-hidden flex flex-col md:flex-row"
              style={{ background: '#F7F5FC', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            >
              {/* Event Emoji/Image Block */}
              <div className="flex-shrink-0 w-full md:w-[280px] h-48 md:h-auto flex items-center justify-center text-8xl"
                style={{ background: 'linear-gradient(135deg, #F1E1F2, #FDF1E4)' }}>
                {ev.emoji}
              </div>

              {/* Body */}
              <div className="flex-1 p-12 md:py-20 md:px-12 flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-1">
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-5"
                    style={{ background: '#FDEDE3', color: '#7C3AED' }}>
                    {ev.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: '#1E1B2E' }}>{ev.title}</h3>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#6B7280' }}>{ev.description}</p>
                  <div className="flex flex-wrap gap-6 text-sm" style={{ color: '#9CA3AF' }}>
                    <span className="flex items-center gap-2"><MapPin size={14} /> {ev.location}</span>
                    <span className="flex items-center gap-2"><Clock size={14} /> {ev.time}</span>
                  </div>
                </div>

                {/* Date + Button */}
                <div className="flex-shrink-0 flex flex-col items-end gap-6">
                  <div className="text-right">
                    <p className="text-sm font-semibold mb-1" style={{ color: '#9CA3AF' }}>{ev.month}</p>
                    <p className="text-6xl font-black leading-none tracking-tight" style={{ color: '#1E1B2E' }}>{ev.day}</p>
                  </div>
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                    style={{ background: '#7C3AED' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
                    onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}
                  >
                    Book Seat Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
