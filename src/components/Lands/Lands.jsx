import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandSales.scss';
import accra from '../photos/loren-king-bp4Kj6RMH9E-unsplash.jpg'
import kumasi from '../photos/cocoa/cocoa.jpeg'
import kumasi1 from '../photos/cashew/cashew.jpeg'


const lands = [
  {
    id: 1,
    title: 'Cocoa Farm in Kumasi',
    description: 'A beautiful cocoa farm located in the heart of Kumasi. Perfect for commercial production.',
    image: kumasi,
    size: '20 acres',
    price: '$150,000'
  },
  {
    id: 2,
    title: 'Cashew Plantation in Sunyani',
    description: 'A well-maintained cashew plantation in Sunyani. Ideal for both small and large scale farming.',
    image: kumasi1,
    size: '15 acres',
    price: '$120,000'
  },

];

const LandSales = () => {
  const [selectedLand, setSelectedLand] = useState(null);

  return (
    <div className="land-sales">
      <h1>Land Sales</h1>
      <div className="land-list">
        {lands.map(land => (
          <div key={land.id} className="land-card">
            <Link to={`/land/${land.id}`}
            style={{textDecoration: "none", color: "#222"}}
            >
              <div className="land-image">
                <img src={land.image} alt={land.title} />
              </div>
              <div className="land-details">
                <h2>{land.title}</h2>
                <p>{land.description}</p>
                <p><strong>Size:</strong> {land.size}</p>
                <p><strong>Price:</strong> {land.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandSales;
