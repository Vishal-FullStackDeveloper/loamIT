'use client';

import {
  Scale,
  ClipboardCheck,
  UserCog,
  Ban,
  BadgeCheck,
  Copyright,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Mail,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const TermsOfServiceContent = () => {
  const sections = [
    {
      title: 'Introduction',
      icon: Scale,
      content: [
        'These Terms of Service govern your use of the Loam IT Solutions website and related public pages.',
      ],
    },
    {
      title: 'Acceptance of Terms',
      icon: ClipboardCheck,
      content: [
        'By accessing or using this website, you agree to these terms and to any additional guidelines referenced by the site.',
        'If you do not agree with the terms, you should not use the website or submit information through its forms.',
      ],
    },
    {
      title: 'Use of the Service',
      icon: BadgeCheck,
      content: [
        'The website is provided for informational, promotional, and contact purposes related to Loam IT Solutions.',
        'We may update, modify, suspend, or discontinue website features at any time as needed for maintenance or business reasons.',
      ],
    },
    {
      title: 'Account Responsibilities',
      icon: UserCog,
      content: [
        'If account or login functionality is available, you are responsible for maintaining the confidentiality of your credentials and for activity that occurs under your account.',
      ],
    },
    {
      title: 'Acceptable Use',
      icon: Ban,
      content: [
        'You agree not to misuse the website, attempt unauthorized access, interfere with normal operation, or submit harmful or unlawful content.',
        'You should not use the site to distribute malware, spam, abusive content, or other material that could disrupt service or harm others.',
      ],
    },
    {
      title: 'Intellectual Property',
      icon: Copyright,
      content: [
        'The website design, text, graphics, branding, and code structure are intended to be protected by applicable intellectual property rights unless otherwise stated.',
        'Third-party assets, icons, fonts, and images remain subject to their respective licenses and terms.',
      ],
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        'To the maximum extent permitted by law, the website is provided on an as-is and as-available basis, without any guarantee of uninterrupted or error-free operation.',
      ],
    },
    {
      title: 'Termination',
      icon: XCircle,
      content: [
        'We may suspend or terminate access to the website or related features if required to protect the service, comply with law, or address misuse.',
        'You may stop using the website at any time.',
      ],
    },
    {
      title: 'Changes to Terms',
      icon: RefreshCw,
      content: [
        'We may revise these terms from time to time to reflect product, legal, or operational changes.',
        'When updated, the revised version should be posted here with a new effective date in a production environment.',
      ],
    },
    {
      title: 'Contact Information',
      icon: Mail,
      content: [
        'For questions about these terms, contact karan@loamit.com or use the contact page on this website.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            <span>Terms & Service</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Terms & Service
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
              <h2 className="text-xl font-bold mb-4">Quick Notes</h2>
              <ul className="space-y-3 text-sm text-blue-100">
                <li>• These terms apply to use of the website</li>
                <li>• Please use the website responsibly</li>
                <li>• Contact us if you have questions about these terms</li>
                <li>• Check back periodically for updates</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <div className="space-y-3">
                <Link
                  href="/privacy-policy"
                  className="flex items-center justify-between text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="font-medium">Privacy Policy</span>
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

export default TermsOfServiceContent;
