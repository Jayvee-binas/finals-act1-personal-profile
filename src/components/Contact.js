import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through the form or my social media profiles.
          </p>
          <ul className="contact-details">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:jayveebinas@gmail.com">jayveebinas@gmail.com</a>
            </li>
            <li>
              <i className="fab fa-github"></i>
              <a href="https://github.com/jayveebinas" target="_blank" rel="noopener noreferrer">
                github.com/jayveebinas
              </a>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
              <a href="https://linkedin.com/in/jayvee-binas" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/jayvee-binas
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h3 className="section-title">Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;