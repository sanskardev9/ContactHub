import React from "react";
import "./HorizontalNavbar.css";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { FaUserTie } from "react-icons/fa6";

const HorizontalNavbar = () => {

  const user = useSelector((state) => state.auth.user )

  return (
    <div className="horizontal-nav">

      <div className="profile">

        <div className="profile-img-box">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="username">
          <h2>{user ? `${user.username}` : 'User'}</h2>
        </div>

      </div>
      
      <form className="search-box">
       <input type="text" placeholder="Search"/>
       <Button name='Search'  />
      </form>

    </div>
  );
};

export default HorizontalNavbar;
