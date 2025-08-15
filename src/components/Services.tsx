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
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      slug: 'accounting-bookkeeping',
      title: 'Accounting & Bookkeeping',
      description: 'Keep your finances in perfect order with our reliable accounting solutions.',
      features: ['Daily bookkeeping & ledger maintenance', 'Financial statements & MIS reports', 'Expense tracking & analysis']
    },
    {
      icon: Shield,
      slug: 'taxation-gst',
      title: 'Taxation & GST Services',
      description: 'Stay compliant while saving time and money with our hassle-free tax services.',
      features: ['GST registration & monthly/quarterly returns', 'Income Tax filing for individuals & companies', 'Tax planning & savings strategies']
    },
    {
      icon: TrendingUp,
      slug: 'audit-assurance',
      title: 'Audit & Assurance',
      description: 'Independent audits that build trust, ensure compliance, and prevent errors.',
      features: ['Statutory audits', 'Internal audits', 'Tax audits & compliance checks']
    },
    {
      icon: PieChart,
      slug: 'business-registration',
      title: 'Business & Company Registrations',
      description: 'Helping you start right with smooth, quick, and cost-effective registrations.',
      features: ['Private Limited company incorporation', 'LLP registration', 'NGO, Trust & Society registrations']
    },
    {
      icon: Building,
      slug: 'financial-advisory',
      title: 'Financial Advisory & Valuation',
      description: 'Smart advice for informed financial decisions and sustainable growth.',
      features: ['Business planning & budgeting', 'Asset valuation & reporting', 'Investment advisory']
    },
    {
      icon: CreditCard,
      slug: 'financial-planning',
      title: 'Financial Planning',
      description: 'Personalized financial planning services to help you achieve your long-term financial goals.',
      features: ['Retirement Planning', 'Investment Strategy', 'Debt Management', 'Budgeting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver complete accounting, taxation, and compliance solutions under one roof — ensuring accuracy, efficiency, and peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 dark:group-hover:from-blue-500 dark:group-hover:to-blue-600 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg">
                    <IconComponent className="h-7 w-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/service/${service.slug}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 group/btn shadow-md hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-500 dark:via-purple-500 dark:to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
          <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation with our expert chartered accountants and discover 
            how we can help optimize your financial strategy.
          </p>
          <Link 
            to="/consultation"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
          >
            Schedule Free Consultation
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;