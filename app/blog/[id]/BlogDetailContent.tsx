'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  Share2, 
  ArrowLeft,
  Tag,
  MessageCircle,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  Check
} from 'lucide-react';

interface BlogDetailContentProps {
  postId: string;
}

const BlogDetailContent = ({ postId }: BlogDetailContentProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  // Mock blog post data - in a real app, this would be fetched based on postId
  const blogPost = {
    id: parseInt(postId),
    title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming how enterprises operate, make decisions, and serve their customers. As we move through 2024, several key trends are emerging that will define the next phase of AI adoption in the enterprise sector.</p>

      <h2>1. Generative AI Goes Mainstream</h2>
      <p>Generative AI has moved beyond experimental phases into production environments. Companies are integrating large language models (LLMs) into their workflows for content creation, code generation, and customer service automation. The key differentiator in 2024 is not whether companies are using generative AI, but how strategically they're implementing it.</p>

      <h3>Key Applications:</h3>
      <ul>
        <li>Automated content generation for marketing and documentation</li>
        <li>Code assistance and automated testing</li>
        <li>Intelligent customer support chatbots</li>
        <li>Data analysis and report generation</li>
      </ul>

      <h2>2. AI-Powered Decision Making</h2>
      <p>Enterprise decision-making is becoming increasingly data-driven, with AI systems providing real-time insights and recommendations. Machine learning models are analyzing vast datasets to identify patterns, predict outcomes, and suggest optimal strategies.</p>

      <blockquote>
        "The companies that will thrive in 2024 are those that can effectively combine human intuition with AI-powered insights to make faster, more accurate decisions."
      </blockquote>

      <h2>3. Ethical AI and Governance</h2>
      <p>As AI becomes more prevalent, enterprises are focusing heavily on ethical AI practices and governance frameworks. This includes ensuring fairness, transparency, and accountability in AI systems.</p>

      <h3>Key Considerations:</h3>
      <ul>
        <li>Bias detection and mitigation in AI models</li>
        <li>Explainable AI for critical business decisions</li>
        <li>Data privacy and security compliance</li>
        <li>Regular auditing of AI system performance</li>
      </ul>

      <h2>4. Edge AI and Real-Time Processing</h2>
      <p>The shift towards edge computing is enabling real-time AI processing closer to data sources. This trend is particularly important for industries requiring immediate responses, such as manufacturing, healthcare, and autonomous vehicles.</p>

      <h2>Looking Ahead</h2>
      <p>The future of enterprise AI is bright, with continued innovation in areas like multimodal AI, quantum-enhanced machine learning, and autonomous business processes. Companies that start building their AI capabilities now will be best positioned to capitalize on these emerging opportunities.</p>

      <p>At Loam IT Solutions, we're helping enterprises navigate this AI transformation with custom solutions tailored to their specific needs. From strategy development to implementation and ongoing support, we ensure that AI becomes a competitive advantage rather than just another technology investment.</p>
    `,
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      role: 'CEO & AI Researcher',
      bio: 'Alex is a leading AI researcher with over 12 years of experience in machine learning and enterprise software development. He has published numerous papers on AI applications in business and regularly speaks at technology conferences.'
    },
    category: 'AI & Machine Learning',
    tags: ['AI', 'Enterprise', 'Machine Learning', 'Automation', 'Business Intelligence'],
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    views: 2847,
    likes: 156,
    comments: 23
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Machine Learning Model Deployment: From Development to Production',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Building Scalable AI Infrastructure for Enterprise Applications',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      readTime: '7 min read'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(shareUrl);
    const title = encodeURIComponent(blogPost.title);
    
    let shareLink = '';
    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {blogPost.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {blogPost.title}
              </h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-6 md:p-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{blogPost.author.name}</h3>
                  <p className="text-sm text-gray-600">{blogPost.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(blogPost.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{blogPost.views.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>

          {/* Tags */}
          <div className="p-6 md:p-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-6">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Engagement Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isLiked 
                      ? 'bg-red-50 text-red-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{blogPost.likes + (isLiked ? 1 : 0)}</span>
                </button>
                
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>{blogPost.comments}</span>
                </button>
                
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isBookmarked 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  <span>Save</span>
                </button>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 mr-2">Share:</span>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
          <div className="flex items-start space-x-4">
            <img
              src={blogPost.author.avatar}
              alt={blogPost.author.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                About {blogPost.author.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{blogPost.author.role}</p>
              <p className="text-gray-600 leading-relaxed">
                {blogPost.author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block"
              >
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600">{post.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailContent;