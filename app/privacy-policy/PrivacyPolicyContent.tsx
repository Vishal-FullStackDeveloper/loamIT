'use client';

import {
  Shield,
  Database,
  FileText,
  Lock,
  Share2,
  Cookie,
  UserCheck,
  Clock3,
  Mail,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicyContent = () => {
  const sections = [
    {
      title: 'Introduction',
      icon: Shield,
      content: [
        'This Privacy Policy explains how Loam IT Solutions may collect, use, disclose, and safeguard information when you visit this website or interact with our public-facing forms and contact channels.',
      ],
    },
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Information you provide directly, such as your name, email address, phone number, company name, project details, support requests, and any other details submitted through forms.',
        'Information collected automatically through normal website operation, such as basic browser details, device information, and page interaction data if such features are enabled in the future.',
      ],
    },
    {
      title: 'How We Use Information',
      icon: FileText,
      content: [
        'To respond to inquiries, contact requests, support requests, and application submissions.',
        'To improve the website, understand usage patterns, and refine services and content.',
        'To communicate about projects, services, support, or administrative matters related to the website experience.',
      ],
    },
    {
      title: 'Data Protection',
      icon: Lock,
      content: [
        'We aim to use reasonable administrative, technical, and organizational safeguards to protect information from unauthorized access, disclosure, alteration, or destruction.',
      ],
    },
    {
      title: 'Data Sharing',
      icon: Share2,
      content: [
        'We may share information with trusted service providers or contractors only when necessary to operate the website, respond to requests, or support business operations.',
        'If information is ever shared with service providers, contractors, or other partners, that sharing should be limited to what is necessary to operate the website or respond to a request.',
      ],
    },
    {
      title: 'Cookies and Tracking',
      icon: Cookie,
      content: [
        'We may use cookies or similar technologies to support essential site functionality, remember preferences, and understand how visitors use the website.',
        'You can manage cookie settings through your browser controls, where available.',
      ],
    },
    {
      title: 'User Rights',
      icon: UserCheck,
      content: [
        'Depending on applicable law, you may have rights to request access, correction, deletion, or restriction of your information.',
        'Requests can be submitted using the contact details below.',
      ],
    },
    {
      title: 'Data Retention',
      icon: Clock3,
      content: [
        'We retain information only for as long as needed to respond to requests, maintain records, or support website operations.',
      ],
    },
    {
      title: 'Contact Information',
      icon: Mail,
      content: [
        'For questions about this policy or about information submitted through the website, contact the team at karan@loamit.com or use the contact page linked in the site navigation.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <section
                  key={section.title}
                  className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <div className="space-y-4">
                        {section.content.map((paragraph) => (
                          <p key={paragraph} className="text-gray-600 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">At a Glance</h2>
              <ul className="space-y-3 text-sm text-blue-100">
                <li>• We collect information you submit through the website</li>
                <li>• We use it to respond to inquiries and operate the site</li>
                <li>• You can contact us with privacy questions</li>
                <li>• Review this policy periodically for updates</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <div className="space-y-3">
                <Link
                  href="/terms-of-service"
                  className="flex items-center justify-between text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="font-medium">Terms & Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-between text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="font-medium">Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
