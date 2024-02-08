import React from 'react';
import './App.css';

function Navbar() {
  const handleNavClick = (className) => {
    const elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <div className = "navbar">
        <div className = "buttons">
          <button onClick={() => handleNavClick('home')}>Home</button>
          <button onClick={() => handleNavClick('projects')}>Projects</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
          <button onClick={() => window.open("https://1drv.ms/w/s!AtYKJu_nLqzYiAuvQZA08j7YTI-a?e=Iaff6h", "_blank")}>Resume</button>
        </div>
      </div>
    );
  }

  export default Navbar;