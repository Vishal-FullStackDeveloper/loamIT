'use client';

import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  Zap,
  Shield
} from 'lucide-react';

const Metrics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    deployments: 0,
    satisfaction: 0,
    uptime: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      icon: CheckCircle,
      value: 50,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries',
      color: 'from-green-500 to-teal-500',
      key: 'projects'
    },
    {
      icon: Zap,
      value: 15,
      suffix: '',
      label: 'Ongoing AI Deployments',
      description: 'Active AI systems running in production environments',
      color: 'from-blue-500 to-cyan-500',
      key: 'deployments'
    },
    {
      icon: Star,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Based on client feedback and project success rates',
      color: 'from-purple-500 to-pink-500',
      key: 'satisfaction'
    },
    {
      icon: Shield,
      value: 99.9,
      suffix: '%',
      label: 'System Uptime',
      description: 'Reliable infrastructure with minimal downtime',
      color: 'from-orange-500 to-red-500',
      key: 'uptime'
    }
  ];

  const additionalStats = [
    { icon: Users, value: '200+', label: 'Happy Clients', description: 'Businesses transformed' },
    { icon: Award, value: '50+', label: 'Certifications', description: 'Team expertise' },
    { icon: Clock, value: '24/7', label: 'Support', description: 'Always available' },
    { icon: TrendingUp, value: '300%', label: 'ROI Average', description: 'Client returns' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('metrics-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        metrics.forEach((metric) => {
          const duration = 2000;
          const steps = 60;
          const stepValue = metric.value / steps;
          let currentStep = 0;

          const interval = setInterval(() => {
            if (currentStep <= steps) {
              setCounters(prev => ({
                ...prev,
                [metric.key]: Math.min(currentStep * stepValue, metric.value)
              }));
              currentStep++;
            } else {
              clearInterval(interval);
            }
          }, duration / steps);
        });
      };

      animateCounters();
    }
  }, [isVisible]);

  return (
    <section id="metrics-section" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Success Metrics</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Numbers That <span className="gradient-text">Speak</span> for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in every project we deliver 
            and every relationship we build.
          </p>
        </div>

        {/* Main Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-6`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {metric.key === 'uptime' 
                  ? counters[metric.key].toFixed(1) 
                  : Math.round(counters[metric.key])}
                {metric.suffix}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {metric.label}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              More Than Just Numbers
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind every statistic is a story of collaboration, innovation, and success. 
              We're proud to be your trusted technology partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Ready to Add Your Success Story?</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our proven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Your Project Today
            </button>
            <button className="btn-secondary">
              View Our Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;