import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import PromoBar from '../components/PromoBar';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Mock API submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 500);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="bg-[var(--bg-base)] min-h-screen text-[#1E1B2E] dark:text-gray-100 transition-colors duration-300 pb-20">
      
      {/* Header Banner */}
      <div className="bg-[var(--card-background)] py-16 text-center border-b border-[var(--border-color)]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1E1B2E] dark:text-gray-100">Contact Us</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto px-4">
          Have questions about our services? Need help with an application? Reach out to us and our team will get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--primary-light)' }}>
                <MapPin size={24} style={{ color: 'var(--primary-color)' }} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Our Location</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  Shop No. 05, First Floor, Rajmilan Complex,<br />
                  Old Jakatnaka, Dharampur, Gujarat
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--primary-light)' }}>
                <Phone size={24} style={{ color: 'var(--primary-color)' }} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Phone Number</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  <a href="tel:+917226030701" className="hover:text-[var(--primary-hover)] transition-colors">+91 72260 30701</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--primary-light)' }}>
                <Mail size={24} style={{ color: 'var(--primary-color)' }} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email Address</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  <a href="mailto:info@hytechonlinehub.in" className="hover:text-[var(--primary-hover)] transition-colors">info@hytechonlinehub.in</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--primary-light)' }}>
                <Clock size={24} style={{ color: 'var(--primary-color)' }} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Working Hours</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[var(--card-background)] rounded-2xl p-8 border border-[var(--border-color)] shadow-sm">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/30">
                <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E1B2E] dark:text-gray-100">Message Sent!</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                Thank you for reaching out to us. Our team will get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full text-sm font-bold text-white transition-colors"
                style={{ background: 'var(--primary-color)' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#1E1B2E] dark:text-gray-100">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[var(--border-color)] focus:ring-[var(--primary-color)]'} bg-transparent text-[#1E1B2E] dark:text-gray-100 focus:outline-none focus:ring-2`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#1E1B2E] dark:text-gray-100">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[var(--border-color)] focus:ring-[var(--primary-color)]'} bg-transparent text-[#1E1B2E] dark:text-gray-100 focus:outline-none focus:ring-2`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[#1E1B2E] dark:text-gray-100">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-[var(--border-color)] focus:ring-[var(--primary-color)]'} bg-transparent text-[#1E1B2E] dark:text-gray-100 focus:outline-none focus:ring-2`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1E1B2E] dark:text-gray-100">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[var(--border-color)] focus:ring-[var(--primary-color)]'} bg-transparent text-[#1E1B2E] dark:text-gray-100 focus:outline-none focus:ring-2 resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                  style={{ background: 'var(--primary-color)' }}
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
