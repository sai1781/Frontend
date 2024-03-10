// Loginform.js
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom"; // Import useHistory from React Router
// import Dashboard from "../../Pages/Deposite_Reports/FDCinterest";
// import axios from "axios";
import "./LoginPage.css";
import backGroundImage from '../../images/lg4.jpg'
import Logo from '../../images/maha logo 3.png'

const LoginPage = ({ onLogin }) => {
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
      <section
        className="h-100 gradient-form"
        style={{
          backgroundImage: `url(${backGroundImage})`,
          backgroundSize: "cover", // Optional: You can specify other background properties as needed
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="frm">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card-body p-md-4 mx-md-4">
              <div className="text">
                <img
                  className="text"
                  src={Logo}
                  style={{ width: "150px", borderRadius: "0px" }}
                  alt="logo"
                />
                <h4 className="mt-0 mb-4 pb-1 text">
                  <b>Maha Cooperative Socity LTD</b>
                </h4>
              </div>
              <div>
                <form onSubmit={handleLogin}>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                    placeholder="enter username"
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    placeholder="enter password"
                  />
                  <center>
                    {" "}
                    <button type="submit" className="butn  btn btn-primary">
                      {" "}
                      Login{" "}
                    </button>
                  </center>
                  {/* <button className='btn btn-danger'>Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;

{
  /* <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-4 mx-md-4">
                      <div className="text-center">
                        <img
                          src="/images/maha logo 3.png"
                          style={{ width: '150px' , borderRadius: '20px' }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-4 pb-1 text-center">Maha Cooperative Bank</h4>
                      </div>

                      <form onSubmit={handleLogin}>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4 text-center">
                          <input
                            type="text"
                               id="username"
                               placeholder='enter Username'
                               value={username}
                               onChange={(event) => setUsername(event.target.value)}
                               required
                          />
                          <label className="form-label" htmlFor="form2Example11">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4 text-center">
                          <input className='intag'
                                 type="password"
                                 id="password"
                                 placeholder='enter password'
                                 value={password}
                                 onChange={(event) => setPassword(event.target.value)}
                                  required 
                                  />
                          <label className="form-label" htmlFor="form2Example22">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">

                        <button type="submit" className='btn btn-primary'>Login</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                           <button type="button" className='btn btn-danger'>Cancel</button>
                          {/* <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">
                            Log in
                          </button> */
}
{
  /* <a className="text-muted" href="#!">
                            Forgot password?
                          </a> */
}
// </div>

{
  /* <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" className="btn btn-outline-danger">
                            Create new
                          </button>
    //                     </div> */
}
//                   </form>
//                 </div>
//               </div>
//               <div className="col-lg-6 d-flex align-items-center gradient-custom-1" style={{ backgroundImage: 'url("/images/person2.jpg")',
//       borderRadius: '10px',backgroundSize: 'cover'}}>
// <div className="button-container">
//     {/* <h4 className="mb-4">We are more than just a Bank</h4>
//         <p className="small mb-0">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//             labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//             laboris nisi ut aliquip ex ea commodo consequat.
// //         </p> */}
//     </div>
// </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}
