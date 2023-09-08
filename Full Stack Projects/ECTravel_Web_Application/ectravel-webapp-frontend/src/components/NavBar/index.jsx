import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className='nav-content container'>
        <span className='logo'>ECTravel</span>
        <ul className='nav-links'>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/services">Services</Link>
            <Link className='nav-link' to="/about">About</Link>
            <Link className='nav-link' to="/profile">Profile</Link>
        </ul>
        </div>
    </div>
  )
}

export default NavBar;