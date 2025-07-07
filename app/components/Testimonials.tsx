'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: "Loam IT Solutions transformed our entire business process with their AI-powered CRM system. The automation has saved us 40+ hours per week, and our sales conversion rate has increased by 65%. Their team's expertise in AI integration is unmatched.",
      author: "Michael Rodriguez",
      position: "CEO & Founder",
      company: "TechVenture Solutions",
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      project: "AI-Powered CRM System",
      industry: "SaaS Technology"
    },
    {
      id: 2,
      quote: "The AR showroom they built for us has revolutionized our customer experience. We've seen a 200% increase in customer engagement and a 45% boost in sales. The immersive technology truly sets us apart from competitors.",
      author: "Sarah Chen",
      position: "Marketing Director",
      company: "Luxury Furniture Co.",
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      project: "AR Virtual Showroom",
      industry: "Retail & E-commerce"
    },
    {
      id: 3,
      quote: "Our blockchain-based supply chain solution has brought complete transparency to our operations. The smart contracts have eliminated intermediaries and reduced costs by 30%. Loam IT delivered exactly what we envisioned.",
      author: "David Park",
      position: "Operations Manager",
      company: "Global Supply Chain Inc.",
      avatar: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      project: "Blockchain Supply Chain",
      industry: "Logistics & Supply Chain"
    },
    {
      id: 4,
      quote: "The mobile app they developed for our healthcare platform is intuitive and powerful. Patient satisfaction has increased by 80%, and our staff productivity has improved dramatically. Their attention to detail is exceptional.",
      author: "Dr. Emily Watson",
      position: "Chief Medical Officer",
      company: "HealthCare Plus",
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      project: "Healthcare Mobile App",
      industry: "Healthcare Technology"
    },
    {
      id: 5,
      quote: "Their custom AI chatbot has transformed our customer support. We've reduced response time from hours to seconds and improved customer satisfaction by 90%. The natural language processing is incredibly sophisticated.",
      author: "James Thompson",
      position: "Customer Success Manager",
      company: "E-commerce Pro",
      avatar: 'https://images.pexels.com/photos/1181667/pexels-photo-1181667.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5,
      project: "AI Customer Support Bot",
      industry: "E-commerce"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their experience working with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-16">
          <div 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Quote */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {currentTestimonial.industry}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600 font-medium">{currentTestimonial.project}</span>
                </div>

                <div className="flex items-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed pl-6">
                    {currentTestimonial.quote}
                  </blockquote>
                </div>
              </div>

              {/* Author */}
              <div className="flex lg:flex-col items-center lg:items-center text-center lg:text-center">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  className="w-20 h-20 rounded-full border-4 border-blue-100 mb-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover cursor-pointer"
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results and transform 
            your business with our proven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Your Project
            </button>
            <button className="btn-secondary">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;