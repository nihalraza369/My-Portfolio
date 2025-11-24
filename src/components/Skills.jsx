import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code, Palette, Database, Layout, Smartphone, Server, Briefcase, ExternalLink, Globe } from 'lucide-react';

const Skills = () => {
  // === 1. HERO BACKGROUND LOGIC START ===
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  const mask = useTransform([mouseX, mouseY], ([x, y]) =>
    `radial-gradient(400px at ${x}px ${y}px, black, transparent)`
  );
  // === HERO BACKGROUND LOGIC END ===

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Redux']
    },
    {
      id: 'design',
      title: 'AI Development',
      icon: <Smartphone size={24} />, 
      skills: ['Langchain', 'Langgraph', 'Crew AI', 'AI Agents', 'OpenAI API', 'LLMs']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'Authentication', 'Security']
    },
    {
      id: 'database',
      title: 'Database',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Redis', 'ORM', 'Data Modeling']
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Layout size={24} />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Responsive Design', 'Progressive Web Apps']
    },
    {
      id: 'other',
      title: 'Tools & DevOps',
      icon: <Briefcase size={24} />,
      skills: ['Git', 'GitHub', 'CI/CD', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Testing', 'Optimization']
    }
  ];

  const experienceData = [
    {
      period: '2024 - Present',
      role: 'Full Stack Developer',
      company: 'Nexdice',
      website: 'https://www.nexdice.com/',
      logoLetter: 'N',
      description: 'Working as a Full Stack developer using React and Next.js for frontend and Node.js for backend to build scalable and complete web applications.'
    },
    {
      period: '2024 - Present',
      role: 'Frontend Developer',
      company: 'Pathen.ai',
      website: 'https://www.pathen.ai/',
      logoLetter: 'P',
      description: 'Working as a Frontend developer utilizing React, Next.js, and modern UI libraries to build intuitive and user-friendly interfaces for AI products.'
    },
    {
      period: '2024 - Present',
      role: 'AI Developer',
      company: 'PIAIC',
      website: 'https://www.piaic.org/',
      logoLetter: 'P',
      description: 'Developing AI-driven applications and solutions, focusing on natural language processing, LangChain, and AI agents.'
    },
    {
      period: '2022 - 2024',
      role: 'Python Developer',
      company: 'PIAIC',
      website: 'https://www.piaic.org/',
      logoLetter: 'P',
      description: 'Built backend services and APIs using Python, Django, and FastAPI, focusing on scalability and security for various applications.'
    },
    {
      period: '2021 - 2022',
      role: 'Full Stack Developer',
      company: 'SMIT Institute',
      website: 'https://www.saylaniwelfare.com/',
      logoLetter: 'S',
      description: 'Developed and maintained responsive web applications using React and Next.js, ensuring high performance and user experience.'
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div 
      className="relative min-h-screen bg-black text-white py-20 overflow-hidden" 
      id="skills"
      // === 2. MOUSE EVENT HANDLERS ===
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
      }}
    >
      
      {/* === 3. HERO BACKGROUND CODE COPIED HERE === */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Spotlight Mask Effect */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#d5d5d555_1px,transparent_1px),linear-gradient(to_bottom,#d5d5d555_1px,transparent_1px)] bg-[size:30px_30px]"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        />
        {/* Static Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33333311_1px,transparent_1px),linear-gradient(to_bottom,#33333311_1px,transparent_1px)] bg-[size:30px_30px]" />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_center,#111111,transparent)] opacity-80" />
      </div>
      {/* === HERO BACKGROUND END === */}


      <div className="container mx-auto px-6 relative z-10">
        
        {/* === SECTION TITLE === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise across various domains of software development and design.
          </p>
        </motion.div>

        {/* === SKILLS GRID === */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(34, 197, 94, 0.4)" }}
              className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-300 group hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-900/50 to-black border border-green-500/20 text-green-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 hover:bg-green-500/20 hover:text-green-300 hover:border-green-500/30 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === WORK EXPERIENCE (Timeline) === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-bold text-white">
              Work <span className="text-green-500">Experience</span>
            </h3>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">My professional journey and the organizations I've had the privilege to work with.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line (Laser Gradient) */}
            <div className="absolute left-[28px] md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            
            <div className="space-y-16">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start group`}
                >
                  {/* Empty side for layout balance */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Timeline Dot (Logo Center) */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center z-10">
                     {/* Outer Ring */}
                    <div className="w-14 h-14 rounded-full bg-black border-4 border-zinc-900 shadow-xl flex items-center justify-center relative">
                       {/* Inner Pulse */}
                       <div className="absolute inset-0 rounded-full border border-green-500/50 animate-ping opacity-20"></div>
                       {/* Company Initial */}
                       <span className="font-bold text-green-500 text-lg">{item.logoLetter}</span>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <a 
                      href={item.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-green-500/50 transition-all duration-300 shadow-lg relative overflow-hidden group-hover:shadow-[0_5px_30px_rgba(34,197,94,0.1)] hover:-translate-y-1">
                        
                        {/* Corner Glow */}
                        <div className={`absolute top-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl -z-10 transition-all duration-500 group-hover:bg-green-500/20 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>

                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                          
                          {/* Header: Role & Period */}
                          <div className="flex flex-wrap items-center gap-3 mb-2 justify-start md:justify-inherit">
                             <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-900/30 text-green-400 border border-green-500/20">
                              {item.period}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-gray-500 uppercase tracking-widest font-semibold">
                               <Globe size={12} />
                               Website
                            </div>
                          </div>

                          {/* Company & Role */}
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors flex items-center gap-2">
                            {item.company}
                            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                          </h4>
                          <p className="text-lg font-medium text-gray-300 mb-4">{item.role}</p>
                          
                          {/* Description */}
                          <p className="text-sm text-gray-400 leading-relaxed max-w-md group-hover:text-gray-300 transition-colors">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;