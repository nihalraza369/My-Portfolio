import React from "react";
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, CheckCircle, MessageSquare, Zap, Shield, Users } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const BookCall = () => {
  const calendlyUrl = "https://calendly.com/nihalraza369/nehal-meeting";

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works best for your timezone',
      color: 'green'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '30-Minute Session',
      description: 'Focused discussion about your project needs',
      color: 'blue'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Virtual Meeting',
      description: 'Google Meet or Zoom - your preference',
      color: 'purple'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'No Commitment',
      description: 'Free consultation with no obligations',
      color: 'emerald'
    }
  ];

  const benefits = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      text: 'Discuss your project requirements'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: 'Get expert technical guidance'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: 'Confidential & professional'
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Personalized solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/20 pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-green-500/20 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule a Consultation
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Build Something
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Amazing Together</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Book a free 30-minute consultation to discuss your project goals, technical requirements, and how I can help bring your vision to life.
          </p>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-gray-700 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <span className="text-green-600">{benefit.icon}</span>
                {benefit.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {features.map((feature, index) => {
            const colorClasses = {
              green: 'bg-green-50 text-green-600 border-green-100',
              blue: 'bg-blue-50 text-blue-600 border-blue-100',
              purple: 'bg-purple-50 text-purple-600 border-purple-100',
              emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100'
            };
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`${colorClasses[feature.color]} w-14 h-14 rounded-xl flex items-center justify-center mb-4 border`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Calendly Widget Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6 text-white">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Choose Your Preferred Time Slot
              </h2>
            </div>
            <p className="text-center text-green-50 mt-2 text-sm">
              Select a date and time that works best for you
            </p>
          </div>
          
          <div className="p-8">
            {/* Calendly Inline Widget */}
            <div className="calendly-widget-container" style={{ minHeight: '700px' }}>
              <InlineWidget
                url={calendlyUrl}
                styles={{
                  height: '700px',
                  width: '100%'
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '16a34a',
                  textColor: '1f2937'
                }}
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">30 Minutes</p>
                  <p className="text-xs text-gray-600">Session Duration</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl border border-blue-100">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Video className="w-5 h-5 text-blue-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Google Meet / Zoom</p>
                  <p className="text-xs text-gray-600">Video Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Instant Confirmation</p>
                  <p className="text-xs text-gray-600">Via Email</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 bg-gradient-to-r from-gray-50 to-green-50/30 rounded-2xl p-8 border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Can't Find a Suitable Time?</h3>
          <p className="text-gray-600 mb-4">
            No worries! Feel free to reach out directly and we'll find a time that works for both of us.
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors group"
          >
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Contact Me Directly
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default BookCall;