
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import BookCall from '@/components/BookCall';
import Footer from '@/components/Footer';

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when route changes (but not for hash changes on same page)
  useEffect(() => {
    // Only scroll to top if pathname changes and there's no hash
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
    // Reset active section when not on home page
    if (location.pathname !== '/') {
      setActiveSection('');
    } else if (!location.hash) {
      setActiveSection('home');
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} scrollY={scrollY} />
      
      <Routes>
        <Route path="/" element={<Home setActiveSection={setActiveSection} />} />
        <Route path="/book-call" element={<BookCall />} />
      </Routes>
      
      <Footer />
      <Toaster />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
