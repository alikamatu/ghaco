import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './LandProfile.scss';

const LandProfile = ({ lands }) => {
  const { id } = useParams();
  const land = lands.find(land => land.id === parseInt(id));
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!land) {
    return <p>Land not found.</p>;
  }

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % land.photo.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + land.photo.length) % land.photo.length);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form submission triggered'); // Debugging log

    emailjs.sendForm('service_ukkhj8k', 'template_zzzeosj', form.current, 'TAQYbus1HbjM3WeWa')
      .then((result) => {
          console.log('EmailJS result:', result.text); // Debugging log
          alert('Message sent successfully!');
      }, (error) => {
          console.log('EmailJS error:', error.text); // Debugging log
          alert('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="land-profile">
      <div className="land-details">
        <div className="land-image">
          <img src={land.image} alt={land.title} onClick={() => openModal(0)} />
        </div>
        <div className="land-info">
          <h1>{land.title}</h1>
          <p>{land.description}</p>
          <p className='arc'> {land.arc1}</p>
          <p> {land.arcp1}</p>
          <p className='arc'>{land.arc2}</p>
          <p>{land.arcp2}</p>
          <p className='arc'>{land.arc3}</p>
          <p>{land.arcp3}</p>
        </div>
      </div>
      {land.photo && (
        <div className="featured-photos">
          {land.photo.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Featured ${index}`}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <FaTimes className="close-button" onClick={closeModal} />
            <img src={land.photo[currentImageIndex]} alt={`Modal ${currentImageIndex}`} />
            <FaArrowLeft className="prev-button" onClick={showPreviousImage} />
            <FaArrowRight className="next-button" onClick={showNextImage} />
          </div>
        </div>
      )}
      <div className="inquiry-form">
        <h2>Inquire about {land.title}</h2>
        <form onSubmit={sendEmail} ref={form}>
          <label>First Name*<input type="text" name="firstName" required /></label>
          <label>Last Name*<input type="text" name="lastName" required /></label>
          <label>Mobile Number*<input type="text" name="mobileNumber" required /></label>
          <label>Email*<input type="email" name="email" required /></label>
          <label>Purchasing Timeline*
            <select name="timeline" required>
              <option>Please Select</option>
              <option>Immediately</option>
              <option>Within 3 months</option>
              <option>Within 6 months</option>
              <option>More than 6 months</option>
            </select>
          </label>
          <label>Purchasing Budget*
            <select name="budget" required>
              <option>Please Select</option>
              <option>Below $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>$100,000 - $150,000</option>
              <option>Above $150,000</option>
            </select>
          </label>
          <label>Project Interested*
            <select name="project" required>
              <option>Please Select</option>
              <option>Cocoa Farm</option>
              <option>Cashew Plantation</option>
              <option>Mixed Crop Land</option>
            </select>
          </label>
          <label>Seze of Acre*
            <select name="contactTime" required>
              <option>Please Select</option>
              <option>500 Acres</option>
              <option>66 Acres</option>
              <option>40 Acres</option>
            </select>
          </label>
          <label>Message<textarea name="message"></textarea></label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LandProfile;
