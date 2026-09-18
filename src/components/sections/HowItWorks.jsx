import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Upload, Gift, GraduationCap } from 'lucide-react';

const steps = [
  {
    num: '01.',
    icon: Users,
    title: 'Register Family',
    desc: 'Create your Family ID and add all family members to a single shared account.',
    iconBg: '#EDE7FB',
  },
  {
    num: '02.',
    icon: FileText,
    title: 'Choose Service',
    desc: 'Browse our services — PAN, Aadhaar, Passport, Certificates and more.',
    iconBg: '#E3F0FA',
  },
  {
    num: '03.',
    icon: Upload,
    title: 'Submit Documents',
    desc: 'Upload required documents securely through our portal or visit the centre.',
    iconBg: '#E1F5EC',
  },
  {
    num: '04.',
    icon: Gift,
    title: 'Track & Earn Rewards',
    desc: 'Track your service status in real time and earn reward points on every completed service.',
    iconBg: '#FDEAD9',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20" style={{ background: 'linear-gradient(135deg, #FDF1E4 0%, #F1E1F2 100%)' }}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{ background: '#FDEDE3', color: '#7C3AED' }}>
            <GraduationCap size={14} className="mr-1 inline" /> OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: '#1E1B2E' }}>
            Structured Process for<br />Faster Service.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[22px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px hidden md:block"
            style={{ background: '#D1C4E9' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map(({ num, icon: Icon, title, desc, iconBg }, i) => (
              <div key={num} className="flex flex-col items-center">
                {/* Number circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: 'spring' }}
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white mb-6 relative z-10"
                  style={{ background: '#7C3AED' }}
                >
                  {num}
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.1 }}
                  className="rounded-2xl p-6 bg-white w-full"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: iconBg }}>
                    <Icon size={20} style={{ color: '#7C3AED' }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#1E1B2E' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
