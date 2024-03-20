// Loginform.js
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom"; // Import useHistory from React Router
import axios from "axios";
import './LoginPage.css'
import logo from '../../images/maha logo 3.png'

const Loginform = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Simulate authentication logic (replace with your actual logic)
    if (username === "admin" && password === "123") {
      console.log("Login successful!");
      onLogin();
      navigate("/Dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <div className="loginbody">
        <section className="h-100 gradient-form">
          <div className="form">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="card-body p-md-4 mx-md-4">
                <div>
                  <img
                    className="logoset"
                    src={logo}
                    style={{ width: "150px", borderRadius: "0px" }}
                    alt="logo"
                  />
                  <h4 className="heading">
                    <b>Maha Cooperative Socity LTD</b>
                  </h4>
                </div>
                <div>
                  <form className="formedit" onSubmit={handleLogin}>
                    <label htmlFor="username">Username:</label>
                    <input
                      className="loginput"
                      type="text"
                      id="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      required
                      placeholder="enter username"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                      className="loginput"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      placeholder="enter password"
                    />
                    <button type="submit" className="button  btn btn-primary">
                      {" "}
                      Login{" "}
                    </button>
                    {/* <button className='btn btn-danger'>Cancel</button> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Loginform;
