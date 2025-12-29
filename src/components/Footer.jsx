import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative pt-20 bg-black overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-900/20 to-transparent pointer-events-none"></div>

      {/* MAIN CONTAINER - Rounded Top for "Island" feel */}
      <div className="bg-[#050505] rounded-t-[3rem] border-t border-white/10 relative z-10 px-6 md:px-12 pt-16 pb-8 mt-10 shadow-[0_-10px_40px_rgba(0,255,0,0.05)]">
        
        {/* === LOGO & CTA SECTION === */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b border-white/10 pb-12"
        >
          {/* Left Side: Logo Badge */}
          <motion.div variants={itemVariants} className="relative">
             {/* Logo Decoration Circle */}
             <div className="absolute -left-4 -top-4 w-20 h-20 bg-green-500/20 rounded-full blur-2xl"></div>
             
             <div className="relative flex items-center gap-3">
                <div className="h-12 w-12 bg-gradient-to-br from-green-600 to-green-900 rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20 border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-xl font-bold text-white">N</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white tracking-tight leading-none">Nihal<span className="text-green-500">.</span></span>
                    <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Portfolio</span>
                </div>
             </div>
          </motion.div>

          {/* Right Side: Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-col md:items-end">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Ready to start a project?</h3>
            <p className="text-gray-400 text-sm mb-4 md:text-right max-w-xs">Let's turn your ideas into reality with cutting-edge technology.</p>
            <Button className="bg-white text-black hover:bg-green-50 rounded-full px-6 font-semibold shadow-lg hover:shadow-white/20 transition-all">
              Let's Talk
            </Button>
          </motion.div>
        </motion.div>

        {/* === LINKS GRID === */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: About */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">About Me</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              A passionate Full Stack Developer & AI Engineer crafting engaging digital experiences with a focus on clean design.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { Icon: Github, href: 'https://github.com/nihalraza369/', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://pk.linkedin.com/in/nehal-nughman-0a3496375', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Instagram, href: 'https://www.instagram.com/dev_nihal_raza/', label: 'Instagram' },
                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61553495939260', label: 'Facebook' }
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-400 hover:text-green-400 transition-colors hover:scale-110 transform duration-200">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-green-400 hover:pl-2 transition-all duration-300 block w-fit">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Dummy) */}
          <div className="space-y-4">
             <h4 className="text-white font-bold text-lg">Services</h4>
             <ul className="space-y-2 text-sm text-gray-400">
              {['Web Development', 'AI Solutions', 'UI/UX Design', 'Cloud Integration'].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-green-500" />
                <span>nihalraza369@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-green-500" />
                <span>+92 319 8435972</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin size={16} className="text-green-500" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="container mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {currentYear} Nihal Raza. All rights reserved. Made with 💚 in React.
          </p>

          {/* Scroll Top Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex items-center justify-center w-10 h-10 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-green-500/50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;