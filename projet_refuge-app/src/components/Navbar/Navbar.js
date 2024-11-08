import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-nav">
        <a href="/">
          <img className="logo"
            src="/img/logo_refuge.png"
            alt=""
            width="100px"
            height="100px"
          /></a>

        <ul className="nav_ul">
          <li><a href="#">Refuge</a></li>
          <li><a href="#">Animaux</a></li>
          <li><a href="#">Adoption</a></li>
          <li><a href="#">Membres</a></li>
          <li><a href="#">Contact</a></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;