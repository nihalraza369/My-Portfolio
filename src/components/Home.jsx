import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = ({ setActiveSection }) => {
  const location = useLocation();

  // Handle hash-based scrolling
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(sectionId);
        }, 100);
      }
    }
  }, [location, setActiveSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const offset = 200;
        
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
