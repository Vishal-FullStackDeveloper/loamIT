'use client';

import { useState } from 'react';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText,
  Search,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Upload,
  User,
  Lock,
  Send,
  ExternalLink
} from 'lucide-react';

const SupportContent = () => {
  const [activeTab, setActiveTab] = useState('tickets');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [ticketForm, setTicketForm] = useState({
    category: '',
    priority: '',
    subject: '',
    description: '',
    attachments: [] as File[]
  });

  const supportCategories = [
    { id: 'tickets', name: 'Submit Ticket', icon: MessageCircle, description: 'Get personalized support' },
    { id: 'faq', name: 'FAQ', icon: HelpCircle, description: 'Find quick answers' },
    { id: 'resources', name: 'Resources', icon: FileText, description: 'Guides and documentation' },
    { id: 'contact', name: 'Contact', icon: Phone, description: 'Speak with our team' }
  ];

  const ticketCategories = [
    { id: 'technical', name: 'Technical Issue', description: 'Bug reports, errors, performance issues' },
    { id: 'feature', name: 'Feature Request', description: 'New functionality or improvements' },
    { id: 'billing', name: 'Billing & Account', description: 'Payment, subscription, account issues' },
    { id: 'general', name: 'General Inquiry', description: 'Questions about our services' }
  ];

  const priorities = [
    { id: 'low', name: 'Low', description: 'General questions, minor issues', color: 'text-green-600' },
    { id: 'medium', name: 'Medium', description: 'Important but not urgent', color: 'text-yellow-600' },
    { id: 'high', name: 'High', description: 'Urgent issues affecting operations', color: 'text-orange-600' },
    { id: 'critical', name: 'Critical', description: 'System down, security issues', color: 'text-red-600' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How long does it take to develop a custom AI solution?',
      answer: 'Development time varies based on complexity. Simple AI integrations take 2-4 weeks, while complex machine learning systems can take 3-6 months. We provide detailed timelines during the initial consultation.',
      category: 'AI Development'
    },
    {
      id: 2,
      question: 'What is included in your blockchain development services?',
      answer: 'Our blockchain services include smart contract development, DApp creation, token development, wallet integration, security audits, and deployment to various networks including Ethereum, Polygon, and Binance Smart Chain.',
      category: 'Blockchain'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. Support packages are available for 6 months to 2 years.',
      category: 'Support'
    },
    {
      id: 4,
      question: 'Can you work with our existing development team?',
      answer: 'Absolutely! We frequently collaborate with in-house teams, providing expertise in AI, blockchain, or AR/VR while integrating seamlessly with your existing development processes and tools.',
      category: 'Collaboration'
    },
    {
      id: 5,
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing: fixed-price for well-defined projects, time & materials for evolving requirements, and retainer agreements for ongoing development. All projects start with a free consultation.',
      category: 'Pricing'
    },
    {
      id: 6,
      question: 'How do you ensure data security and privacy?',
      answer: 'We implement enterprise-grade security measures including encryption, secure APIs, compliance with GDPR/CCPA, regular security audits, and secure development practices. All data is protected and never shared.',
      category: 'Security'
    }
  ];

  const resources = [
    {
      title: 'AI Integration Guide',
      description: 'Step-by-step guide to integrating AI into your existing systems',
      type: 'PDF Guide',
      downloadUrl: '#',
      icon: FileText
    },
    {
      title: 'Blockchain Development Best Practices',
      description: 'Comprehensive guide to blockchain development and deployment',
      type: 'Documentation',
      downloadUrl: '#',
      icon: FileText
    },
    {
      title: 'AR/VR Implementation Checklist',
      description: 'Essential checklist for successful AR/VR project implementation',
      type: 'Checklist',
      downloadUrl: '#',
      icon: FileText
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference for our custom solutions',
      type: 'Online Docs',
      downloadUrl: '#',
      icon: ExternalLink
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setTicketForm(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ticket submission
    console.log('Ticket submitted:', ticketForm);
    // Reset form or show success message
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Support Center</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Can We <span className="gradient-text">Help You?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the support you need to succeed with our technology solutions. 
            Our expert team is here to help you every step of the way.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                activeTab === category.id
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                activeTab === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">
                {category.description}
              </p>
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        <div className="mb-16">
          {/* Submit Ticket */}
          {activeTab === 'tickets' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Submit a Support Ticket
                </h2>
                <p className="text-gray-600">
                  Describe your issue and we'll get back to you within 2 hours during business hours.
                </p>
              </div>

              <form onSubmit={handleSubmitTicket} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      value={ticketForm.category}
                      onChange={(e) => setTicketForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a category</option>
                      {ticketCategories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority *
                    </label>
                    <select
                      value={ticketForm.priority}
                      onChange={(e) => setTicketForm(prev => ({ ...prev, priority: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select priority</option>
                      {priorities.map((priority) => (
                        <option key={priority.id} value={priority.id}>
                          {priority.name} - {priority.description}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Brief description of your issue"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please provide detailed information about your issue, including any error messages, steps to reproduce, and expected behavior..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attachments
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-2">
                      Drop files here or click to upload
                    </p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Choose Files
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Max 10MB per file. Supported formats: PNG, JPG, PDF, TXT, LOG
                    </p>
                  </div>
                  {ticketForm.attachments.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {ticketForm.attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => setTicketForm(prev => ({
                              ...prev,
                              attachments: prev.attachments.filter((_, i) => i !== index)
                            }))}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Ticket</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* FAQ */}
          {activeTab === 'faq' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {faq.question}
                        </h3>
                        <span className="text-sm text-blue-600">{faq.category}</span>
                      </div>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resources */}
          {activeTab === 'resources' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Resources & Documentation
                </h2>
                <p className="text-gray-600">
                  Access guides, documentation, and helpful resources to get the most out of our solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-blue-600 font-medium">
                            {resource.type}
                          </span>
                          <a
                            href={resource.downloadUrl}
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          {activeTab === 'contact' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Our Support Team
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone Support</h3>
                      <p className="text-sm text-gray-600">Available 24/7 for critical issues</p>
                      <p className="font-medium text-blue-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Support</h3>
                      <p className="text-sm text-gray-600">Response within 2 hours</p>
                      <p className="font-medium text-green-600">support@loamitsolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Live Chat</h3>
                      <p className="text-sm text-gray-600">Instant support from our AI assistant</p>
                      <p className="font-medium text-purple-600">Click the chat bubble</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Support Hours
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">General Support</span>
                    <span className="text-sm text-gray-600">Mon-Fri 9AM-6PM PST</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Critical Issues</span>
                    <span className="text-sm text-gray-600">24/7 Available</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Email Response</span>
                    <span className="text-sm text-gray-600">Within 2 hours</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="font-medium text-gray-900">Live Chat</span>
                    <span className="text-sm text-gray-600">Instant Response</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Support Guarantee */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Our Support Guarantee
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're committed to your success. If you're not satisfied with our support, 
            we'll work with you until the issue is resolved.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-blue-100">Average response time under 2 hours</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-blue-100">Certified professionals with deep expertise</p>
            </div>
            <div className="text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">24/7 Critical Support</h3>
              <p className="text-sm text-blue-100">Round-the-clock support for urgent issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContent;