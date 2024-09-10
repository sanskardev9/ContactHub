import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LoginPage.css";
import { setAccessToken } from "../../store/authslice";
import { Link } from "react-router-dom";

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
      console.log(data);

      if (response.ok) {
        const token = data.accessToken;
        const user = data.user;

        console.log(user.username);

        localStorage.setItem("accessToken", token);

        dispatch(setAccessToken(token));

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
      <h2 className="card-title text-center"><u>Login</u></h2>
      {error && <p className="error">{error}</p>}
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
        <button type="submit" className="btn btn-primary">
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
