import React from "react";
import { Phone, Mail, MapPin, Clock, Calendar, Building2, CheckCircle2, Award } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Phone className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Financial Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with our expert team for personalized financial solutions. 
            We're here to guide you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a href="tel:+919733412222" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg">
                      +91 97334-12222
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Available 24/7 for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <a href="mailto:kamleshtemani@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg">
                      kamleshtemani@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Office Address</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      Ward No. 14, Mahabirsthan,<br />
                      near Hanuman Mandir, Churri Patty Rd,<br />
                      Gobindapally, Dhupguri 735210,<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h4>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1">
                      <p className="text-lg">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                      <p className="text-lg">Sunday: Closed</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Emergency consultations available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800/30">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                Why Choose Us?
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  ICAI Certified
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  500+ Happy Clients
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  100% Compliance
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  6+ Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-8 text-lg">
                  Take the first step towards financial success. Choose how you'd like to connect with us.
                </p>
                <div className="space-y-4">
                  <a 
                    href="/consultation"
                    className="w-full bg-white text-blue-600 py-4 px-6 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 group"
                  >
                    <Calendar className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Schedule Free Consultation
                  </a>
                  <a 
                    href="tel:+919733412222"
                    className="w-full border-2 border-white text-white py-4 px-6 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 group"
                  >
                    <Phone className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Call Now: +91 97334-12222
                  </a>
                </div>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Our Services Include</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Tax Planning & Filing
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  GST Registration & Returns
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Company Registration
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Audit & Assurance
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  Financial Advisory
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Bookkeeping Services
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-red-100 dark:border-red-800/30">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                <Phone className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                Need Urgent Help?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                For tax deadlines, compliance issues, or urgent financial matters
              </p>
              <a 
                href="tel:+919733412222"
                className="inline-flex items-center text-red-600 dark:text-red-400 font-semibold hover:text-red-700 dark:hover:text-red-300 transition-colors"
              >
                Call Emergency Line: +91 97334-12222
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;