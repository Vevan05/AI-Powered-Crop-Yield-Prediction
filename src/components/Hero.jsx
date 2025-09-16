import React from 'react';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Government of Odisha Initiative
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI-Powered <span className="text-orange-600">Crop Yield</span> Predictions
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Empowering Odisha farmers with advanced artificial intelligence to predict crop yields, 
              optimize farming decisions, and maximize agricultural productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#prediction"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Prediction
              </a>
              <a
                href="#features"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 text-center"
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600">Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">30+</div>
                <div className="text-gray-600">Districts</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Yield Preview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rice (Kharif)</span>
                    <span className="text-green-600 font-semibold">4.2 tons/hectare</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cotton</span>
                    <span className="text-green-600 font-semibold">18.5 quintals/hectare</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sugarcane</span>
                    <span className="text-green-600 font-semibold">65 tons/hectare</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span>Powered by Advanced AI Models</span>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;