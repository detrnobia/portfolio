import React from 'react';
import avatarImage from '../assets/avatar.jpg'; // You'll need to add your own avatar image

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">Hello! I Am <span className="highlight">Kate Capadocia</span></p>
          <h1>
            A Designer/Programmer who<br />
            Judges a book <br />
            by its <span className="cover-text">cover</span>...
          </h1>
          <p className="subtitle">because if the cover looks that good, imagine what's inside the book!</p>
          
          <div className="info-box">
            <h2>I'm currently a third year BS in Computer Science student</h2>
            <p className="current-role">Currently, I'm a Software Engineer at <a href="#" className="company-link">CompanyName</a></p>
          </div>
          
          <div className="bio">
            <p>
              A self-taught UI/UX designer functioning in the industry for 3+ years now.
              I make meaningful and delightful digital products that create an equilibrium
              between user needs and business goals.
            </p>
          </div>
        </div>
        
        <div className="avatar-container">
          <div className="purple-glow"></div>
          {<img src={avatarImage} alt="Your Name" className="avatar" /> }
        </div>
      </div>
    </section>
  );
};

export default Hero;