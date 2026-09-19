import React from 'react';
import { 
  ShieldCheck, 
  Fingerprint, 
  Cloud, 
  CreditCard, 
  Plane, 
  Landmark, 
  Briefcase, 
  Car, 
  HeartPulse, 
  Leaf, 
  GraduationCap 
} from 'lucide-react';

const portalLogos = [
  { name: 'UIDAI Aadhaar', Icon: Fingerprint, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'DigiLocker', Icon: Cloud, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'Protean NSDL', Icon: CreditCard, color: 'text-green-600', bg: 'bg-green-50' },
  { name: 'Passport Seva', Icon: Plane, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'Digital Gujarat', Icon: Landmark, color: 'text-orange-600', bg: 'bg-orange-50' },
  { name: 'Income Tax', Icon: Briefcase, color: 'text-slate-700', bg: 'bg-slate-100' },
  { name: 'Parivahan Sewa', Icon: Car, color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'Ayushman Bharat', Icon: HeartPulse, color: 'text-pink-500', bg: 'bg-pink-50' },
  { name: 'PM-KISAN', Icon: Leaf, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { name: 'GCAS Gujarat', Icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-50' },
];

// Duplicate for infinite marquee loop
const items = [...portalLogos, ...portalLogos];

export default function TrustLogos() {
  return (
    <section className="w-full py-10 border-b border-gray-200 bg-white overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#171717]">
          <span className="w-2 h-2 rounded-full bg-[#F96400]"></span>
          <ShieldCheck size={16} className="text-[#F96400]" />
          <span>Official Government Portals & Facilitation Platforms Handled</span>
        </div>
        <span className="text-[11px] font-semibold text-gray-400">
          Authorized Facilitation Desk • Dharampur
        </span>
      </div>

      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(255,255,255,1), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(255,255,255,1), transparent)' }}
      />

      <div
        className="flex gap-x-6 items-center"
        style={{
          width: 'max-content',
          animation: 'marquee-logos 90s linear infinite',
        }}
      >
        {items.map((portal, i) => {
          const Icon = portal.Icon;
          return (
            <div
              key={`${portal.name}-${i}`}
              className="h-16 px-6 py-3 rounded-2xl bg-white border border-gray-200 hover:border-[#F96400]/40 transition-all duration-300 shadow-2xs hover:shadow-sm flex items-center justify-center flex-shrink-0 gap-3 group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${portal.bg} group-hover:bg-[#FFF5EE]`}>
                <Icon size={20} className={`${portal.color} group-hover:text-[#F96400] transition-colors`} />
              </div>
              <span className="text-sm font-bold text-gray-800 tracking-tight pr-2">
                {portal.name}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        div:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
