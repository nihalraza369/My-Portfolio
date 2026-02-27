import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef(); // Form Reference
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic client-side validation for better UX on mobile
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.name.trim().length < 2) {
      toast({
        title: "Name is too short",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }
    if (!emailPattern.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    if (formData.message.trim().length < 10) {
      toast({
        title: "Message too short",
        description: "Please add more details to your message.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    // === YAHAN APNI DETAILS DAALNA ===
    const SERVICE_ID = "service_9zt2f5m";   // EmailJS se milega
    const TEMPLATE_ID = "template_9n777yc"; // EmailJS se milega
    const PUBLIC_KEY = "hToTla7ssFpPRfOHG";   // EmailJS Account settings se milega
    // =================================

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          toast({
            title: "Message Sent Successfully!",
            description: "Thanks! I'll get back to you soon.",
            className: "bg-green-600 text-white border-none"
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
          console.log(error.text);
          toast({
            title: "Failed to Send",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-20 lg:py-24" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Let's Connect
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl shadow-2xl overflow-hidden relative border border-gray-200 bg-white"
        >
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-50"></div>
          
          <div className="p-6 sm:p-10 lg:p-16 relative z-10">

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
              
              {/* LEFT SIDE: INFO */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Contact Information</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Mail, title: 'Email Me', value: 'nihalraza369@gmail.com', link: 'mailto:nihalraza369@gmail.com', color: 'green' },
                    { icon: Phone, title: 'Call Me', value: '+92 319 8435972', link: 'tel:+923198435972', color: 'blue' },
                    { icon: MapPin, title: 'Location', value: 'Karachi, Pakistan', link: '#', color: 'purple' }
                  ].map((item, index) => {
                    const colorClasses = {
                      green: 'bg-green-50 text-green-600 border-green-100 hover:bg-green-100',
                      blue: 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100',
                      purple: 'bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-100'
                    };
                    return (
                      <a 
                        key={index}
                        href={item.link}
                        className="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                      >
                        <div className={`h-14 w-14 flex items-center justify-center ${colorClasses[item.color]} rounded-xl border transition-all duration-300 shadow-sm`}>
                          <item.icon size={22} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{item.title}</p>
                          <p className="text-base font-semibold text-gray-900 group-hover:text-green-600 transition-colors">{item.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Connect With Me</p>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      { Icon: Github, href: 'https://github.com/nihalraza369/', label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white' },
                      { Icon: Linkedin, href: 'https://www.linkedin.com/in/nehal-nughman-0a3496375/', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
                      { Icon: Twitter, href: 'https://twitter.com/nihalraza369', label: 'Twitter', color: 'hover:bg-sky-500 hover:text-white' },
                      { Icon: Instagram, href: 'https://instagram.com/dev_nehal_raza', label: 'Instagram', color: 'hover:bg-pink-600 hover:text-white' },
                      { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61553495939260', label: 'Facebook', color: 'hover:bg-blue-700 hover:text-white' }
                    ].map(({ Icon, href, label, color }, i) => (
                      <a 
                        key={i} 
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={label} 
                        className={`h-12 w-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700 border border-gray-200 ${color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: FORM */}
              <div className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-200 max-w-2xl w-full mx-auto lg:mx-0">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Send a Message</h3>
                    <p className="text-sm text-gray-600">I'll respond within 24 hours</p>
                  </div>
                </div>
                
                {/* ref={formRef} lagana zaroori hai EmailJS ke liye */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-800 flex items-center gap-2" htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        autoComplete="name"
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-800 flex items-center gap-2" htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        autoComplete="email"
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-800 flex items-center gap-2" htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry, Collaboration, or General Question"
                      autoComplete="off"
                      className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-800 flex items-center gap-2" htmlFor="message">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell me about your project, ideas, or any questions you have..."
                      autoComplete="off"
                      className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail size={18} />
                        Send Message
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 pt-2">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;