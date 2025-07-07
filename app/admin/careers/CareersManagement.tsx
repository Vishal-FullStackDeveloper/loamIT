'use client';

import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  FileText,
  Download,
  MoreHorizontal,
  Upload,
  Save,
  X,
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const CareersManagement = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  const departments = [
    { id: 1, name: 'AI & Machine Learning', count: 3, color: 'blue' },
    { id: 2, name: 'Blockchain Development', count: 2, color: 'purple' },
    { id: 3, name: 'Mobile Development', count: 2, color: 'green' },
    { id: 4, name: 'Full Stack Development', count: 3, color: 'orange' },
    { id: 5, name: 'Design & UX', count: 1, color: 'pink' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI/ML Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $200K',
      status: 'Active',
      applications: 23,
      postedDate: '2024-01-15',
      deadline: '2024-02-15',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      requirements: [
        'MS/PhD in Computer Science, AI, or related field',
        '5+ years of experience in machine learning and AI',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)'
      ],
      responsibilities: [
        'Design and implement AI/ML solutions for client projects',
        'Lead technical discussions with clients and stakeholders',
        'Mentor junior developers and contribute to best practices'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Comprehensive health, dental, and vision insurance',
        'Flexible work arrangements and unlimited PTO'
      ],
      urgent: true
    },
    {
      id: 2,
      title: 'Blockchain Developer',
      department: 'Blockchain Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120K - $160K',
      status: 'Active',
      applications: 15,
      postedDate: '2024-01-12',
      deadline: '2024-02-12',
      description: 'Build decentralized applications and smart contracts for Web3 projects.',
      requirements: [
        'BS in Computer Science or equivalent experience',
        '3+ years of blockchain development experience',
        'Proficiency in Solidity, Web3.js, Ethers.js',
        'Experience with Ethereum, Polygon, or other EVM chains'
      ],
      responsibilities: [
        'Develop smart contracts and DApps',
        'Implement security best practices and conduct audits',
        'Integrate blockchain solutions with traditional systems'
      ],
      benefits: [
        'Competitive salary with crypto bonus options',
        'Remote-first culture with flexible hours',
        'Conference attendance and learning opportunities'
      ],
      urgent: false
    },
    {
      id: 3,
      title: 'React Native Developer',
      department: 'Mobile Development',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$110K - $150K',
      status: 'Paused',
      applications: 8,
      postedDate: '2024-01-10',
      deadline: '2024-02-10',
      description: 'Create beautiful, performant mobile applications using React Native.',
      requirements: [
        'BS in Computer Science or equivalent',
        '3+ years of React Native development',
        'Strong JavaScript/TypeScript skills',
        'Experience with native iOS/Android development'
      ],
      responsibilities: [
        'Develop cross-platform mobile applications',
        'Optimize app performance and user experience',
        'Collaborate with designers and backend developers'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Flexible work schedule and remote options',
        'Professional development opportunities'
      ],
      urgent: false
    }
  ];

  const applications = [
    {
      id: 1,
      jobId: 1,
      jobTitle: 'Senior AI/ML Engineer',
      applicant: {
        name: 'John Smith',
        email: 'john.smith@email.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        experience: '6 years',
        currentRole: 'Senior ML Engineer at TechCorp',
        education: 'MS Computer Science, Stanford University'
      },
      appliedDate: '2024-01-20',
      status: 'Under Review',
      resumeUrl: '#',
      coverLetter: 'I am excited to apply for the Senior AI/ML Engineer position...',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Machine Learning'],
      rating: 4.5,
      notes: 'Strong technical background, good cultural fit'
    },
    {
      id: 2,
      jobId: 1,
      jobTitle: 'Senior AI/ML Engineer',
      applicant: {
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        phone: '+1 (555) 987-6543',
        location: 'Remote',
        experience: '8 years',
        currentRole: 'Lead AI Researcher at DataCorp',
        education: 'PhD Machine Learning, MIT'
      },
      appliedDate: '2024-01-18',
      status: 'Interview Scheduled',
      resumeUrl: '#',
      coverLetter: 'With over 8 years of experience in AI research and development...',
      skills: ['Python', 'Deep Learning', 'NLP', 'Computer Vision', 'Research'],
      rating: 5.0,
      notes: 'Excellent candidate, PhD from MIT, strong research background'
    },
    {
      id: 3,
      jobId: 2,
      jobTitle: 'Blockchain Developer',
      applicant: {
        name: 'Michael Chen',
        email: 'michael.c@email.com',
        phone: '+1 (555) 456-7890',
        location: 'Austin, TX',
        experience: '4 years',
        currentRole: 'Blockchain Developer at CryptoStartup',
        education: 'BS Computer Science, UT Austin'
      },
      appliedDate: '2024-01-16',
      status: 'New',
      resumeUrl: '#',
      coverLetter: 'I have been working with blockchain technology for the past 4 years...',
      skills: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DeFi'],
      rating: 4.0,
      notes: 'Good blockchain experience, needs assessment'
    }
  ];

  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    experience: '',
    salary: '',
    description: '',
    requirements: [''],
    responsibilities: [''],
    benefits: [''],
    deadline: '',
    status: 'Active',
    urgent: false
  });

  const handleAddRequirement = () => {
    setJobForm(prev => ({
      ...prev,
      requirements: [...prev.requirements, '']
    }));
  };

  const handleRemoveRequirement = (index: number) => {
    setJobForm(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const handleRequirementChange = (index: number, value: string) => {
    setJobForm(prev => ({
      ...prev,
      requirements: prev.requirements.map((req, i) => i === index ? value : req)
    }));
  };

  const handleAddResponsibility = () => {
    setJobForm(prev => ({
      ...prev,
      responsibilities: [...prev.responsibilities, '']
    }));
  };

  const handleRemoveResponsibility = (index: number) => {
    setJobForm(prev => ({
      ...prev,
      responsibilities: prev.responsibilities.filter((_, i) => i !== index)
    }));
  };

  const handleResponsibilityChange = (index: number, value: string) => {
    setJobForm(prev => ({
      ...prev,
      responsibilities: prev.responsibilities.map((resp, i) => i === index ? value : resp)
    }));
  };

  const handleAddBenefit = () => {
    setJobForm(prev => ({
      ...prev,
      benefits: [...prev.benefits, '']
    }));
  };

  const handleRemoveBenefit = (index: number) => {
    setJobForm(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }));
  };

  const handleBenefitChange = (index: number, value: string) => {
    setJobForm(prev => ({
      ...prev,
      benefits: prev.benefits.map((benefit, i) => i === index ? value : benefit)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job submitted:', jobForm);
    setShowAddModal(false);
    setEditingJob(null);
    // Reset form
    setJobForm({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      experience: '',
      salary: '',
      description: '',
      requirements: [''],
      responsibilities: [''],
      benefits: [''],
      deadline: '',
      status: 'Active',
      urgent: false
    });
  };

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || job.status === selectedStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.applicant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'Closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Interview Scheduled':
        return 'bg-purple-100 text-purple-800';
      case 'Hired':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Careers Management</h1>
            <p className="text-gray-600">Manage job openings and applications</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Job Opening</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'jobs'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Job Openings ({jobOpenings.length})
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'applications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Applications ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab('departments')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'departments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Departments ({departments.length})
            </button>
          </nav>
        </div>

        {activeTab === 'jobs' && (
          <>
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="lg:w-48">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Departments</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.name}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="lg:w-32">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Paused">Paused</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Jobs List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location & Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applications
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Posted Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredJobs.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <Briefcase className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-medium text-gray-900">{job.title}</h3>
                                {job.urgent && (
                                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                                    Urgent
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500">{job.salary}</p>
                              <p className="text-sm text-gray-500">{job.experience}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {job.department}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div className="flex items-center space-x-1 text-gray-900">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500 mt-1">
                              <Clock className="w-4 h-4" />
                              <span>{job.type}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-900">{job.applications}</span>
                            <span className="text-sm text-gray-500">applicants</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {formatDate(job.postedDate)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => setEditingJob(job)}
                              className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === 'applications' && (
          <>
            {/* Applications Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search applications..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="lg:w-48">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">All Positions</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="lg:w-40">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">All Status</option>
                    <option value="New">New</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Interview Scheduled">Interview Scheduled</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Applications List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applicant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Experience
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rating
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applied Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredApplications.map((application) => (
                      <tr key={application.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{application.applicant.name}</h3>
                              <p className="text-sm text-gray-500">{application.applicant.email}</p>
                              <p className="text-sm text-gray-500">{application.applicant.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900">{application.jobTitle}</p>
                            <p className="text-sm text-gray-500">{application.applicant.currentRole}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{application.applicant.experience}</p>
                            <p className="text-sm text-gray-500">{application.applicant.education}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getApplicationStatusColor(application.status)}`}>
                            {application.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <CheckCircle
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(application.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">({application.rating})</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {formatDate(application.appliedDate)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <button 
                              onClick={() => setSelectedApplication(application)}
                              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                              <Download className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === 'departments' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Departments</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Department</span>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((department) => (
                <div key={department.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-3 h-3 rounded-full bg-${department.color}-500`}></div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{department.name}</h3>
                  <p className="text-sm text-gray-600">{department.count} open positions</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add/Edit Job Modal */}
        {(showAddModal || editingJob) && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => {
                setShowAddModal(false);
                setEditingJob(null);
              }}></div>

              <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {editingJob ? 'Edit Job Opening' : 'Add New Job Opening'}
                  </h3>
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingJob(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        value={jobForm.title}
                        onChange={(e) => setJobForm(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department *
                      </label>
                      <select
                        value={jobForm.department}
                        onChange={(e) => setJobForm(prev => ({ ...prev, department: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.name}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={jobForm.location}
                        onChange={(e) => setJobForm(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="e.g., San Francisco, CA / Remote"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Employment Type
                      </label>
                      <select
                        value={jobForm.type}
                        onChange={(e) => setJobForm(prev => ({ ...prev, type: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Required
                      </label>
                      <input
                        type="text"
                        value={jobForm.experience}
                        onChange={(e) => setJobForm(prev => ({ ...prev, experience: e.target.value }))}
                        placeholder="e.g., 3+ years"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Salary Range
                      </label>
                      <input
                        type="text"
                        value={jobForm.salary}
                        onChange={(e) => setJobForm(prev => ({ ...prev, salary: e.target.value }))}
                        placeholder="e.g., $120K - $160K"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Application Deadline
                      </label>
                      <input
                        type="date"
                        value={jobForm.deadline}
                        onChange={(e) => setJobForm(prev => ({ ...prev, deadline: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Description
                    </label>
                    <textarea
                      value={jobForm.description}
                      onChange={(e) => setJobForm(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe the role and what the candidate will be doing..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Requirements
                    </label>
                    <div className="space-y-2">
                      {jobForm.requirements.map((req, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={req}
                            onChange={(e) => handleRequirementChange(index, e.target.value)}
                            placeholder="Enter requirement"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {jobForm.requirements.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveRequirement(index)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddRequirement}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Add Requirement
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Responsibilities
                    </label>
                    <div className="space-y-2">
                      {jobForm.responsibilities.map((resp, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={resp}
                            onChange={(e) => handleResponsibilityChange(index, e.target.value)}
                            placeholder="Enter responsibility"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {jobForm.responsibilities.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveResponsibility(index)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddResponsibility}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Add Responsibility
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Benefits
                    </label>
                    <div className="space-y-2">
                      {jobForm.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={benefit}
                            onChange={(e) => handleBenefitChange(index, e.target.value)}
                            placeholder="Enter benefit"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {jobForm.benefits.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveBenefit(index)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddBenefit}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Add Benefit
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        value={jobForm.status}
                        onChange={(e) => setJobForm(prev => ({ ...prev, status: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Active">Active</option>
                        <option value="Paused">Paused</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-3 pt-8">
                      <input
                        type="checkbox"
                        id="urgent"
                        checked={jobForm.urgent}
                        onChange={(e) => setJobForm(prev => ({ ...prev, urgent: e.target.checked }))}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="urgent" className="text-sm font-medium text-gray-700">
                        Mark as Urgent Hiring
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddModal(false);
                        setEditingJob(null);
                      }}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 flex items-center space-x-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>{editingJob ? 'Update' : 'Create'} Job Opening</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Application Detail Modal */}
        {selectedApplication && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setSelectedApplication(null)}></div>

              <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Application Details
                  </h3>
                  <button
                    onClick={() => setSelectedApplication(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Applicant Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Applicant Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span>{selectedApplication.applicant.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span>{selectedApplication.applicant.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span>{selectedApplication.applicant.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{selectedApplication.applicant.location}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Professional Details</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Experience:</strong> {selectedApplication.applicant.experience}</div>
                        <div><strong>Current Role:</strong> {selectedApplication.applicant.currentRole}</div>
                        <div><strong>Education:</strong> {selectedApplication.applicant.education}</div>
                        <div><strong>Applied For:</strong> {selectedApplication.jobTitle}</div>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedApplication.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Cover Letter</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed">{selectedApplication.coverLetter}</p>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Internal Notes</h4>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <p className="text-gray-700">{selectedApplication.notes}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">Status:</span>
                      <select
                        value={selectedApplication.status}
                        className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="New">New</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Interview Scheduled">Interview Scheduled</option>
                        <option value="Hired">Hired</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Download Resume
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Schedule Interview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default CareersManagement;