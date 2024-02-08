import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e348pos', 'template_8bh26sm', form.current, {
        publicKey: 'ck7lF-xbATTlJqQGe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
      <div className = "contact">
        <h1 className = "heading">Contact Form</h1>
        <p>Whether you're interested in services, discussing a project, or have questions, I'm here. Complete the form, and I'll get back to you promptly. Looking forward to connecting!</p>
        <form id = "contact-form" ref = {form} onSubmit = {sendEmail}>
          <input type = "text" name = "user_name" placeholder = "Enter your name" required/>
          <input type = "email" name = "user_email" placeholder = "Enter your email" required/>
          <textarea name = "message" placeholder = "message..."></textarea>
          <button type = "submit" value = "send">submit</button>
        </form>
      </div>
    );
  }

  export default Contact;