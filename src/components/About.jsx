import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-mechanical-light to-white relative overflow-hidden">
      <div className="absolute inset-0 gear-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-16 text-mechanical-dark"
          >
            About <span className="text-mechanical-gold">Snevek Engineering</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <img 
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop" 
                alt="Engineering Workshop" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-semibold text-mechanical-dark mb-4">
                Engineering Excellence Since 2015
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Snevek Engineering stands as a premier provider of mechanical engineering and advanced sandblasting solutions in the heart of Emalahleni. Our state-of-the-art facility in Klipfontein serves as the cornerstone of precision engineering in the Mpumalanga region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 8 years of industry expertise, we've built our reputation on delivering exceptional quality, innovative solutions, and unmatched reliability to clients across mining, manufacturing, and industrial sectors.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-mechanical-gold"
            >
              <div className="w-16 h-16 bg-mechanical-gold rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="text-xl font-semibold text-mechanical-dark mb-4">Precision Engineering</h4>
              <p className="text-gray-600">Advanced CNC machining, custom fabrication, and mechanical repairs with micron-level accuracy.</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-mechanical-amber"
            >
              <div className="w-16 h-16 bg-mechanical-amber rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💨</span>
              </div>
              <h4 className="text-xl font-semibold text-mechanical-dark mb-4">Sandblasting Mastery</h4>
              <p className="text-gray-600">Professional surface preparation, coating removal, and restoration using cutting-edge abrasive technologies.</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-mechanical-orange"
            >
              <div className="w-16 h-16 bg-mechanical-orange rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-xl font-semibold text-mechanical-dark mb-4">Quality Assurance</h4>
              <p className="text-gray-600">ISO 9001:2015 certified processes ensuring consistent excellence in every project delivery.</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-mechanical-gold to-mechanical-amber p-8 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-bold text-mechanical-dark mb-4">Our Mission</h3>
            <p className="text-lg text-mechanical-dark max-w-3xl mx-auto">
              To deliver world-class engineering solutions that exceed expectations, drive innovation, and contribute to the industrial growth of South Africa through precision, reliability, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
