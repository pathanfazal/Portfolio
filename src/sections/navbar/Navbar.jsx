import React from 'react'
import './navbar.css'
import data from './data'
import Logo from '../../assets/logo.png'
import {IoIosColorFill} from 'react-icons/io'
const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img id='logosize'src={Logo} alt="Logo"/>
        </a>
        <ul className='nav__menu'>
          {
            data.map(item=><li key={item.id}><a className='und'href={item.link}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar