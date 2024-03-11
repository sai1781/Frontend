import React from "react";
import Dashboard from "../DashBoard/DashBoard";
import PageHeader from "../PageHeader/PageHeader";
import './HomePage.css'

const HomePage = () => {
  return (
    <div id="main" className="main">
   <PageHeader /> 
    <Dashboard />
       {/* <MultiStepForm />  */}
    </div>
  )
}

export default HomePage;
