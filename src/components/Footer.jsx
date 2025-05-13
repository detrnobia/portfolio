import React from 'react';

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Replace with your actual social links
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername' },
    { name: 'Dribbble', url: 'https://dribbble.com/yourusername' }
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <a href="/">Σ</a>
        </div>
        
        <div className="footer-links">
          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;