'use client';

import Link from 'next/link';
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Github,
  ArrowRight,
  Send
} from 'lucide-react';

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'AI Development', href: '/products#ai' },
      { name: 'Web & Mobile Apps', href: '/products#web-mobile' },
      { name: 'AR/VR Solutions', href: '/products#ar-vr' },
      { name: 'Blockchain', href: '/products#blockchain' },
    ],
    resources: [
      { name: 'Case Studies', href: '/projects' },
      { name: 'Blog', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'API Documentation', href: '/docs' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'GitHub', href: '#', icon: Github },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Loam IT Solutions</span>
                  <div className="text-sm text-gray-400">
                    AI • Blockchain • AR/VR
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building the future with intelligent, immersive, and decentralized technology 
                solutions. We transform businesses through innovation and cutting-edge development.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:hello@loamitsolutions.com" className="text-gray-300 hover:text-white transition-colors">
                    hello@loamitsolutions.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+1-555-0123" className="text-gray-300 hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    San Francisco, CA • Remote Global
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-3">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Services</h3>
                  <ul className="space-y-3">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Resources</h3>
                  <ul className="space-y-3">
                    {navigation.resources.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter & CTA Section */}
        <div className="border-t border-gray-800 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated with Tech Insights
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates on AI, blockchain, and emerging technologies. 
                Plus exclusive insights from our development team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Loam IT Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;