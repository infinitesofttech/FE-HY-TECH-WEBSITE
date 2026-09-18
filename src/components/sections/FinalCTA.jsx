import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, User } from 'lucide-react';

const avatars = [1, 2, 3, 4, 5, 6];

export default function FinalCTA() {
  return (
    <section className="w-full py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDF1E4 0%, #F1E1F2 100%)' }}>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
          style={{ background: '#FDEDE3', color: '#7C3AED' }}>
          <GraduationCap size={14} className="mr-1 inline" /> GET STARTED TODAY
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: '#1E1B2E' }}>
          Simplify Your Family's<br />Services Today.
        </h2>
        <p className="text-base mb-10" style={{ color: '#6B7280' }}>
          Join 2,000+ families in Dharampur who manage all their documents, track rewards, and stay updated — all through HY-Tech Online Hub.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white"
            style={{ background: '#7C3AED', boxShadow: '0 6px 24px rgba(124,58,237,0.30)' }}
            onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
            onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}
          >
            Get Started Free <ArrowRight size={16} />
          </button>
          <button
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold"
            style={{ border: '1.5px solid #E5E7EB', color: '#1E1B2E', background: '#fff' }}
            onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
            onMouseLeave={e => e.currentTarget.style.background = '#fff'}
          >
            Explore Services <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
