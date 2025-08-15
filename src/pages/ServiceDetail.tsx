import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    'accounting-bookkeeping': {
      title: 'Accounting & Bookkeeping',
      description: 'Professional accounting and bookkeeping services to keep your finances organized and compliant.',
      features: [
        'Daily transaction recording and categorization',
        'Monthly financial statements preparation',
        'Cash flow management and analysis',
        'Accounts payable and receivable management',
        'Bank reconciliation services',
        'Financial reporting and MIS preparation',
        'Expense tracking and budget analysis',
        'Year-end closing and adjustments'
      ],
      benefits: [
        'Accurate financial records',
        'Better cash flow management',
        'Informed business decisions',
        'Tax compliance readiness',
        'Time savings for core business activities'
      ],
      pricing: 'Starting from ₹5,000/month',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'taxation-gst': {
      title: 'Taxation & GST Services',
      description: 'Comprehensive tax planning and GST compliance services to minimize your tax burden legally.',
      features: [
        'GST registration and compliance',
        'Monthly/Quarterly GST return filing',
        'Income tax return preparation',
        'Tax planning and optimization',
        'TDS compliance and returns',
        'Advance tax calculations',
        'Tax audit representation',
        'Notice handling and responses'
      ],
      benefits: [
        'Maximum tax savings',
        'Complete compliance',
        'Penalty avoidance',
        'Expert representation',
        'Peace of mind'
      ],
      pricing: 'Starting from ₹3,000/return',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'audit-assurance': {
      title: 'Audit & Assurance',
      description: 'Independent audit services to ensure accuracy, compliance, and build stakeholder confidence.',
      features: [
        'Statutory audit services',
        'Internal audit and controls review',
        'Tax audit and compliance',
        'Management audit',
        'Due diligence services',
        'Risk assessment and management',
        'Compliance audit',
        'Forensic audit services'
      ],
      benefits: [
        'Enhanced credibility',
        'Risk mitigation',
        'Regulatory compliance',
        'Improved internal controls',
        'Stakeholder confidence'
      ],
      pricing: 'Starting from ₹25,000/audit',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'business-registration': {
      title: 'Business & Company Registration',
      description: 'Complete business registration services to help you start your venture legally and efficiently.',
      features: [
        'Private Limited Company incorporation',
        'LLP registration and compliance',
        'Partnership firm registration',
        'Sole proprietorship setup',
        'NGO and Trust registration',
        'Society registration',
        'License and permit assistance',
        'Post-incorporation compliance'
      ],
      benefits: [
        'Legal business entity',
        'Limited liability protection',
        'Tax benefits',
        'Credibility enhancement',
        'Easy funding access'
      ],
      pricing: 'Starting from ₹10,000/registration',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'financial-advisory': {
      title: 'Financial Advisory & Valuation',
      description: 'Strategic financial advice and valuation services to help you make informed business decisions.',
      features: [
        'Business valuation services',
        'Financial planning and analysis',
        'Investment advisory',
        'Merger and acquisition support',
        'Capital restructuring advice',
        'Cash flow projections',
        'Budgeting and forecasting',
        'Performance analysis'
      ],
      benefits: [
        'Informed decision making',
        'Strategic growth planning',
        'Risk management',
        'Value maximization',
        'Expert guidance'
      ],
      pricing: 'Starting from ₹15,000/project',
      image: 'https://images.pexels.com/photos/3184614/pexels-photo-3184614.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'financial-planning': {
      title: 'Financial Planning',
      description: 'Personalized financial planning services to help you achieve your long-term financial goals.',
      features: [
        'Retirement planning strategies',
        'Investment portfolio management',
        'Insurance planning',
        'Tax-efficient investing',
        'Estate planning',
        'Education funding plans',
        'Debt management strategies',
        'Emergency fund planning'
      ],
      benefits: [
        'Secure financial future',
        'Goal achievement',
        'Risk protection',
        'Tax optimization',
        'Peace of mind'
      ],
      pricing: 'Starting from ₹8,000/plan',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-500">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/consultation"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+919733412222"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                What's Included
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Key Benefits
              </h2>
              <div className="space-y-4 mb-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Pricing
                </h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {service.pricing}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  *Pricing may vary based on complexity and requirements. Contact us for a detailed quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Schedule a free consultation with our experts and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="mailto:kamleshtemani@gmail.com"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;