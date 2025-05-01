import React from 'react';
import './About.css';

function About() {
  const skills = [
    'React.js',
    'JavaScript',
    'HTML5/CSS3',
    'Node.js',
    'Git/GitHub',
    'Responsive Design',
    'UI/UX Design'
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I'm a student at Pamantasan ng Cabuyao, passionate about creating
              beautiful and functional web experiences. With a strong foundation in
              web development, I specialize in building responsive and user-friendly
              applications.
            </p>
            <p>
              When I'm not coding, you can find me playing video games and exploring new technologies.
              I believe in continuous learning and always stay updated with the latest web technologies
              and best practices.
            </p>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;