import React from "react";
import "./NavbarAndContactList.css";
import ContactList from "./ContactList/ContactList";
import VerticalNavbar from "./VerticalNavbar/VerticalNavbar";

const NavbarAndContactList = () => {
  return (
    <div className="navbar-and-list">
      <VerticalNavbar />
      <div className="centered-content">
        <ContactList />
        </div>
    </div>
  );
};

export default NavbarAndContactList;


