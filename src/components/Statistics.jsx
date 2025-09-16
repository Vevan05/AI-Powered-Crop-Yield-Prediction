import React from 'react';
import { TrendingUp, Users, MapPin, Award } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '95.2%',
      label: 'Prediction Accuracy',
      description: 'Average accuracy across all crop types',
      color: 'text-green-600'
    },
    {
      icon: Users,
      value: '52,450',
      label: 'Active Farmers',
      description: 'Registered users across Odisha',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      value: '30',
      label: 'Districts Covered',
      description: 'Complete coverage of Odisha state',
      color: 'text-orange-600'
    },
    {
      icon: Award,
      value: '₹125Cr',
      label: 'Losses Prevented',
      description: 'Estimated crop loss prevention',
      color: 'text-purple-600'
    }
  ];

  const cropData = [
    { name: 'Rice (Paddy)', area: '65%', yield: '4.2 t/ha', growth: '+8.5%' },
    { name: 'Cotton', area: '15%', yield: '18.5 q/ha', growth: '+12.3%' },
    { name: 'Sugarcane', area: '8%', yield: '65 t/ha', growth: '+6.7%' },
    { name: 'Others', area: '12%', yield: 'Various', growth: '+5.2%' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Impact & Performance Statistics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform is making a significant difference in Odisha's agricultural landscape, 
            helping thousands of farmers optimize their crop yields.
          </p>
        </div>

        {/* Main Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className={`${stat.color} mb-4 flex justify-center`}>
                <stat.icon className="h-12 w-12" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Crop Distribution */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Crop Distribution & Performance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cropData.map((crop, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">{crop.name}</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Area Coverage</span>
                    <span className="font-semibold text-blue-600">{crop.area}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg. Yield</span>
                    <span className="font-semibold text-green-600">{crop.yield}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth</span>
                    <span className="font-semibold text-orange-600">{crop.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h4 className="font-semibold text-green-800 mb-3">Success Story</h4>
            <p className="text-green-700 text-sm leading-relaxed">
              "The AI prediction helped me increase my rice yield by 25% in Cuttack district. 
              The recommendations were spot-on!" - Ramesh Kumar, Farmer
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h4 className="font-semibold text-blue-800 mb-3">Technology Impact</h4>
            <p className="text-blue-700 text-sm leading-relaxed">
              Advanced satellite imagery and weather data integration provides accurate 
              predictions with 95%+ reliability across different crop types.
            </p>
          </div>
          
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h4 className="font-semibold text-orange-800 mb-3">Future Goals</h4>
            <p className="text-orange-700 text-sm leading-relaxed">
              Expanding to cover more crops and integrating market price predictions 
              to provide comprehensive agricultural intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;