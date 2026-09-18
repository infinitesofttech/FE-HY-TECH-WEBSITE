import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Monitor, Briefcase, Printer, Laptop, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/services';

const IconMap = {
  Monitor: Monitor,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Printer: Printer,
  Laptop: Laptop,
  Globe: Globe
};

const fadeUp = (i) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.07, duration: 0.45 },
});

export default function BrowseCategories() {
  return (
    <section className="w-full py-20" style={{ background: 'linear-gradient(135deg, #FDF1E4 0%, #F1E1F2 100%)' }}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{ background: '#FDEDE3', color: '#7C3AED' }}
            >
              <GraduationCap size={14} className="mr-1 inline" /> CHOSE CATEGORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: '#1E1B2E' }}>
              Browse Our Services.
            </h2>
            <p className="text-base" style={{ color: '#6B7280' }}>
              Choose from multiple service categories for your family's needs.
            </p>
          </div>
          <Link
            to="/services"
            className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white flex-shrink-0 transition-all"
            style={{ background: '#7C3AED' }}
            onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
            onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}
          >
            Get Started Free <ArrowRight size={16} />
          </Link>
        </div>

        {/* 6-card grid: 1 col mobile, 2 sm, 3 lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = IconMap[cat.icon];
            return (
            <motion.div
              key={cat.id}
              {...fadeUp(i)}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              className="rounded-3xl p-8 flex flex-col cursor-pointer transition-all border border-white/50 shadow-sm relative overflow-hidden group"
              style={{ background: cat.bg }}
            >
              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center mb-6 shadow-sm flex-shrink-0 relative z-10"
              >
                {Icon && <Icon size={32} color={cat.iconColor} />}
              </div>

              {/* Title & Count */}
              <h3 className="font-extrabold text-xl leading-snug mb-2 relative z-10" style={{ color: '#1E1B2E' }}>
                {cat.title}
              </h3>
              <p className="text-sm font-medium mb-8 relative z-10" style={{ color: '#6B7280' }}>
                {cat.count} specialized services
              </p>

              {/* View Services link */}
              <div
                className="mt-auto pt-5 border-t relative z-10"
                style={{ borderColor: 'rgba(0,0,0,0.05)' }}
              >
                <Link
                  to={`/services/${cat.slug}`}
                  className="flex items-center justify-between text-sm font-bold transition-all group-hover:text-primary-700"
                  style={{ color: '#1E1B2E' }}
                >
                  Explore Services 
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
