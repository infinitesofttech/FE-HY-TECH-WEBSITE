import React from 'react';
import { allServices } from '../../data/services';
import { Monitor, GraduationCap, Briefcase, Printer, Laptop, Globe, CheckCircle } from 'lucide-react';

// Duplicate list for seamless infinite loop
const items = [...allServices, ...allServices];

export default function ServicesMarquee() {
  return (
    <div
      className="py-5 border-y overflow-hidden relative"
      style={{ borderColor: '#F3F4F6', background: 'transparent' }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #FAFAFA, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.7), transparent)' }}
      />

      {/* Scrolling track */}
      <div
        className="flex gap-4"
        style={{
          width: 'max-content',
          animation: 'marquee 40s linear infinite',
        }}
      >
        {items.map((svc, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full border flex-shrink-0 cursor-pointer transition-all"
            style={{
              borderColor: '#E5E7EB',
              background: '#fff',
              color: '#1E1B2E',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#7C3AED';
              e.currentTarget.style.color = '#7C3AED';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.color = '#1E1B2E';
            }}
          >
            <span className="text-sm">{getCategoryIcon(svc.category)}</span>
            <span className="text-sm font-semibold whitespace-nowrap">{svc.name}</span>
          </div>
        ))}
      </div>

      {/* CSS animation injected via style tag */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Pause on hover */
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

// Map category title to emoji icon
function getCategoryIcon(category) {
  const iconMap = {
    'Online Services': <Monitor size={14} className="mr-2" />,
    'Education Services': <GraduationCap size={14} className="mr-2" />,
    'Job Services': <Briefcase size={14} className="mr-2" />,
    'Printing Services': <Printer size={14} className="mr-2" />,
    'Computer Courses': <Laptop size={14} className="mr-2" />,
    'Other Services': <Globe size={14} className="mr-2" />,
  };
  
  return iconMap[category] ?? <CheckCircle size={14} className="mr-2" />;
}
