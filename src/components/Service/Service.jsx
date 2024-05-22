import React from 'react';
import './Services.scss';
import farmlandImage from '../photos/about.jpg';
import Lands from '../Lands/Lands';
import Image1 from '../photos/BACK.jpeg';
import Image2 from '../photos/ago_downloaded.jpg';
import Image3 from '../photos/1705809358963.jpeg'
import image4 from '../photos/loren-king-bp4Kj6RMH9E-unsplash.jpg'


const Services = () => {
  const services = [
    {
      title: 'Provide Education to Farmers',
      description: 'We offer extensive education programs to help farmers enhance their skills and knowledge in modern agricultural practices.',
      image: Image2,
      align: 'left',
    },
    {
      title: 'Provide Fundings for Agricultural Purposes',
      description: 'Our funding programs are designed to support farmers financially, ensuring they have the resources needed for successful farming.',
      image: Image3,
      align: 'right',
    },
    {
      title: 'Selling of Farmlands',
      description: 'We have prime farmlands available for sale, primarily focusing on cocoa and cashew cultivation.',
      image: Image1,
      align: 'left',
    },
    {
      title: 'Selling of Agricultural Products',
      description: 'Our range of agricultural products includes the best quality produce from our partnered farms.',
      image: image4,
      align: 'right',
    },
  ];

  return (
    <>
    <div className="header-image">
      <img src={farmlandImage} alt="" />
      <div className="image-text">
        <h1>Our Services</h1>
      </div>
    </div>
    <div className="services-container">
      <p className='serv'>
    Welcome to KINGDOM AGRICARE AND CONSULTING AGENCY GHANA, where we are dedicated to transforming the agricultural landscape in Ghana and beyond. Our mission is to empower farmers, support agricultural ventures, and contribute to the sustainable development of our communities. With a focus on innovation, integrity, and impact, we offer a range of services designed to meet the diverse needs of the agricultural sector. Whether you are a seasoned farmer, an investor, or someone new 
    to agriculture, our comprehensive services will help you thrive in this vital industry.
    </p>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.align}`}>
            <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
            <div className="service-content">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Lands />
    </>
  );
};

export default Services;
