// src/components/Skills.jsx
import React, { useState } from 'react';
import skills from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'database', label: 'Database', icon: '🗄️' },
    { key: 'tools', label: 'Tools', icon: '🛠️' },
    { key: 'deployment', label: 'Deployment', icon: '🚀' },
    { key: 'other', label: 'Other', icon: '💡' }
  ];

  return (
   <section id="skills" className="py-20 px-6 bg-white dark:bg-black relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                activeCategory === category.key
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 hover:border-blue-500 rounded-lg p-4 text-center transition-all duration-300 hover:transform hover:-translate-y-1 group cursor-default"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="text-sm md:text-base font-medium text-gray-300 group-hover:text-blue-500 transition-colors">
                {skill}
              </div>
            </div>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
            <span className="text-blue-500">MERN</span> Stack Expertise
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 rounded-lg p-6 text-center border border-zinc-700 hover:border-blue-500 transition-all hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3">
                  {index === 0 && '🍃'}
                  {index === 1 && '⚡'}
                  {index === 2 && '⚛️'}
                  {index === 3 && '🟢'}
                </div>
                <div className="font-bold text-lg text-white">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;