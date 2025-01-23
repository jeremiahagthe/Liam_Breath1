import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from './shared/NavLink';
import { Logo } from './shared/Logo';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo className="h-20 w-20" />
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <NavLink to="/" active={isActive('/')}>Home</NavLink>
              <NavLink to="/about" active={isActive('/about')}>About Me</NavLink>
              <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
              <NavLink to="/dashboard" active={isActive('/dashboard')}>Dashboard</NavLink>
              <NavLink to="/program" active={isActive('/program')}>Program</NavLink>
              <NavLink to="/assessment" active={isActive('/assessment')}>Assessment</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-[#0041B2] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#003399] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0041B2]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}