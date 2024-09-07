import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <ul>
      <li>
        <a href = '' className='link'>
          <i className='fa-solid fa-address-book'></i>
          <div>
            <h2>All Contacts</h2>
            <p>10 Contacts</p>
          </div>
        </a>
      </li>
      <li>
        <a href = '' className='link'>
          <i className='fa-solid fa-heart'></i>
          <div>
            <h2>Favourites</h2>
            <p>10 Contacts</p>
          </div>
        </a>
      </li>

    </ul>
  )
}

export default Navbar