
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Layout, Smartphone, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Redux']
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: <Palette size={24} />,
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Wireframing', 'Prototyping', 'User Research', 'Accessibility']
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
      icon: <Smartphone size={24} />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Responsive Design', 'Progressive Web Apps']
    },
    {
      id: 'other',
      title: 'Other Skills',
      icon: <Layout size={24} />,
      skills: ['Git', 'GitHub', 'CI/CD', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Testing', 'Performance Optimization', 'SEO']
    }
  ];

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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-green-900">Skills</span></h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">A comprehensive overview of my technical skills and expertise across various domains of software development and design.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={fadeInUp}
            className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-md bg-green-900 text-white mr-3">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + (i * 0.05) }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={fadeInUp}
        className="mt-20"
      >
        <h3 className="text-3xl font-bold text-green-900 text-center mb-12">Work Experience</h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {[
              {
                period: '2022 - Present',
                role: 'Senior Frontend Developer',
                company: 'Tech Innovations Inc.',
                description: 'Leading the frontend development team, implementing modern UI/UX designs, and optimizing application performance.'
              },
              {
                period: '2019 - 2022',
                role: 'UI/UX Developer',
                company: 'Creative Solutions',
                description: 'Designed and developed user interfaces for web and mobile applications, focusing on user experience and accessibility.'
              },
              {
                period: '2017 - 2019',
                role: 'Web Developer',
                company: 'Digital Agency',
                description: 'Created responsive websites and web applications for clients across various industries using modern web technologies.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-600 z-10"></div>
                
                <div className={`md:w-1/2 bg-card border border-border rounded-xl p-6 shadow-sm ml-6 md:ml-0 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-white mb-2">{item.period}</span>
                  <h4 className="text-lg font-bold">{item.role}</h4>
                  <p className="text-foreground/70 font-medium">{item.company}</p>
                  <p className="mt-2 text-foreground/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
