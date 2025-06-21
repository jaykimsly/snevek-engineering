import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Services',
      links: [
        'CNC Machining',
        'Sandblasting',
        'Custom Fabrication',
        'Mechanical Repairs',
        'Engineering Consultation'
      ]
    },
    {
      title: 'Industries',
      links: [
        'Mining & Minerals',
        'Manufacturing',
        'Aerospace',
        'Automotive',
        'Chemical Processing'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'Quality Standards',
        'Safety Protocols'
      ]
    }
  ];

  const certifications = [
    'ISO 9001:2015',
    'SABS Certified',
    'OHSAS 18001',
    'Environmental Compliance'
  ];

  return (
    <footer className="bg-gradient-to-br from-mechanical-dark to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 gear-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=60&h=60&fit=crop&crop=center" 
                  alt="Snevek Engineering" 
                  className="w-12 h-12 rounded-full border-2 border-mechanical-gold mr-3"
                />
                <h3 className="text-2xl font-bold text-mechanical-gold">
                  SNEVEK
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of precision engineering and sandblasting solutions in Emalahleni. Delivering excellence since 2015.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">📍</span>
                  <span className="text-sm">1A Stevenson Street, Klipfontein, Emalahleni</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">📞</span>
                  <a href="tel:+27721643046" className="text-sm hover:text-mechanical-gold transition-colors">
                    +27 72 164 3046
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">✉️</span>
                  <a href="mailto:sales@snevek.co.za" className="text-sm hover:text-mechanical-gold transition-colors">
                    sales@snevek.co.za
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-mechanical-gold mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5, color: '#FFD700' }}
                        className="text-gray-300 hover:text-mechanical-gold transition-all duration-300 text-sm"
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-gray-700"
        >
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-mechanical-gold mb-4">
              Certifications & Standards
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-mechanical-steel px-4 py-2 rounded-full text-sm font-medium"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-6 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Snevek Engineering. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Precision Engineering | Advanced Sandblasting | Professional Excellence
              </p>
            </div>
            
            <div className="flex space-x-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#FFD700' }}
                className="text-gray-400 hover:text-mechanical-gold transition-all duration-300"
              >
                <span className="text-xl">📱</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#FFD700' }}
                className="text-gray-400 hover:text-mechanical-gold transition-all duration-300"
              >
                <span className="text-xl">📷</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: '#FFD700' }}
                className="text-gray-400 hover:text-mechanical-gold transition-all duration-300"
              >
                <span className="text-xl">💼</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated Gear */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-4 right-4 w-8 h-8 opacity-20"
      >
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=32&h=32&fit=crop" alt="Gear" className="w-full h-full" />
      </motion.div>
    </footer>
  );
};

export default Footer;
