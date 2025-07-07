import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Tech Blog - AI, Blockchain & Innovation Insights | Loam IT Solutions',
  description: 'Stay updated with the latest trends in AI, blockchain, AR/VR, and technology innovation. Expert insights and industry analysis from our development team.',
};

export default function BlogPage() {
  return <BlogContent />;
}