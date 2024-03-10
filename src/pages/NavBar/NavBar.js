import React from 'react';
// import Logo from './Logo';
import "./NavBar.css";
import Search from '../../components/Search/Search';
import NavDetails from '../../components/NavDetails/NavDetails';
// import Logo from '../Logo'

const NavBar = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* <Logo /> */}
      <h4>MahaBank</h4>
      <Search />
      <NavDetails />
    </header>
  )
}

export default NavBar
