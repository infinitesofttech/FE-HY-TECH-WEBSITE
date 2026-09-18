import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What exactly is the HY-Tech Online Hub?",
    answer: "HY-Tech Online Hub is a centralized digital platform designed to help families and individuals easily access, apply for, and track essential government services (like PAN, Aadhaar, Passport) and educational forms all in one place."
  },
  {
    question: "Do I need an appointment for Aadhaar updates?",
    answer: "No, for our special camps, walk-ins are generally welcome! However, for regular center visits, booking an appointment through our platform guarantees zero waiting time and a much faster process."
  },
  {
    question: "Are my family's documents secure?",
    answer: "Absolutely. We use industry-standard encryption and strict privacy policies to ensure that your sensitive documents and identity details are kept highly secure and are never shared without your explicit consent."
  },
  {
    question: "How does the Reward Wallet work?",
    answer: "Every time you successfully complete an application or refer a friend through the Hub, you earn points in your Reward Wallet. These points can be redeemed for discounts on future services like printouts, form fees, and premium consultations."
  },
  {
    question: "Can you help with college admissions?",
    answer: "Yes! We provide end-to-end guidance for college admissions, scholarship form filling, and compiling the necessary document checklists to ensure students have a stress-free admission process."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-24 bg-[var(--bg-base)] text-[var(--text-main)] transition-colors duration-300">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{ background: 'rgba(124, 58, 237, 0.1)', color: 'var(--theme-600)' }}>
            <HelpCircle size={14} className="mr-1 inline" /> GOT QUESTIONS?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services, how we handle your documents, and how we can simplify your life.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[var(--theme-500)] shadow-md' : 'border-[var(--border-subtle)] hover:border-gray-300 dark:hover:border-gray-600'}`}
                style={{ background: 'var(--bg-card)' }}
              >
                <button
                  className="w-full px-6 py-5 md:p-8 flex items-center justify-between gap-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-[var(--theme-600)]' : 'text-[var(--text-main)]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[var(--theme-500)] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                        <div className="h-px w-full bg-[var(--border-subtle)] mb-6"></div>
                        <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
