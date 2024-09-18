import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const favContacts = contacts.filter(contact => contact.isFavourite);
  return (
    <ul>
      <li>
        <button to={'/'} className='link'>
          <i className='fa-solid fa-address-book'></i>
          <div>
            <h2>All Contacts</h2>
            <p>{`${contacts.length} Contacts`}</p>
          </div>
        </button>
      </li>
      <li>
        <button to={'/favcontacts'} className='link'>
          <i className='fa-solid fa-heart'></i>
          <div>
            <h2>Favourites</h2>
            <p>{favContacts.length} Contacts</p>
          </div>
        </button>
      </li>

    </ul>
  )
}

export default Navbar