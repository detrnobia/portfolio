import React from 'react';

const About = () => {
  // Replace with your actual skills
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 70 }
  ];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate computer science student and UI/UX designer with 3+ years of industry experience. 
            I believe in creating digital experiences that are both visually appealing and functionally efficient.
          </p>
          <p>
            My journey started with front-end development, which eventually led me to explore the world of design. 
            This unique combination allows me to bridge the gap between design and development, creating products 
            that are not only beautiful but also technically feasible.
          </p>
          <p>
            When I'm not coding or designing, you can find me exploring new design trends, reading about user experience, 
            or working on personal projects that challenge my skills.
          </p>
        </div>
        
        <div className="skills">
          <h3>My Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;