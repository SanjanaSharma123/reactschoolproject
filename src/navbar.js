import React from "react";
import "./navbar.css"; // Isme CSS likhna


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images/Schoollogo.jpeg" alt="School Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#academics">Academics</a></li>
        <li><a href="#facilities">Facilities</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
