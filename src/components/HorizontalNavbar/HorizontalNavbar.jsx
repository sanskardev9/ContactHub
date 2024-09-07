import React from "react";
import "./HorizontalNavbar.css";
import Button from "../UI/Button";

const HorizontalNavbar = () => {
  return (
    <div className="horizontal-nav">
      <div className="profile">
        <div className="profile-img-box">
          <i className="fa-solid fa-user"></i>
        </div>
        <h2>Sanskar Singh</h2>
      </div>
      
      <form className="search-box">
       <input type="text" placeholder="Search"/>
       <Button name='Search'  />
      </form>

    </div>
  );
};

export default HorizontalNavbar;
