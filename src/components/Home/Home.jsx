import React, { useState, useEffect } from 'react';
import './Home.scss';
import Homepage from '../Homepage/HomaPage';
import ContactForm from '../Form/ContactForm';
import Lands from '../Lands/Lands'

const Home = ({ images, interval }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
<>
<div className="slider">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={`slide ${idx === index ? 'active' : ''}`}
          style={{ background:  `linear-gradient(10deg, rgba(26, 5, 5, 0.212), rgba(0, 0, 0, 1.164)), url(${image.url})` }}
        >

          <div className="content">
            <h2>{image.header}</h2>
            <p>{image.subtext}</p>
          </div>
        </div>
      ))}
    </div>
    <Homepage />
      <Lands />
    <ContactForm />
</>
  );
};

export default Home;
