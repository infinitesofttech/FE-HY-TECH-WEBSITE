import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, ChevronRight, Info, Monitor, GraduationCap, Briefcase, Printer, Laptop, Globe } from 'lucide-react';
import { categories } from '../data/services';

const IconMap = {
  Monitor: Monitor,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Printer: Printer,
  Laptop: Laptop,
  Globe: Globe
};

const palettes = [
  { bg: '#EDE7FB', iconColor: '#7C3AED' }, // Lavender
  { bg: '#DCEEFB', iconColor: '#2563EB' }, // Light Blue
  { bg: '#DFF5E9', iconColor: '#059669' }, // Mint
  { bg: '#FDEAD9', iconColor: '#EA580C' }, // Peach
  { bg: '#FBE3EC', iconColor: '#DB2777' }, // Light Pink
  { bg: '#FDF4D9', iconColor: '#CA8A04' }, // Light Yellow
];

export default function ServicesPage() {
  const { slug } = useParams();

  // If a slug is provided, show that category only; otherwise show all
  const filtered = slug
    ? categories.filter((c) => c.slug === slug)
    : categories;

  const activeCategory = slug ? categories.find((c) => c.slug === slug) : null;

  const serviceColorMap = new Map();
  let colorIndex = 0;
  
  filtered.forEach((cat) => {
    cat.services.forEach((svc) => {
      serviceColorMap.set(svc.name, palettes[colorIndex % palettes.length]);
      colorIndex++;
    });
  });

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* Global Background Gradient */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-gradient-to-br from-[#FFF5EC] via-[#F4F1FA] to-[#FAF5FF]"></div>
      
      {/* Decorative Premium Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-300/30 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/40 blur-[120px]"></div>
      </div>

      {/* ── Page Header ───────────────────────────── */}
      <div className="w-full py-14 " style={{ background: 'linear-gradient(135deg, #FDF1E4 0%, #F1E1F2 100%)' }}>
        <div className="max-w-[1600px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6" style={{ color: '#6B7280' }}>
            <Link to="/" className="flex items-center gap-1 hover:text-purple-600 transition-colors">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-purple-600 transition-colors">Services</Link>
            {activeCategory && (
              <>
                <ChevronRight size={14} />
                <span style={{ color: '#7C3AED', fontWeight: 600 }}>{activeCategory.title}</span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ color: '#1E1B2E' }}>
            {activeCategory ? activeCategory.title : 'All Services'}
          </h1>
          <p className="text-base" style={{ color: '#6B7280' }}>
            {activeCategory
              ? activeCategory.subtitle
              : 'Browse all HY-Tech services — Online, Education, Job, Printing, Courses & more.'}
          </p>
        </div>
      </div>

      {/* ── Category Filter Pills (All) ───────────── */}
      <div className="w-full sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b py-4 overflow-x-auto shadow-sm"
        style={{ borderColor: 'rgba(243, 244, 246, 0.8)' }}>
        <div className="max-w-[1600px] mx-auto flex gap-3 flex-nowrap px-4 md:px-8">
          <Link to="/services"
            className="px-5 py-2.5 rounded-full text-sm font-bold flex-shrink-0 transition-all border"
            style={!slug ? { background: '#7C3AED', color: '#fff', borderColor: '#7C3AED' } : { background: '#fff', color: '#1E1B2E', borderColor: '#E5E7EB' }}
            onMouseEnter={e => { if (slug) { e.currentTarget.style.background = '#F3E8FF'; e.currentTarget.style.borderColor = '#D8B4FE'; } }}
            onMouseLeave={e => { if (slug) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#E5E7EB'; } }}
          >
            All Services
          </Link>
          {categories.map((cat) => {
            const Icon = IconMap[cat.icon];
            const isActive = slug === cat.slug;
            return (
              <Link key={cat.id} to={`/services/${cat.slug}`}
                className="px-5 py-2.5 rounded-full text-sm font-bold flex-shrink-0 transition-all border flex items-center gap-2 shadow-sm hover:shadow-md"
                style={isActive ? { background: '#7C3AED', color: '#fff', borderColor: '#7C3AED' } : { background: '#fff', color: '#1E1B2E', borderColor: '#E5E7EB' }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = '#F3E8FF'; e.currentTarget.style.borderColor = '#D8B4FE'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#E5E7EB'; } }}
              >
                {Icon && <Icon size={16} />} {cat.title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Service Lists ─────────────────────────── */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-14 space-y-16">
        {filtered.map((cat, ci) => {
          const Icon = IconMap[cat.icon];
          return (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.05 }}
          >
            {/* Category sub-header */}
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: cat.bg }}>
                  {Icon && <Icon size={20} color={cat.iconColor} />}
                </div>
                <div>
                  <h2 className="text-xl font-extrabold" style={{ color: '#1E1B2E' }}>{cat.title}</h2>
                  {cat.note && (
                    <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: '#7C3AED' }}><Info size={12} /> {cat.note}</p>
                  )}
                </div>
              </div>
              <span className="text-sm font-medium px-3 py-1 rounded-full"
                style={{ background: cat.bg, color: '#1E1B2E' }}>
                {cat.count} services
              </span>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
              {cat.services.map((svc, si) => {
                const hasSub = cat.subServices?.[svc.name];
                const cardColors = serviceColorMap.get(svc.name);
                return (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.04, duration: 0.3 }}
                    className="group rounded-2xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/50"
                    style={{ background: cardColors.bg, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 14px 32px rgba(0,0,0,0.08)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'}
                  >
                    {/* Top Image Block */}
                    <div className="h-44 w-full overflow-hidden shrink-0 relative flex items-center justify-center bg-gray-100">
                      <img src={svc.image} alt={svc.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      
                      {/* Floating Icon */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md">
                        {Icon && <Icon size={20} color={cardColors.iconColor} />}
                      </div>
                    </div>
                    
                    {/* Content Block */}
                    <div className="p-6 flex flex-col flex-1 relative">
                      <h3 className="font-bold text-base leading-snug mb-1.5" style={{ color: '#1E1B2E' }}>
                        {svc.name}
                      </h3>
                      
                      <p className="text-xs mb-5 font-medium" style={{ color: '#6B7280' }}>
                        {cat.title}
                      </p>

                      {/* Sub-services list */}
                      {hasSub && (
                        <ul className="mb-5 space-y-2">
                          {hasSub.map((sub) => (
                            <li key={sub} className="text-xs flex items-start gap-2" style={{ color: '#4B5563' }}>
                              <span style={{ color: cardColors.iconColor, fontWeight: 'bold' }}>›</span> 
                              <span className="leading-tight">{sub}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {/* Footer */}
                      <div className="mt-auto pt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                        <span className="flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all" style={{ color: cardColors.iconColor }}>
                          Book Now <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          );
        })}
      </div>
    </div>
  );
}
