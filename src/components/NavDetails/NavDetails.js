import React from 'react';
import Profile from '../Profile/Profile';
import Notification from '../Notification/Notification';
import NavMessage from '../Message/NavMessage';
import Search from '../Search/Search';
import './NavDetails.css'

const NavDetails = () => {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <Notification />
        <NavMessage />
        <Profile />
      </ul>
    </nav>
  );
}

export default NavDetails;
