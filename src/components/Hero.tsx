import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4 animate-bounce-gentle">
                ✨ Trusted by 5000+ Clients Since 2018
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Your Trusted
                <span className="text-blue-600 dark:text-blue-400"> Chartered Accountant & Financial</span>
                <br />
                Partner
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                At Kamlesh Temani & Associates, we offer expert chartered accountant services tailored for individuals, startups, and established businesses. Whether it’s tax planning, GST compliance, auditing, or company registration, we simplify complex financial processes so you can focus on growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years of Professional Excellence (since 2018)</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Compliance & Client Satisfaction Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/consultation"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#services" className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                View Our Services
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/7681681/pexels-photo-7681681.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional accountant at work"
                className="relative rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/20 hover:scale-110 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Certified & Trusted</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Licensed CPA Professionals</div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                ⭐ 4.9/5 Rating
              </div>
              <div className="absolute top-1/2 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                📞 24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;