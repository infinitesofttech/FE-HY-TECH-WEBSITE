import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, GraduationCap, Briefcase, Printer, Laptop, Globe, FolderCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const IconMap = {
  Monitor: Monitor,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Printer: Printer,
  Laptop: Laptop,
  Globe: Globe,
};

export default function BrowseCategories() {
  return (
    <section className="w-full py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#FFF5EE] text-[#F96400]">
              <FolderCheck size={13} /> Specialized Service Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] tracking-tight mb-2">
              Everything Your Family & Career Needs.
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl">
              From essential government identification documents to college admissions and certified computer education, explore our organized service departments in Dharampur.
            </p>
          </div>
          <Link
            to="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-black hover:bg-[#F96400] text-white transition-all shadow-sm flex-shrink-0"
          >
            View All Services <ArrowRight size={15} />
          </Link>
        </div>

        {/* 6-Category Premium Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          speed={800}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pt-4 px-4 -mx-4 !pb-16"
          style={{
            '--swiper-pagination-color': '#F96400',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bottom': '10px',
          }}
        >
          {categories.map((cat, i) => {
            const Icon = IconMap[cat.icon] || Monitor;
            return (
              <SwiperSlide key={cat.id} style={{ height: 'auto' }}>
                <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="bg-white rounded-[20px] border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image Header */}
                <div className="relative h-48 w-full bg-gray-100">
                  {/* Image Container with overflow hidden for the zoom effect */}
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      src={cat.catImage} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Floating count badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur text-[#171717] text-[10px] font-bold shadow-sm">
                      {cat.count} Services
                    </span>
                  </div>

                  {/* Icon Badge - Placed absolutely over the boundary */}
                  <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-md flex items-center justify-center z-20 group-hover:bg-[#FFF5EE] group-hover:border-[#F96400]/30 transition-colors">
                    <Icon size={20} className="text-[#000000] group-hover:text-[#F96400] transition-colors" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-9 flex flex-col flex-grow">
                  <h3 className="font-extrabold text-[#171717] text-lg leading-tight mb-3 group-hover:text-[#F96400] transition-colors">
                    {cat.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6 flex-grow items-start content-start">
                    {cat.subtitle.split(', ').map((item, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 hover:bg-[#FFF5EE] hover:text-[#F96400] text-gray-600 border border-gray-200 hover:border-[#F96400]/30 text-[11px] font-medium rounded-md transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#F96400]/70"></span>
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Footer Link */}
                  <div className="mt-auto pt-3">
                    <Link
                      to={`/services/${cat.slug}`}
                      className="group/btn w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 hover:bg-[#FFF5EE] border border-gray-100 hover:border-[#F96400]/40 transition-all duration-300"
                    >
                      <span className="text-[12px] font-bold text-[#171717] group-hover/btn:text-[#F96400] transition-colors">
                        Explore {cat.title}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/btn:bg-[#F96400] group-hover/btn:text-white text-gray-500 transition-all duration-300 border border-gray-100 group-hover/btn:border-[#F96400]">
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
}
