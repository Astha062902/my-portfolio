

// Contact.js
import React from 'react';
//import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'

function ContactForm() {
  /*const [state, handleSubmit] = useForm("xdoqaybl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }*/
  return (
    <section id="contact" className="container contact-section">
      <h1>Contact Me</h1>

      <div className="contact-form-container">
        <div className="tagline">
          <p>Let's Connect and Create Something Amazing Together!</p>
        </div>
        
        <form>
          <form action="https://formspree.io/f/xdoqaybl" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              
   

            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
             
            </div>

            <div className="button-container">

               <button type="submit" >
        Send Message
      </button>
            </div>
          </form>
          </form>
        </div>
    </section>
  );
}

export default ContactForm;


