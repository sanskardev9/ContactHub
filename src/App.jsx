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
import { useDispatch } from "react-redux";
import { refreshToken } from "./store/contactThunks";

const App = () => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(() => window.localStorage.getItem("isLoggedIn") === "true");

  const handleLogin = () => {
    window.localStorage.setItem("isLoggedIn", "true"); // State to track if the user is logged in
    setLoggedIn(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        try {
          const resultAction = await dispatch(refreshToken()).unwrap();
          if (refreshToken.fulfilled.match(resultAction)) {
            const newToken = resultAction.payload;
            localStorage.setItem("accessToken", newToken);
          } else {
            console.error(resultAction.payload);
            // Handle refresh token failure (e.g., log out user)
          }
        } catch (err) {
          console.error(err.message);
        }
      }
    }, 300000); // Check every 5 minutes

    return () => clearInterval(interval);
  }, [dispatch]);

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
