import React from 'react';
import { Brain, CloudRain, BarChart3, Users, Smartphone, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning algorithms analyze multiple data points to provide accurate crop yield predictions.',
      color: 'bg-blue-500'
    },
    {
      icon: CloudRain,
      title: 'Weather Integration',
      description: 'Real-time weather data and climate patterns integrated for comprehensive crop analysis.',
      color: 'bg-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Yield Analytics',
      description: 'Detailed analytics and insights to help farmers make informed decisions about their crops.',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Farmer Support',
      description: 'Multilingual chatbot assistance available 24/7 to help farmers with their queries.',
      color: 'bg-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Accessible on all devices with responsive design optimized for smartphones and tablets.',
      color: 'bg-purple-500'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Available in English, Hindi, Tamil, Telugu, Malayalam, and Odia for better accessibility.',
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Agriculture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with practical farming insights 
            to revolutionize crop yield predictions in Odisha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;