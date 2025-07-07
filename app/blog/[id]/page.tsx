import { Metadata } from 'next';
import BlogDetailContent from './BlogDetailContent';

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  // In a real app, you'd fetch the blog post data here
  return {
    title: 'Blog Post - Loam IT Solutions',
    description: 'Read our latest insights on AI, blockchain, and technology innovation.',
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  return <BlogDetailContent postId={resolvedParams.id} />;
}