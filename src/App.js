// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
// import 'boxicons';
// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import customised components and styling files
import "./App.css";
import NavBar from "./pages/NavBar/NavBar";
import SideMenuBar from "./pages/SideMenuBar/SideMenuBar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./pages/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";




const App = () => {
  return (
    <>
      <NavBar />
      <SideMenuBar />
      <HomePage />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
