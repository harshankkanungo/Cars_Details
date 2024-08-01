import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} IndiaNIC. All rights reserved.</p>
          <p>
            <a  className="footer-link">Privacy Policy</a> | 
            <a  className="footer-link"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
