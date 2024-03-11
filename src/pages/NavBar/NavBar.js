import React from 'react';
// import Logo from './Logo';
import "./NavBar.css";
import Search from '../../components/Search/Search';
import NavDetails from '../../components/NavDetails/NavDetails';
import Logo from '../../images/mahalogo.png'

const NavBar = () => {

  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };


  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* <Logo /> */}
      <div className="d-flex align-items-center justify-content-between">
        
      <a  className="logo d-flex align-items-center" onClick={handleToggleSideBar}>
      
        <img src={Logo} alt=""/>
        <span className="d-none" >MAHA CO-OPERATIVE SOCIETY</span>
        {/* <span className="d-none d-lg-block">MAHA CO-OPERATIVE SOCIETY</span> */}
      </a>
     

      <i
        className=" d-none d-lg-block bi bi-list toggle-sidebar-btn "
        onClick={handleToggleSideBar}
      ></i>
    </div>
     
      {/* <Search /> */}
      <NavDetails />
    </header>
  )
}

export default NavBar
