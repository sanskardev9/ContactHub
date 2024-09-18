import React from "react";
import "./ContactListApp.css";
import HorizontalNavbar from "./HorizontalNavbar/HorizontalNavbar";
import NavbarAndContactList from "./NavbarAndContactList/NavbarAndContactList";

const ContactListApp = ({ onLogout }) => {
  return (
    <div className="contact-list-app">
      <HorizontalNavbar onLogout={onLogout} />
      <NavbarAndContactList />
    </div>
  );
};

export default ContactListApp;
