import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Get EmailJS configuration from config file
    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      service_required: formData.service,
      message: formData.message,
      to_email: 'sales@snevek.co.za, thabethe0909@gmail.com'
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setFormStatus({ submitting: false, submitted: false, error: 'Failed to send email. Please try again or contact us directly.' });
      });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Location',
      details: ['1A Stevenson Street', 'Klipfontein, Emalahleni', 'Mpumalanga, 1035', 'South Africa'],
      action: 'Get Directions',
      actionUrl: 'https://maps.google.com/?q=1A+Stevenson+Street,+Klipfontein,+Emalahleni,+South+Africa'
    },
    {
      icon: '📞',
      title: 'Phone & WhatsApp',
      details: ['+27 72 164 3046', 'Available 24/7 for emergencies'],
      action: 'Call Now',
      actionUrl: 'tel:+27721643046'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['sales@snevek.co.za', 'info@snevek.co.za', 'Response within 2 hours'],
      action: 'Send Email',
      actionUrl: 'mailto:sales@snevek.co.za,thabethe0909@gmail.com'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Monday - Friday: 7:00 AM - 5:00 PM', 'Saturday: 8:00 AM - 2:00 PM', 'Sunday: Emergency calls only'],
      action: 'View Schedule',
      actionUrl: '#business-hours'
    }
  ];

  const services = [
    'CNC Machining',
    'Sandblasting',
    'Custom Fabrication',
    'Mechanical Repairs',
    'Engineering Consultation',
    'Quality Control',
    'Emergency Services',
    'Other'
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-mechanical-dark to-mechanical-steel relative overflow-hidden">
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
            Get In <span className="text-mechanical-gold">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your engineering project? Our expert team is here to provide professional consultation and competitive quotes.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-mechanical-dark mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 mb-1">
                        {detail}
                      </p>
                    ))}
                    <motion.a
                      href={info.actionUrl}
                      target={info.actionUrl.startsWith('http') ? '_blank' : '_self'}
                      rel={info.actionUrl.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 text-mechanical-gold font-semibold hover:text-mechanical-amber transition-colors duration-300 inline-block cursor-pointer"
                    >
                      {info.action} →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-mechanical-dark mb-6">
              Request a Quote
            </h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mechanical-gold focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mechanical-gold focus:border-transparent transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mechanical-gold focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mechanical-gold focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mechanical-gold focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Please describe your project requirements, timeline, and any specific details..."
                ></textarea>
              </div>
              
              {formStatus.submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                  <span className="block sm:inline">Your message has been sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              
              {formStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                  <span className="block sm:inline">{formStatus.error}</span>
                </div>
              )}
              
              <motion.button
                type="submit"
                disabled={formStatus.submitting}
                whileHover={{ scale: formStatus.submitting ? 1 : 1.02 }}
                whileTap={{ scale: formStatus.submitting ? 1 : 0.98 }}
                className={`w-full font-bold py-4 rounded-lg transition-all duration-300 ${formStatus.submitting 
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-mechanical-gold to-mechanical-amber text-mechanical-dark hover:shadow-lg'}`}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Quote Request'}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="p-6 bg-gradient-to-r from-mechanical-gold to-mechanical-amber">
            <h3 className="text-2xl font-bold text-mechanical-dark text-center">
              Visit Our Facility
            </h3>
            <p className="text-mechanical-dark text-center mt-2">
              State-of-the-art engineering facility in the heart of Emalahleni
            </p>
          </div>
          
          <div className="relative">
            <iframe
              title="Snevek Engineering Location"
              src="https://maps.google.com/maps?q=1A+Stevenson+Street,+Klipfontein,+Emalahleni,+South+Africa&output=embed"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              className="w-full"
            ></iframe>
            
            <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-mechanical-dark">
                📍 1A Stevenson Street
              </p>
              <p className="text-sm text-gray-600">
                Klipfontein, Emalahleni
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-2xl inline-block">
            <h3 className="text-xl font-bold text-white mb-2">
              🚨 Emergency Services Available 24/7
            </h3>
            <p className="text-red-100 mb-4">
              Critical equipment breakdown? We provide emergency repair services around the clock.
            </p>
            <motion.a
              href="tel:+27721643046"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition-all duration-300 inline-block"
            >
              Call Emergency Line: 072 164 3046
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
