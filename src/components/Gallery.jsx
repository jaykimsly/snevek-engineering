import React from 'react';

const Gallery = () => (
  <section style={{ padding: '2rem' }}>
    <h2>Gallery</h2>
    <p>Project photos coming soon...</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <img src="https://via.placeholder.com/300x200?text=Project+1" alt="Project 1" />
      <img src="https://via.placeholder.com/300x200?text=Project+2" alt="Project 2" />
    </div>
  </section>
);

export default Gallery;
