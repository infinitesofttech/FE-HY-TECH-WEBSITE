import React from 'react';
import { partners } from '../../data/services';

const items = [...partners, ...partners, ...partners, ...partners];

export default function TrustLogos() {
  return (
    <section className="w-full py-10 border-b overflow-hidden relative bg-white" style={{ borderColor: '#F3F4F6' }}>
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.7), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.7), transparent)' }}
      />

      <div
        className="flex gap-x-16 items-center"
        style={{
          width: 'max-content',
          animation: 'marquee-logos 30s linear infinite',
        }}
      >
        {items.map((p, i) => (
          <span
            key={i}
            className="text-lg font-bold tracking-tight flex-shrink-0"
            style={{ color: '#C9CDD4', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {p}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
