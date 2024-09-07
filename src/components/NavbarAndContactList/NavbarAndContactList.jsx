import React from "react";
import "./NavbarAndContactList.css";
import ContactList from "./ContactList/ContactList";
import VerticalNavbar from "./VerticalNavbar/VerticalNavbar";

const NavbarAndContactList = () => {
  return (
    <div className="navbar-and-list">
      <VerticalNavbar />
      <ContactList />
    </div>
  );
};

export default NavbarAndContactList;
