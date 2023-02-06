import React from "react";
import "./Login.scss";
export default function Login() {
  return (
    <div className="LoginContainer">
      <div className="overlay"></div>
      <form action="#" className="login-form">
        <div className="login-img">
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
            alt="logo"
          />
          
        </div>
        <h1>Log In</h1>
        <div className="textb">
          <input type="text" required />
          <div className="placeholder">Username</div>
        </div>
        <div className="textb">
          <input type="password" required />
          <div className="placeholder">Password</div>
          <div className="show-password" />
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <div className="fas fa-check" />
          Stay signed in
        </div>
        <button className="btn fas fa-arrow-right" />
      </form>
    </div>
  );
}
