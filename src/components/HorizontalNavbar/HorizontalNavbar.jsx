import React from "react";
import "./HorizontalNavbar.css";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HorizontalNavbar = ({ onLogout }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    console.log("Clicked Logout Button");

    onLogout();
    navigate("/login");
  };

  return (
    <div className="horizontal-nav">
      <div className="profile">
        <div className="profile-img-box">
          <i className="fa-solid fa-user"></i>
        </div>

        <div className="username" style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
          <h2 style={{ textAlign: "left" }}>
            {user ? `${user.username}` : "User"}
          </h2>
          <Button name="Logout" onClick={handleLogoutClick} />
        </div>
      </div>

      <form className="search-box">
        <input type="text" placeholder="Search" />
        <Button name="Search" />
      </form>
    </div>
  );
};

export default HorizontalNavbar;
