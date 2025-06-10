
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A modern e-commerce platform with a sleek UI, product filtering, and secure checkout.',
      image: 'e-commerce-website',
      category: 'web',
      technologies: ['React', 'TailwindCSS', 'Node.js', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'A secure and intuitive mobile banking application with real-time transaction tracking.',
      image: 'mobile-banking-app',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A creative portfolio website showcasing projects with smooth animations and interactions.',
      image: 'portfolio-website',
      category: 'web',
      technologies: ['React', 'Framer Motion', 'TailwindCSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 4,
      title: 'Dashboard UI',
      description: 'A comprehensive admin dashboard with data visualization and user management.',
      image: 'dashboard-ui',
      category: 'ui',
      technologies: ['React', 'Chart.js', 'TailwindCSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 5,
      title: 'Travel Booking Platform',
      description: 'A travel booking platform with destination search, booking management, and payment integration.',
      image: 'travel-booking',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 6,
      title: 'Fitness Tracker App',
      description: 'A mobile app for tracking workouts, nutrition, and fitness progress with visual analytics.',
      image: 'fitness-tracker',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'D3.js'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ui', name: 'UI/UX' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container-custom">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-green-900">Projects</span></h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">Explore my recent work and projects that showcase my skills and expertise in creating engaging digital experiences.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={fadeInUp}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.id)}
            className={activeFilter === filter.id ? "bg-green-900 hover:bg-green-800" : ""}
          >
            {filter.name}
          </Button>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={fadeInUp}
            className="project-card group"
          >
            <div className="relative overflow-hidden aspect-video">
              <img  alt={`Screenshot of ${project.title} project`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1636793734481-acf6c9f78255" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <div className="flex space-x-3">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-background/40 transition-colors">
                    <Github size={18} className="text-white" />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-background/40 transition-colors">
                    <ExternalLink size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-tag">{tech}</span>
                ))}
              </div>
              
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                View Project <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
