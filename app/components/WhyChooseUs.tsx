'use client';

import { 
  Award, 
  Users, 
  Zap, 
  Shield,
  Code,
  Headphones,
  CheckCircle,
  Star
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Certified AI/ML Engineers',
      description: 'Our team holds advanced certifications in machine learning, deep learning, and AI development from leading tech companies.',
      stats: '50+ Certifications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Solutions',
      description: 'Built for scale with enterprise security, compliance standards, and robust architecture that grows with your business.',
      stats: '99.9% Uptime',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Code,
      title: 'Full-Stack Development + AI',
      description: 'Complete technology stack expertise with AI integration capabilities across web, mobile, and cloud platforms.',
      stats: '20+ Tech Stacks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Future-Ready Tech Stack',
      description: 'Cutting-edge technologies including AR/VR, blockchain, IoT, and emerging tech to keep you ahead of the curve.',
      stats: 'Latest Technology',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: CheckCircle, value: '500+', label: 'Projects Completed' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' },
    { icon: Headphones, value: '24/7', label: 'Support Available' }
  ];

  const technologies = [
    { category: 'AI/ML', items: ['GPT-4', 'BERT', 'TensorFlow', 'PyTorch', 'Whisper', 'LangChain'] },
    { category: 'Frameworks', items: ['React', 'Next.js', 'Laravel', 'Flutter', 'Unity', 'Node.js'] },
    { category: 'Infrastructure', items: ['AWS', 'Firebase', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'] },
    { category: 'Blockchain', items: ['Ethereum', 'Solidity', 'Web3.js', 'Hardhat', 'IPFS', 'Polygon'] }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="gradient-text">Trusted</span> Technology Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With proven expertise and a commitment to excellence, we deliver solutions 
            that drive real business results and long-term success.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.color} flex items-center justify-center flex-shrink-0`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {reason.title}
                    </h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {reason.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Proven Track Record
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our success is measured by the success of our clients. Here's what we've achieved together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{achievement.value}</div>
                <div className="text-blue-100 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest and most powerful technologies to build solutions 
              that are scalable, secure, and future-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {tech.category}
                </h4>
                <div className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;