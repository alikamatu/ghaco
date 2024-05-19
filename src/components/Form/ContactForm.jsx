import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
