import React from 'react';
import './header.css';
import HeaderImage from '../../assets/header.jpg';

import {IoLogoLinkedin} from 'react-icons/io'
import {IoLogoGithub} from 'react-icons/io'

const data = [
    {id: 1, link: 'https://www.linkedin.com/in/pathan-mohammad-fazal-882728213', icon: <IoLogoLinkedin/>},
    {id: 2, link: 'https://github.com/pathanfazal', icon:<IoLogoGithub/>}
]

const Header = () => {
  return (
    <header id="header">
      <div className='container header__container'>
        <div className='header__profile'>
          <img src={HeaderImage} alt="header image" />
        </div>
        <h3>Fazal Pathan</h3>
        <p>
          Welcome to my portfolio website! As a passionate developer fresher,
          I'm excited to showcase my skills and projects. From coding to problem-solving,
          I'm dedicated to creating innovative solutions. Explore my site to see my work and
          get a glimpse of my potential. Let's connect and build something incredible together!
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Contacts</a>
          <a href='portfolio' className='btn light'>My Projects</a>
        </div>
        <div className="header__socials">
          {data.map(item => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
