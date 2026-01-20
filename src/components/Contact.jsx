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
    <section className="py-16 lg:py-1" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-green-500/20 bg-gradient-to-br from-green-700 to-emerald-700"
        >
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          
          <div className="p-6 sm:p-10 lg:p-16 relative z-10">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-green-100 max-w-2xl mx-auto text-lg">
                Have a project in mind? Fill out the form and I'll get back to you!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              
              {/* LEFT SIDE: INFO */}
              <div className="space-y-10 text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <p className="text-green-100 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Mail, title: 'Email Me', value: 'nihalraza369@gmail.com', link: 'mailto:nihalraza369@gmail.com' },
                    { icon: Phone, title: 'Call Me', value: '+92 319 8435972', link: 'tel:+923198435972' },
                    { icon: MapPin, title: 'Location', value: 'Karachi, Pakistan', link: '#' }
                  ].map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      className="flex items-center space-x-5 p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full text-green-600 shadow-md">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-200 uppercase tracking-wider">{item.title}</p>
                        <p className="text-lg font-semibold">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-6">
                  <p className="text-sm font-medium text-green-200 mb-4 uppercase tracking-wider">Follow Socials</p>
                  <div className="flex gap-4 flex-wrap">
                    {[
                      { Icon: Github, href: 'https://github.com/nihalraza369/', label: 'GitHub' },
                      { Icon: Linkedin, href: 'https://www.linkedin.com/in/nehal-nughman-0a3496375/', label: 'LinkedIn' },
                      { Icon: Twitter, href: 'https://twitter.com/nihalraza369', label: 'Twitter' },
                      { Icon: Instagram, href: 'https://instagram.com/dev_nehal_raza', label: 'Instagram' },
                      { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61553495939260', label: 'Facebook' }
                    ].map(({ Icon, href, label }, i) => (
                      <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-green-700 transition-all duration-300">
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: FORM */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl max-w-xl w-full mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                
                {/* ref={formRef} lagana zaroori hai EmailJS ke liye */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700" htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name" // Ye name EmailJS template me {{name}} se match hona chahiye
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Nihal Raza"
                        autoComplete="name"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email" // Ye name EmailJS template me {{email}} se match hona chahiye
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="hello@example.com"
                        autoComplete="email"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700" htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                        autoComplete="off"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700" htmlFor="message">Message</label>
                    <textarea
                      name="message" // Ye name EmailJS template me {{message}} se match hona chahiye
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Write your message here..."
                      autoComplete="off"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-green-900/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
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