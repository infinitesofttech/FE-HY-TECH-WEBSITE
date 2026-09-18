import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceLinks = ['PAN Card Update', 'Aadhaar Correction', 'Passport Application', 'Birth Certificate', 'Family Registration', 'Reward Wallet'];
const resourceLinks = ['About HY-Tech', 'Blog & Insights', 'Upcoming Events', 'Family ID Guide', 'Reward Program', 'Contact Us'];
const socialIcons = ['𝕏', 'f', 'in', '▶'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <footer id="footer" style={{ background: '#14101F' }}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Subscribe */}
          <div>
            <img src="/hy-tech-logo.png" alt="HY-Tech Online Hub" style={{ height: '60px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: '16px' }} />
            <h4 className="text-base font-bold text-white mb-4">Subscribe for Latest Updates</h4>
            <div className="flex mb-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-l-xl text-sm outline-none"
                style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.10)' }}
              />
              <button
                className="px-4 py-2.5 rounded-r-xl flex items-center justify-center"
                style={{ background: '#7C3AED' }}
                onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
                onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}
              >
                <ArrowRight size={18} color="white" />
              </button>
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                className="mt-0.5 accent-purple-600 flex-shrink-0" />
              <span className="text-xs" style={{ color: '#6B7280' }}>I agree to the Terms & Conditions and Privacy Policy</span>
            </label>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors" style={{ color: '#6B7280' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map(l => (
                <li key={l}>
                  <Link to={l === 'Contact Us' ? '/contact' : '#'} className="text-sm transition-colors" style={{ color: '#6B7280' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">Contact Us</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-sm" style={{ color: '#6B7280' }}>
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#7C3AED' }} />
                <span>Shop No. 05, First Floor, Rajmilan Complex,<br />Old Jakatnaka, Dharampur, Gujarat</span>
              </li>
              <li className="flex items-center gap-3 text-sm" style={{ color: '#6B7280' }}>
                <Phone size={15} style={{ color: '#7C3AED' }} />
                <a href="tel:+917226030701" style={{ color: '#6B7280' }}>+91 72260 30701</a>
              </li>
              <li className="flex items-center gap-3 text-sm" style={{ color: '#6B7280' }}>
                <Mail size={15} style={{ color: '#7C3AED' }} />
                <a href="mailto:info@hytechonlinehub.in" style={{ color: '#6B7280' }}>info@hytechonlinehub.in</a>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              {socialIcons.map((s, i) => (
                <button key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#7C3AED'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                  {s}
                </button>
              ))}
            </div>
            {/* App Badges */}
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="text-xl">▶</span>
                <div>
                  <p className="text-[9px] text-white/50">GET IT ON</p>
                  <p className="text-xs font-bold text-white">Google Play</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="text-xl">🍎</span>
                <div>
                  <p className="text-[9px] text-white/50">DOWNLOAD ON THE</p>
                  <p className="text-xs font-bold text-white">App Store</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t  py-5" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/hy-tech-logo.png" alt="HY-Tech" style={{ height: '36px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          <p className="text-xs" style={{ color: '#6B7280' }}>
            © {new Date().getFullYear()} HY-Tech Computer Education & Online Hub. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs" style={{ color: '#6B7280' }}>
            <a href="#" onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}>Privacy Policy</a>
            <a href="#" onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
