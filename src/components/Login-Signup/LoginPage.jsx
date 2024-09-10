import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LoginPage.css";
import { setAccessToken } from "../../store/authslice";
import { Link } from "react-router-dom";
import { BiSolidLock } from "react-icons/bi";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://mycontacts-backend-flub.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const token = data.accessToken;
        const user = data.user;

        localStorage.setItem("accessToken", token);

        dispatch(setAccessToken({token : token, user}));

        onLogin();
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="card">
      
      <div className="log-cont">
        <div className="log">
          <h2 className="card-title text-center">login</h2>
        </div>
        <div className="log-img">
          <BiSolidLock />
        </div>
      </div>
      
      
      {error && <p className="error" style={{color:'#666666'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="login-email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="login-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <p className="signup-info">Don't have an account</p>
        <div className="sign-up">
            <Link className="btn btn-secondary" to={'/signup'}>Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
