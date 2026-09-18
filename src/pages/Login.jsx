import React, { useState } from 'react';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Lock, User } from 'lucide-react';

export default function Login() {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const from = location.state?.from?.pathname || '/dashboard';

  // Redirect to dashboard if already logged in
  if (isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!id || !password) {
      setError('Please enter both Login ID and Password.');
      return;
    }

    setIsLoading(true);
    try {
      await login(id, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-20 px-4 relative overflow-hidden bg-[#FDF8F3]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-300/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/40 blur-[120px] pointer-events-none"></div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img src="/hy-tech-logo.png" alt="HY-Tech Online Hub" className="h-10 w-auto" />
          </Link>
          <h2 className="text-2xl font-extrabold text-[#1E1B2E]">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-2">Log in to manage your family services.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-[#1E1B2E] mb-2" htmlFor="loginId">
              Login ID / Mobile Number
            </label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="loginId"
                type="text"
                placeholder="Enter your ID or number"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1E1B2E] mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 border-gray-300" />
              <span className="text-gray-600 font-medium">Remember me</span>
            </label>
            <a href="#" className="font-bold text-primary-600 hover:text-primary-700 transition-colors">Forgot Password?</a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all disabled:opacity-70"
          >
            {isLoading ? 'Logging In...' : 'Log In'} <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 font-medium mt-8 pt-6 border-t border-gray-100">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary-600 font-bold hover:text-primary-700 transition-colors">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
