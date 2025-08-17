import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for comprehensive accounting, tax, and financial services. 
              Building long-term relationships through expertise and integrity.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://m.facebook.com/103749921593732?ref=pro_upsell_xav_ig_profile_page&wtsid=rdr_02wSefkSsN9XZuPMy" className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/kamlesh-temani-associates/?fbclid=PAQ0xDSwMJtQBleHRuA2FlbQIxMQABpwj2OJgcbimqOlqhnDOMeLmygf5y3QT00vHJjEfBzxu2TdEKhAp5hyBgFYBL_aem_Y19pwVzN_84RZ6Ur5P8_OA" className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/kamlesh_temani_and_associates?igsh=aTV2NzF3cGJyMG50" className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" id="accounting-bookkeeping-link" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 slung inline-block">Accounting & Bookkeeping</a></li>
              <li><a href="#services" id="taxation-gst-link" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 slung inline-block">Taxation & GST Services </a></li>
              <li><a href="#services" id="audit-assurance-link" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 slung inline-block">Audit & Assurance</a></li>
              <li><a href="#services" id="business-registration-link" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 slung inline-block">Business & Company Registrations</a></li>
              <li><a href="#services" id="financial-advisory-link" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 slung inline-block">Financial Advisory & Valuation</a></li>
              <li><a href="#services" id="audit-link" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 slung inline-block">Financial Planning</a></li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block">Contact</a></li>
              <li><a href="https://shawburndemo.wordpress.com/portfolio/" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-12">
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 dark:text-blue-300 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 break-all">+91 97334-12222</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 dark:text-blue-300 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">kamleshtemani@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 dark:text-blue-300 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">
                    123 Financial District<br />
                    Suite 500<br />
                    New York, NY 10004
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2025 CA Kamlesh Temani   & Associates Chartered Accountants. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.indiafilings.com/learn/website-privacy-policy-requirement/" className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">Privacy Policy</a>
              <a href="#https://caconnect.icai.org/terms-conditions" className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">Terms & Conditions</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
