import React from 'react';
import './Contact.scss';
import ContactForm from '../Form/ContactForm';
import companyImage from '../photos/shakehands.jpg';
// import map from './images/map.png'; // Replace with your map image path

const ReachOut = () => {
  return (
    <>    
    <div className="header-image">
    <img src={companyImage} alt="" />
    <div className="image-text">
      <h1>Reach Us</h1>
    </div>
  </div>
    <div className="contact-page">
      <div className="contact-info">
        <h2>Address</h2>
        <div className="address-details">
          {/* <img src={placeIcon} alt="Place Icon" /> */}
          <div>
            <p className='pre-head'>OUR LOCATION</p>
            <p>5th & 6th Floors, MOC Office Complex</p>
            <p>Abdul Diof Road, Ridge. Accra. Adjacent to Kofi Annan ICT Centre of Excellence</p>
            <p>DIGITAL ADDRESS: GA-079-0539</p>
          </div>
        </div>
        <div className="mail-info">
          <p className='pre-head'>SEND US MAIL</p>
          <p>info@moc.gov.gh</p>
          <p>P.O. BOX M38</p>
          <p>ACCRA, GHANA</p>
        </div>
      </div>
      <ContactForm />
    </div>
    </>
  );
};

export default ReachOut;
