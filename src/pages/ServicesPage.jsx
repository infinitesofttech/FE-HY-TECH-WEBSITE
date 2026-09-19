import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  ChevronRight,
  Search,
  MessageCircle,
  FileCheck,
  Clock,
  Monitor,
  GraduationCap,
  Briefcase,
  Printer,
  Laptop,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import { categories, allServices } from '../data/services';

const IconMap = {
  Monitor: Monitor,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Printer: Printer,
  Laptop: Laptop,
  Globe: Globe,
};

export default function ServicesPage() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Active Category selection
  const activeCategory = slug ? categories.find((c) => c.slug === slug) : null;

  // Filter services by category and live search query
  const filteredCategories = useMemo(() => {
    let base = slug ? categories.filter((c) => c.slug === slug) : categories;

    if (!searchQuery.trim()) {
      return base;
    }

    const q = searchQuery.toLowerCase();
    return base
      .map((cat) => {
        const matchingServices = cat.services.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            (s.docs && s.docs.toLowerCase().includes(q)) ||
            (cat.subServices?.[s.name] &&
              cat.subServices[s.name].some((sub) => sub.toLowerCase().includes(q)))
        );
        return {
          ...cat,
          services: matchingServices,
        };
      })
      .filter((cat) => cat.services.length > 0);
  }, [slug, searchQuery]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val) {
      setSearchParams({ search: val });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ── Page Header (Dark Theme) ───────────────────────────── */}
      <div className="w-full bg-[#171717] pt-12 pb-16 relative overflow-hidden">
        {/* Abstract Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F96400] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#F96400] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-white/10 text-[#F96400] border border-white/10 uppercase tracking-wider mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F96400] animate-pulse"></span>
            {activeCategory ? 'Category Filter Applied' : 'Complete Service Directory'}
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            {activeCategory ? activeCategory.title : 'Our Services'}
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {activeCategory
              ? activeCategory.subtitle
              : 'Explore our comprehensive range of government, banking, educational, and digital services delivered accurately at our Dharampur desk.'}
          </p>

          {/* Centered Search Bar */}
          <div className="relative w-full max-w-2xl mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services (e.g., Aadhaar, PAN, College)..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/20 rounded-full text-sm md:text-base focus:outline-none focus:border-[#F96400] focus:bg-white focus:text-black transition-all text-white placeholder-gray-400 shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Centered Category Filter Pills ─────────────────── */}
      <div className="w-full bg-white border-b border-gray-200 py-4 shadow-sm sticky top-[74px] z-30">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services"
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                !slug
                  ? 'bg-[#171717] text-white border-[#171717]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#F96400] hover:text-[#F96400]'
              }`}
            >
              All Services
            </Link>
            {categories.map((cat) => {
              const isActive = slug === cat.slug;
              return (
                <Link
                  key={cat.id}
                  to={`/services/${cat.slug}`}
                  className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#F96400] text-white border-[#F96400] shadow-md shadow-orange-500/20'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#F96400] hover:text-[#F96400]'
                  }`}
                >
                  {cat.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Service Cards Grid ───────────────────── */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-14">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <Search size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-xl font-bold text-[#171717] mb-2">No services found matching "{searchQuery}"</p>
            <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto">Try searching for broader terms like "PAN", "Aadhaar", "College", or browse our categories above.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSearchParams({});
              }}
              className="px-8 py-3 rounded-full bg-[#171717] text-white text-sm font-bold hover:bg-[#F96400] transition-colors"
            >
              Clear Search & View All
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-16">
            {filteredCategories.map((cat) => {
              return (
                <div key={cat.id}>
                  {/* Category Title Head (Only show if multiple categories might render, or just rely on tabs. We'll show a small section title for clarity) */}
                  {!slug && !searchQuery && (
                    <div className="flex items-center gap-3 mb-8 pb-3 border-b border-gray-200">
                      <h2 className="text-2xl font-black text-[#171717]">{cat.title}</h2>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-500">{cat.services.length}</span>
                    </div>
                  )}

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {cat.services.map((svc) => {
                      const whatsappMsg = `Hello HY-Tech, I want to inquire about: ${svc.name}`;
                      
                      return (
                        <motion.div
                          key={svc.name}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          className="bg-white rounded-[20px] border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                        >
                          {/* Image Header */}
                          <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                            <img 
                              src={svc.image} 
                              alt={svc.name} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            {/* Floating Category Badge */}
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1.5 rounded-full bg-[#F96400] text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                                {cat.title.split(' ')[0]} {cat.title.split(' ')[1]}
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="font-extrabold text-[#171717] text-lg leading-tight mb-2 group-hover:text-[#F96400] transition-colors line-clamp-2">
                              {svc.name}
                            </h3>
                            
                            <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed flex-grow">
                              {svc.docs || 'Contact us for exact document requirements.'}
                            </p>

                            {/* Footer row */}
                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500">
                                <Clock size={13} className="text-[#F96400]" />
                                <span>{svc.time || 'Standard processing'}</span>
                              </div>
                              <a
                                href={`https://wa.me/917226030701?text=${encodeURIComponent(whatsappMsg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-black text-[#171717] flex items-center gap-1 group-hover:text-[#F96400] transition-colors"
                              >
                                View Details <ChevronRight size={14} />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Assistance Footer ─────────────────────── */}
      <div className="w-full bg-[#FFF5EE] py-16 text-center border-t border-[#F96400]/20">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-black text-[#171717] mb-3">Can't Find What You're Looking For?</h3>
          <p className="text-sm text-gray-600 mb-8">
            Contact us directly and we'll help you with any government, educational, or digital service you need at our Dharampur desk.
          </p>
          <a
            href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20need%20help%20with%20a%20document%20service%20not%20listed."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F96400] hover:bg-[#E05A00] text-white text-sm font-bold transition-colors shadow-lg shadow-orange-500/30 hover:-translate-y-1"
          >
            Contact Us Now <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
