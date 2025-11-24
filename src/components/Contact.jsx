import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
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
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* === MAIN GREEN CARD === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-green-600 to-green-700 rounded-[2.5rem] shadow-2xl overflow-hidden relative"
        >
          
          {/* Background Patterns (Decoration) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10">
            
            {/* === SECTION HEADER (Inside Green Box) === */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-green-100 max-w-2xl mx-auto text-lg">
                Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              
              {/* === LEFT SIDE: INFO === */}
              <div className="space-y-10 text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <p className="text-green-100 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Mail, title: 'Email Me', value: 'nihalraza369@gmail.com', link: 'mailto:nihalraza369@gmail.com' },
                    { icon: Phone, title: 'Call Me', value: '+92 300 1234567', link: 'tel:+923001234567' },
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

                {/* Social Icons */}
                <div className="pt-6">
                  <p className="text-sm font-medium text-green-200 mb-4 uppercase tracking-wider">Follow Socials</p>
                  <div className="flex gap-4">
                    {[Github, Linkedin, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-green-700 transition-all duration-300">
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* === RIGHT SIDE: FORM (White Card on Green) === */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Nihal Raza"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="hello@example.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Write your message here..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-green-900/20 transition-all duration-300 flex items-center justify-center gap-2 group"
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