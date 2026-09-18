import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Clock, Gift, Users, FileText, Star, GraduationCap } from 'lucide-react';
import { services } from '../../data/services';

const tabs = ['All', 'Identity', 'Travel', 'Certificates', 'Family'];

export default function ExploreServices() {
  const [active, setActive] = useState('All');

  return (
    <section className="w-full py-20" style={{ background: 'linear-gradient(135deg, #FDF1E4 0%, #F1E1F2 100%)' }}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{ background: '#FDEDE3', color: '#7C3AED' }}>
            <GraduationCap size={14} className="mr-1 inline" /> TOP SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#1E1B2E' }}>
            Explore Services Built<br />For Your Family.
          </h2>
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: active === t ? '#7C3AED' : '#fff',
                  color: active === t ? '#fff' : '#1E1B2E',
                  border: active === t ? 'none' : '1px solid #E5E7EB',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-100/80 hover:-translate-y-2 transition-all duration-500"
              style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 24px 50px rgba(124,58,237,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.04)'}
            >
              {/* Thumbnail */}
              <div className="relative h-56 m-3 rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: svc.bg }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover mix-blend-multiply opacity-80 relative z-0 transition-transform duration-700 group-hover:scale-110" />
                <span
                  className="absolute top-3 left-3 text-xs font-bold text-white px-2.5 py-1 rounded-full"
                  style={{ background: svc.badgeColor }}
                >
                  {svc.badge}
                </span>
                <button className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <Heart size={14} color="#fff" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold" style={{ color: '#7C3AED' }}>{svc.category}</span>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>{svc.level}</span>
                </div>
                <h3 className="font-bold text-base leading-snug mb-3" style={{ color: '#1E1B2E' }}>{svc.title}</h3>

                {/* Staff */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold"
                    style={{ background: '#7C3AED' }}>
                    {svc.staff[0]}
                  </div>
                  <span className="text-xs" style={{ color: '#9CA3AF' }}>{svc.staff}</span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1 text-xs" style={{ color: '#9CA3AF' }}>
                    <FileText size={11} /> {svc.steps} Steps
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: '#9CA3AF' }}>
                    <Clock size={11} /> {svc.days}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: '#9CA3AF' }}>
                    <Users size={11} /> {svc.families}
                  </span>
                </div>

                {/* Rating + Price */}
                <div className="flex items-center justify-between mb-5 pt-3 border-t" style={{ borderColor: '#F3F4F6' }}>
                  <span className="flex items-center gap-1 text-sm font-bold" style={{ color: '#1E1B2E' }}>
                    <Star size={13} fill="#FACC15" stroke="none" />
                    {svc.rating}
                    <span className="font-normal text-xs ml-1" style={{ color: '#9CA3AF' }}>({svc.reviews})</span>
                  </span>
                  <span className="text-sm">
                    <span className="line-through mr-1 text-xs" style={{ color: '#9CA3AF' }}>{svc.oldPrice}</span>
                    <span className="font-bold" style={{ color: '#1E1B2E' }}>{svc.price}</span>
                    <span className="ml-2 text-xs font-semibold" style={{ color: '#7C3AED' }}>{svc.points}</span>
                  </span>
                </div>

                {/* CTA */}
                <button
                  className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 group-hover:scale-[1.03]"
                  style={{ background: '#7C3AED', boxShadow: '0 4px 14px rgba(124,58,237,0.25)' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
                  onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}
                >
                  Book Service <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
