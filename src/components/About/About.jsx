// AboutPage.js
import React from 'react';
import './About.scss';
import companyImage from '../photos/wallpaper.jpg';

const About = () => {
  return (
    <>    
    <div className="header-image">
    <img src={companyImage} alt="" />
    <div className="image-text">
      <h1>About</h1>
    </div>
  </div>
    <div className="about">
      <section className="vision">
        <h2>Our Vision</h2>
        <p>To attract people who want to venture into the agricultural sector in Ghana, mainly cocoa and cashew production. Foreigners are warmly welcome and under our guidance and supervision they will have proper understanding about how to manage cocoa and cashew farms in Ghana and across the globe.</p>
        <p>We ensure that our customers are satisfied as there is a saying that customers always come first. Our key focus areas are Impact, Scale, and Technology.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>To build the largest network of profitable farmers across Africa, ensuring there's always food for all.</p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <p>Our values guide our actions. They are who we are. You can say we've got G-R-I-I-T!</p>
        {/* <ul>
          <li><strong>GROWTH:</strong> From our founders, to our farmily, to our farmers, our customers, we never stop growing. Literally. We keep breaking boundaries and looking for ways to improve. Season after season.</li>
          <li><strong>RESPECT:</strong> We believe every being is worthy of dignity, recognition, and regard. So we do our best to accord these qualities to everyone.</li>
          <li><strong>INTEGRITY:</strong> For us, integrity is absolute. You either have it or you don't. We do.</li>
          <li><strong>INNOVATION:</strong> If there’s a newer, better, and more efficient way, we’ll find & use it.</li>
          <li><strong>TEAMWORK:</strong> With a vision this big, we know it'll take a village to accomplish. Not just a village, a farmily. Yes, f-a-r-m-i-l-y.</li>
        </ul> */}
      </section>
    </div>
  </>
  );
};

export default About;
