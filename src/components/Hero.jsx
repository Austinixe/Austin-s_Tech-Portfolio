// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  
  const fullText = "Hi, I'm Augustine";
  
  const taglines = [
    { text: "Building digital solutions that ", highlight: "grow your business" },
    { text: "Transforming ideas into ", highlight: "profitable web applications" },
    { text: "Reliable technology that ", highlight: "scales with your growth" },
    { text: "Your vision, our expertise - ", highlight: "powerful web solutions" }
  ];

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (isTypingComplete) {
      const interval = setInterval(() => {
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isTypingComplete]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      style={{ 
        background: 'linear-gradient(135deg, #fef3f9 0%, #f0f0ff 50%, #e8f4ff 100%)',
      }}
    >
      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-gray-900 dark:opacity-100 opacity-0 transition-opacity duration-300"></div>

      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20 -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 -bottom-48 -right-48"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full blur-3xl opacity-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto relative z-10 w-full text-center">
        
        {/* Typing Animation */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white">
            {typedText}
            {!isTypingComplete && <span className="animate-blink">|</span>}
          </h1>
        </div>

        {/* Rotating Taglines */}
        {isTypingComplete && (
          <div className="mb-8 min-h-[200px] md:min-h-[240px] flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              <span className="text-gray-700 dark:text-gray-300 transition-all duration-700">
                {taglines[currentTaglineIndex].text}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-700">
                {taglines[currentTaglineIndex].highlight}
              </span>
            </h2>
          </div>
        )}

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
          Web Development Solutions for Growing Businesses
        </p>

        {/* Brief Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Founder of Synergy Consult - partnering with businesses to deliver custom web solutions using React, Node.js, and WordPress
        </p>

        {/* Status Badge */}
        <div className="mb-10 inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-5 py-3 rounded-full text-base font-medium">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          Ready to grow your business together
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Let's Discuss Your Needs
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 text-gray-800 dark:text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            View Our Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="text-gray-400 dark:text-gray-600 mx-auto" size={32} />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;