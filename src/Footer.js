import React from 'react';
import './App.css';
import { GrLinkedin } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
    return (
      <div className = "footer">
        <p>Email: ismahanimran9@gmail.com</p>
        <ul className = "social-media-links">
          <a href = "https://www.linkedin.com/in/ismahan-imran/"><GrLinkedin /></a>
          <a href = "https://web.facebook.com/IsmahanImran1"><SiFacebook /></a>
          <a href = "https://github.com/IsmahanImran"><BsGithub /></a>
          <a href = "https://www.instagram.com/cool_winter_/"><GrInstagram /></a>
          <a href = "https://twitter.com/Ismahan_Imran"><BsTwitterX /></a>
        </ul>
      </div>
    );
  }

  export default Footer;