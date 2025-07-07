'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calendar, 
  MessageCircle, 
  FileText,
  Sparkles,
  Shield,
  Zap,
  Users,
  Brain,
  Code,
  Smartphone,
  Database,
  Globe,
  TrendingUp,
  Award,
  Play,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingTexts = [
    'AI-Powered Systems',
    'Blockchain Solutions',
    'AR/VR Experiences',
    'Custom Software',
    'Mobile Applications'
  ];

  const interactiveSlides = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time insights with machine learning predictions',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: Brain,
      features: ['Predictive Analytics', 'Real-time Processing', 'Custom ML Models'],
      color: 'from-blue-500 to-cyan-500',
      stats: { accuracy: '94%', speed: '2.3s', users: '10K+' }
    },
    {
      id: 2,
      title: 'Blockchain Transaction Network',
      description: 'Secure, decentralized transaction processing',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: Shield,
      features: ['Smart Contracts', 'Multi-chain Support', 'Zero-knowledge Proofs'],
      color: 'from-orange-500 to-red-500',
      stats: { security: '99.9%', tps: '50K', nodes: '500+' }
    },
    {
      id: 3,
      title: 'AR Shopping Experience',
      description: 'Immersive product visualization and interaction',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: Sparkles,
      features: ['3D Product Models', 'Virtual Try-on', 'Spatial Tracking'],
      color: 'from-green-500 to-teal-500',
      stats: { engagement: '300%', conversion: '+45%', satisfaction: '4.9/5' }
    },
    {
      id: 4,
      title: 'Mobile App Ecosystem',
      description: 'Cross-platform applications with native performance',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: Smartphone,
      features: ['React Native', 'Offline Sync', 'Push Notifications'],
      color: 'from-purple-500 to-pink-500',
      stats: { downloads: '1M+', rating: '4.8/5', platforms: '3' }
    },
    {
      id: 5,
      title: 'Enterprise Data Platform',
      description: 'Scalable data processing and business intelligence',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: Database,
      features: ['Big Data Processing', 'Real-time Analytics', 'API Gateway'],
      color: 'from-indigo-500 to-purple-500',
      stats: { throughput: '1TB/h', uptime: '99.99%', apis: '200+' }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % interactiveSlides.length);
    }, 5000);

    return () => {
      clearInterval(textInterval);
      clearInterval(slideInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % interactiveSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + interactiveSlides.length) % interactiveSlides.length);
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Zap, value: '99%', label: 'Uptime' },
    { icon: Shield, value: '24/7', label: 'Support' },
    { icon: Sparkles, value: '50+', label: 'Projects' },
  ];

  const currentSlideData = interactiveSlides[currentSlide];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Leading Innovation in Technology</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building the{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Future
                </span>
                <br />
                with{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                  AI Innovation
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We design powerful, intelligent systems for digital-first enterprises. 
                Transform your business with cutting-edge technology solutions that drive growth and innovation.
              </p>

              <div className="text-lg text-blue-600 font-medium mb-8 h-8">
                <span className="inline-block transform transition-all duration-500">
                  Specialized in: {rotatingTexts[currentText]}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="btn-primary flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a Discovery Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Request a Proposal</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with AI Agent</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-2 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Interactive Slides */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative">
                {/* Main Slide Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500"></div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Slide Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${currentSlideData.color} text-white`}>
                        <currentSlideData.icon className="w-4 h-4" />
                        <span>Live Demo</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={prevSlide}
                          className="w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/70 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/70 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Slide Image with Overlay */}
                    <div className="relative mb-6 rounded-2xl overflow-hidden group">
                      <img
                        src={currentSlideData.image}
                        alt={currentSlideData.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <Play className="w-5 h-5 text-blue-600 ml-0.5" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-lg font-bold mb-1">
                          {currentSlideData.title}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {currentSlideData.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {currentSlideData.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSlideData.color}`}></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(currentSlideData.stats).map(([key, value], index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Link
                      href="/products"
                      className={`w-full bg-gradient-to-r ${currentSlideData.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {interactiveSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;