// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import ContactListApp from "./components/ContactListApp";
// import Login from "./components/Login-Signup/LoginPage";
// import Signup from "./components/Login-Signup/SignUpPage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<ContactListApp />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ContactListApp from "./components/ContactListApp";
import Login from "./components/Login-Signup/LoginPage";
import Signup from "./components/Login-Signup/SignUpPage";

const App = () => {
  // State to track if the user is logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* If logged in, show ContactListApp, otherwise redirect to login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <ContactListApp onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Login page */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
