'use client';

import { useState, useEffect } from 'react';
import { Brain, Zap, Sparkles } from 'lucide-react';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const AnimatedLogo = ({ size = 'md', showText = true, className = '' }: AnimatedLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [mounted, setMounted] = useState(false);

  const icons = [Brain, Zap, Sparkles];

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const taglineSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIcon((prev) => (prev + 1) % icons.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [mounted]);

  const CurrentIcon = icons[currentIcon];

  // Render static version until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        {/* Static Logo Container */}
        <div className="relative">
          {/* Main Logo - Static Version */}
          <div className={`relative ${sizeClasses[size]} bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg`}>
            <Brain 
              className={`text-white ${
                size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-7 h-7' : 'w-9 h-9'
              }`} 
            />
          </div>
        </div>

        {/* Static Text */}
        {showText && (
          <div className="hidden sm:block">
            <div className={`${textSizeClasses[size]} font-bold`}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Loam
              </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                IT
              </span>
            </div>
            <div className={`${taglineSizeClasses[size]} font-medium -mt-1 text-gray-600`}>
              <span>Future</span>
              <span className="mx-1">with</span>
              <span>AI</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Render full animated version after mounting
  return (
    <div 
      className={`flex items-center space-x-3 group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Logo Container */}
      <div className="relative">
        {/* Background Glow Effect */}
        <div className={`absolute inset-0 ${sizeClasses[size]} bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700`}></div>
        
        {/* Outer Ring Animation */}
        <div className={`absolute inset-0 ${sizeClasses[size]} border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-xl opacity-0 ${
          isHovered || isAnimating ? 'opacity-30 animate-spin' : ''
        } transition-all duration-1000`} style={{ animationDuration: '3s' }}></div>
        
        {/* Main Logo */}
        <div className={`relative ${sizeClasses[size]} bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center transform transition-all duration-700 ${
          isHovered || isAnimating 
            ? 'scale-110 rotate-6 shadow-2xl' 
            : 'scale-100 rotate-0 shadow-lg'
        }`}>
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-1000 ${
                  isHovered || isAnimating ? 'opacity-100 animate-ping' : 'opacity-0'
                }`}
                style={{
                  left: `${15 + (i * 10)}%`,
                  top: `${15 + (i * 8)}%`,
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
          
          {/* Dynamic Icon with Morphing Effect */}
          <CurrentIcon 
            className={`text-white transition-all duration-700 ${
              size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-7 h-7' : 'w-9 h-9'
            } ${isHovered || isAnimating ? 'animate-pulse scale-110' : ''}`} 
          />
          
          {/* Neural Network Lines */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-20" 
            viewBox="0 0 48 48"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="cyan" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="white" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            <path
              d="M12 12 L36 36 M36 12 L12 36 M24 8 L24 40 M8 24 L40 24"
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              className={`transition-all duration-1000 ${
                isHovered || isAnimating 
                  ? 'stroke-dasharray-[4,2] opacity-60' 
                  : 'stroke-dasharray-[0,0] opacity-20'
              }`}
            />
          </svg>
          
          {/* Pulsing Core */}
          <div className={`absolute inset-2 bg-white/10 rounded-lg transition-all duration-500 ${
            isHovered || isAnimating ? 'animate-pulse' : ''
          }`}></div>
        </div>
        
        {/* Orbiting Elements */}
        <div className={`absolute inset-0 ${sizeClasses[size]} ${isHovered || isAnimating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-70 shadow-lg"></div>
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 shadow-lg"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-70 shadow-lg"></div>
          <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-70 shadow-lg"></div>
        </div>
      </div>

      {/* Animated Text */}
      {showText && (
        <div className="hidden sm:block">
          <div className={`${textSizeClasses[size]} font-bold transition-all duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Loam
            </span>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              IT
            </span>
          </div>
          <div className={`${taglineSizeClasses[size]} font-medium -mt-1 transition-all duration-500 ${
            isHovered ? 'text-blue-600 scale-105' : 'text-gray-600'
          }`}>
            <span className={`inline-block transition-all duration-300 ${isHovered ? 'translate-x-1 text-blue-600' : ''}`}>Future</span>
            <span className="mx-1">with</span>
            <span className={`inline-block transition-all duration-300 delay-100 ${isHovered ? 'translate-x-1 text-purple-600' : ''}`}>AI</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedLogo;