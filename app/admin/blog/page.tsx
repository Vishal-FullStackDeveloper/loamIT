import { Metadata } from 'next';
import BlogManagement from './BlogManagement';

export const metadata: Metadata = {
  title: 'Blog Management - Admin Panel',
  description: 'Manage blog posts and categories',
};

export default function BlogPage() {
  return <BlogManagement />;
}