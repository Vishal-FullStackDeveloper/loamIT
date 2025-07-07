'use client';

import { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  User,
  Building,
  DollarSign,
  Briefcase,
  Send,
  Globe
} from 'lucide-react';

const ContactContent = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    contactMethod: 'email',
    meetingTime: ''
  });

  const projectTypes = [
    { id: 'ai', name: 'AI & Machine Learning', description: 'Intelligent automation and ML models' },
    { id: 'web-mobile', name: 'Web & Mobile App', description: 'Custom applications and platforms' },
    { id: 'blockchain', name: 'Blockchain & Web3', description: 'Decentralized solutions and smart contracts' },
    { id: 'ar-vr', name: 'AR/VR Experience', description: 'Immersive virtual and augmented reality' },
    { id: 'custom', name: 'Custom Software', description: 'Tailored enterprise solutions' },
    { id: 'consultation', name: 'Consultation Only', description: 'Strategic planning and advisory' }
  ];

  const timelines = [
    { id: 'urgent', name: 'ASAP (1-2 weeks)', description: 'Immediate start required' },
    { id: 'fast', name: '1-3 months', description: 'Quick turnaround needed' },
    { id: 'standard', name: '3-6 months', description: 'Standard project timeline' },
    { id: 'flexible', name: '6+ months', description: 'Flexible timeline, quality focused' }
  ];

  const budgetRanges = [
    { id: 'small', name: '$10K - $50K', description: 'Small to medium projects' },
    { id: 'medium', name: '$50K - $200K', description: 'Medium to large projects' },
    { id: 'large', name: '$200K - $500K', description: 'Large enterprise projects' },
    { id: 'enterprise', name: '$500K+', description: 'Enterprise-scale solutions' },
    { id: 'discuss', name: 'Let\'s Discuss', description: 'Not sure about budget yet' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setFormStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setFormStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Show success message or redirect
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with an expert immediately',
      contact: '+1 (555) 123-4567',
      available: '24/7 Available',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get a detailed response within 2 hours',
      contact: 'hello@loamitsolutions.com',
      available: 'Quick Response',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our AI assistant',
      contact: 'Start Chat',
      available: 'Instant Response',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Build <span className="gradient-text">Something Amazing</span> Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's start with a conversation about your goals and challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Step {formStep} of 4
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {Math.round((formStep / 4) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(formStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Tell Us About Yourself
                      </h2>
                      <p className="text-gray-600">
                        Basic information to get started
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Smith"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Type */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        What Type of Project?
                      </h2>
                      <p className="text-gray-600">
                        Select the service that best fits your needs
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {projectTypes.map((type) => (
                        <div
                          key={type.id}
                          className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.projectType === type.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => handleInputChange('projectType', type.id)}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900">{type.name}</h3>
                            <div className={`w-5 h-5 rounded-full border-2 ${
                              formData.projectType === type.id
                                ? 'bg-blue-500 border-blue-500'
                                : 'border-gray-300'
                            }`}>
                              {formData.projectType === type.id && (
                                <CheckCircle className="w-5 h-5 text-white" />
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Timeline & Budget */}
                {formStep === 3 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Project Timeline & Budget
                      </h2>
                      <p className="text-gray-600">
                        Help us understand your timeframe and budget
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        When do you need this completed?
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {timelines.map((timeline) => (
                          <div
                            key={timeline.id}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              formData.timeline === timeline.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange('timeline', timeline.id)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{timeline.name}</h4>
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                formData.timeline === timeline.id
                                  ? 'bg-blue-500 border-blue-500'
                                  : 'border-gray-300'
                              }`}></div>
                            </div>
                            <p className="text-sm text-gray-600">{timeline.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        What's your budget range?
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {budgetRanges.map((budget) => (
                          <div
                            key={budget.id}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              formData.budget === budget.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange('budget', budget.id)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{budget.name}</h4>
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                formData.budget === budget.id
                                  ? 'bg-blue-500 border-blue-500'
                                  : 'border-gray-300'
                              }`}></div>
                            </div>
                            <p className="text-sm text-gray-600">{budget.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Details & Schedule */}
                {formStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Project Details & Schedule
                      </h2>
                      <p className="text-gray-600">
                        Tell us more about your project and preferred contact method
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Description
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Describe your project, goals, and any specific requirements..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="grid md:grid-cols-3 gap-4">
                        {['email', 'phone', 'video'].map((method) => (
                          <div
                            key={method}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              formData.contactMethod === method
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange('contactMethod', method)}
                          >
                            <div className="text-center">
                              <div className="capitalize font-semibold text-gray-900 mb-1">
                                {method === 'video' ? 'Video Call' : method}
                              </div>
                              <div className={`w-4 h-4 rounded-full border-2 mx-auto ${
                                formData.contactMethod === method
                                  ? 'bg-blue-500 border-blue-500'
                                  : 'border-gray-300'
                              }`}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Meeting Time
                      </label>
                      <input
                        type="datetime-local"
                        value={formData.meetingTime}
                        onChange={(e) => handleInputChange('meetingTime', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      formStep === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                    disabled={formStep === 1}
                  >
                    Previous
                  </button>

                  {formStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center flex-shrink-0`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {method.description}
                      </p>
                      <p className="font-medium text-gray-900">
                        {method.contact}
                      </p>
                      <p className="text-xs text-blue-600">
                        {method.available}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Office Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Headquarters</p>
                    <p className="text-sm text-gray-600">
                      123 Tech Street, Suite 100<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-sm text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Weekend: Available for urgent matters
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Global Reach</p>
                    <p className="text-sm text-gray-600">
                      Remote team across 15+ countries<br />
                      24/7 support available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm">Free consultation & project scoping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm">Response within 2 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm">Dedicated project manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm">Transparent pricing & timeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;