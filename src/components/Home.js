import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Hi! I'm Jayvee R. Biñas, a passionate student based in Banlic Cabuyao Laguna.
          I specialize in creating beautiful and functional web experiences.
        </p>
        <div className="cta-buttons">
          <Link to="/about" className="cta-button primary">Learn More About Me</Link>
          <Link to="/contact" className="cta-button">Get In Touch</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;