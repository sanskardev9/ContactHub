import React from 'react';
import './SignUpPage.css'


const SignUpPage = () => {
    return (
        <div className="card">
            <h2 className="card-title text-center"><u>Signup</u></h2>
            <form>
                <div className="form-group">
                    <label htmlFor="signup-name">Full Name</label>
                    <input type="text" className="form-control" id="signup-name" placeholder="Enter full name" />
                </div>
                <div className="form-group">
                    <label htmlFor="signup-email">Email address</label>
                    <input type="email" className="form-control" id="signup-email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="signup-password">Password</label>
                    <input type="password" className="form-control" id="signup-password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
