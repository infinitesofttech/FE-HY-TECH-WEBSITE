import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Check, Star, Heart, Clock, Gift, Users, Bell, Award, FileText, Sparkles } from 'lucide-react';
import heroImage from '../assets/jansuvidha.jpg';
import serviceThumbnail from '../assets/service_illustration.jpg';

// ─── Section imports ──────────────────────────────────────────────────
import TrustLogos from '../components/sections/TrustLogos';
import BrowseCategories from '../components/sections/BrowseCategories';
import ExploreServices from '../components/sections/ExploreServices';
import CTABanner from '../components/sections/CTABanner';
import AboutPlatform from '../components/sections/AboutPlatform';
import StatsBand from '../components/sections/StatsBand';
import Testimonials from '../components/sections/Testimonials';
import UpcomingEvents from '../components/sections/UpcomingEvents';
import MeetTeam from '../components/sections/MeetTeam';
import HowItWorks from '../components/sections/HowItWorks';
import BlogSection from '../components/sections/BlogSection';
import FinalCTA from '../components/sections/FinalCTA';
import ServicesMarquee from '../components/sections/ServicesMarquee';

// ─── Donut Ring ───────────────────────────────────────────────────────
function DonutRing({ percent = 80 }) {
  const r = 28, circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
      <circle cx="36" cy="36" r={r} fill="none" stroke="#F1E1F2" strokeWidth="7" />
      <circle cx="36" cy="36" r={r} fill="none" stroke="#7C3AED" strokeWidth="7"
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ══════════════ 3. HERO SECTION ══════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '520px', background: 'linear-gradient(135deg, #FDF1E4 0%, #F1E1F2 100%)' }}>
        
        {/* Decorative Premium Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-300/30 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/40 blur-[120px]"></div>
          <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-pink-200/30 blur-[100px]"></div>
        </div>

        {/* Content */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center"
          style={{ minHeight: '520px' }}>

          {/* Left */}
          <div className="flex-[0_0_44%] w-full py-16 lg:py-24 flex flex-col items-start relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: '#FDEDE3', color: '#7C3AED' }}>
                <Award size={13} /> FEATURED SERVICE
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
              className="font-extrabold leading-[1.08] tracking-tight mb-5"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', color: '#1E1B2E' }}>
              Simplify Every<br />Family Service,<br />All In One Place.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}
              className="text-base leading-relaxed mb-9 max-w-[420px]" style={{ color: '#6B7280' }}>
              Manage PAN, Aadhaar, Passport and more for your whole family — track work, earn rewards, and stay updated in real time.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
              className="flex flex-wrap gap-3 mb-9">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white"
                style={{ background: '#7C3AED', boxShadow: '0 6px 24px rgba(124,58,237,0.32)' }}
                onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
                onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}>
                Get Started Free <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                style={{ border: '1.5px solid #D1D5DB', color: '#1E1B2E', background: '#fff' }}
                onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
                Explore Services <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-5">
              {['2,000+ families served', 'Verified document handling', 'Transparent reward tracking'].map(item => (
                <span key={item} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#9CA3AF' }}>
                  <Check size={13} strokeWidth={3} style={{ color: '#6B7280' }} /> {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo + Floating Cards */}
          <div className="flex-1 relative self-stretch flex items-center justify-center lg:justify-end min-h-[420px] lg:min-h-0">
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative w-full lg:w-[580px] xl:w-[650px] h-[360px] lg:h-full" style={{ maxHeight: '520px' }}>
              <img src={heroImage} alt="Family member managing documents"
                className="w-full h-full object-cover object-center rounded-tl-[40px] rounded-bl-[40px] lg:rounded-none mix-blend-multiply opacity-95"
                style={{ minHeight: '320px' }} />

              {/* Floating: Reward Progress */}
              <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.65, type: 'spring', stiffness: 120 }}
                className="absolute flex flex-col items-center px-4 py-4 rounded-2xl"
                style={{ top: '38%', left: '-16px', width: '162px', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
                <p className="text-xs font-semibold mb-3 text-center" style={{ color: '#1E1B2E' }}>Reward Progress...</p>
                <div className="relative flex items-center justify-center mb-2">
                  <DonutRing percent={80} />
                  <span className="absolute text-lg font-extrabold" style={{ color: '#1E1B2E' }}>80%</span>
                </div>
                <p className="text-[10px] text-center font-medium" style={{ color: '#7C3AED' }}>80% of this month's goal reached!</p>
              </motion.div>

              {/* Floating: Popular Service Card */}
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.75, type: 'spring', stiffness: 110 }}
                className="absolute rounded-2xl overflow-hidden"
                style={{ top: '-16px', right: '-16px', width: '220px', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.11)' }}>
                <div className="relative h-[110px]">
                  <img src={serviceThumbnail} alt="PAN Card Service" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 text-[10px] font-bold text-white px-2 py-0.5 rounded-full"
                    style={{ background: '#1E1B2E' }}>Popular</span>
                  <button className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.85)' }}>
                    <Heart size={12} style={{ color: '#6B7280' }} />
                  </button>
                </div>
                <div className="px-3 py-3">
                  <p className="text-xs font-bold leading-snug mb-2" style={{ color: '#1E1B2E' }}>PAN Card Update<br />Service</p>
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ background: '#7C3AED' }}>H</div>
                    <span className="text-[10px]" style={{ color: '#9CA3AF' }}>HY-Tech Official</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="flex items-center gap-1 text-[10px]" style={{ color: '#9CA3AF' }}><FileText size={10} /> 3 Steps</span>
                    <span className="flex items-center gap-1 text-[10px]" style={{ color: '#9CA3AF' }}><Clock size={10} /> 2–3 Days</span>
                    <span className="flex items-center gap-1 text-[10px]" style={{ color: '#9CA3AF' }}><Users size={10} /> 2.1k</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: '#F3F4F6' }}>
                    <span className="flex items-center gap-0.5 text-[11px] font-bold" style={{ color: '#1E1B2E' }}>
                      <Star size={11} fill="#FACC15" stroke="none" /> 4.9
                      <span className="font-normal ml-0.5" style={{ color: '#9CA3AF' }}>(500+)</span>
                    </span>
                    <span className="text-[11px]">
                      <span className="line-through mr-1" style={{ color: '#9CA3AF' }}>₹300</span>
                      <span className="font-bold" style={{ color: '#1E1B2E' }}>₹200</span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating: Notification */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9, type: 'spring', stiffness: 120 }}
                className="absolute flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ bottom: '20px', right: '20px', maxWidth: '290px', background: '#FDEDE3', boxShadow: '0 6px 24px rgba(0,0,0,0.09)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#fff' }}>
                  <Sparkles size={15} style={{ color: '#7C3AED' }} />
                </div>
                <p className="text-xs leading-snug" style={{ color: '#1E1B2E' }}>
                  <span className="font-bold">Just Completed:</span> 'Aadhaar Update' for Family HF000482 —{' '}
                  <span className="font-bold" style={{ color: '#7C3AED' }}>Reward +10 Points!</span>
                </p>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* Scroll Down */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center gap-3">
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-white animate-bounce"
            style={{ background: '#7C3AED', boxShadow: '0 4px 14px rgba(124,58,237,0.4)' }}>
            <ArrowDown size={16} strokeWidth={2.5} />
          </button>
        </motion.div>
      </section>

      {/* ══════════════ 4. TRUST LINE ══════════════ */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-semibold text-lg flex flex-wrap items-center justify-center gap-2" style={{ color: '#1E1B2E' }}>
            Trusted by more than
            <span className="inline-flex items-center px-4 py-1 rounded-full font-extrabold text-white text-sm"
              style={{ background: '#7C3AED' }}>2000+</span>
            families and growing every day.
          </p>
        </div>
      </section>

      {/* ══════════════ All Other Sections ══════════════ */}
      <TrustLogos />
      <BrowseCategories />
      <ServicesMarquee />
      <ExploreServices />
      <CTABanner />
      <AboutPlatform />
      <StatsBand />
      <Testimonials />
      <UpcomingEvents />
      <MeetTeam />
      <HowItWorks />
      <BlogSection />
      <FinalCTA />

    </div>
  );
}
