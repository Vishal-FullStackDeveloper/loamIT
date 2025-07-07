'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '../components/AdminLayout';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Briefcase, 
  MessageCircle,
  TrendingUp,
  Eye,
  Heart,
  Plus,
  Calendar,
  Bell,
  Activity,
  Package,
  FolderOpen
} from 'lucide-react';

const AdminDashboard = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }
    setIsLoading(false);
  }, [router]);

  const stats = [
    {
      title: 'Total Products',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: Package,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Total Projects',
      value: '18',
      change: '+8%',
      trend: 'up',
      icon: FolderOpen,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Blog Posts',
      value: '42',
      change: '+15%',
      trend: 'up',
      icon: FileText,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Career Listings',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: Briefcase,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Contact Submissions',
      value: '156',
      change: '+23%',
      trend: 'up',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Monthly Visitors',
      value: '12.4K',
      change: '+18%',
      trend: 'up',
      icon: Users,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const quickActions = [
    {
      title: 'Add New Product',
      description: 'Create a new product listing',
      icon: Package,
      color: 'from-blue-500 to-cyan-500',
      href: '/admin/products/new'
    },
    {
      title: 'Write Blog Post',
      description: 'Create a new blog article',
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      href: '/admin/blog/new'
    },
    {
      title: 'Add Project',
      description: 'Showcase a new project',
      icon: FolderOpen,
      color: 'from-purple-500 to-pink-500',
      href: '/admin/projects/new'
    },
    {
      title: 'Post Job Opening',
      description: 'Create a new career listing',
      icon: Briefcase,
      color: 'from-orange-500 to-red-500',
      href: '/admin/careers/new'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'contact',
      message: 'New contact submission from John Doe',
      time: '2 minutes ago',
      icon: MessageCircle,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'blog',
      message: 'Blog post "AI Trends 2024" was published',
      time: '1 hour ago',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'application',
      message: 'New job application for Senior AI Engineer',
      time: '3 hours ago',
      icon: Briefcase,
      color: 'text-purple-600'
    },
    {
      id: 4,
      type: 'product',
      message: 'Product "AI Business Assistant" was updated',
      time: '5 hours ago',
      icon: Package,
      color: 'text-orange-600'
    },
    {
      id: 5,
      type: 'project',
      message: 'Project "Healthcare Platform" was added',
      time: '1 day ago',
      icon: FolderOpen,
      color: 'text-indigo-600'
    }
  ];

  const notifications = [
    {
      id: 1,
      title: 'Server Maintenance',
      message: 'Scheduled maintenance tonight at 2 AM EST',
      type: 'warning',
      time: '1 hour ago'
    },
    {
      id: 2,
      title: 'New Feature Available',
      message: 'Analytics dashboard has been updated with new metrics',
      type: 'info',
      time: '2 hours ago'
    },
    {
      id: 3,
      title: 'Backup Completed',
      message: 'Daily backup completed successfully',
      type: 'success',
      time: '6 hours ago'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, Admin! 👋
              </h1>
              <p className="text-blue-100">
                Here's what's happening with your website today.
              </p>
            </div>
            <div className="text-right">
              <p className="text-blue-100 text-sm">Today</p>
              <p className="text-2xl font-bold">
                {new Date().toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => router.push(action.href)}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all duration-300 text-left group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {action.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Recent Activity
              </h2>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center ${activity.color}`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 mb-1">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All Activity
            </button>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Notifications
              </h2>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900 text-sm">
                      {notification.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      notification.type === 'warning' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : notification.type === 'success'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {notification.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500">
                    {notification.time}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All Notifications
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;