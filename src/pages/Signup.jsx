import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Lock, User, Phone, Mail } from 'lucide-react';

export default function Signup() {
  const { signup, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to dashboard if already logged in
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.mobile || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.mobile.length < 10) {
      setError('Please enter a valid mobile number.');
      return;
    }

    setIsLoading(true);
    try {
      await signup(formData);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-20 px-4 relative overflow-hidden bg-[#FDF8F3]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Decorative Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-300/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/40 blur-[120px] pointer-events-none"></div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img src="/hy-tech-logo.png" alt="HY-Tech Online Hub" className="h-10 w-auto" />
          </Link>
          <h2 className="text-2xl font-extrabold text-[#1E1B2E]">Create an Account</h2>
          <p className="text-sm text-gray-500 mt-2">Join us to manage your family documents easily.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#1E1B2E] mb-1.5" htmlFor="name">
              Full Name *
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1E1B2E] mb-1.5" htmlFor="mobile">
              Mobile Number *
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="10-digit mobile number"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1E1B2E] mb-1.5" htmlFor="email">
              Email Address (Optional)
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#1E1B2E] mb-1.5" htmlFor="password">
                Password *
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#1E1B2E] mb-1.5" htmlFor="confirmPassword">
                Confirm *
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm"
                  className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all mt-4 disabled:opacity-70"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'} <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 font-medium mt-6 pt-5 border-t border-gray-100">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 font-bold hover:text-primary-700 transition-colors">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
