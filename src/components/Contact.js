import React from 'react';
import '../App.css'; // or '../MyComponent.css'
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
  return (
    <div>
      <h1 className="header-text">CONTACT</h1>
      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
