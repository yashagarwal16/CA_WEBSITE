import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users, Award, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 min-h-screen flex items-center transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Indicators Bar */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 dark:border-gray-700/20">
            <Award className="h-5 w-5 text-amber-500 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Trusted by 500+ Clients • 6+ Years Excellence • 100% Compliance Rate
            </span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Your Trusted
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  Financial Partner
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 dark:text-gray-300 mt-2">
                  Since 2018
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                At <span className="font-semibold text-gray-800 dark:text-gray-200">Kamlesh Temani & Associates</span>, we provide comprehensive chartered accountant services with unwavering integrity and expertise. From tax planning to business registration, we're your partners in financial success.
              </p>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-2 gap-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/consultation"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+919733412222" 
                className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                Call: +91 97334-12222
              </a>
            </div>

            {/* Professional Credentials */}
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                CA Certified
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                ICAI Member
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Licensed Professional
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7681681/pexels-photo-7681681.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional chartered accountant consultation"
                  className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="h-7 w-7 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-lg">Trusted & Certified</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Licensed CA Professional</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Rating Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                ⭐ 4.9/5 Client Rating
              </div>
              
              {/* Floating Support Badge */}
              <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-3 rounded-full text-sm font-semibold shadow-lg transform -translate-y-1/2">
                📞 24/7 Support
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Trusted by leading businesses across West Bengal</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">ICAI</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">GST</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">MCA</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">ROC</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;