
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-100 mt-16">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <span className="text-2xl font-bold text-black">N<span className="text-green-900">N</span></span>
            <p className="text-foreground/70 mt-2 max-w-md">Creating engaging digital experiences with a focus on clean design and intuitive interactions.</p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-green-900 text-white hover:shadow-lg transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">© {currentYear} John Doe. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Home</a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors text-sm">About</a>
            <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Projects</a>
            <a href="#skills" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Skills</a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors text-sm">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
