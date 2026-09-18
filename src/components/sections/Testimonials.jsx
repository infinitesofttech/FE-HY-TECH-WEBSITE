import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, GraduationCap, User } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [start, setStart] = useState(0);

  const displayTestimonials = [...testimonials, ...testimonials.slice(0, 3)];

  useEffect(() => {
    const timer = setInterval(() => {
      setStart((s) => (s >= testimonials.length - 1 ? 0 : s + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [start]);

  const prev = () => setStart((s) => (s <= 0 ? testimonials.length - 1 : s - 1));
  const next = () => setStart((s) => (s >= testimonials.length - 1 ? 0 : s + 1));

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{ background: '#FDEDE3', color: '#7C3AED' }}>
              <GraduationCap size={14} className="mr-1 inline" /> FAMILY FEEDBACK
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: '#1E1B2E' }}>
              Explore our families'<br />feedback.
            </h2>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#E5E7EB' }}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={next}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#E5E7EB' }}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex overflow-hidden -mx-3 py-4">
          {displayTestimonials.map((t, i) => (
            <motion.div
              key={`${t.id}-${i}`}
              animate={{ x: `-${start * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
            >
              <div 
                className="rounded-3xl p-8 flex flex-col h-full cursor-pointer transition-all border border-white/50 shadow-sm relative overflow-hidden group hover:-translate-y-1"
                style={{ background: t.bg, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'}
              >
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>
                
                {/* Quote mark */}
                <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center mb-6 shadow-sm flex-shrink-0 relative z-10">
                  <span className="font-serif font-black text-4xl leading-none mt-4" style={{ color: '#7C3AED' }}>"</span>
                </div>
                {/* Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={16} fill="#F97316" stroke="none" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm font-medium leading-relaxed mb-8 flex-1 relative z-10" style={{ color: '#1E1B2E' }}>{t.quote}</p>
                {/* Reviewer */}
                <div className="flex items-center gap-4 pt-5 border-t relative z-10" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm bg-white/80 backdrop-blur-md flex-shrink-0">
                    <User size={20} style={{ color: '#7C3AED' }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#1E1B2E' }}>{t.name}</p>
                    <p className="text-xs font-medium" style={{ color: '#6B7280' }}>{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
