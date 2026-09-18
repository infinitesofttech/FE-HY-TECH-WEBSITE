import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowUpRight, Check, Users } from 'lucide-react';

export default function AboutPlatform() {
  const features = [
    "Expert learning programs.",
    "Relevant course content.",
    "Flexible learning experience.",
    "Lifetime access to courses."
  ];

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Image & Elements */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            {/* Background Pattern */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 grid grid-cols-5 gap-2 opacity-30 z-0">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: '#7C3AED' }}></div>
              ))}
            </div>

            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 w-full max-w-lg rounded-[2rem] overflow-hidden"
              style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}
            >
              <img 
                src="/about_platform.jpg" 
                alt="People collaborating on platform" 
                className="w-full h-auto object-cover aspect-square md:aspect-[4/5]"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-12 -left-4 md:-left-12 z-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-50 flex flex-col items-center max-w-[200px]"
            >
              <div className="flex -space-x-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="User 1" /></div>
                <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="User 2" /></div>
                <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="User 3" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white" style={{ background: '#7C3AED' }}>
                  7K+
                </div>
              </div>
              <p className="text-xs text-center text-gray-500 font-medium">
                Join <span className="font-bold text-gray-900">180,000+</span> learners already on their path
              </p>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6"
                style={{ background: '#F3E8FF', color: '#7C3AED' }}
              >
                <GraduationCap size={14} className="mr-1 inline" /> ABOUT OUR PLATFORM
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#1E1B2E]">
                Transforming knowledge into career opportunities through <span style={{ color: '#7C3AED' }}>HY-Tech</span>.
              </h2>
              
              <p className="text-base md:text-lg text-gray-500 mb-8 max-w-xl leading-relaxed">
                Master modern digital and tech skills through AI-powered learning paths and structured programs designed for 2026 and beyond. Get the tools you need to succeed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full p-0.5 bg-green-100 text-green-600 flex-shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all shadow-lg shadow-purple-500/20"
                  style={{ background: '#7C3AED' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
                  onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}
                >
                  Start learning free <ArrowUpRight size={18} />
                </Link>
                
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all border-2"
                  style={{ color: '#1E1B2E', borderColor: '#F3F4F6' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.background = '#F9FAFB'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.background = 'transparent'; }}
                >
                  Explore courses <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
