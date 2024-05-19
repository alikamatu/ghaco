import React from 'react';
import './Footer.scss';
import logo from '../photos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <section className='rights'>
        <img src={logo} alt="" />
        <p>&copy; GHAPCA 2024. All rights reserved.</p>
      </section>
      <div className="footer-section">
        <h4>HELPFUL LINKS</h4>
        <ul>
          <li>About Us</li>
          <li>Forms</li>
          <li>FAQs</li>
          <li>Photos</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>FOLLOW US</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
          <div className="socials" style={{display: "flex", gap: "15px"}}>
          <div>
          <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div>
            <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div>
            <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
