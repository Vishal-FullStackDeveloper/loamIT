'use client';

import { useState } from 'react';
import { Brain, Smartphone, Cuboid as Cube, Link, Code, ArrowRight, Sparkles, Shield, Zap, Globe, Database, Eye } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Systems',
      description: 'Intelligent automation, machine learning models, and conversational AI agents that transform your business operations.',
      features: ['Custom AI Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Applications',
      description: 'Responsive web platforms and native mobile apps built with modern frameworks and best practices.',
      features: ['Cross-Platform Development', 'Progressive Web Apps', 'API Integration', 'Cloud Deployment'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cube,
      title: 'AR/VR Experiences',
      description: 'Immersive augmented and virtual reality solutions for training, marketing, and entertainment.',
      features: ['3D Modeling', 'Virtual Showrooms', 'Training Simulations', 'Interactive Experiences'],
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Link,
      title: 'Blockchain & Smart Contracts',
      description: 'Secure, decentralized solutions including DeFi applications, NFT marketplaces, and Web3 integrations.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Crypto Wallets'],
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Custom Software Modules',
      description: 'Tailored software solutions designed to meet your unique business requirements and workflows.',
      features: ['Enterprise Solutions', 'API Development', 'System Integration', 'Legacy Modernization'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-level encryption and security protocols' },
    { icon: Zap, title: 'High Performance', description: 'Optimized for speed and scalability' },
    { icon: Globe, title: 'Global Reach', description: 'Multi-language and multi-region support' },
    { icon: Database, title: 'Data Analytics', description: 'Advanced reporting and business intelligence' },
    { icon: Eye, title: 'UI/UX Excellence', description: 'Beautiful, intuitive user interfaces' },
    { icon: Sparkles, title: 'Innovation', description: 'Cutting-edge technology integration' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Core Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions that drive digital transformation 
            and accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeService === index
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Visual */}
          <div className="sticky top-32">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 aspect-video">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {services[activeService].title}
                </h3>
                <p className="text-white/90 text-sm">
                  {services[activeService].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Solutions Stand Out
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every solution we build incorporates these essential features to ensure 
              maximum performance, security, and user satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;