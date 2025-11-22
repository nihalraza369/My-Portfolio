import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ activeSection, scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95%]">
      
      {/* 
        MAIN CONTAINER WITH "MERGE" EFFECT 
        filter: drop-shadow(...) yahan border ka kaam karega.
        Ye trick do alag shapes (Circle + Pill) ko ek single border mein dikhata hai.
      */}
      <div className="relative drop-shadow-[0_0_1px_rgba(0,0,0,0.3)] transition-all duration-300 hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        
        {/* Wrapper for merged shapes */}
        <div className="flex items-center">

          {/* 1. THE LOGO CIRCLE (Left Side) - Thoda bada aur bulge kiya hua */}
          <motion.div
            className="relative z-20 flex items-center justify-center h-20 w-20 rounded-full bg-white text-black"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Logo Text */}
            <a href="#home" className="flex flex-col items-center justify-center leading-none">
               <span className="text-xl font-black tracking-tighter">N</span>
               <span className="text-xl font-black tracking-tighter text-green-900">N</span>
            </a>
          </motion.div>

          {/* 2. THE MENU PILL (Right Side) - Isko Circle ke peeche thoda ghusaya hai (-ml-6) */}
          <div 
            className={`
              relative z-10 -ml-8 pl-10 pr-2 py-2
              h-14 flex items-center rounded-r-full rounded-l-none
              bg-white
              transition-all duration-300
            `}
            style={{ 
              // Thoda sa left border radius dete hain taaki smooth curve lage connection par
              borderTopLeftRadius: '40px', 
              borderBottomLeftRadius: '40px' 
            }}
          >
            
            {/* Desktop Links */}
            <motion.nav 
              className="hidden md:flex items-center space-x-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${activeSection === link.id ? 'text-green-900 font-bold' : 'text-gray-500 hover:text-green-700 hover:bg-green-50'}
                  `}
                >
                  {link.name}
                  {/* Active Dot Indicator */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="navDot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-900 rounded-full"
                    />
                  )}
                </a>
              ))}

              {/* Divider */}
              <div className="w-px h-5 bg-gray-200 mx-2"></div>

              <Button className="rounded-full bg-green-900 hover:bg-green-800 h-9 px-5 text-xs font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                CV
              </Button>
            </motion.nav>

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex items-center pr-2">
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-full hover:bg-gray-100">
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - (Alag se neeche open hoga) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-[calc(100%+10px)] left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2 z-40"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={`
                    block px-4 py-3 rounded-xl text-center font-medium text-sm
                    ${activeSection === link.id ? 'bg-green-50 text-green-900' : 'text-gray-600 hover:bg-gray-50'}
                  `}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <Button className="w-full mt-2 rounded-xl bg-green-900 text-sm">Download CV</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
