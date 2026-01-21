// src/components/Services.jsx
import React from 'react';
import { Code, Layers, Database, Rocket, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Full-Stack Web Development",
      description: "Custom web applications built with MERN stack from concept to deployment. End-to-end solutions tailored to your business needs."
    },
    {
      icon: <Layers size={32} />,
      title: "React Application Development",
      description: "Interactive, responsive user interfaces that engage your users. Modern React applications with best practices and optimal performance."
    },
    {
      icon: <Wrench size={32} />,
      title: "API Development & Integration",
      description: "RESTful APIs and third-party integrations for seamless functionality. Connect your applications with powerful backend services."
    },
    {
      icon: <Database size={32} />,
      title: "Database Design & Management",
      description: "Efficient MongoDB schemas optimized for performance and scalability. Robust data architecture for growing applications."
    },
    {
      icon: <Rocket size={32} />,
      title: "Deployment & Maintenance",
      description: "Production deployment, hosting setup, and ongoing technical support. Keep your application running smoothly 24/7."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive web development solutions to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;