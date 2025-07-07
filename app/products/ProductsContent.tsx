'use client';

import { useState } from 'react';
import { Brain, Smartphone, Cuboid as Cube, Link, Database, MessageCircle, ShoppingCart, Users, TrendingUp, Play, ExternalLink, CheckCircle, Star } from 'lucide-react';

const ProductsContent = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const categories = [
    { id: 'ai', name: 'AI Products', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'blockchain', name: 'Blockchain', icon: Link, color: 'from-orange-500 to-red-500' },
    { id: 'arvr', name: 'AR/VR Kits', icon: Cube, color: 'from-green-500 to-teal-500' },
    { id: 'custom', name: 'Custom Solutions', icon: Database, color: 'from-purple-500 to-pink-500' },
  ];

  const products = {
    ai: [
      {
        id: 1,
        name: 'AI Business Assistant',
        description: 'Intelligent conversational AI that handles customer support, lead qualification, and appointment scheduling 24/7.',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Natural Language Processing', 'Multi-language Support', 'CRM Integration', 'Analytics Dashboard'],
        industries: ['E-commerce', 'Healthcare', 'Real Estate', 'Professional Services'],
        pricing: 'Starting at $299/month',
        rating: 4.9,
        reviews: 127,
        demo: true
      },
      {
        id: 2,
        name: 'Custom CRM with AI',
        description: 'AI-enhanced customer relationship management system with predictive analytics and automated workflows.',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Predictive Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Insights'],
        industries: ['Sales Teams', 'Marketing Agencies', 'SaaS Companies', 'Consultancies'],
        pricing: 'Contact for Quote',
        rating: 4.8,
        reviews: 89,
        demo: true
      },
      {
        id: 3,
        name: 'E-commerce AI Toolkit',
        description: 'Complete AI solution for online stores including recommendation engines, dynamic pricing, and inventory optimization.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Product Recommendations', 'Dynamic Pricing', 'Inventory Management', 'Customer Segmentation'],
        industries: ['Online Retail', 'Fashion', 'Electronics', 'Marketplace'],
        pricing: 'Starting at $499/month',
        rating: 4.9,
        reviews: 203,
        demo: true
      }
    ],
    blockchain: [
      {
        id: 4,
        name: 'NFT Marketplace Engine',
        description: 'Complete white-label NFT marketplace with smart contracts, wallet integration, and royalty management.',
        image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Smart Contract Templates', 'Wallet Integration', 'Royalty System', 'Gas Optimization'],
        industries: ['Art & Collectibles', 'Gaming', 'Music', 'Sports'],
        pricing: 'Starting at $10,000',
        rating: 4.7,
        reviews: 45,
        demo: true
      },
      {
        id: 5,
        name: 'Smart Contract Builder',
        description: 'Visual smart contract development platform with pre-built templates and security auditing tools.',
        image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Visual Builder', 'Security Auditing', 'Multi-chain Support', 'Gas Estimation'],
        industries: ['DeFi', 'Supply Chain', 'Real Estate', 'Insurance'],
        pricing: 'Contact for Quote',
        rating: 4.8,
        reviews: 67,
        demo: true
      }
    ],
    arvr: [
      {
        id: 6,
        name: 'Virtual Showroom',
        description: 'Immersive 3D showroom experience for retail brands to showcase products in virtual environments.',
        image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['3D Product Visualization', 'Virtual Try-On', 'Interactive Demos', 'Analytics'],
        industries: ['Retail', 'Automotive', 'Real Estate', 'Fashion'],
        pricing: 'Starting at $5,000',
        rating: 4.9,
        reviews: 78,
        demo: true
      },
      {
        id: 7,
        name: 'Training Simulation Platform',
        description: 'VR-based training platform for complex procedures, safety training, and skill development.',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Scenario Builder', 'Progress Tracking', 'Multi-user Sessions', 'Performance Analytics'],
        industries: ['Manufacturing', 'Healthcare', 'Aviation', 'Oil & Gas'],
        pricing: 'Contact for Quote',
        rating: 4.8,
        reviews: 56,
        demo: true
      }
    ],
    custom: [
      {
        id: 8,
        name: 'Enterprise API Gateway',
        description: 'Scalable API management platform with authentication, rate limiting, and comprehensive analytics.',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['API Authentication', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal'],
        industries: ['Enterprise', 'SaaS', 'FinTech', 'Healthcare'],
        pricing: 'Contact for Quote',
        rating: 4.9,
        reviews: 94,
        demo: true
      },
      {
        id: 9,
        name: 'Legacy System Modernization',
        description: 'Complete modernization service for outdated systems with cloud migration and AI integration.',
        image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        features: ['Cloud Migration', 'API Development', 'Data Migration', 'Staff Training'],
        industries: ['Government', 'Banking', 'Insurance', 'Manufacturing'],
        pricing: 'Contact for Quote',
        rating: 4.8,
        reviews: 42,
        demo: false
      }
    ]
  };

  const currentProducts = products[activeCategory as keyof typeof products];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingCart className="w-4 h-4" />
            <span>Our Products</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful <span className="gradient-text">Technology Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready-to-deploy solutions that transform your business operations. 
            From AI agents to blockchain platforms, we've got you covered.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.demo && (
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-5 h-5 text-blue-600 ml-0.5" />
                    </button>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-gray-600">({product.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Industries:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.industries.slice(0, 3).map((industry, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-gray-900">
                    {product.pricing}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{product.reviews} users</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm">
                    Get Started
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Products */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products are built with enterprise-grade security, scalability, and performance in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Ready</h3>
              <p className="text-gray-600 text-sm">
                Built for scale with enterprise security and compliance standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600 text-sm">
                Our clients typically see 300%+ return on investment within 6 months.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Dedicated support team available around the clock for all your needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our products can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContent;