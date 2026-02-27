import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

const About = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden" id="about">
      
      {/* === BACKGROUND DECORATION (Subtle) === */}
      {/* Light Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none"></div>
      
      {/* Subtle Green Blurs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-100/50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-50/50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* === SECTION HEADER === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
             <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wide uppercase">
               Who I Am
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">Me</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Get to know more about my background, experience, and what drives me to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* === CONTENT GRID === */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: IMAGE WITH STYLING */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="relative mx-auto lg:mx-0 max-w-md lg:max-w-full"
          >
            {/* Back Border (Rotated) */}
            <div className="absolute inset-0 border-2 border-green-500/20 rounded-3xl transform rotate-6 translate-x-4 translate-y-4 -z-10"></div>
            
            {/* Solid Background Block */}
            <div className="absolute inset-0 bg-green-900 rounded-3xl transform -rotate-2 -z-10"></div>

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <img 
                alt="Nihal Working" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
                src="backgrouhdn.png" 
              />
              
              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-green-100 flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-full text-green-700">
                   <Briefcase size={20} />
                </div>
                <div>
                   <p className="text-xs text-gray-500 font-semibold uppercase">Experience</p>
                   <p className="text-lg font-bold text-gray-900 leading-none">4+ Years</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
               <h3 className="text-3xl font-bold text-gray-900 mb-4">
                 Creative Developer with a <span className="text-green-600 underline decoration-green-300 underline-offset-4">Passion for Design</span>
               </h3>
               
               <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                 I'm a creative developer with over 4 years of experience crafting engaging digital experiences. My approach combines technical expertise with an eye for design, resulting in projects that are both functional and visually compelling.
               </p>
               
               <p className="text-gray-600 leading-relaxed">
                 I specialize in <span className="font-semibold text-gray-900">Front-end Development, AI Agents</span>, and creating responsive web applications that deliver exceptional user experiences across all devices.
               </p>
            </div>

            {/* INFO CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: "Born", value: "November 6, 2008" },
                { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
                { icon: Briefcase, label: "Status", value: "Available for Freelance" },
                { icon: GraduationCap, label: "Education", value: "Intermediate CS" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-white rounded-lg shadow-sm text-green-600 group-hover:scale-110 transition-transform border border-gray-100">
                    <item.icon size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-bold text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist (Optional Visual) */}
            <div className="pt-4 flex flex-wrap gap-4">
               {['Clean Code', 'Modern Design', 'AI Integrated'].map((tag, i) => (
                 <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 size={16} className="text-green-600" />
                    {tag}
                 </div>
               ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;