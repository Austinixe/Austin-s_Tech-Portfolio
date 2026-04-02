// src/components/Introduction.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';
import profilePhoto from '../assets/profile3.png';

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

        {/* Content - Photo + Text side by side */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-10">

        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 overflow-hidden">
  <img
    src={profilePhoto}
    alt="Augustine"
    className="w-full h-full rounded-2xl object-cover object-top shadow-xl border-4 border-white dark:border-gray-700"
  />
</div>

          {/* Text */}
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I'm a web developer based in{" "}
              <span className="text-gray-900 dark:text-white font-medium">Lagos, Nigeria</span>
              , focused on building modern, reliable web solutions for businesses and startups. I help turn ideas into functional digital products that support growth, efficiency, and long-term success.
            </p>
            <p>
              I'm passionate about creating{" "}
              <span className="text-gray-900 dark:text-white font-medium">clean, maintainable solutions</span>{" "}
              and user experiences that are both intuitive and purposeful. Every project is approached with a business-first mindset.
            </p>
            <p>
              As the founder of Synergy Consult, I work closely with clients to deliver custom web solutions using React, Node.js, and WordPress.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">MERN</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Stack Specialist</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">4+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Introduction;