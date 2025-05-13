import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <a href="/">Σ</a>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#lab">Lab</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;