
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
      image: '/food.png',
      category: 'web',
      technologies: ['React', 'TailwindCSS', 'Node.js', 'MongoDB'],
      liveLink: 'https://nihal-food-website.vercel.app/',
      githubLink: 'https://github.com/nihalraza369/Nihal-Food-Website',
    },
    {
      id: 2,
      title: 'Chatbot Application',
      description: 'A secure and intuitive mobile banking application with real-time transaction tracking.',
      image: '/chatbot.png',
      category: 'ai',
      technologies: ['React Native', 'Redux', 'Firebase'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'NovaSpark AI',
      description: 'An AI-powered platform for creating and managing intelligent agents.',
      image: '/novaspark.png',
      category: 'web',
      technologies: ['React', 'Framer Motion', 'TailwindCSS'],
      liveLink: 'https://novaspark-ai.vercel.app/',
      githubLink: 'https://github.com/nihalraza369/NovaSpark-Ai',
    },
    {
      id: 4,
      title: 'Python Game Project',
      description: 'A Python-based game project showcasing various algorithms and data structures.',
      image: '/python-games.png',
      category: 'games',
      technologies: ['python','algorithms', 'data structures'],
      liveLink: 'https://github.com/nihalraza369/Python-Projects',
      githubLink: 'https://github.com/nihalraza369/Python-Projects',
    },
    {
      id: 5,
      title: 'Boys Shopping E-Commerce',
      description: 'A boys shopping e-commerce platform with product filtering and secure checkout.',
      image: '/ecommerse.png',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://boys-shopping-ecomerse-website.vercel.app/',
      githubLink: 'https://github.com/nihalraza369/Boys--Shopping-EcomerseWebsite',
    },
    {
      id: 6,
      title: 'Ai Agents',
      description: 'An AI agent SDK project that allows developers to create intelligent agents for various applications.',
      image: '/Agent.png',
      category: 'ai',
      technologies: ['React Native', 'Firebase', 'D3.js'],
      liveLink: 'https://github.com/nihalraza369/Open-Ai-Agent-sdk-project',
      githubLink: 'https://github.com/nihalraza369/Open-Ai-Agent-sdk-project',
    },
     {
      id: 7,
      title: 'python algorithm project',
      description: 'A Python-based game project showcasing various algorithms and data structures.',
      image: '/python-logical-game.png',
      category: 'games',
      technologies: ['python','algorithms', 'data structures'],
      liveLink: 'https://github.com/nihalraza369/Python-Game-project-',
      githubLink: 'https://github.com/nihalraza369/Python-Game-project-',
    },
    {
      id: 8,
      title: 'music website',
      description: 'A music streaming platform with user authentication, playlist management, and audio visualization.',
      image: '/music.png',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://nihal-music-website.vercel.app//',
      githubLink: 'https://github.com/nihalraza369/Nihal-Music-Website',
    },
    {
      id: 9,
      title: 'Javascript Game project',
      description: 'A JavaScript-based game project showcasing various algorithms and data structures.',
      image: '\js-game.png',
      category: 'games',
      technologies: ['javascript','algorithms', 'data structures'],
      liveLink: 'https://github.com/nihalraza369/Js-Game-project',
      githubLink: 'https://github.com/nihalraza369/Js-Game-project',
    },
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web' },
    { id: 'ai', name: 'AI' },
    { id: 'games', name: 'Games' },
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
              <img  alt={`Screenshot of ${project.title} project`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={project.image} />
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
