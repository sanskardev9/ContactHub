import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ContactListApp from "./components/ContactListApp";
import Login from "./components/Login-Signup/LoginPage";
import Signup from "./components/Login-Signup/SignUpPage";
import FavContactList from "./components/NavbarAndContactList/FavContactList/FavContactList";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(() => window.localStorage.getItem("isLoggedIn") === "true");

  const handleLogin = () => {
    window.localStorage.setItem("isLoggedIn", true); // State to track if the user is logged in
    setLoggedIn(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <ContactListApp onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            loggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/favcontacts" element={<FavContactList />} />
      </Routes>
    </Router>
  );
};

export default App;
