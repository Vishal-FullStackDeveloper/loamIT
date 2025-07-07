'use client';

import Link from 'next/link';
import { Phone, MessageCircle, Calendar, Mail } from 'lucide-react';

const ContactStrip = () => {
  const contactOptions = [
    {
      icon: Calendar,
      title: 'Quick Appointment',
      description: 'Schedule a 15-minute consultation',
      action: 'Book Now',
      href: '/contact',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: MessageCircle,
      title: 'Support Chat',
      description: 'Get instant help from our team',
      action: 'Chat Now',
      href: '/support',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: Phone,
      title: 'Direct Call',
      description: 'Speak with an expert immediately',
      action: 'Call Now',
      href: 'tel:+1-555-0123',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our experts today. We're here to help you navigate 
            the digital transformation journey and achieve your technology goals.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${option.color} ${option.hoverColor} transition-all duration-300 mb-6 group-hover:scale-110`}>
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                {option.description}
              </p>
              <span className="inline-flex items-center text-white font-medium group-hover:text-blue-100 transition-colors">
                {option.action}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            <div>
              <Mail className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm font-medium">Email Us</p>
              <p className="text-xs text-blue-100">hello@loamitsolutions.com</p>
            </div>
            <div>
              <Phone className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm font-medium">Call Us</p>
              <p className="text-xs text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div>
              <MessageCircle className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm font-medium">Live Chat</p>
              <p className="text-xs text-blue-100">Available 24/7</p>
            </div>
            <div>
              <Calendar className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm font-medium">Office Hours</p>
              <p className="text-xs text-blue-100">Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">Free consultation • No obligation • Quick response</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;