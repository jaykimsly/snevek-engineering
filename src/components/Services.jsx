import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "CNC Machining & Precision Engineering",
      description: "State-of-the-art CNC machining services for complex components with tolerances up to ±0.001mm. Specializing in aerospace, automotive, and mining industry parts.",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop",
      features: ["5-Axis CNC Machining", "Prototype Development", "Production Runs", "Quality Inspection"]
    },
    {
      title: "Advanced Sandblasting & Surface Treatment",
      description: "Professional abrasive blasting services using eco-friendly media. Complete surface preparation for coating, painting, and restoration projects.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      features: ["Wet/Dry Blasting", "Media Recovery", "Coating Removal", "Surface Profiling"]
    },
    {
      title: "Custom Fabrication & Welding",
      description: "Expert fabrication services for structural steel, pressure vessels, and custom machinery. Certified welders with extensive experience in heavy industry.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
      features: ["Structural Steel", "Pressure Vessels", "Custom Machinery", "Certified Welding"]
    },
    {
      title: "Mechanical Repairs & Maintenance",
      description: "Comprehensive maintenance solutions for industrial equipment. Emergency repairs, scheduled maintenance, and equipment upgrades to minimize downtime.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      features: ["Emergency Repairs", "Preventive Maintenance", "Equipment Upgrades", "24/7 Support"]
    },
    {
      title: "Engineering Consultation & Design",
      description: "Professional engineering consultation services including CAD design, structural analysis, and project management for complex industrial projects.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      features: ["CAD Design", "Structural Analysis", "Project Management", "Technical Documentation"]
    },
    {
      title: "Quality Control & Testing",
      description: "Comprehensive quality assurance services including dimensional inspection, material testing, and certification to international standards.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      features: ["Dimensional Inspection", "Material Testing", "ISO Certification", "Quality Documentation"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-mechanical-dark to-mechanical-steel relative overflow-hidden">
      <div className="absolute inset-0 gear-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-mechanical-gold">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive engineering solutions backed by cutting-edge technology and decades of expertise
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-mechanical-gold/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-mechanical-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-mechanical-gold rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-gradient-to-r from-mechanical-gold to-mechanical-amber text-mechanical-dark font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-mechanical-gold to-mechanical-amber p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-mechanical-dark mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-mechanical-dark mb-6 max-w-2xl">
              Our engineering team specializes in developing tailored solutions for unique industrial challenges. Contact us to discuss your specific requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mechanical-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-mechanical-steel transition-all duration-300"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
