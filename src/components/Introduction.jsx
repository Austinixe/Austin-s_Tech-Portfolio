// src/components/Introduction.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';

const Introduction = () => {
  return (
   <section id="introduction" className="py-20 px-6 bg-white dark:bg-gray-900 relative z-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-500" size={24} />
            <span className="text-blue-500 font-semibold uppercase tracking-wide text-sm">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Building Digital Solutions That Matter
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            I'm a full-stack developer based in <span className="text-gray-900 dark:text-white font-medium">Lagos, Nigeria</span>, 
            specializing in MERN stack applications. I build scalable web solutions for businesses and startups 
            that need reliable, modern technology to grow their operations.
          </p>
          
          <p>
            I believe in writing <span className="text-gray-900 dark:text-white font-medium">clean, maintainable code</span> and 
            creating user experiences that solve real problems. Every project is an opportunity to deliver solutions 
            that make a difference—whether it's streamlining business processes, improving user engagement, or 
            bringing innovative ideas to life.
          </p>
          
          <p>
            When I'm not coding, I'm exploring new technologies, contributing to the developer community, 
            and staying ahead of the curve in the ever-evolving world of web development.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              MERN
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Stack Specialist</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              4+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;