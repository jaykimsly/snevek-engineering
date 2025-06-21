import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: '#333', color: '#eee', textAlign: 'center', padding: '1rem', fontSize: '14px' }}>
    &copy; {new Date().getFullYear()} Snevek Engineering. All rights reserved.
  </footer>
);

export default Footer;
