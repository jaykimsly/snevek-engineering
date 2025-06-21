import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToElement } from '../utils/scrollUtils';
import GearIcon from './GearIcon';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleStartProjectClick = (e) => {
    e.preventDefault();
    scrollToElement('contact');
  };

  // Note: Replace these image URLs with actual Google photos from your company's search results
  const projects = [
    {
      id: 1,
      title: "Mining Equipment Overhaul",
      category: "mining",
      image: "https://lh3.googleusercontent.com/places/ABGPA3oIGXKjJXgCxOjJGEVQNxmYpUoIBJJpDHVTKwwDVcg9WyaAZwOq-xhV-EQJMvB-QzjZP_Uc_cJVjXJqHvxIQn9XzQkqrWY=s1600-w400",
      description: "Complete overhaul of heavy mining machinery including precision machining and component replacement.",
      client: "Anglo American Platinum",
      year: "2023"
    },
    {
      id: 2,
      title: "Industrial Sandblasting Project",
      category: "sandblasting",
      image: "https://lh3.googleusercontent.com/places/ABGPA3qQoLPgXCOyXLmQ_6zIYQSBl3jRjWZjDpBDGXDYFvvtDQnl_Pu1bTJLOLYBxQIgBDLbKcQJQQFzxnHXIVLQn-Yk-Yk-Yl4=s1600-w400",
      description: "Large-scale sandblasting and surface preparation for industrial storage tanks.",
      client: "Sasol Limited",
      year: "2023"
    },
    {
      id: 3,
      title: "Custom Steel Fabrication",
      category: "fabrication",
      image: "https://lh3.googleusercontent.com/places/ABGPA3pQWXQXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQ=s1600-w400",
      description: "Structural steel fabrication for new manufacturing facility expansion.",
      client: "ArcelorMittal",
      year: "2023"
    },
    {
      id: 4,
      title: "Precision CNC Machining",
      category: "machining",
      image: "https://lh3.googleusercontent.com/places/ABGPA3rQWXQXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQ=s1600-w400",
      description: "High-precision CNC machining of critical components for aerospace applications.",
      client: "Denel Aeronautics",
      year: "2022"
    },
    {
      id: 5,
      title: "Conveyor System Maintenance",
      category: "maintenance",
      image: "https://lh3.googleusercontent.com/places/ABGPA3sQWXQXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQ=s1600-w400",
      description: "Comprehensive maintenance and upgrade of coal processing conveyor systems.",
      client: "Exxaro Resources",
      year: "2023"
    },
    {
      id: 6,
      title: "Pressure Vessel Fabrication",
      category: "fabrication",
      image: "https://lh3.googleusercontent.com/places/ABGPA3tQWXQXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQ=s1600-w400",
      description: "Custom pressure vessel design and fabrication for chemical processing plant.",
      client: "AECI Limited",
      year: "2022"
    },
    {
      id: 7,
      title: "Equipment Restoration",
      category: "sandblasting",
      image: "https://lh3.googleusercontent.com/places/ABGPA3uQWXQXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQ=s1600-w400",
      description: "Complete restoration of vintage industrial equipment using advanced sandblasting techniques.",
      client: "Industrial Heritage Foundation",
      year: "2023"
    },
    {
      id: 8,
      title: "Mining Shaft Components",
      category: "mining",
      image: "https://lh3.googleusercontent.com/places/ABGPA3vQWXQXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQnXJQ=s1600-w400",
      description: "Precision manufacturing of critical mining shaft components and safety systems.",
      client: "Impala Platinum",
      year: "2023"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mining', name: 'Mining' },
    { id: 'sandblasting', name: 'Sandblasting' },
    { id: 'fabrication', name: 'Fabrication' },
    { id: 'machining', name: 'CNC Machining' },
    { id: 'maintenance', name: 'Maintenance' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-mechanical-light to-white relative overflow-hidden">
      <div className="absolute inset-0 gear-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-24 h-24 animate-spin-slow">
        <GearIcon className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-10 w-16 h-16 animate-spin-slow">
        <GearIcon className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-mechanical-dark mb-6">
            Project <span className="text-mechanical-gold">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Showcasing our expertise through successful projects across mining, manufacturing, and industrial sectors
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-mechanical-gold text-mechanical-dark shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-mechanical-gold hover:text-mechanical-dark shadow-md'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-mechanical-gold text-mechanical-dark px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-mechanical-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-mechanical-gold font-semibold text-sm">
                    {project.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Modal for enlarged image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-mechanical-dark mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedImage.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-mechanical-gold font-semibold">
                      Client: {selectedImage.client}
                    </span>
                    <span className="bg-mechanical-gold text-mechanical-dark px-4 py-2 rounded-full font-semibold">
                      {selectedImage.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-mechanical-gold to-mechanical-amber p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-mechanical-dark mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-mechanical-dark mb-6 max-w-2xl">
              Join our portfolio of successful projects. Contact us today to discuss how we can bring your engineering vision to life.
            </p>
            <motion.button
              onClick={handleStartProjectClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mechanical-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-mechanical-steel transition-all duration-300 cursor-pointer"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
