import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.scss';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ukkhj8k', 'template_5sfgvrg', form.current, 'TAQYbus1HbjM3WeWa  ')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h2>Contact Us</h2>
        <div className="form-group">
          <input type="text" name="user_name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
