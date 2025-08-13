import React from 'react';
import { Award, Users, Target, Briefcase } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Integrity',
      description: 'Honesty and transparency in every transaction.',
    },
    {
      icon: Users,
      title: 'Accuracy',
      description: 'Every detail matters, and we ensure compliance in every report.',
    },
    {
      icon: Target,
      title: 'Commitment',
      description: 'Dedicated support until your financial goals are met.',
    },
    {
      icon: Briefcase,
      title: 'Client-Centric Approach',
      description: 'Your success is our measure of achievement.',
    },
  ];

const team = [
  {
    name: 'Kamlesh Temani',
    role: 'Founder, Kamlesh Temani & Associates',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: '6+ years',
  },
  {
    name: 'Yash',
    role: 'Tax Director',
    image: 'https://images.pexels.com/photos/3184614/pexels-photo-3184614.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: ' years',
  },
  {
    name: 'AARTI',
    role: 'Audit Manager, ADV',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: 'years',
  },
];


  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Founded in 2018 by CA Kamlesh Temani, Kamlesh Temani & Associates is a reputed
              chartered accountancy firm based in Dhupguri, West Bengal.
              With years of hands-on experience, we specialize in delivering end-to-end accounting,
              auditing, tax compliance, and business registration services.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our approach is simple — personalized attention, accurate solutions, and complete transparency. Whether you’re a salaried individual, a growing startup, or a large corporation, we provide customized financial services to meet your specific needs.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional team meeting"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years of Professional Excellence (since 2018)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Meet Our Expert Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.experience} of expertise</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
