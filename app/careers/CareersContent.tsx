'use client';

import { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Star,
  Upload,
  Send,
  CheckCircle,
  Heart,
  Coffee,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Brain,
  Code,
  Smartphone,
  Link as LinkIcon
} from 'lucide-react';

const CareersContent = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null,
    portfolio_files: [] as File[]
  });

  const jobCategories = [
    { id: 'ai', name: 'AI & Machine Learning', count: 5, icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'blockchain', name: 'Blockchain Development', count: 3, icon: LinkIcon, color: 'from-orange-500 to-red-500' },
    { id: 'mobile', name: 'Mobile Development', count: 4, icon: Smartphone, color: 'from-green-500 to-teal-500' },
    { id: 'fullstack', name: 'Full Stack Development', count: 6, icon: Code, color: 'from-purple-500 to-pink-500' },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI/ML Engineer',
      department: 'AI & Machine Learning',
      category: 'ai',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $200K',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients. Work with large language models, computer vision, and machine learning pipelines.',
      requirements: [
        'MS/PhD in Computer Science, AI, or related field',
        '5+ years of experience in machine learning and AI',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong understanding of MLOps and model deployment'
      ],
      responsibilities: [
        'Design and implement AI/ML solutions for client projects',
        'Lead technical discussions with clients and stakeholders',
        'Mentor junior developers and contribute to best practices',
        'Research and evaluate new AI technologies and frameworks'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Comprehensive health, dental, and vision insurance',
        'Flexible work arrangements and unlimited PTO',
        'Professional development budget ($5,000/year)',
        'Latest MacBook Pro and equipment'
      ],
      posted: '2024-01-15',
      urgent: true
    },
    {
      id: 2,
      title: 'Blockchain Developer',
      department: 'Blockchain Development',
      category: 'blockchain',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120K - $160K',
      description: 'Build decentralized applications and smart contracts for Web3 projects. Work with cutting-edge blockchain technologies and DeFi protocols.',
      requirements: [
        'BS in Computer Science or equivalent experience',
        '3+ years of blockchain development experience',
        'Proficiency in Solidity, Web3.js, Ethers.js',
        'Experience with Ethereum, Polygon, or other EVM chains',
        'Understanding of DeFi protocols and tokenomics'
      ],
      responsibilities: [
        'Develop smart contracts and DApps',
        'Implement security best practices and conduct audits',
        'Integrate blockchain solutions with traditional systems',
        'Collaborate with product teams on Web3 features'
      ],
      benefits: [
        'Competitive salary with crypto bonus options',
        'Remote-first culture with flexible hours',
        'Conference attendance and learning opportunities',
        'Health and wellness stipend',
        'Home office setup allowance'
      ],
      posted: '2024-01-12',
      urgent: false
    },
    {
      id: 3,
      title: 'React Native Developer',
      department: 'Mobile Development',
      category: 'mobile',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$110K - $150K',
      description: 'Create beautiful, performant mobile applications using React Native. Work on consumer and enterprise mobile solutions.',
      requirements: [
        'BS in Computer Science or equivalent',
        '3+ years of React Native development',
        'Strong JavaScript/TypeScript skills',
        'Experience with native iOS/Android development',
        'Knowledge of mobile app deployment processes'
      ],
      responsibilities: [
        'Develop cross-platform mobile applications',
        'Optimize app performance and user experience',
        'Collaborate with designers and backend developers',
        'Maintain and improve existing mobile applications'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Flexible work schedule and remote options',
        'Professional development opportunities',
        'Health insurance and retirement plans',
        'Team building events and company retreats'
      ],
      posted: '2024-01-10',
      urgent: false
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'Full Stack Development',
      category: 'fullstack',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130K - $170K',
      description: 'Build end-to-end web applications using modern technologies. Work across the entire stack from database to user interface.',
      requirements: [
        'BS in Computer Science or equivalent',
        '4+ years of full stack development experience',
        'Proficiency in React, Node.js, and databases',
        'Experience with cloud platforms and DevOps',
        'Strong problem-solving and communication skills'
      ],
      responsibilities: [
        'Develop scalable web applications',
        'Design and implement APIs and databases',
        'Collaborate with cross-functional teams',
        'Ensure code quality and best practices'
      ],
      benefits: [
        'Competitive compensation package',
        'Comprehensive benefits and PTO',
        'Professional growth opportunities',
        'Modern tech stack and tools',
        'Collaborative team environment'
      ],
      posted: '2024-01-08',
      urgent: false
    }
  ];

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, vision insurance plus wellness stipend'
    },
    {
      icon: Coffee,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: Zap,
      title: 'Growth & Learning',
      description: '$5,000 annual learning budget and conference attendance'
    },
    {
      icon: Globe,
      title: 'Global Team',
      description: 'Work with talented professionals from around the world'
    },
    {
      icon: Award,
      title: 'Cutting-edge Tech',
      description: 'Work with the latest technologies and tools in AI, blockchain, AR/VR'
    },
    {
      icon: TrendingUp,
      title: 'Equity & Growth',
      description: 'Competitive equity packages and performance-based bonuses'
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'portfolio') => {
    const files = Array.from(e.target.files || []);
    if (type === 'resume') {
      setApplicationForm(prev => ({ ...prev, resume: files[0] || null }));
    } else {
      setApplicationForm(prev => ({ ...prev, portfolio_files: [...prev.portfolio_files, ...files] }));
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission
    console.log('Application submitted:', applicationForm);
    // Show success message or redirect
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Build the <span className="gradient-text">Future</span> with Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of passionate innovators working on cutting-edge AI, blockchain, 
            and AR/VR solutions. Help us shape the future of technology.
          </p>
        </div>

        {/* Company Culture */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Work at Loam IT Solutions?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just building software—we're creating the technologies that will 
              define the next decade. Join us in this exciting journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Open Positions by Department
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">
                  {category.count}
                </p>
                <p className="text-sm text-gray-600">
                  Open Positions
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Job List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Current Openings ({jobOpenings.length})
            </h2>
            
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  selectedJob === job.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {job.title}
                        </h3>
                        {job.urgent && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{job.department}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      Posted {formatDate(job.posted)}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  {selectedJob === job.id && (
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                                <Star className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {job.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplicationForm(prev => ({ ...prev, position: job.title }));
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                      >
                        Apply for This Position
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <div id="application-form" className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Apply Now
              </h3>

              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={applicationForm.firstName}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={applicationForm.lastName}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={applicationForm.email}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={applicationForm.phone}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position *
                  </label>
                  <select
                    value={applicationForm.position}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, position: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    required
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience
                  </label>
                  <select
                    value={applicationForm.experience}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Portfolio/LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={applicationForm.portfolio}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, portfolio: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="https://"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload your resume
                    </p>
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e, 'resume')}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                      required
                    />
                    <label
                      htmlFor="resume-upload"
                      className="inline-flex items-center px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Choose File
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOC, DOCX (Max 5MB)
                    </p>
                    {applicationForm.resume && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {applicationForm.resume.name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    value={applicationForm.coverLetter}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, coverLetter: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and 
            we'll reach out when a position matches your skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send General Application
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact HR Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersContent;