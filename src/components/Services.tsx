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
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/service/${service.slug}`}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 flex items-center group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation with our expert chartered accountants and discover 
            how we can help optimize your financial strategy.
          </p>
          <Link 
            to="/consultation"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;