import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  PieChart, 
  Building, 
  CreditCard, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'accounting',
      icon: FileText,
      slug: 'accounting-bookkeeping',
      title: 'Accounting & Bookkeeping',
      description: 'Professional accounting solutions to keep your finances organized and compliant.',
      features: ['Daily bookkeeping & ledger maintenance', 'Financial statements & MIS reports', 'Expense tracking & analysis'],
      price: '₹5,000/month',
      popular: false,
      trustBadge: '5000+ Clients'
    },
    {
      id: 'taxation',
      icon: Shield,
      slug: 'taxation-gst',
      title: 'Taxation & GST Services',
      description: 'Complete tax compliance and optimization services for individuals and businesses.',
      features: ['GST registration & returns filing', 'Income Tax filing & planning', 'Tax optimization strategies'],
      price: '₹3,000/return',
      popular: true,
      trustBadge: 'Most Popular'
    },
    {
      id: 'audit',
      icon: TrendingUp,
      slug: 'audit-assurance',
      title: 'Audit & Assurance',
      description: 'Independent audits that build trust and ensure regulatory compliance.',
      features: ['Statutory audits', 'Internal audits', 'Tax audits & compliance checks'],
      price: '₹25,000/audit',
      popular: false,
      trustBadge: '100% Compliance'
    },
    {
      id: 'registration',
      icon: Building,
      slug: 'business-registration',
      title: 'Business Registration',
      description: 'Complete business setup services to launch your venture legally and efficiently.',
      features: ['Company incorporation', 'LLP registration', 'License & permit assistance'],
      price: '₹10,000/registration',
      popular: false,
      trustBadge: '48hr Setup'
    },
    {
      id: 'financial-advisory',
      icon: PieChart,
      slug: 'financial-advisory',
      title: 'Financial Advisory',
      description: 'Strategic financial guidance for informed business decisions and growth.',
      features: ['Business valuation', 'Investment advisory', 'Financial planning & analysis'],
      price: '₹15,000/project',
      popular: false,
      trustBadge: 'Expert Advice'
    },
    {
      id: 'financial-planning',
      icon: CreditCard,
      slug: 'financial-planning',
      title: 'Financial Planning',
      description: 'Personalized financial planning to secure your future and achieve your goals.',
      features: ['Retirement planning', 'Investment strategy', 'Insurance planning'],
      price: '₹8,000/plan',
      popular: false,
      trustBadge: 'Future Secure'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Award className="h-4 w-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Financial
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From accounting to tax planning, we provide end-to-end financial services 
            with precision, integrity, and unwavering commitment to your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className={`group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 overflow-hidden ${
                  service.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-2xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-indigo-500 dark:group-hover:from-blue-500 dark:group-hover:to-indigo-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Starting from</div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Trust Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="h-3 w-3 mr-1" />
                      Quick turnaround
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                      {service.trustBadge}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link 
                    to={`/service/${service.slug}`}
                    className="group/btn w-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-blue-500 hover:to-indigo-500 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Compliance Rate</div>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">24hrs</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 rounded-xl flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Excellence</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join 500+ satisfied clients who trust us with their financial success. 
              Get expert guidance tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/consultation"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <a 
                href="tel:+919733412222"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                Call: +91 97334-12222
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;