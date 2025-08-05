
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-green-900">Me</span></h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">Get to know more about my background, experience, and what drives me to create exceptional digital experiences.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeInUp}
          className="relative"
        >
          <div className="relative rounded-lg overflow-hidden border border-border shadow-lg">
            <img  alt="John Doe working on a creative project in a modern workspace" className="w-full h-auto" src="https://images.unsplash.com/photo-1672309558498-cfcc89afff25" />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl -z-10"></div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Creative Developer with a Passion for Design</h3>
          
          <p className="text-foreground/80">
            I'm a creative developer with over 4 years of experience crafting engaging digital experiences. My approach combines technical expertise with an eye for design, resulting in projects that are both functional and visually compelling.
          </p>
          
          <p className="text-foreground/80">
            I specialize in front-end development, Ai Agents, and creating responsive web applications that deliver exceptional user experiences across all devices.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center space-x-2">
              <Calendar size={18} className="text-blue-500" />
              <span>Born: November 6, 2008</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-blue-500" />
              <span>Pakistan, Karachi</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Briefcase size={18} className="text-blue-500" />
              <span>Freelance Available</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <GraduationCap size={18} className="text-blue-500" />
              <span>Intermediate Computer Science</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
