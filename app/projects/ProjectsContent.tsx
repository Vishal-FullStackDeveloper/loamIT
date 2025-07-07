'use client';

import { useState } from 'react';
import { Filter, Search, ExternalLink, Award, TrendingUp, Users, Clock, Brain, Link, Cuboid as Cube, Smartphone, Database, Star, Eye, Play } from 'lucide-react';

const ProjectsContent = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'ai', name: 'AI & ML', count: 5, icon: Brain },
    { id: 'blockchain', name: 'Blockchain', count: 3, icon: Link },
    { id: 'arvr', name: 'AR/VR', count: 2, icon: Cube },
    { id: 'mobile', name: 'Mobile', count: 4, icon: Smartphone },
    { id: 'enterprise', name: 'Enterprise', count: 3, icon: Database },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Platform',
      client: 'MedConnect Solutions',
      category: 'ai',
      industry: 'Healthcare',
      duration: '8 months',
      team: '12 members',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Comprehensive AI platform for patient management, diagnostic assistance, and automated documentation.',
      challenge: 'Healthcare provider needed to reduce administrative overhead by 50% while improving diagnostic accuracy through AI-powered insights.',
      solution: 'Developed ML models for predictive diagnostics, NLP for documentation, and real-time patient monitoring mobile app.',
      technologies: ['TensorFlow', 'React Native', 'Node.js', 'MongoDB', 'AWS', 'GPT-4 API'],
      results: [
        { metric: '65%', label: 'Reduction in Admin Time', icon: Clock },
        { metric: '40%', label: 'Improved Diagnostic Accuracy', icon: Award },
        { metric: '10,000+', label: 'Patients Served Monthly', icon: Users },
        { metric: '99.8%', label: 'System Uptime', icon: TrendingUp }
      ],
      testimonial: {
        quote: "The AI diagnostics have been game-changing for our medical team. Patient satisfaction scores have never been higher.",
        author: "Dr. Sarah Chen",
        position: "Chief Medical Officer"
      },
      tags: ['AI', 'Healthcare', 'Mobile App', 'Machine Learning'],
      featured: true,
      demo: true
    },
    {
      id: 2,
      title: 'Blockchain Supply Chain Solution',
      client: 'Global Logistics Corp',
      category: 'blockchain',
      industry: 'Logistics',
      duration: '6 months',
      team: '8 members',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'End-to-end blockchain solution for supply chain transparency and smart contract automation.',
      challenge: 'Complex supply chain lacked transparency, leading to disputes and inefficiencies costing $2M annually.',
      solution: 'Implemented blockchain tracking system with smart contracts for automated payments and dispute resolution.',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
      results: [
        { metric: '30%', label: 'Cost Reduction', icon: TrendingUp },
        { metric: '100%', label: 'Supply Chain Transparency', icon: Eye },
        { metric: '85%', label: 'Dispute Resolution Speed', icon: Clock },
        { metric: '50+', label: 'Partners Connected', icon: Users }
      ],
      testimonial: {
        quote: "The blockchain solution eliminated intermediaries and reduced our operational costs by 30%. Complete game-changer.",
        author: "David Park",
        position: "Operations Manager"
      },
      tags: ['Blockchain', 'Supply Chain', 'Smart Contracts', 'Web3'],
      featured: false,
      demo: true
    },
    {
      id: 3,
      title: 'AR Virtual Showroom',
      client: 'Luxury Furniture Co.',
      category: 'arvr',
      industry: 'Retail',
      duration: '4 months',
      team: '6 members',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Immersive AR experience allowing customers to visualize furniture in their own spaces.',
      challenge: 'High return rates due to customers unable to visualize products in their homes before purchase.',
      solution: 'Created AR mobile app with 3D furniture models and room scanning for realistic placement visualization.',
      technologies: ['Unity', 'ARCore', 'ARKit', 'C#', 'Firebase', 'Blender'],
      results: [
        { metric: '200%', label: 'Customer Engagement Increase', icon: TrendingUp },
        { metric: '45%', label: 'Sales Boost', icon: Award },
        { metric: '60%', label: 'Return Rate Reduction', icon: Users },
        { metric: '4.8/5', label: 'App Store Rating', icon: Star }
      ],
      testimonial: {
        quote: "The AR showroom has revolutionized our customer experience. Sales have increased by 45% since launch.",
        author: "Sarah Chen",
        position: "Marketing Director"
      },
      tags: ['AR', 'Mobile App', 'Retail', '3D Visualization'],
      featured: false,
      demo: true
    },
    {
      id: 4,
      title: 'E-commerce AI Recommendation Engine',
      client: 'FashionForward Inc.',
      category: 'ai',
      industry: 'E-commerce',
      duration: '5 months',
      team: '10 members',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Advanced AI system for personalized product recommendations and dynamic pricing optimization.',
      challenge: 'Low conversion rates and customer retention due to generic product recommendations.',
      solution: 'Implemented ML algorithms for personalized recommendations, customer segmentation, and dynamic pricing.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis', 'AWS'],
      results: [
        { metric: '85%', label: 'Conversion Rate Increase', icon: TrendingUp },
        { metric: '120%', label: 'Customer Retention Boost', icon: Users },
        { metric: '35%', label: 'Average Order Value Increase', icon: Award },
        { metric: '2.5M+', label: 'Monthly Active Users', icon: Eye }
      ],
      testimonial: {
        quote: "The AI recommendation system has transformed our business. Customer engagement is through the roof.",
        author: "Michael Rodriguez",
        position: "CEO"
      },
      tags: ['AI', 'E-commerce', 'Machine Learning', 'Personalization'],
      featured: true,
      demo: true
    },
    {
      id: 5,
      title: 'Enterprise CRM with AI Insights',
      client: 'SalesPro Solutions',
      category: 'enterprise',
      industry: 'SaaS',
      duration: '7 months',
      team: '14 members',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'AI-enhanced CRM system with predictive analytics and automated workflow management.',
      challenge: 'Sales team struggled with lead prioritization and manual processes, losing 40% of potential deals.',
      solution: 'Built comprehensive CRM with AI lead scoring, automated follow-ups, and predictive sales forecasting.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TensorFlow', 'AWS', 'Docker'],
      results: [
        { metric: '75%', label: 'Lead Conversion Increase', icon: TrendingUp },
        { metric: '50%', label: 'Sales Process Efficiency', icon: Clock },
        { metric: '90%', label: 'User Adoption Rate', icon: Users },
        { metric: '$2.5M', label: 'Additional Revenue Generated', icon: Award }
      ],
      testimonial: {
        quote: "The AI-powered CRM has revolutionized our sales process. We're closing deals 75% faster.",
        author: "Emily Watson",
        position: "Sales Director"
      },
      tags: ['CRM', 'AI', 'Enterprise', 'Sales Automation'],
      featured: false,
      demo: true
    },
    {
      id: 6,
      title: 'Mobile Banking App with Biometric Security',
      client: 'SecureBank Ltd.',
      category: 'mobile',
      industry: 'FinTech',
      duration: '9 months',
      team: '16 members',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Next-generation mobile banking app with advanced biometric authentication and AI fraud detection.',
      challenge: 'Increasing fraud rates and customer demand for more secure, user-friendly banking experience.',
      solution: 'Developed mobile app with multi-factor biometric authentication, AI fraud detection, and intuitive UX.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow', 'AWS', 'Biometric APIs'],
      results: [
        { metric: '95%', label: 'Fraud Reduction', icon: Award },
        { metric: '80%', label: 'User Satisfaction Increase', icon: Star },
        { metric: '3x', label: 'Transaction Speed Improvement', icon: Clock },
        { metric: '1M+', label: 'Monthly Active Users', icon: Users }
      ],
      testimonial: {
        quote: "The biometric security features have virtually eliminated fraud while improving user experience.",
        author: "James Thompson",
        position: "Chief Technology Officer"
      },
      tags: ['Mobile App', 'FinTech', 'Security', 'Biometrics'],
      featured: false,
      demo: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Case Studies</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore real-world projects where we've delivered measurable results and 
            transformed businesses through innovative technology solutions.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {filter.icon && <filter.icon className="w-4 h-4" />}
                  <span>{filter.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeFilter === filter.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover ${
                project.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
                {project.demo && (
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-5 h-5 text-blue-600 ml-0.5" />
                    </button>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.industry}
                      </span>
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-600 font-medium mb-3">
                  {project.client}
                </p>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-2">
                        <result.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-lg font-bold text-gray-900">{result.metric}</div>
                      <div className="text-xs text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-gray-700 text-sm italic mb-2">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">{project.testimonial.author}</span>
                    <span className="mx-1">•</span>
                    <span>{project.testimonial.position}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our proven methodology 
            and cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;