import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Breathe Your Way to Transformation</h3>
            <p className="text-gray-600">
              Transform your life through better breathing techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-[#0041B2]">About Me</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-[#0041B2]">Services</Link></li>
              <li><Link to="/program" className="text-gray-600 hover:text-[#0041B2]">Program</Link></li>
              <li><Link to="/assessment" className="text-gray-600 hover:text-[#0041B2]">Assessment</Link></li>
            </ul>
          </div>

          {/* Rest of the footer content remains the same */}
          {/* ... */}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Breathe Your Way to Transformation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}