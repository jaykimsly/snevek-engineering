import React from 'react';

const Contact = () => (
  <section style={{ padding: '2rem', backgroundColor: '#f7f7f7' }}>
    <h2>Contact Us</h2>
    <p><strong>Address:</strong> 1A Stevenson Street, Klipfontein, Emalahleni, 1035</p>
    <p><strong>Phone:</strong> <a href="tel:+27721643046">072 164 3046</a></p>
    <p><strong>Email:</strong> <a href="mailto:sales@snevek.co.za">sales@snevek.co.za</a></p>
    <p><strong>Hours:</strong> Open now</p>
    <div>
      <iframe
        title="Snevek Map"
        src="https://maps.google.com/maps?q=1A+Stevenson+Street,+Klipfontein,+Emalahleni,+South+Africa&output=embed"
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

export default Contact;
