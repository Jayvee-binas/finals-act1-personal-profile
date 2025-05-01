function Projects() {
    const projects = [
      {
        id: 1,
        title: "E-commerce Website",
        description: "A full-stack e-commerce platform with React frontend and Node.js backend.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        link: "#"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A productivity app to help users organize their daily tasks.",
        technologies: ["React", "Firebase", "Material UI"],
        link: "#"
      }
    ];
  
    return (
      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;