import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Router>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        className="overflow-x-hidden"
      >
      <motion.div variants={sectionVariants}>
        <Header />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <Services />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <Gallery />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <Contact />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <Footer />
      </motion.div>
    </motion.div>
    </Router>
  );
}

export default App;
