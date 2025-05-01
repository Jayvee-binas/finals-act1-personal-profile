import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A modern and responsive portfolio website built with React.js. Features a clean design, smooth navigation, and sections for showcasing my skills and projects.',
      image: 'https://placehold.co/600x400',
      techStack: ['React.js', 'CSS3', 'React Router', 'Responsive Design'],
      liveLink: '#',
      githubLink: 'https://github.com/jayveebinas/personal-profile'
    },
    {
      id: 2,
      title: 'Student Registration System',
      description: 'A web-based student registration system that allows students to enroll in courses, view their schedules, and manage their academic information.',
      image: 'https://placehold.co/600x400',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      liveLink: '#',
      githubLink: 'https://github.com/jayveebinas/student-registration'
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
                  Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
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
