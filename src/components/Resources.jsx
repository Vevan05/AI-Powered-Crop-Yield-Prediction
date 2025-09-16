import React from 'react';
import { BookOpen, Download, Video, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      type: 'Guide',
      title: 'Crop Yield Optimization Manual',
      description: 'Comprehensive guide on maximizing crop yields using AI predictions',
      icon: BookOpen,
      color: 'bg-blue-500',
      downloadable: true
    },
    {
      type: 'Video',
      title: 'Platform Tutorial Series',
      description: 'Step-by-step video tutorials on using the prediction tool',
      icon: Video,
      color: 'bg-red-500',
      downloadable: false
    },
    {
      type: 'Research',
      title: 'AI Model Technical Documentation',
      description: 'Detailed documentation of our machine learning algorithms',
      icon: BookOpen,
      color: 'bg-green-500',
      downloadable: true
    },
    {
      type: 'Report',
      title: 'Odisha Agricultural Statistics 2024',
      description: 'Latest statistical data on crop production and yields',
      icon: Download,
      color: 'bg-orange-500',
      downloadable: true
    }
  ];

  const quickLinks = [
    { title: 'Weather Updates', url: '#', description: 'Real-time weather information' },
    { title: 'Market Prices', url: '#', description: 'Current crop market rates' },
    { title: 'Government Schemes', url: '#', description: 'Agricultural support programs' },
    { title: 'Expert Consultation', url: '#', description: 'Connect with agricultural experts' },
    { title: 'Training Programs', url: '#', description: 'Farmer education initiatives' },
    { title: 'Technical Support', url: '#', description: 'Platform help and guidance' }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resources & Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive resources, guides, and support materials to maximize 
            the benefits of AI-powered crop yield predictions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Resources */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Download Resources</h3>
            
            <div className="space-y-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          {resource.type}
                        </span>
                        {resource.downloadable && (
                          <Download className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      
                      <button className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center space-x-1 hover:underline">
                        <span>{resource.downloadable ? 'Download' : 'View'}</span>
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Quick Links</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-200 block group"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600">
                    {link.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {link.description}
                  </p>
                  <div className="mt-3 flex items-center text-orange-600 text-sm">
                    <span>Learn more</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Support */}
            <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-2">Need Help?</h4>
              <p className="mb-4 text-orange-100">
                Our support team is available 24/7 to assist you with any questions 
                or technical issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Contact Support
                </a>
                <button className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors duration-200">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;