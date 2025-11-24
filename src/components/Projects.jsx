import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Layers, Code, Cpu, Gamepad2, Sparkles, FolderGit2 } from 'lucide-react';
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
      technologies: ['Python','Algorithms', 'Data Structures'],
      liveLink: 'https://github.com/nihalraza369/Python-Projects',
      githubLink: 'https://github.com/nihalraza369/Python-Projects',
    },
    {
      id: 5,
      title: 'Boys Shopping Store',
      description: 'A boys shopping e-commerce platform with product filtering and secure checkout.',
      image: '/ecommerse.png',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://boys-shopping-ecomerse-website.vercel.app/',
      githubLink: 'https://github.com/nihalraza369/Boys--Shopping-EcomerseWebsite',
    },
    {
      id: 6,
      title: 'AI Agents SDK',
      description: 'An AI agent SDK project that allows developers to create intelligent agents for various applications.',
      image: '/Agent.png',
      category: 'ai',
      technologies: ['React Native', 'Firebase', 'D3.js'],
      liveLink: 'https://github.com/nihalraza369/Open-Ai-Agent-sdk-project',
      githubLink: 'https://github.com/nihalraza369/Open-Ai-Agent-sdk-project',
    },
     {
      id: 7,
      title: 'Python Algo Project',
      description: 'A Python-based game project showcasing various algorithms and data structures.',
      image: '/python-logical-game.png',
      category: 'games',
      technologies: ['Python','Algorithms', 'Data Structures'],
      liveLink: 'https://github.com/nihalraza369/Python-Game-project-',
      githubLink: 'https://github.com/nihalraza369/Python-Game-project-',
    },
    {
      id: 8,
      title: 'Music Streaming',
      description: 'A music streaming platform with user authentication, playlist management, and audio visualization.',
      image: '/music.png',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://nihal-music-website.vercel.app//',
      githubLink: 'https://github.com/nihalraza369/Nihal-Music-Website',
    },
    {
      id: 9,
      title: 'JS Game Project',
      description: 'A JavaScript-based game project showcasing various algorithms and data structures.',
      image: '/js-game.png',
      category: 'games',
      technologies: ['JavaScript','Algorithms', 'Data Structures'],
      liveLink: 'https://github.com/nihalraza369/Js-Game-project',
      githubLink: 'https://github.com/nihalraza369/Js-Game-project',
    },
  ];

  const filters = [
    { id: 'all', name: 'All Projects', icon: Layers },
    { id: 'web', name: 'Web Dev', icon: Code },
    { id: 'ai', name: 'AI / ML', icon: Cpu },
    { id: 'games', name: 'Games', icon: Gamepad2 },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="relative bg-white py-24 overflow-hidden" id="projects">
      
      {/* === BACKGROUND DECORATION (Light Theme) === */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none"></div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/60 rounded-full blur-[100px] opacity-60 pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] opacity-60 pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold mb-4">
            <Sparkles size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of my recent work, featuring web applications, AI integrations, and interactive experiments.
          </p>
        </motion.div>

        {/* === FILTER BUTTONS === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-6 py-2.5 rounded-full flex items-center gap-2 font-medium transition-all duration-300 shadow-sm
                ${activeFilter === filter.id 
                  ? 'bg-gray-900 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'}
              `}
            >
              <filter.icon size={16} />
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* === PROJECTS GRID === */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-video border-b border-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
                    }}
                  />
                  
                  {/* Overlay with Buttons */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full font-bold hover:bg-green-500 hover:text-white transition-all transform hover:scale-105 shadow-xl"
                    >
                      <Github size={18} /> Code
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full font-bold hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack Pills (Light Theme) */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[11px] uppercase font-bold tracking-wide rounded-md bg-green-50 text-green-700 border border-green-100 group-hover:bg-green-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* === BOTTOM CTA === */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
            <a 
                href="https://github.com/nihalraza369" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-900/20 hover:-translate-y-1"
            >
                <FolderGit2 size={20} />
                View More on GitHub
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;