import React, { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop/BackToTop";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
// import 'boxicons';
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// Import your routes
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"; // Adjust the path as needed
import { Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/DashBoard/DashBoard";
import Footer from "./pages/Footer/Footer";
import NavBar from "./pages/NavBar/NavBar";
import SideMenuBar from "./pages/SideMenuBar/SideMenuBar"
import AppRouter from "./AppRouter/AppRouter";
import HomePage from "./pages/HomePage/HomePage";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    // You can set isLoggedIn to true here after successful login
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn && (
           <LoginPage onLogin={handleLogin} />
          // <Routes>
          //   <Route path="/LoginPage"  ele/>
          // </Routes>
      )}
      {isLoggedIn && (
        <>
          <NavBar />
          <SideMenuBar />
          <AppRouter />
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
};

export default App;

// // import Icons
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "remixicon/fonts/remixicon.css";
// // import 'boxicons';
// // import Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// // import customised components and styling files
// import "./App.css";
// import NavBar from "./pages/NavBar/NavBar";
// import SideMenuBar from "./pages/SideMenuBar/SideMenuBar";
// import HomePage from "./pages/HomePage/HomePage";
// import Footer from "./pages/Footer/Footer";
// import BackToTop from "./components/BackToTop/BackToTop";




// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <SideMenuBar />
//       {/* <HomePage /> */}
//       <Footer />
//       <BackToTop />
//     </>
//   );
// };

// export default App;
