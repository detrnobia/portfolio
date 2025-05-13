import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card" style={{ '--project-color': project.color }}>
      <div className="project-image-container">
        <div className="project-icon" style={{ backgroundColor: project.color }}>
          {/* You can add an icon here if needed */}
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-tech">{project.technologies}</p>
        <a href="#" className="learn-more">Learn more</a>
      </div>
    </div>
  );
};

export default ProjectCard;