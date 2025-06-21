import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
  <header className="relative min-h-screen flex items-center justify-center mechanical-gradient gear-pattern overflow-hidden">
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 text-center text-white px-6 max-w-4xl"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8"
      >
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=120&h=120&fit=crop&crop=center" 
          alt="Snevek Engineering Logo" 
          className="w-24 h-24 mx-auto rounded-full border-4 border-mechanical-gold shadow-2xl mb-6"
        />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-6xl md:text-7xl font-bold mb-6 text-shadow"
      >
        SNEVEK ENGINEERING
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-xl md:text-2xl mb-8 text-mechanical-gold font-medium"
      >
        Precision Engineering & Advanced Sandblasting Solutions
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="grid md:grid-cols-3 gap-6 text-center mb-8"
      >
        <div className="bg-black bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-mechanical-amber font-semibold text-lg mb-2">📍 Location</h3>
          <p>Klipfontein, Emalahleni, South Africa</p>
        </div>
        <div className="bg-black bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-mechanical-amber font-semibold text-lg mb-2">⚙️ Established</h3>
          <p>Professional Engineering Since 2015</p>
        </div>
        <div className="bg-black bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-mechanical-amber font-semibold text-lg mb-2">🏆 Certified</h3>
          <p>ISO 9001:2015 Quality Standards</p>
        </div>
      </motion.div>
      
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="bg-mechanical-gold text-mechanical-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-mechanical-amber transition-all duration-300 shadow-lg"
      >
        Explore Our Services
      </motion.button>
    </motion.div>
    
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-10 right-10 w-16 h-16 opacity-20"
    >
      <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=64&h=64&fit=crop" alt="Gear" className="w-full h-full" />
    </motion.div>
  </header>
);

export default Header;
