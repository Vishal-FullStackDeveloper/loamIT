'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  BookOpen,
  Brain,
  Link as LinkIcon,
  Cuboid as Cube,
  Smartphone
} from 'lucide-react';

const BlogContent = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai', name: 'AI & ML', count: 8, icon: Brain },
    { id: 'blockchain', name: 'Blockchain', count: 6, icon: LinkIcon },
    { id: 'arvr', name: 'AR/VR', count: 4, icon: Cube },
    { id: 'mobile', name: 'Mobile Dev', count: 6, icon: Smartphone },
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
    excerpt: 'Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics. Learn about the latest AI trends that will dominate 2024.',
    content: 'Full article content would go here...',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      role: 'CEO & AI Researcher'
    },
    category: 'ai',
    tags: ['AI', 'Enterprise', 'Machine Learning', 'Automation'],
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    views: 2847,
    likes: 156,
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Building Scalable Blockchain Applications: Best Practices',
      excerpt: 'Learn the essential principles for developing blockchain applications that can handle enterprise-level traffic and transactions.',
      author: {
        name: 'Sarah Rodriguez',
        avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'CTO & Blockchain Expert'
      },
      category: 'blockchain',
      tags: ['Blockchain', 'Scalability', 'Smart Contracts'],
      publishedAt: '2024-01-12',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      views: 1923,
      likes: 89
    },
    {
      id: 3,
      title: 'AR/VR in Retail: Transforming Customer Experience',
      excerpt: 'Discover how augmented and virtual reality technologies are revolutionizing the retail industry and creating immersive shopping experiences.',
      author: {
        name: 'Michael Park',
        avatar: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'Head of AR/VR Development'
      },
      category: 'arvr',
      tags: ['AR', 'VR', 'Retail', 'Customer Experience'],
      publishedAt: '2024-01-10',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      views: 1654,
      likes: 72
    },
    {
      id: 4,
      title: 'React Native vs Flutter: Choosing the Right Framework in 2024',
      excerpt: 'A comprehensive comparison of React Native and Flutter for mobile app development, including performance, development speed, and ecosystem.',
      author: {
        name: 'Emily Watson',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'Lead Mobile Developer'
      },
      category: 'mobile',
      tags: ['React Native', 'Flutter', 'Mobile Development'],
      publishedAt: '2024-01-08',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      views: 2156,
      likes: 134
    },
    {
      id: 5,
      title: 'Machine Learning Model Deployment: From Development to Production',
      excerpt: 'Step-by-step guide to deploying machine learning models in production environments, including best practices for monitoring and scaling.',
      author: {
        name: 'Alex Chen',
        avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'CEO & AI Researcher'
      },
      category: 'ai',
      tags: ['Machine Learning', 'MLOps', 'Deployment'],
      publishedAt: '2024-01-05',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      views: 1789,
      likes: 98
    },
    {
      id: 6,
      title: 'Smart Contract Security: Common Vulnerabilities and How to Avoid Them',
      excerpt: 'Learn about the most common security vulnerabilities in smart contracts and best practices for writing secure blockchain code.',
      author: {
        name: 'Sarah Rodriguez',
        avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        role: 'CTO & Blockchain Expert'
      },
      category: 'blockchain',
      tags: ['Smart Contracts', 'Security', 'Solidity'],
      publishedAt: '2024-01-03',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      views: 1432,
      likes: 67
    }
  ];

  const allPosts = [featuredPost, ...blogPosts];
  
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Tech Blog</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="gradient-text">Tech Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on AI, blockchain, AR/VR, 
            and the latest technology trends shaping the future.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.icon && <category.icon className="w-4 h-4" />}
                  <span>{category.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.includes(featuredPost) && (
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === featuredPost.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm">{formatDate(featuredPost.publishedAt)}</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author.name}</p>
                        <p className="text-sm text-gray-600">{featuredPost.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.filter(post => !post.featured).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Tech Trends
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights on AI, blockchain, 
            and emerging technologies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;