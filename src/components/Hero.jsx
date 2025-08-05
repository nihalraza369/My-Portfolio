import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Facebook, Github, Instagram, Linkedin, Twitter, Code, Zap, Cpu, Palette, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  // Floating icons animation variants
  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 order-2 lg:order-1"
        >
           <motion.span 
            className="text-lg font-medium text-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Assalamulaikum
          </motion.span>
<motion.h1 
  className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row sm:items-center gap-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.5 }}
>
  <span>Hello 👋 I'm</span>
  <span className="animation-container">
    <div className="animation-slide">
      <div className="first"><div>Nihal Raza</div></div>
      <div className="second"><div>Full Stack Developer</div></div>
      <div className="third"><div>AI Engineer</div></div>
    </div>
  </span>
</motion.h1>

          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Creative Developer & AI Enthusiast
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-foreground/70 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Passionate about crafting engaging digital experiences through innovative design and cutting-edge technology. Let's build something amazing together!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button className="bg-green-900 hover:bg-green-800" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center sm:justify-start space-x-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-500 transition-colors">
              <Twitter size={24} />
            </a>
             <a href="https://www.instagram.com/dev_nihal_raza/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600 transition-colors">
              <Instagram size={24} />
            </a>
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
              <Facebook size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            {/* Animated Background Rings */}
            <motion.div
              variants={pulseVariants}
              animate="animate"
              className="absolute inset-0 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] border-4 border-green-500/30 scale-110 -z-10"
            />
            <motion.div
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
              className="absolute inset-0 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] border-2 border-green-400/20 scale-125 -z-10"
            />
            
            {/* Main Image Container */}
            <div className="flex justify-center relative">
              <div className="flex justify-center relative">
                <div className="rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl w-[250px] h-[320px] sm:w-[300px] sm:h-[400px] lg:w-[400px] lg:h-[600px] relative group">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/50 via-blue-500/50 to-purple-500/50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
                  
                  {/* Image */}
                  <motion.img
                    src="/my-image.png"
                    alt="Profile"
                    className="w-full h-full object-cover relative z-10 transition-transform duration-300 group-hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Orbiting Tech Icons Container */}
            <motion.div
              variants={orbitVariants}
              animate="animate"
              className="absolute inset-0 w-full h-full"
            >
              {/* Icon positions in a circular orbit */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8"
                style={{ transformOrigin: '50% 200px' }}
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="bg-gradient-to-br from-green-500 to-green-700 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Code size={16} className="sm:w-5 sm:h-5" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/4 right-0 transform translate-x-4"
                style={{ transformOrigin: '-150px 150px' }}
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '1s' }}
                  className="bg-gradient-to-br from-blue-500 to-blue-700 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Zap size={16} className="sm:w-5 sm:h-5" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 right-0 transform translate-x-4"
                style={{ transformOrigin: '-150px -150px' }}
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '2s' }}
                  className="bg-gradient-to-br from-purple-500 to-purple-700 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Cpu size={16} className="sm:w-5 sm:h-5" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8"
                style={{ transformOrigin: '50% -200px' }}
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '3s' }}
                  className="bg-gradient-to-br from-orange-500 to-orange-700 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Palette size={16} className="sm:w-5 sm:h-5" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 left-0 transform -translate-x-4"
                style={{ transformOrigin: '150px -150px' }}
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '4s' }}
                  className="bg-gradient-to-br from-red-500 to-red-700 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Database size={16} className="sm:w-5 sm:h-5" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/4 left-0 transform -translate-x-4"
                style={{ transformOrigin: '150px 150px' }}
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '5s' }}
                  className="bg-gradient-to-br from-teal-500 to-teal-700 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Globe size={16} className="sm:w-5 sm:h-5" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Code Badge */}
            <motion.div 
              className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white p-2.5 sm:p-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 border-2 border-green-400/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-xs sm:text-sm font-bold">&lt;/&gt;</span>
            </motion.div>

            {/* Enhanced decorative elements */}
            <motion.div 
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Additional glow effects */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[370px] sm:w-[350px] sm:h-[450px] lg:w-[450px] lg:h-[650px] bg-green-500/10 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] blur-3xl -z-20"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-sm text-foreground/50 mb-2">Scroll Down</span>
        <div className="scroll-down-arrow">
          <ArrowDown size={16} className="text-foreground/50" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;