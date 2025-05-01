import React from 'react';
import './Education.css';

function Education() {
  const educationHistory = [
    {
      id: 1,
      date: '2022 - 2024',
      title: 'Pamantasan ng Cabuyao',
      subtitle: '3rd Year, Bachelor of Science in Information Technology',
      description: 'Relevant coursework: Web Development, Database Management, Software Engineering, Data Structures and Algorithms.'
    },
    {
      id: 2,
      date: '2020 - 2022',
      title: 'Asian Institute of Technology, Sciences and the Arts',
      subtitle: 'With Honors',
      description: 'Participated in programming competitions and led the computer club.'
    },
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="timeline">
          {educationHistory.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-subtitle">{item.subtitle}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;