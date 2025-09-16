import React, { useState } from 'react';
import { MapPin, Droplets, Thermometer, Calendar, TrendingUp } from 'lucide-react';

const PredictionTool = () => {
  const [formData, setFormData] = useState({
    district: '',
    cropType: '',
    farmSize: '',
    soilType: '',
    previousYield: '',
    season: '',
    irrigationType: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const districts = ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Gajapati', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Keonjhar', 'Khurda', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'];
  
  const crops = ['Rice (Paddy)', 'Cotton', 'Sugarcane', 'Wheat', 'Maize', 'Groundnut', 'Sesame', 'Mustard', 'Jute', 'Turmeric'];
  
  const soilTypes = ['Alluvial', 'Black Cotton', 'Red Soil', 'Laterite', 'Sandy Loam', 'Clay Loam'];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const simulatePrediction = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      // Simulate AI prediction with realistic data
      const baseYield = {
        'Rice (Paddy)': 4.2,
        'Cotton': 18.5,
        'Sugarcane': 65,
        'Wheat': 3.8,
        'Maize': 5.5,
        'Groundnut': 1.8,
        'Sesame': 0.8,
        'Mustard': 1.2,
        'Jute': 25,
        'Turmeric': 8.5
      };

      const yieldVariation = (Math.random() - 0.5) * 0.4; // ±20% variation
      const predictedYield = baseYield[formData.cropType] * (1 + yieldVariation);
      
      const recommendations = [
        'Optimal sowing time: Follow recommended calendar dates',
        'Apply balanced NPK fertilizers based on soil test',
        'Maintain proper irrigation schedule',
        'Monitor for pest and disease management',
        'Consider intercropping for better soil health'
      ];

      setPrediction({
        yield: predictedYield.toFixed(1),
        confidence: Math.floor(Math.random() * 10) + 85,
        recommendations: recommendations.slice(0, 3),
        riskFactors: ['Weather variability', 'Market fluctuations'],
        bestPractices: ['Use certified seeds', 'Follow integrated farming approach']
      });
      
      setIsLoading(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(value => value !== '')) {
      simulatePrediction();
    }
  };

  return (
    <section id="prediction" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Crop Yield Prediction Tool
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your farm details below to get accurate AI-powered crop yield predictions 
            and personalized recommendations for your agricultural planning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Farm Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    District
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="">Select District</option>
                    {districts.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Crop Type
                  </label>
                  <select
                    name="cropType"
                    value={formData.cropType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="">Select Crop</option>
                    {crops.map(crop => (
                      <option key={crop} value={crop}>{crop}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Farm Size (hectares)
                  </label>
                  <input
                    type="number"
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleInputChange}
                    placeholder="e.g., 2.5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Soil Type
                  </label>
                  <select
                    name="soilType"
                    value={formData.soilType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="">Select Soil Type</option>
                    {soilTypes.map(soil => (
                      <option key={soil} value={soil}>{soil}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Season
                  </label>
                  <select
                    name="season"
                    value={formData.season}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="">Select Season</option>
                    <option value="kharif">Kharif (Monsoon)</option>
                    <option value="rabi">Rabi (Winter)</option>
                    <option value="zaid">Zaid (Summer)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Droplets className="inline h-4 w-4 mr-1" />
                    Irrigation Type
                  </label>
                  <select
                    name="irrigationType"
                    value={formData.irrigationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  >
                    <option value="">Select Irrigation</option>
                    <option value="rainfed">Rainfed</option>
                    <option value="canal">Canal Irrigation</option>
                    <option value="tube-well">Tube Well</option>
                    <option value="drip">Drip Irrigation</option>
                    <option value="sprinkler">Sprinkler</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Year Yield (tons/hectare)
                </label>
                <input
                  type="number"
                  name="previousYield"
                  value={formData.previousYield}
                  onChange={handleInputChange}
                  placeholder="e.g., 4.2"
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !Object.values(formData).every(value => value !== '')}
                className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing with AI...</span>
                  </>
                ) : (
                  <>
                    <TrendingUp className="h-5 w-5" />
                    <span>Generate Prediction</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {prediction ? (
              <>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Prediction Results</h3>
                  
                  <div className="mb-8">
                    <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {prediction.yield}
                      </div>
                      <div className="text-gray-600">tons per hectare</div>
                      <div className="mt-4 text-sm text-gray-500">
                        Confidence: {prediction.confidence}%
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Recommendations</h4>
                      <ul className="space-y-2">
                        {prediction.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Risk Factors</h4>
                      <ul className="space-y-2">
                        {prediction.riskFactors.map((risk, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Best Practices</h4>
                  <ul className="space-y-2">
                    {prediction.bestPractices.map((practice, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <Thermometer className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready for AI Analysis
                </h3>
                <p className="text-gray-600">
                  Fill out the form on the left to get your personalized crop yield prediction 
                  powered by advanced machine learning algorithms.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionTool;