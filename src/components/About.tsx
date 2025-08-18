import React from 'react';
import { Award, Users, Target, Briefcase, CheckCircle2, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Unwavering honesty and transparency in every financial transaction and advisory service.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail ensuring 100% accuracy in all financial reports and compliance.',
    },
    {
      icon: Users,
      title: 'Client-First',
      description: 'Your success is our priority. We build lasting relationships through dedicated service.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Continuous improvement and staying ahead of regulatory changes for optimal results.',
    },
  ];

  const team = [
    {
      name: 'CA Kamlesh Temani',
      role: 'Founder & Managing Partner',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '6+ years',
      credentials: 'Chartered Accountant, ICAI Member',
    },
    {
      name: 'Yash Temani',
      role: 'Tax Director & Compliance Head',
      image: 'https://images.pexels.com/photos/3184614/pexels-photo-3184614.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '4+ years',
      credentials: 'Tax Specialist, GST Expert',
    },
    {
      name: 'Aarti Sharma',
      role: 'Audit Manager & Legal Advisor',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '5+ years',
      credentials: 'Audit Specialist, Legal Advisor',
    },
  ];

  const achievements = [
    { number: '5000+', label: 'Satisfied Clients', icon: Users },
    { number: '6+', label: 'Years of Excellence', icon: Award },
    { number: '100%', label: 'Compliance Rate', icon: CheckCircle2 },
    { number: '24/7', label: 'Client Support', icon: Shield },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-slate-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Award className="h-4 w-4 mr-2" />
            About Our Firm
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Building Trust Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Professional Excellence
            </span>
          </h2>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded in <span className="font-semibold text-blue-600 dark:text-blue-400">2018</span> by CA Kamlesh Temani, 
                our firm has grown from a vision of providing honest, reliable financial services to becoming 
                <span className="font-semibold text-gray-800 dark:text-gray-200"> West Bengal's trusted chartered accountancy practice</span>.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe in building lasting relationships through transparency, expertise, and unwavering commitment 
                to our clients' financial success. Every service we provide is backed by professional integrity and 
                personalized attention.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{achievement.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team consultation"
                className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Professional Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">ICAI Certified</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Professional Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide every decision we make and every service we provide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Expert Team</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to your financial success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.credentials}</p>
                <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  {member.experience} experience
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;