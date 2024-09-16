import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ContactListApp from "./components/ContactListApp";
import Login from "./components/Login-Signup/LoginPage";
import Signup from "./components/Login-Signup/SignUpPage";
import FavContactList from "./components/NavbarAndContactList/FavContactList/FavContactList";

const App = () => {
  // State to track if the user is logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/favcontacts" element={<FavContactList/>} />
      </Routes>
    </Router>
  );
};

export default App;
