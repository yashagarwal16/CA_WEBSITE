import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';
import ReviewForm from './ReviewForm';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Mehta',
      role: 'Owner, Mehta Trading Co.',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Kamlesh Temani & Associates transformed our business finances. Their GST expertise saved us significant costs and their proactive approach to compliance gives us complete peace of mind. Truly professional service.',
      rating: 5,
      service: 'GST & Tax Planning',
      verified: true
    },
    {
      name: 'Anita Sharma',
      role: 'Founder, Shree Boutique',
      image: 'https://images.pexels.com/photos/1181425/pexels-photo-1181425.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'As a small business owner, I was overwhelmed with compliance requirements. Their team simplified everything and explained each step clearly. Now I can focus on growing my business with confidence.',
      rating: 5,
      service: 'Business Compliance',
      verified: true
    },
    {
      name: 'Vikram Desai',
      role: 'Director, Desai Constructions',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Their audit services are exceptionally thorough and insightful. They identified cost-saving opportunities we never knew existed and ensured our company maintains the highest compliance standards.',
      rating: 5,
      service: 'Audit & Assurance',
      verified: true
    },
    {
      name: 'Pooja Nair',
      role: 'Freelance Graphic Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Their personal tax planning service is outstanding. They helped me optimize my tax strategy and create a solid financial plan. The team is approachable, knowledgeable, and genuinely cares about client success.',
      rating: 5,
      service: 'Personal Tax Planning',
      verified: true
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2 fill-current" />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real experiences from real clients who trust us with their financial success. 
            Join our community of satisfied clients across West Bengal.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-16 border border-green-100 dark:border-green-800/30">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">4.9/5</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years of Trust</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-600 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 opacity-50 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">({testimonial.rating}.0)</span>
                </div>
                
                {/* Service Badge */}
                <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {testimonial.service}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-xl object-cover mr-4 shadow-md"
                      />
                      {testimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center text-green-600 dark:text-green-400 text-xs">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Verified Client
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form Section */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-slate-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Award className="h-4 w-4 mr-2" />
              Share Your Experience
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Help Others Make Informed Decisions
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your feedback helps us improve and helps others discover our professional services. 
              Share your experience with our team.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ReviewForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;