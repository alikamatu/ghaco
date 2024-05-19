import React from 'react';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import image1 from './components/photos/annie-spratt-_vgsXME077Q-unsplash.jpg';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Service/Service';
import About from './components/About/About';
import ReachOut from './components/Reach/ReachOut';
import LandProfile from './components/LandProfile';
import accra from './components/photos/cocoa/mixed.jpeg'
import coa1 from './components/photos/cocoa/co1.jpeg'
import kumasi from './components/photos/cocoa/cocoa.jpeg'
import coa2 from './components/photos/cocoa/coa2.jpeg'
import coa3 from './components/photos/cocoa/coa3.jpeg'
import coa4 from './components/photos/cocoa/coa4.jpeg'
import coa5 from './components/photos/cocoa/coa5.jpeg'
import coa6 from './components/photos/cocoa/coa6.jpeg'
import coa7 from './components/photos/cocoa/coa7.jpeg'
import coa8 from './components/photos/cocoa/coa8.jpeg'
import kumasi1 from './components/photos/cashew/cashew.jpeg'
import cash1 from './components/photos/cashew/cash1.jpeg'
import cash2 from './components/photos/cashew/cash2.jpeg'
import cash3 from './components/photos/cashew/cash3.jpeg'
import cash4 from './components/photos/cashew/cash4.jpeg'
import cash5 from './components/photos/cashew/cash5.jpeg'

function App() {
  const images = [
    { url: image1, header: 'KINGDOM AGRICARE AND CONSULTING AGENCY GHANA', subtext: 'The landlods' }
  ];

  const lands = [
    {
      id: 1,
      title: 'Cocoa Farm in Kumasi',
      description: 'A beautiful cocoa farm located in the heart of Kumasi. Perfect for commercial production.',
      image: kumasi,
      size: '20 acres',
      photo: [coa1,coa2,coa3,coa4,coa5,coa6,coa7,coa8],
      price: '$150,000'
    },
    {
      id: 2,
      title: 'Cashew Plantation in Sunyani',
      description: 'A well-maintained cashew plantation in Sunyani. Ideal for both small and large scale farming.',
      image: kumasi1,
      size: '15 acres',
      photo: [cash1,cash2,cash3,cash4,cash5],
      price: '$120,000'
    },
    {
      id: 3,
      title: 'Mixed Crop Land in Accra',
      description: 'Versatile land for various types of crops in the bustling city of Accra.',
      image: accra,
      photo: [accra, kumasi],
      size: '25 acres',
      price: '$200,000'
    }
  ];

  return (
    <>
    <Routes>
      <Route path='/' element={<Home images={images} interval={5000}/>} />
      <Route path='/service' element={<Services lands={lands} />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ReachOut />} />
      <Route path="/land/:id" element={<LandProfile lands={lands} />} />
    </Routes>
      <Header />
      <Footer />
    </>
  );
}

export default App;
