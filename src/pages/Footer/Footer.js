import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{' '}2024  &copy; 
        <strong>
          <span>Maha Bank</span>
        </strong>
        . All Rights Reserved
      </div>
      {/* <div className="credits">
       <a href="#">Suthra Developers</a>
      </div> */}
    </footer>
  );
}

export default Footer;
