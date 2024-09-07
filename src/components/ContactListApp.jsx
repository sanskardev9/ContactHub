import React from 'react'
import './ContactListApp.css'
import HorizontalNavbar from './HorizontalNavbar/HorizontalNavbar'
import NavbarAndContactList from './NavbarAndContactList/NavbarAndContactList'

const ContactListApp = () => {
  return (
    <div className='contact-list-app'>
      <HorizontalNavbar/>
      <NavbarAndContactList/>
    </div>
  )
}

export default ContactListApp