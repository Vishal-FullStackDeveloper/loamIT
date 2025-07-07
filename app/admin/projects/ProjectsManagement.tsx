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
  FolderOpen,
  Calendar,
  User,
  Building,
  Clock,
  Award,
  TrendingUp,
  Users,
  MoreHorizontal,
  Upload,
  Save,
  X,
  Star,
  ExternalLink
} from 'lucide-react';

const ProjectsManagement = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);

  const categories = [
    { id: 1, name: 'AI & Machine Learning', count: 5, color: 'blue' },
    { id: 2, name: 'Blockchain & Web3', count: 3, color: 'purple' },
    { id: 3, name: 'AR/VR Solutions', count: 2, color: 'green' },
    { id: 4, name: 'Mobile Applications', count: 4, color: 'orange' },
    { id: 5, name: 'Enterprise Software', count: 3, color: 'pink' }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Platform',
      client: 'MedConnect Solutions',
      category: 'AI & Machine Learning',
      industry: 'Healthcare',
      status: 'Completed',
      duration: '8 months',
      team: '12 members',
      budget: '$250,000',
      startDate: '2023-06-01',
      endDate: '2024-01-31',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Comprehensive AI platform for patient management, diagnostic assistance, and automated documentation.',
      technologies: ['TensorFlow', 'React Native', 'Node.js', 'MongoDB', 'AWS', 'GPT-4 API'],
      results: [
        { metric: '65%', label: 'Reduction in Admin Time' },
        { metric: '40%', label: 'Improved Diagnostic Accuracy' },
        { metric: '10,000+', label: 'Patients Served Monthly' }
      ],
      testimonial: {
        quote: "The AI diagnostics have been game-changing for our medical team.",
        author: "Dr. Sarah Chen",
        position: "Chief Medical Officer"
      },
      featured: true
    },
    {
      id: 2,
      title: 'Blockchain Supply Chain Solution',
      client: 'Global Logistics Corp',
      category: 'Blockchain & Web3',
      industry: 'Logistics',
      status: 'In Progress',
      duration: '6 months',
      team: '8 members',
      budget: '$180,000',
      startDate: '2024-01-15',
      endDate: '2024-07-15',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'End-to-end blockchain solution for supply chain transparency and smart contract automation.',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
      results: [
        { metric: '30%', label: 'Cost Reduction' },
        { metric: '100%', label: 'Supply Chain Transparency' },
        { metric: '85%', label: 'Dispute Resolution Speed' }
      ],
      testimonial: {
        quote: "The blockchain solution eliminated intermediaries and reduced costs.",
        author: "David Park",
        position: "Operations Manager"
      },
      featured: false
    },
    {
      id: 3,
      title: 'AR Virtual Showroom',
      client: 'Luxury Furniture Co.',
      category: 'AR/VR Solutions',
      industry: 'Retail',
      status: 'Completed',
      duration: '4 months',
      team: '6 members',
      budget: '$120,000',
      startDate: '2023-09-01',
      endDate: '2023-12-31',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Immersive AR experience allowing customers to visualize furniture in their own spaces.',
      technologies: ['Unity', 'ARCore', 'ARKit', 'C#', 'Firebase', 'Blender'],
      results: [
        { metric: '200%', label: 'Customer Engagement Increase' },
        { metric: '45%', label: 'Sales Boost' },
        { metric: '60%', label: 'Return Rate Reduction' }
      ],
      testimonial: {
        quote: "The AR showroom has revolutionized our customer experience.",
        author: "Sarah Chen",
        position: "Marketing Director"
      },
      featured: true
    }
  ];

  const [projectForm, setProjectForm] = useState({
    title: '',
    client: '',
    category: '',
    industry: '',
    status: 'Planning',
    duration: '',
    team: '',
    budget: '',
    startDate: '',
    endDate: '',
    description: '',
    technologies: [''],
    results: [{ metric: '', label: '' }],
    testimonial: {
      quote: '',
      author: '',
      position: ''
    },
    featured: false,
    image: null as File | null
  });

  const handleAddTechnology = () => {
    setProjectForm(prev => ({
      ...prev,
      technologies: [...prev.technologies, '']
    }));
  };

  const handleRemoveTechnology = (index: number) => {
    setProjectForm(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index)
    }));
  };

  const handleTechnologyChange = (index: number, value: string) => {
    setProjectForm(prev => ({
      ...prev,
      technologies: prev.technologies.map((tech, i) => i === index ? value : tech)
    }));
  };

  const handleAddResult = () => {
    setProjectForm(prev => ({
      ...prev,
      results: [...prev.results, { metric: '', label: '' }]
    }));
  };

  const handleRemoveResult = (index: number) => {
    setProjectForm(prev => ({
      ...prev,
      results: prev.results.filter((_, i) => i !== index)
    }));
  };

  const handleResultChange = (index: number, field: 'metric' | 'label', value: string) => {
    setProjectForm(prev => ({
      ...prev,
      results: prev.results.map((result, i) => 
        i === index ? { ...result, [field]: value } : result
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project submitted:', projectForm);
    setShowAddModal(false);
    setEditingProject(null);
    // Reset form
    setProjectForm({
      title: '',
      client: '',
      category: '',
      industry: '',
      status: 'Planning',
      duration: '',
      team: '',
      budget: '',
      startDate: '',
      endDate: '',
      description: '',
      technologies: [''],
      results: [{ metric: '', label: '' }],
      testimonial: {
        quote: '',
        author: '',
        position: ''
      },
      featured: false,
      image: null
    });
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects Management</h1>
            <p className="text-gray-600">Manage your project portfolio and case studies</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Project</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'projects'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'categories'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Categories ({categories.length})
            </button>
          </nav>
        </div>

        {activeTab === 'projects' && (
          <>
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="lg:w-48">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
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
                    <option value="Planning">Planning</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="relative">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreHorizontal className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-blue-600 mb-2">{project.client}</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Industry:</span>
                        <p className="font-medium">{project.industry}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <p className="font-medium">{project.duration}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Team:</span>
                        <p className="font-medium">{project.team}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Budget:</span>
                        <p className="font-medium">{project.budget}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : 'Ongoing'}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => setEditingProject(project)}
                          className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'categories' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Project Categories</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Category</span>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-3 h-3 rounded-full bg-${category.color}-500`}></div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add/Edit Project Modal */}
        {(showAddModal || editingProject) && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => {
                setShowAddModal(false);
                setEditingProject(null);
              }}></div>

              <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {editingProject ? 'Edit Project' : 'Add New Project'}
                  </h3>
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingProject(null);
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
                        Project Title *
                      </label>
                      <input
                        type="text"
                        value={projectForm.title}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Client *
                      </label>
                      <input
                        type="text"
                        value={projectForm.client}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, client: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        value={projectForm.category}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <input
                        type="text"
                        value={projectForm.industry}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, industry: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        value={projectForm.status}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, status: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Planning">Planning</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="On Hold">On Hold</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={projectForm.description}
                      onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={projectForm.duration}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, duration: e.target.value }))}
                        placeholder="e.g., 6 months"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Team Size
                      </label>
                      <input
                        type="text"
                        value={projectForm.team}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, team: e.target.value }))}
                        placeholder="e.g., 8 members"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={projectForm.startDate}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, startDate: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        value={projectForm.endDate}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, endDate: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Technologies Used
                    </label>
                    <div className="space-y-2">
                      {projectForm.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={tech}
                            onChange={(e) => handleTechnologyChange(index, e.target.value)}
                            placeholder="Enter technology"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {projectForm.technologies.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveTechnology(index)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddTechnology}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Add Technology
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Results
                    </label>
                    <div className="space-y-2">
                      {projectForm.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={result.metric}
                            onChange={(e) => handleResultChange(index, 'metric', e.target.value)}
                            placeholder="Metric (e.g., 65%)"
                            className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            type="text"
                            value={result.label}
                            onChange={(e) => handleResultChange(index, 'label', e.target.value)}
                            placeholder="Description"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {projectForm.results.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveResult(index)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddResult}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Add Result
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Client Testimonial
                    </label>
                    <div className="space-y-3">
                      <textarea
                        value={projectForm.testimonial.quote}
                        onChange={(e) => setProjectForm(prev => ({ 
                          ...prev, 
                          testimonial: { ...prev.testimonial, quote: e.target.value }
                        }))}
                        rows={3}
                        placeholder="Client testimonial quote..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="grid md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={projectForm.testimonial.author}
                          onChange={(e) => setProjectForm(prev => ({ 
                            ...prev, 
                            testimonial: { ...prev.testimonial, author: e.target.value }
                          }))}
                          placeholder="Author name"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          value={projectForm.testimonial.position}
                          onChange={(e) => setProjectForm(prev => ({ 
                            ...prev, 
                            testimonial: { ...prev.testimonial, position: e.target.value }
                          }))}
                          placeholder="Position/Title"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={projectForm.featured}
                      onChange={(e) => setProjectForm(prev => ({ ...prev, featured: e.target.checked }))}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                      Mark as Featured Project
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Image
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-2">
                        Upload project image
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProjectForm(prev => ({ ...prev, image: e.target.files?.[0] || null }))}
                        className="hidden"
                        id="project-image-upload"
                      />
                      <label
                        htmlFor="project-image-upload"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                      >
                        Choose File
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddModal(false);
                        setEditingProject(null);
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
                      <span>{editingProject ? 'Update' : 'Create'} Project</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ProjectsManagement;