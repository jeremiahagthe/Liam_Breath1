import React from 'react';
import { Calendar, Clock, Star } from 'lucide-react';

export default function BookSession() {
  return (
    <div className="py-16 bg-gradient-to-br from-[#00B2FF]/5 to-[#0041B2]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Begin Your Journey Today
            </h2>
            <p className="text-xl text-gray-600">
              Schedule a complimentary consultation to discuss your needs and explore how breathwork can transform your life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">30-Minute Session</h3>
              <p className="text-gray-600">Free consultation to discuss your goals</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Personalized Plan</h3>
              <p className="text-gray-600">Tailored to your unique needs</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Find a time that works for you</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/your-calendar-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full text-white bg-[#0041B2] hover:bg-[#003399] transition-colors duration-150 shadow-lg"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}