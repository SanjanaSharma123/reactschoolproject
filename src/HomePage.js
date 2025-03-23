import React, { useState } from 'react';
import './HomePage.css'; // Import the CSS file for styling
// import App from './App';

function HomePage() {
  const [activePage, setActivePage] = useState('home'); // Initialize with 'home'

  const handleLinkClick = (page) => {
    setActivePage(page);
    console.log(`${page} clicked!`); 
    // You can add navigation logic here if you're using React Router
  };

  return (
  
    <div className="home-page">
      
      <header className="header">
        <div className="logo">
          {/* Replace with your logo image */}
          <img src="/path/to/your/logo.png" alt="Logo" /> 
        </div>
        <nav className="nav">
          <a 
            href="#home" 
            onClick={() => handleLinkClick('home')}
            className={activePage === 'home' ? 'active' : ''}
          >
            Home
          </a> 
          <a 
            href="#about" 
            onClick={() => handleLinkClick('about')}
            className={activePage === 'about' ? 'active' : ''}
          >
            About Us
          </a> 
          <a 
            href="#academics" 
            onClick={() => handleLinkClick('academics')}
            className={activePage === 'academics' ? 'active' : ''}
          >
            Academics
          </a>
          <a 
            href="#contact" 
            onClick={() => handleLinkClick('contact')}
            className={activePage === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </nav>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Revealing Our Dedication to Excellence</h1>
          <button className="contact-us-btn">Contact Us</button>
        </div>
      </section>
      
      <section className="main-content">
        <div className="school-info">
          <h2>Discover Aarambh Public School</h2>
          <p>
            [Your school description goes here. You can add more 
            paragraphs about your school's mission, values, and 
            educational approach.]
          </p>
          <div className="action-buttons">
            <button className="apply-btn">Apply Now</button>
            <button className="ask-edit-btn">Ask to edit</button>
            <button className="share-btn">Share</button>
          </div>
        </div>
        
        <div className="thematic-learning">
          <div className="learning-content">
            <h2>Thematic Learning</h2>
            <p>
              [Add a description of your thematic learning approach 
              or any special programs you offer.]
            </p>
          </div>
          <div className="art-creativity">
            <h2>Art and Creativity</h2>
            <p>
              [Describe your focus on art and creativity in education.]
            </p>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Aarambh Public School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;