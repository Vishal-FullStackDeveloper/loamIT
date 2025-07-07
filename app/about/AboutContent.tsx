'use client';

import { 
  Brain, 
  Users, 
  Target, 
  Award, 
  Code, 
  Zap,
  Globe,
  Shield,
  Heart,
  Star,
  ExternalLink,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

const AboutContent = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      position: 'CEO & Co-Founder',
      bio: 'Former AI researcher at Google with 12+ years in machine learning and enterprise software development.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: ['AI Strategy', 'Machine Learning', 'Product Vision'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Rodriguez',
      position: 'CTO & Co-Founder',
      bio: 'Full-stack architect with expertise in blockchain, AR/VR, and cloud infrastructure. Former Tech Lead at Microsoft.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: ['Blockchain', 'AR/VR', 'Cloud Architecture'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Park',
      position: 'Head of AI Engineering',
      bio: 'PhD in Computer Science, specializing in natural language processing and computer vision applications.',
      image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: ['NLP', 'Computer Vision', 'Deep Learning'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Watson',
      position: 'Lead UX Designer',
      bio: 'Award-winning designer with a passion for creating intuitive interfaces for complex AI and blockchain applications.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: ['UI/UX Design', 'User Research', 'Design Systems'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  const technologies = [
    {
      category: 'AI & Machine Learning',
      items: [
        'GPT-4 & Language Models',
        'TensorFlow & PyTorch',
        'Computer Vision (OpenCV)',
        'Natural Language Processing',
        'Reinforcement Learning',
        'MLOps & Model Deployment'
      ]
    },
    {
      category: 'Web & Mobile Frameworks',
      items: [
        'React & Next.js',
        'React Native & Flutter',
        'Node.js & Express',
        'Laravel & PHP',
        'Django & FastAPI',
        'Progressive Web Apps'
      ]
    },
    {
      category: 'Blockchain & Web3',
      items: [
        'Ethereum & Solidity',
        'Polygon & Layer 2',
        'Web3.js & Ethers.js',
        'Smart Contract Auditing',
        'DeFi Protocols',
        'NFT Standards'
      ]
    },
    {
      category: 'AR/VR & 3D',
      items: [
        'Unity 3D Engine',
        'Unreal Engine',
        'WebXR & WebGL',
        'ARCore & ARKit',
        'Oculus SDK',
        '3D Modeling & Animation'
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'AWS & Google Cloud',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Terraform & Infrastructure',
        'Microservices Architecture',
        'Monitoring & Logging'
      ]
    },
    {
      category: 'Database & Storage',
      items: [
        'PostgreSQL & MongoDB',
        'Redis & Elasticsearch',
        'Vector Databases',
        'Graph Databases',
        'Data Warehousing',
        'Real-time Analytics'
      ]
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', count: 8 },
    { name: 'Google Cloud Professional', count: 6 },
    { name: 'Microsoft Azure Expert', count: 5 },
    { name: 'TensorFlow Developer Certificate', count: 12 },
    { name: 'Certified Kubernetes Administrator', count: 7 },
    { name: 'Blockchain Developer Certification', count: 9 }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new possibilities and pushing boundaries.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Our success is measured by the tangible results and transformation we deliver to our clients.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'We build with security and privacy as core principles, ensuring your data and systems are protected.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Quality Excellence',
      description: 'Every solution we deliver meets the highest standards of quality, performance, and reliability.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>About Us</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building the <span className="gradient-text">Future</span> Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to creating intelligent, 
            immersive, and decentralized solutions that change how the world interacts with data.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To create intelligent, immersive, and decentralized tech solutions that change 
              how the world interacts with data. We envision a future where AI, blockchain, 
              and immersive technologies seamlessly integrate to solve humanity's greatest challenges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              innovation, and digital transformation. We deliver exceptional value through 
              expertise, integrity, and a commitment to long-term partnerships.
            </p>
          </div>
        </div>

        {/* Founders' Note */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A Note from Our Founders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The story behind Loam IT Solutions and our commitment to technological excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
              "We founded Loam IT Solutions with a simple belief: that technology should be a force 
              for positive transformation. Having worked at some of the world's leading tech companies, 
              we saw the incredible potential of AI, blockchain, and immersive technologies to solve 
              real-world problems. Our mission is to make these powerful technologies accessible to 
              businesses of all sizes, helping them innovate, grow, and succeed in the digital age."
            </blockquote>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <div className="font-semibold text-gray-900">{teamMembers[0].name}</div>
                <div className="text-sm text-gray-600">{teamMembers[0].position}</div>
              </div>
              <div className="text-center">
                <img
                  src={teamMembers[1].image}
                  alt={teamMembers[1].name}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <div className="font-semibold text-gray-900">{teamMembers[1].name}</div>
                <div className="text-sm text-gray-600">{teamMembers[1].position}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of engineers, designers, and strategists brings decades 
              of combined experience in cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from how we approach problems 
              to how we build relationships with our clients and team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Technology Stack</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest and most powerful technologies to build solutions 
              that are scalable, secure, and future-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {tech.category}
                </h3>
                <div className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Team <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team holds industry-recognized certifications from leading technology companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">
                  {cert.count}
                </p>
                <p className="text-sm text-gray-600">
                  Team Members
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Careers CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation 
            and technology. Help us build the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
              <span>View Open Positions</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;