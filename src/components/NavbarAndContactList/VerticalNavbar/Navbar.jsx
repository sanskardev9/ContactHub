import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { contacts } = useSelector((state) => state.contacts)
  return (
    <ul>
      <li>
        <Link to={'/'} className='link'>
          <i className='fa-solid fa-address-book'></i>
          <div>
            <h2>All Contacts</h2>
            <p>{`${contacts.length} Contacts`}</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to={'/favcontacts'} className='link'>
          <i className='fa-solid fa-heart'></i>
          <div>
            <h2>Favourites</h2>
            <p>0 Contacts</p>
          </div>
        </Link>
      </li>

    </ul>
  )
}

export default Navbar