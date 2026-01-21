// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Switch to section (no scrolling needed)
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    // Scroll to top when changing sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        
        {/* Conditionally render ONLY the active section */}
        {activeSection === 'home' && <Hero scrollToSection={scrollToSection} />}
        {activeSection === 'introduction' && <Introduction />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'work' && <Work />}
        {activeSection === 'contact' && <Contact />}
        
        <Footer scrollToSection={scrollToSection} />
        
        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;