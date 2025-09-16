import React from 'react';
import { Sprout, Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'Features', href: '#features' },
      { name: 'Prediction Tool', href: '#prediction' },
      { name: 'Resources', href: '#resources' },
      { name: 'Contact', href: '#contact' }
    ],
    'Resources': [
      { name: 'User Guide', href: '#' },
      { name: 'API Documentation', href: '#' },
      { name: 'Video Tutorials', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Support Center', href: '#' }
    ],
    'Government': [
      { name: 'Odisha Government', href: '#' },
      { name: 'Department of Agriculture', href: '#' },
      { name: 'Krushi Bhawan', href: '#' },
      { name: 'Agricultural Schemes', href: '#' },
      { name: 'Policy Documents', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <Sprout className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Crop Predictor</h3>
                <p className="text-gray-400 text-sm">Government of Odisha</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering Odisha's farmers with cutting-edge AI technology for accurate 
              crop yield predictions and sustainable agricultural practices.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">support@aicropyield.odisha.gov.in</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+91-674-2536425</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Sprout className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-400">Department</p>
                <p className="text-white">Agriculture & Farmers' Empowerment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Government of Odisha. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;