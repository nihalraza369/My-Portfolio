
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom grid md:grid-cols-2 gap-8 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
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
  className="text-3xl font-bold flex items-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.5 }}
>
  <span>Hello 👋 I'm</span>
  <span className="ml-3 animation-container">
    <div className="animation-slide">
      <div className="first"><div>Nihal Raza</div></div>
      <div className="second"><div>Full Stack</div></div>
      <div className="third"><div>AI Engineer</div></div>
    </div>
  </span>
</motion.h1>


          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Creative Developer & Designer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-foreground/70 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I create engaging digital experiences with a focus on clean design and intuitive interactions. Let's bring your ideas to life.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
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
            className="flex items-center space-x-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
              <Twitter size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
        <div className="relative">
   <div className="flex justify-center relative">
     <div className="flex justify-center mt-10 sm:mt-0 sm:mb-10 relative">
  <div className="rounded-[6rem] overflow-hidden shadow-xl w-[300px] h-[400px] sm:w-[400px] sm:h-[600px]">
    <img
      src="https://sdmntpritalynorth.oaiusercontent.com/files/00000000-ca84-6246-a77f-b222e5c406af/raw?se=2025-06-10T17%3A30%3A00Z&sp=r&sv=2024-08-04&sr=b&scid=a77537f7-9b0e-5049-99b4-f32e444494e9&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-10T15%3A21%3A50Z&ske=2025-06-11T15%3A21%3A50Z&sks=b&skv=2024-08-04&sig=tvguLZKXBmJ8C9JwLuF%2BcGrXmZhdeKWNM46e75oSBfs%3D" // tumhara actual image path
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>
    </div>
      <div className="absolute bottom-2 right-2 bg-green-600 text-white p-2 rounded-full rotate-45">
            &lt;/&gt;
          </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
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
