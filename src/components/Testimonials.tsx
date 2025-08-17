import React from 'react';
import { Star, Quote } from 'lucide-react';
import ReviewForm from './ReviewForm';

const Testimonials = () => {
  const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Owner, Mehta Trading Co.',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300',
    text: 'Kamlesh Temani & Associates have been our trusted CA firm for over 3 years. Their expertise in GST and tax planning has saved us both time and money. Highly professional and approachable team.',
    rating: 5
  },
  {
    name: 'Anita Sharma',
    role: 'Founder, Shree Boutique',
    image: 'https://images.pexels.com/photos/1181425/pexels-photo-1181425.jpeg?auto=compress&cs=tinysrgb&w=300',
    text: 'As a small business owner, I struggled with compliance and bookkeeping. They handled everything seamlessly and explained every detail in simple language. I can now focus fully on growing my boutique.',
    rating: 5
  },
  {
    name: 'Vikram Desai',
    role: 'Director, Desai Constructions',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=300',
    text: 'Their audit services are extremely thorough and insightful. They identified areas where we could improve efficiency and ensured our company is 100% compliant with all regulations.',
    rating: 5
  },
  {
    name: 'Pooja Nair',
    role: 'Freelance Graphic Designer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    text: 'I approached them for my personal income tax filing and investment planning. Their guidance helped me save on taxes while creating a solid financial plan for the future. I truly appreciate their friendly approach.',
    rating: 5
  }
]

   ;

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Kamlesh Temani & Associates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 relative hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
            >
              <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 opacity-50 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Share Your Experience
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We'd love to hear about your experience with our services. Your feedback helps us improve and helps others make informed decisions.
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