import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{' '}
        <strong>
          <span>Maha Bank</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="#">Suthra Developers</a>
      </div>
    </footer>
  );
}

export default Footer;
