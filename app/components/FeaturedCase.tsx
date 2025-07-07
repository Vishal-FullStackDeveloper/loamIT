'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Award, 
  TrendingUp, 
  Users, 
  Clock,
  ExternalLink,
  Play
} from 'lucide-react';

const FeaturedCase = () => {
  const caseStudy = {
    title: 'AI-Powered Healthcare Platform',
    client: 'MedConnect Solutions',
    industry: 'Healthcare Technology',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    challenge: 'A leading healthcare provider needed an intelligent system to streamline patient management, reduce administrative overhead, and improve diagnostic accuracy through AI-powered insights.',
    solution: 'We developed a comprehensive AI platform integrating machine learning models for predictive diagnostics, natural language processing for automated documentation, and a responsive mobile app for real-time patient monitoring.',
    technologies: ['React Native', 'TensorFlow', 'Node.js', 'MongoDB', 'AWS', 'GPT-4 API'],
    results: [
      { metric: '65%', label: 'Reduction in Administrative Time', icon: Clock },
      { metric: '40%', label: 'Improvement in Diagnostic Accuracy', icon: Award },
      { metric: '10,000+', label: 'Patients Served Monthly', icon: Users },
      { metric: '99.8%', label: 'System Uptime', icon: TrendingUp }
    ],
    testimonial: {
      quote: "Loam IT Solutions transformed our entire healthcare workflow. The AI diagnostics have been game-changing for our medical team, and the patient satisfaction scores have never been higher.",
      author: "Dr. Sarah Chen",
      position: "Chief Medical Officer, MedConnect Solutions",
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Featured Case Study</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Impact, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we helped transform a healthcare organization with AI-powered solutions 
            that deliver measurable business outcomes.
          </p>
        </div>

        {/* Case Study Content */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {caseStudy.industry}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 font-medium">{caseStudy.client}</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {caseStudy.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {caseStudy.solution}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">Watch Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {caseStudy.results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <result.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {result.metric}
              </div>
              <p className="text-gray-600 text-sm">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={caseStudy.testimonial.avatar}
                alt={caseStudy.testimonial.author}
                className="w-16 h-16 rounded-full border-4 border-white/20"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-blue-100 text-sm">
                  {caseStudy.testimonial.position}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to See More Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our complete portfolio of projects and discover how we've helped 
            businesses across various industries achieve their digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <span>Discuss Your Project</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCase;