import React from "react";
import { Phone, Mail, MapPin, Clock, Calendar, Building2 } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We're here to answer your questions and guide you through your
            journey.
          </p>
        </div>

        {/* Single Column Layout (Form Removed) */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  contact@yourdomain.com
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Jaipur, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Mon – Sat: 9:00 AM – 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-500 dark:via-purple-500 dark:to-indigo-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Appointment
                </button>
                <button className="w-full border-2 border-white text-white py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105">
                  <Building2 className="mr-2 h-5 w-5" />
                  Virtual Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
