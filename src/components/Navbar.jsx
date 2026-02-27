import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = ({ activeSection, scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home', type: 'route' },
    { name: 'Book Call', href: '/book-call', id: 'book-call', type: 'route' },
    { name: 'About', href: '/#about', id: 'about', type: 'route' },
    { name: 'Projects', href: '/#projects', id: 'projects', type: 'route' },
    { name: 'Skills', href: '/#skills', id: 'skills', type: 'route' },
    { name: 'Contact', href: '/#contact', id: 'contact', type: 'route' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95%]">
      
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
            <Link to="/" className="flex flex-col items-center justify-center leading-none">
               <span className="text-xl font-black tracking-tighter">N</span>
               <span className="text-xl font-black tracking-tighter text-green-900">N</span>
            </Link>
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
              {navLinks.map((link) => {
                // Check if link is active
                let isActive = false;
                if (link.href.includes('/#')) {
                  // For home sections (/#about, /#projects, etc.)
                  isActive = location.pathname === '/' && activeSection === link.id;
                } else if (link.href === '/') {
                  // For home link
                  isActive = location.pathname === '/' && activeSection === 'home';
                } else {
                  // For other routes (like /book-call)
                  isActive = location.pathname === link.href;
                }
                
                const LinkComponent = link.type === 'route' ? Link : 'a';
                const linkProps = link.type === 'route' 
                  ? { to: link.href } 
                  : { href: link.href };

                return (
                  <LinkComponent
                    key={link.id}
                    {...linkProps}
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${isActive ? 'text-green-900 font-bold' : 'text-gray-500 hover:text-green-700 hover:bg-green-50'}
                    `}
                  >
                    {link.name}
                    {/* Active Dot Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="navDot"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-900 rounded-full"
                      />
                    )}
                  </LinkComponent>
                );
              })}

              {/* Divider */}
              <div className="w-px h-5 bg-gray-200 mx-2"></div>

              <Button 
                className="rounded-full bg-green-900 hover:bg-green-800 h-9 px-5 text-xs font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                asChild
              >
                <a href="/nihal-nughman cv.pdf" download="Nehal_Nughman_CV.pdf">
                  CV
                </a>
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
              {navLinks.map((link, index) => {
                // Check if link is active
                let isActive = false;
                if (link.href.includes('/#')) {
                  // For home sections (/#about, /#projects, etc.)
                  isActive = location.pathname === '/' && activeSection === link.id;
                } else if (link.href === '/') {
                  // For home link
                  isActive = location.pathname === '/' && activeSection === 'home';
                } else {
                  // For other routes (like /book-call)
                  isActive = location.pathname === link.href;
                }
                
                const LinkComponent = link.type === 'route' ? Link : 'a';
                const linkProps = link.type === 'route' 
                  ? { to: link.href } 
                  : { href: link.href };

                return (
                  <motion.div key={link.id}>
                    <LinkComponent
                      {...linkProps}
                      onClick={closeMenu}
                      className={`
                        block px-4 py-3 rounded-xl text-center font-medium text-sm
                        ${isActive ? 'bg-green-50 text-green-900' : 'text-gray-600 hover:bg-gray-50'}
                      `}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.name}
                    </LinkComponent>
                  </motion.div>
                );
              })}
              <Button 
                className="w-full mt-2 rounded-xl bg-green-900 text-sm hover:bg-green-800 transition-colors"
                asChild
              >
                <a href="/CV.pdf" download="Nehal_Nughman_CV.pdf">
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
