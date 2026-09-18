import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Bell, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import PromoBar from './PromoBar';
import { categories } from '../data/services';
import ThemeToggle from './ThemeToggle';
import ColorPicker from './ColorPicker';

function ProfileMenu({ isLoggedIn, user, logout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate('/');
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
        style={{ background: 'rgba(124, 58, 237, 0.1)' }}
      >
        <User size={20} className="text-[var(--primary-color)] dark:text-white" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1e293b] rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50 overflow-hidden">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)} className="block px-4 py-2 text-[#1E1B2E] dark:text-gray-100 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700">My Dashboard</Link>
              <Link to="/family" onClick={() => setOpen(false)} className="block px-4 py-2 text-[#1E1B2E] dark:text-gray-100 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700">My Family</Link>
              <Link to="/rewards" onClick={() => setOpen(false)} className="block px-4 py-2 text-[#1E1B2E] dark:text-gray-100 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700">Reward Wallet</Link>
              <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-500 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700">Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="block px-4 py-2 text-[#1E1B2E] dark:text-gray-100 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700">Log In</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="block px-4 py-2 text-[#1E1B2E] dark:text-gray-100 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-medium text-[var(--primary-color)] transition-colors"
      : "font-medium text-[#1E1B2E] dark:text-gray-100 hover:text-[var(--primary-hover)] transition-colors";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "block px-3 py-2 text-[var(--primary-color)] font-medium"
      : "block px-3 py-2 text-[#1E1B2E] dark:text-gray-100 hover:text-[var(--primary-hover)] font-medium";


  return (
    <>
      <PromoBar />
      <nav className={`sticky top-0 z-50 transition-all duration-300 border-b bg-white dark:bg-[#0f172a] ${isScrolled ? 'border-gray-200 dark:border-gray-800 shadow-sm' : 'border-transparent'}`}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 py-2">
              <Link to="/" className="flex items-center pr-4">
                <img
                  src="/hy-tech-logo.png"
                  alt="HY-Tech Online Hub Logo"
                  className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
                  style={{ minWidth: '150px' }}
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <div className="relative group cursor-pointer h-full flex items-center">
                <NavLink to="/services" className={({ isActive }) => `flex items-center font-medium transition-colors py-6 ${isActive ? 'text-[var(--primary-color)]' : 'text-[#1E1B2E] dark:text-gray-100 hover:text-[var(--primary-hover)]'}`}>
                  Services <ChevronDown size={16} className="ml-1" />
                </NavLink>
                
                {/* Services Dropdown */}
                <div className="absolute top-[80%] left-0 hidden group-hover:block pt-4 w-64 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                    <Link to="/services" className="block px-5 py-2.5 text-sm font-bold text-[#1E1B2E] hover:bg-purple-50 hover:text-primary-600 transition-colors">
                      All Services
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    {categories.map((cat) => (
                      <Link 
                        key={cat.slug} 
                        to={`/services/${cat.slug}`} 
                        className="block px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-primary-600 transition-colors"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <NavLink to="/family" className={({ isActive }) => `flex items-center font-medium transition-colors ${isActive ? 'text-[var(--primary-color)]' : 'text-[#1E1B2E] dark:text-gray-100 hover:text-[var(--primary-hover)]'}`}>
                  Family <ChevronDown size={16} className="ml-1" />
                </NavLink>
              </div>
              <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 bg-white/80 rounded-full text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 w-64 transition-all text-[#1E1B2E] placeholder-gray-500 backdrop-blur-sm"
                />
              </div>
              
              <button className="relative text-[#1E1B2E] dark:text-white hover:text-[var(--primary-color)] transition-colors">
                <Bell size={24} />
                <span className="absolute -top-1 -right-1 bg-[var(--primary-color)] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white dark:border-gray-800">
                  2
                </span>
              </button>

              {/* Profile & Theme Menu */}
              <div className="flex items-center gap-3">
                <ColorPicker />
                <ThemeToggle />
                <ProfileMenu isLoggedIn={isLoggedIn} user={user} logout={logout} />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-4">
              <ColorPicker />
              <ThemeToggle />
              <ProfileMenu isLoggedIn={isLoggedIn} user={user} logout={logout} />
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#1E1B2E] dark:text-white">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
              <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>Home</NavLink>
              <NavLink to="/services" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>Services</NavLink>
              <NavLink to="/family" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>Family</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>About Us</NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
