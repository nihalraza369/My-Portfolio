import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code, Zap, Cpu, Palette, Database, Globe, Github, Linkedin, Twitter, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  // MOUSE MOVE LOGIC
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  const mask = useTransform([mouseX, mouseY], ([x, y]) =>
    `radial-gradient(400px at ${x}px ${y}px, black, transparent)`
  );

  // ANIMATION VARIANTS
  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      rotateX: [0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
      }}
    >
      {/* === BACKGROUND === */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#d5d5d555_1px,transparent_1px),linear-gradient(to_bottom,#d5d5d555_1px,transparent_1px)] bg-[size:30px_30px]"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33333311_1px,transparent_1px),linear-gradient(to_bottom,#33333311_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_center,#111111,transparent)] opacity-80" />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-8 items-center pt-20 px-8 relative z-10">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 order-2 lg:order-1 lg:pl-12 text-center lg:text-left"
        >
             {/* Greeting Pill - FIXED: Compact & Balanced */}
               <motion.div 
                 className="w-fit mx-auto lg:mx-0 flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-900/10 backdrop-blur-md"
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
               >
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 <span className="text-sm font-medium text-green-400 tracking-wide uppercase leading-none pt-[1px]">
                   Assalamulaikum
                 </span>
              </motion.div>
          {/* Main Heading with Sliding Text Effect */}
         <motion.h1 className="text-2xl sm:text-3xl font-bold text-white flex flex-col sm:flex-row sm:items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <span>Hello 👋 I'm</span>
            <span className="animation-container text-white">
              <div className="animation-slide">
                <div className="first"><div>Nihal Raza</div></div>
                <div className="second"><div>Full Stack Developer</div></div>
                <div className="third"><div>AI Engineer</div></div>
              </div>
            </span>
          </motion.h1>

          <motion.h2 
            className="text-xl sm:text-2xl font-medium text-gray-300"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          >
            Creative Developer & AI Enthusiast
          </motion.h2>
         
          <motion.p 
            className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          >
            Passionate about crafting engaging digital experiences through innovative design and cutting-edge technology. Let's build something amazing together!
          </motion.p>
         
          {/* === NEW PREMIUM BUTTONS === */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          >
            {/* Primary Button: Gradient & Shine */}
            <Button 
              className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-6 rounded-xl shadow-lg shadow-green-900/20 hover:shadow-green-500/30 transition-all duration-300 border border-green-500/20"
              size="lg" asChild
            >
              <a href="#contact" className="flex items-center gap-2 text-base font-semibold">
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </a>
            </Button>
            
            {/* Secondary Button: Glassmorphism */}
            <Button 
              variant="outline" 
              className="bg-white/5 backdrop-blur-sm border-white/10 text-white px-8 py-6 rounded-xl hover:bg-white/10 hover:border-green-500/50 hover:text-green-400 transition-all duration-300" 
              size="lg" asChild
            >
              <a href="#projects" className="text-base font-medium">View Projects</a>
            </Button>
          </motion.div>
         
          {/* Social Icons */}
            {/* Social Icons with Hover Glow */}
          <motion.div 
            className="flex items-center justify-center lg:justify-start space-x-6 pt-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          >
            {[
              { Icon: Github, color: "hover:text-white" },
              { Icon: Linkedin, color: "hover:text-blue-500" },
              { Icon: Twitter, color: "hover:text-sky-400" },
              { Icon: Instagram, color: "hover:text-pink-500" },
              { Icon: Facebook, color: "hover:text-blue-600" }
            ].map(({ Icon, color }, index) => (
              <a 
                key={index} 
                href="#" 
                className={`text-white/60 transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] ${color}`}
              >
                <Icon size={28} />
              </a>
            ))}
          </motion.div>
        </motion.div>
       
        {/* RIGHT SIDE: 3D IMAGE (Previous Perfect Version) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center order-1 lg:order-2 py-12 lg:py-0 [perspective:1200px]"
        >
          <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[470px] [transform-style:preserve-3d]">
            
            {/* Layer 1: Back Border */}
            <div 
              className="absolute inset-0 rounded-[2.5rem] bg-black border-[3px] border-green-400 shadow-[0_0_40px_rgba(74,222,128,0.2)]"
              style={{ transform: "translateZ(-40px)" }}
            >
                <div className="absolute inset-0 bg-green-500/5 rounded-[2.5rem]" />
            </div>

            {/* Layer 2: Orbiting Icons */}
            <div className="absolute inset-0 [transform-style:preserve-3d] rotate-x-12 z-10">
                <motion.div
                  variants={orbitVariants}
                  animate="animate"
                  className="absolute inset-0 w-full h-full [transform-style:preserve-3d]"
                >
                  <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8" style={{ transformOrigin: '50% 235px' }}>
                      <motion.div variants={floatingVariants} animate="animate" className="bg-gradient-to-br from-green-500 to-green-700 text-white p-2.5 rounded-xl shadow-lg border border-white/20">
                        <Code size={20} />
                      </motion.div>
                  </motion.div>

                  <motion.div className="absolute top-[20%] right-0 translate-x-8" style={{ transformOrigin: '-140px 170px' }}>
                      <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: '1s' }} className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-2.5 rounded-xl shadow-lg border border-white/20">
                        <Zap size={20} />
                      </motion.div>
                  </motion.div>

                  <motion.div className="absolute bottom-[20%] right-0 translate-x-8" style={{ transformOrigin: '-140px -170px' }}>
                      <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: '2s' }} className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-2.5 rounded-xl shadow-lg border border-white/20">
                        <Cpu size={20} />
                      </motion.div>
                  </motion.div>

                  <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8" style={{ transformOrigin: '50% -235px' }}>
                      <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: '3s' }} className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-2.5 rounded-xl shadow-lg border border-white/20">
                        <Palette size={20} />
                      </motion.div>
                  </motion.div>

                  <motion.div className="absolute bottom-[20%] left-0 -translate-x-8" style={{ transformOrigin: '140px -170px' }}>
                      <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: '4s' }} className="bg-gradient-to-br from-red-500 to-red-700 text-white p-2.5 rounded-xl shadow-lg border border-white/20">
                        <Database size={20} />
                      </motion.div>
                  </motion.div>

                  <motion.div className="absolute top-[20%] left-0 -translate-x-8" style={{ transformOrigin: '140px 170px' }}>
                      <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: '5s' }} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white p-2.5 rounded-xl shadow-lg border border-white/20">
                        <Globe size={20} />
                      </motion.div>
                  </motion.div>
                </motion.div>
            </div>

            {/* Layer 3: Image (Front) */}
            <div 
               className="absolute inset-0 rounded-[2.5rem] overflow-hidden"
               style={{ transform: "translateZ(30px)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-green-500/10 z-10 pointer-events-none mix-blend-overlay" />
                <img
                  src="/my-image.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"></div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;