import React from 'react';

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Replace with your actual social links
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kate-capadocia-761782348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'GitHub', url: 'https://github.com/detrnobia' },
    { name: 'Instagram', url: 'https://www.instagram.com/kcateis/'},
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100008889641510' }
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