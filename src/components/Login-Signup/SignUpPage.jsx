import React from "react";
import "./SignUpPage.css";
import { TiUserAdd } from "react-icons/ti";

const SignUpPage = () => {
  return (
    <>
    <div className="heading">
      <h1>ContactHub</h1>
    </div>
    <div className="card">
      <div className="sign-cont">
        <div className="log">
          <h2 className="card-title text-center">Signup</h2>
        </div>
        <div className="sign-img">
        <TiUserAdd />
        </div>
      </div>
      
      <form>
        <div className="form-group">
          <label htmlFor="signup-name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="signup-name"
            placeholder="Enter full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="signup-email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="signup-password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-block">
          Sign Up{" "}
        </button>
      </form>
    </div>
    </>
  );
};

export default SignUpPage;
