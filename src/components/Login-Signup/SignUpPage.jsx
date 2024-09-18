import React, { useState } from "react";
import "./SignUpPage.css";
import { TiUserAdd } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://mycontacts-backend-flub.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        setSuccessMessage("Registration successful! Please log in.");
        setErrorMessage('');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        const errorData = await res.json();
        if (errorData.message === 'User already exists') {
          setErrorMessage('User already registered. Please log in.');
        } else {
          setErrorMessage('Registration failed. Please try again.');
        }
        setSuccessMessage('');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

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

        {successMessage && (
          <div className="alert alert-success">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="alert alert-danger">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="signup-name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="signup-name"
              placeholder="Enter full name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="signup-email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              className="form-control"
              id="signup-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-block">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
