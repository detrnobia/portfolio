import React from 'react';
import ProjectCard from './projectCard';

const WorkExperience = () => {
  // Sample project data - replace with your own
  const projects = [
    {
      id: 1,
      title: 'CIB on the Mobile',
      description: 'Redesigned mobile banking app experience.',
      technologies: 'UI/UX Design, Figma, Adobe XD',
      image: '/project-images/project1.png',
      color: '#6633cc' // Purple
    },
    {
      id: 2,
      title: 'CIB on the Mobile',
      description: 'Implemented banking app frontend with React.',
      technologies: 'React, TypeScript, Styled Components',
      image: '/project-images/project2.png',
      color: '#ff7979' // Pink
    },
    {
      id: 3,
      title: 'CIB on the Mobile',
      description: 'Created data analysis dashboard for banking app.',
      technologies: 'D3.js, Vue, Firebase',
      image: '/project-images/project3.png',
      color: '#50b3d8' // Blue
    },
    {
      id: 4,
      title: 'CIB on the Mobile',
      description: 'Backend infrastructure for banking application.',
      technologies: 'Node.js, Express, MongoDB',
      image: '/project-images/project4.png',
      color: '#59b86c' // Green
    }
  ];

  return (
    <section id="work" className="work-experience">
      <h2>Work Experience</h2>
      
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;