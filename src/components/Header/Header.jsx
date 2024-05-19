import React, { useState } from 'react';
import './Header.scss';
import logo from '../photos/logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaX } from 'react-icons/fa6';

const Header = () => {
  const [showServices, setShowServices] = useState(false);

  const handleMouseEnter = () => {
    setShowServices(true);
  };

  const handleMouseLeave = () => {
    setShowServices(false);
  };

  return (
    <div className='header' >
      <div className="logo-wrapper">
        <img src={logo} alt="" />
        <div className="logo-text">
          <p>GhapCa</p>
          <p>Grow in agriculture</p>
        </div>
      </div>
      <div className="navlinks">
      <div className="icon">
        <FaBars onClick={handleMouseEnter} />
        </div>
        <ul>
          <Link style={{textDecoration: "none", color: "#00796b"}} to="/"><li>Home</li></Link>
          <Link style={{textDecoration: "none", color: "#00796b"}} to ="/service"><li id='sev' onMouseEnter={handleMouseEnter}>Services</li></Link>
          <Link style={{textDecoration: "none", color: "#00796b"}} to="/about"><li>About</li></Link>
         <Link style={{textDecoration: "none", color: "#00796b"}} to="/contact"> <li>Contact</li></Link>
        </ul>
      </div>
      {showServices && (
        <div className="services">
          <FaX className='close-menu' onClick={handleMouseLeave} />
         <ul>
          <Link style={{textDecoration: "none", color: "#00796b"}} onClick={handleMouseLeave} to="/"><li>Home</li></Link>
          <Link style={{textDecoration: "none", color: "#00796b"}}  onClick={handleMouseLeave} to ="/service"><li id='sev' onMouseEnter={handleMouseEnter}>Services</li></Link>
          <Link style={{textDecoration: "none", color: "#00796b"}}  onClick={handleMouseLeave} to="/about"><li>About</li></Link>
         <Link style={{textDecoration: "none", color: "#00796b"}}  onClick={handleMouseLeave} to="/contact"> <li>Contact</li></Link>
        </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
