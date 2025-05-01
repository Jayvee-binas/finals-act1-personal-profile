import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and modern CSS features. Showcases my projects, skills, and professional experience.',
      image: 'https://placehold.co/600x400',
      techStack: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'An administrative dashboard for managing online store inventory, orders, and customer data. Features real-time updates and data visualization.',
      image: 'https://placehold.co/600x400',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A weather application that provides real-time weather information and forecasts. Integrates with weather APIs and features a clean, intuitive interface.',
      image: 'https://placehold.co/600x400',
      techStack: ['JavaScript', 'Weather API', 'HTML5', 'CSS3'],
    }
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
               
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
