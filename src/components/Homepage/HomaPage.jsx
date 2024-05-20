import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Homepage.scss';
import Image1 from '../photos/BACK.jpeg';
import Image2 from '../photos/ago_downloaded.jpg';
import Image3 from '../photos/1705809358963.jpeg';

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      once: true // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="homepage">
      <div className="section products" data-aos="fade-up">
        <h2>Our Products</h2>
        <div className="product-images">
          <div className="image-container" data-aos="zoom-in">
            <img src={Image1} alt="Product 1" />
            <div className="overlay">
              <p>Selling of farmlands (cocoa and cashew mainly)</p>
            </div>
          </div>
          <div className="image-container" data-aos="zoom-in" data-aos-delay="100">
            <img src={Image2} alt="Product 2" />
            <div className="overlay">
              <p>Provide education to farmers</p>
            </div>
          </div>
          <div className="image-container" data-aos="zoom-in" data-aos-delay="200">
            <img src={Image3} alt="Product 3" />
            <div className="overlay">
              <p>Provide fundings for agricultural purposes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
