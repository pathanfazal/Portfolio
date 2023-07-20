import React, { useState } from 'react'; // Import useState hook
import './navbar.css';
import data from './data';
import Logo from '../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  // Add state to manage the visibility of the mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img id="logosize" src={Logo} alt="Logo" />
        </a>
        <ul className={`nav__menu ${showMobileMenu ? 'active' : ''}`}>
          {data.map((item) => (
            <li key={item.id}>
              <a className="und" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Add the 3-dash icon to toggle the mobile menu */}
        <div id="theme__icon" onClick={toggleMobileMenu}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
